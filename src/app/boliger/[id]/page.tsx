

import { Property } from "@/lib/types"
import AgentCard from "@/components/AgentCard"
import Image from "next/image"
import PopOver from "@/components/PopOver"
import { IoImagesOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

import 'mapbox-gl/dist/mapbox-gl.css';
import LocationMap from "@/components/LocationMap";

export const dynamic = "force-dynamic"


async function getSingleHome(id: string) {
    const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`)
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return response.json()
}

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params
    const featuredHome: Property = await getSingleHome(id)
    const maptoken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string
        
    return (
        <>
        <figure className="h-[70vh]">
            <Image className="w-full h-full object-cover" src={featuredHome.images[0].url} width={featuredHome.images[0].width} height={featuredHome.images[0].height} alt={featuredHome.adress1} />
        </figure>
        <section className="px-3 mb-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 my-8">
                    <div>
                        <h1 className="text-base font-bold">{featuredHome.adress1}</h1>
                        <p className="text-base font-bold">{featuredHome.postalcode} {featuredHome.city}</p>
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
                    <p className="font-bold text-xl text-right">Kr. {featuredHome.price.toLocaleString("da-DK")}</p>
                    </div>
                </div>

                <div className="flex justify-between my-8">
                    <div className="grid grid-cols-[auto_auto] gap-x-8">
                        <span>Sagsnummer:</span><span>1234567898</span>
                        <span>Boligareal:</span><span>{featuredHome.livingspace} m²</span>
                        <span>Grundareal:</span><span>{featuredHome.lotsize} m²</span>
                        <span>Rum/værelser:</span><span>{featuredHome.rooms}</span>
                        <span>Antal plan:</span><span>2</span>
                    </div>
                    <div className="grid grid-cols-[auto_auto] self-start gap-x-8">
                        <span>Kælder:</span><span>{featuredHome.basementsize ? featuredHome.basementsize : "-"}</span>
                        <span>Byggeår:</span><span>{featuredHome.built} m²</span>
                        <span>Ombygget:</span><span>{featuredHome.remodel} m²</span>
                        <span>Energimærke:</span><span>{featuredHome.energylabel}</span>
                    </div>
                    <div className="grid grid-cols-[auto_auto] self-start gap-x-8">
                        <span>Udbetaing:</span><span>{featuredHome.payment}</span>
                        <span>Brutto ex ejerudgift:</span><span>{featuredHome.gross}</span>
                        <span>Netto ex ejerudgift:</span><span>{featuredHome.netto}</span>
                        <span>Ejerudgifter:</span><span>{featuredHome.cost}</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Beskrivelse</h3>
                        <p>{featuredHome.description}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ansvarlig mægler</h3>
                        <AgentCard data={featuredHome.agent} horizontal={true} />
                    </div>
                </div>
                </div>
        </section>
       
        <PopOver target="floorplan">
            <Image 
                src={featuredHome.floorplan.url} 
                width={featuredHome.floorplan.width} 
                height={featuredHome.floorplan.height}
                className="object-contain w-full h-full" 
                alt="" />
        </PopOver>
        <PopOver target="gallery">
            gallery goes here
        </PopOver>
        <PopOver target="mapdiv">
            <LocationMap mapboxToken={maptoken} lat={featuredHome.lat} long={featuredHome.long} />
        </PopOver>
        
        </>
    )
}


