import { Users, Code, Award, BookOpen } from "lucide-react"

const stats = [
  {
    value: "5,000+",
    label: "Community Members",
    icon: <Users className="h-6 w-6" />,
    description: "Active participants across Uttar Pradesh",
  },
  {
    value: "100+",
    label: "AI Projects",
    icon: <Code className="h-6 w-6" />,
    description: "Innovative solutions developed",
  },
  {
    value: "25+",
    label: "Research Papers",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Published in international journals",
  },
  {
    value: "15+",
    label: "Industry Partners",
    icon: <Award className="h-6 w-6" />,
    description: "Collaborating on AI initiatives",
  },
]

export default function StatsSection() {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
          <p className="text-xl font-medium text-white"><span className="mr-2">•</span>Impacts</p>
        </div>
      </div>
      <section className="py-24 relative bg-gradient-to-b from-background to-background/90">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">30+</h3>
              <p className="text-muted-foreground">AI Projects</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">5000+</h3>
              <p className="text-muted-foreground">Community Members</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">10+</h3>
              <p className="text-muted-foreground">Ongoing Research</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">15+</h3>
              <p className="text-muted-foreground">Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

