import { Property } from "@/lib/types"
import AgentCard from "@/components/AgentCard"
import Image from "next/image"
import PopOver from "@/components/PopOver"
import { IoImagesOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

export const dynamic = "force-dynamic"

type HomeData = {
    data: Property
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_URL}`;


async function getSingleHome(id: string) {
    const response = await fetch(`${API_BASE_URL}/api/homes/${id}`)
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return response.json()
}

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params
    const featuredHome: HomeData = await getSingleHome(id)
        
    return (
        <>
        <figure className="h-[70vh]">
            <Image className="w-full h-full object-cover" src={featuredHome.data.images[0].url} width={featuredHome.data.images[0].width} height={featuredHome.data.images[0].height} alt={featuredHome.data.adress1} />
        </figure>
        <section className="px-3 mb-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 my-8">
                    <div>
                        <h1 className="text-base font-bold">{featuredHome.data.adress1}</h1>
                        <p className="text-base font-bold">{featuredHome.data.postalcode} {featuredHome.data.city}</p>
                    </div>
                    <div className=" self-center flex justify-center gap-8">
                        <button popoverTarget="gallery" title="Fotos"><IoImagesOutline color="#ccc" size={32} /></button>
                        <button popoverTarget="floorplan" title="Plantegning"><IoGridOutline color="#ccc" size={32} /></button>
                        <button popoverTarget="mapdiv" title="Kort">
                        <IoMapOutline color="#ccc" size={32} />
                        </button>
                        <button title="Gem som favorit">
                            <IoHeartOutline color="#ccc" size={32} />
                        </button>

                    </div>
                    <div className="self-center">
                    <p className="font-bold text-xl text-right">Kr. {featuredHome.data.price.toLocaleString("da-DK")}</p>
                    </div>
                </div>

                <div className="flex justify-between my-8">
                    <div className="grid grid-cols-[auto_auto] gap-x-8">
                        <span>Sagsnummer:</span><span>1234567898</span>
                        <span>Boligareal:</span><span>{featuredHome.data.livingspace} m²</span>
                        <span>Grundareal:</span><span>{featuredHome.data.lotsize} m²</span>
                        <span>Rum/værelser:</span><span>{featuredHome.data.rooms}</span>
                        <span>Antal plan:</span><span>2</span>
                    </div>
                    <div className="grid grid-cols-[auto_auto] self-start gap-x-8">
                        <span>Kælder:</span><span>{featuredHome.data.basementsize ? featuredHome.data.basementsize : "-"}</span>
                        <span>Byggeår:</span><span>{featuredHome.data.built} m²</span>
                        <span>Ombygget:</span><span>{featuredHome.data.remodel} m²</span>
                        <span>Energimærke:</span><span>{featuredHome.data.energylabel}</span>
                    </div>
                    <div className="grid grid-cols-[auto_auto] self-start gap-x-8">
                        <span>Udbetaing:</span><span>{featuredHome.data.payment}</span>
                        <span>Brutto ex ejerudgift:</span><span>{featuredHome.data.gross}</span>
                        <span>Netto ex ejerudgift:</span><span>{featuredHome.data.netto}</span>
                        <span>Ejerudgifter:</span><span>{featuredHome.data.cost}</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Beskrivelse</h3>
                        <p>{featuredHome.data.description}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ansvarlig mægler</h3>
                        <AgentCard data={featuredHome.data.agent} horizontal={true} />
                    </div>
                </div>
                </div>
        </section>
       
        <PopOver target="floorplan">
            <Image 
                src={featuredHome.data.floorplan.url} 
                width={featuredHome.data.floorplan.width} 
                height={featuredHome.data.floorplan.height}
                className="object-contain w-full h-full" 
                alt="" />
        </PopOver>
        <PopOver target="gallery">
            gallery goes here
        </PopOver>
        <PopOver target="mapdiv">
            map goes here
        </PopOver>
        
        </>
    )
}


