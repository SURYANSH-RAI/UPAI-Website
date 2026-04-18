import { Building2 } from "lucide-react"
import Image from "next/image"

const partners = [
	{
		name: "AI Community Lucknow",
		logo: "/ai-community-lucknow.png",
		type: "Community",
	},
	{
		name: "GDG Lucknow",
		logo: "/gdglucknow.png",
		type: "Academic",
	},
	{
		name: "CIC",
		logo: "/cic.png",
		type: "Partner",
	},
	{
		name: "C2Air",
		logo: "/c2air.png",
		type: "Partner",
	},
	{
		name: "Tikaj",
		logo: "/tikaj.png",
		type: "Partner",
	},
	{
		name: "Umaga",
		logo: "/umaga.png",
		type: "Partner",
	},
	{
		name: "HuntoAI",
		logo: "/huntoai.png",
		type: "Partner",
	},
]

export default function PartnersSection() {
	return (
		<section id="partners" className="py-16 md:py-24 relative">
			<div className="container relative">
				<div className="text-center mb-16">
					<div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
						<Building2 className="h-6 w-6 text-secondary" />
					</div>
					<h2 className="text-3xl font-bold tracking-tight mb-4">
						Collaborations
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						We collaborate with government, industry, and academic institutions to
						create a thriving AI ecosystem.
					</p>
				</div>

				<div className="max-w-5xl mx-auto flex justify-center">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 items-center justify-items-center place-content-center w-full">
						{partners.map((partner, index) => (
							<div
								key={index}
								className={`group relative flex items-center justify-center h-32 w-full ${partner.name === "HuntoAI" ? "col-span-2 md:col-span-1 md:col-start-2" : ""}`}
							>
								{partner.logo ? (
									<>
										<div className="relative flex items-center justify-center w-full h-full">
											<Image
												src={partner.logo}
												alt={partner.name}
												width={160}
												height={80}
												className="object-contain max-h-28 max-w-full z-10"
											/>
									
											<div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
										</div>
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-full h-full z-30">
											<Image
												src={partner.logo}
												alt={partner.name}
												width={160}
												height={80}
												className="object-contain max-h-28 max-w-full brightness-0 invert"
											/>
										</div>
									</>
								) : (
									<Building2 className="h-10 w-10 text-muted-foreground" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

