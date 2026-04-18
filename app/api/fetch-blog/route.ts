import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Try to extract author from URL to fetch their clean RSS feed
    const urlObj = new URL(url);
    const authorMatch = urlObj.pathname.match(/\/@([\w_]+)\/?/);
    
    if (authorMatch && authorMatch[1]) {
      const author = `@${authorMatch[1]}`;
      const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${author}`;
      
      const rssResponse = await fetch(rssUrl);
      if (rssResponse.ok) {
        const rssData = await rssResponse.json();
        
        if (rssData.items && Array.isArray(rssData.items)) {
          // Find the article that matches our URL (ignoring query parameters)
          const targetPath = urlObj.pathname.replace(/\/$/, ''); // Normalize trailing slash
          
          const matchedItem = rssData.items.find((item: any) => {
            try {
              const itemUrl = new URL(item.link);
              return itemUrl.pathname.replace(/\/$/, '') === targetPath;
            } catch (e) {
              return false;
            }
          });
          
          if (matchedItem && matchedItem.content) {
            let cleanContent = matchedItem.content;
            
            // Reformat Medium's `<pre>` blocks to be valid `pre code` for Tailwind typography
            cleanContent = cleanContent.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (match: string, inner: string) => {
              // Convert Medium's explicit <br>s to actual newlines, strip other rogue tags
              const codeText = inner.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
              return `<pre><code>${codeText}</code></pre>`;
            });

            // Clean up potentially harmful tags
            cleanContent = cleanContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
            cleanContent = cleanContent.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
            
            return NextResponse.json({ content: cleanContent });
          }
        }
      }
    }

    // Fallback: If RSS fails or article not in recent feed, scrape Medium directly
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Upgrade-Insecure-Requests': '1',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Medium: ${response.status}`);
    }

    const html = await response.text();
    
    // Minimal direct scraping fallback for older articles not in RSS
    let articleContent = 'Could not parse article content efficiently. Please view directly on Medium.';
    
    // Strategy: Look for the <article> container and extract only valid story elements (paragraphs, headings, figures, lists, code blocks, quotes).
    // This perfectly bypasses Medium's intrusive "mini-header" that contains author names, share buttons, claps, and listen nodes.
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    if (articleMatch && articleMatch[1]) {
      const innerHtml = articleMatch[1];
      const contentTags = innerHtml.match(/<(h[1-6]|p|figure|ul|ol|pre|blockquote)(?:\s+[^>]*)?>[\s\S]*?<\/\1>/gi);
      
      if (contentTags && contentTags.length > 0) {
        articleContent = contentTags.join('\n');
      } else {
        articleContent = innerHtml; // Absolute fallback if regex fails
      }
    }

    // Secondary cleanup just in case
    articleContent = articleContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    articleContent = articleContent.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

    return NextResponse.json({ content: articleContent });

  } catch (error: any) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch blog content' },
      { status: 500 }
    );
  }
}
