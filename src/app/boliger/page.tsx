import { Property } from "@/lib/types"
import { Suspense } from "react"
import PropertyCard from "@/components/PropertyCard"
import { HeadlineRibbon } from "@/components/HeadlineRibbon"

export const dynamic = "force-dynamic"

async function getFeatured(): Promise<Property[]> {
    const response = await fetch(`https://dinmaegler.onrender.com/homes`)
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return response.json()
}

export default async function HomesPage() {
    const featuredHomes = await getFeatured()
        
    return (
        <>
            <HeadlineRibbon headline="Boliger til salg" />
        <section className="px-3 py-24">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    <Suspense fallback="Loading homes...">
                        {featuredHomes.map(featuredHome => (
                            <PropertyCard data={featuredHome} key={featuredHome.id} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
        </>
    )
}


