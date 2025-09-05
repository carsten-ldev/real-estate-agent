import PropertyDetailClient from "@/components/PropertyDetailClient"
import { Property } from "@/lib/types"

export const dynamic = "force-dynamic"

async function getSingleHome(id: string): Promise<Property> {
    const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`)
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return response.json()
}

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params
    const featuredHome = await getSingleHome(id)
    const maptoken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string
    
    return <PropertyDetailClient featuredHome={featuredHome} maptoken={maptoken} />
}


