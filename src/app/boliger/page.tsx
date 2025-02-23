import { Property } from "@/lib/types"
import { Suspense } from "react"
import PropertyCard from "@/components/PropertyCard"
import { HeadlineRibbon } from "@/components/HeadlineRibbon"

type HomesData = {
    data: Property[]
}

export async function getFeatured() {
    const response = await fetch("http://localhost:3000/api/homes")
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return response.json()
}

export default async function HomesPage() {
    const featuredHomes: HomesData = await getFeatured()
        
    return (
        <>
            <HeadlineRibbon headline="Boliger til salg" />
        <section className="px-3 py-24">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    <Suspense fallback="Loading homes...">
                        {featuredHomes.data.map(featuredHome => (
                            <PropertyCard data={featuredHome} key={featuredHome.id} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
        </>
    )
}


