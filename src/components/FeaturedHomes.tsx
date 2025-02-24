import { Property } from "@/lib/types"
import { Suspense } from "react"
import PropertyCard from "./PropertyCard"

type FeaturedHomesData = {
    data: Property[]
}
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_URL}`;

export async function getFeatured() {
    const response = await fetch(`${API_BASE_URL}/api/homes?_limit=4`)
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return response.json()
}

export default async function FeaturedHomes() {
    const featuredHomes: FeaturedHomesData = await getFeatured()
        
    return (
        <section className="px-3 py-24">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold mb-4">Udvalgte boliger</h2>
                <p className="text-center mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Maiores aliquam, expedita, nisi soluta ea modi exercitationem nostrum autem aut eligendi cumque quis, eius molestiae odio.</p>
                <div className="grid md:grid-cols-2 gap-6">
                        <Suspense fallback="Loading homes...">
                            {featuredHomes.data.map(featuredHome => (
                                <PropertyCard data={featuredHome} key={featuredHome.id} />
                            ))}
                        </Suspense>
                    </div>
            </div>
        </section>
    )
}


