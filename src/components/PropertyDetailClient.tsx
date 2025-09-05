"use client"

import { useState } from "react"
import { Property } from "@/lib/types"
import AgentCard from "@/components/AgentCard"
import Image from "next/image"
import Modal from "@/components/Modal"
import { IoImagesOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

import 'mapbox-gl/dist/mapbox-gl.css';
import LocationMap from "@/components/LocationMap";
import PropertyGallery from "@/components/PropertyGallery";

type ModalType = 'gallery' | 'floorplan' | 'map' | null

type PropertyDetailClientProps = {
    featuredHome: Property;
    maptoken: string;
}

export default function PropertyDetailClient({ featuredHome, maptoken }: PropertyDetailClientProps) {
    const [activeModal, setActiveModal] = useState<ModalType>(null)

    return (
        <>
        <figure className="aspect-video lg:aspect-none lg:h-[70vh] lg:w-full">
            <Image className={`w-full h-full object-cover ${featuredHome.id=="61572ad4251a8a42ec8cb544" ? "object-bottom" : ""}`} src={featuredHome.images[0].url} width={featuredHome.images[0].width} height={featuredHome.images[0].height} alt={featuredHome.adress1} />
        </figure>
        <section className="px-3 mb-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-2 mb-8 -mt-6 md:mt-8">
                    <div className="flex justify-center md:flex-col md:justify-start order-2 md:order-1 ">
                        <h1 className="text-base font-bold">{featuredHome.adress1}</h1>
                        <p className="text-base font-bold">{featuredHome.postalcode} {featuredHome.city}</p>
                    </div>
                    <div className=" self-center flex justify-center gap-8 order-1 md:order-2 bg-white md:bg-transparent w-fit py-2 px-8 rounded-full shadow-md md:shadow-none mx-auto mb-4 md:mb-0">     

                        <button 
                            className="cursor-pointer" 
                            onClick={() => setActiveModal('gallery')}
                        >
                            <IoImagesOutline color="#ccc" size={32} />
                        </button>
                        <button 
                            className="cursor-pointer" 
                            onClick={() => setActiveModal('floorplan')}
                        >
                            <IoGridOutline color="#ccc" size={32} />
                        </button>
                        <button 
                            className="cursor-pointer" 
                            onClick={() => setActiveModal('map')}
                        >
                            <IoMapOutline color="#ccc" size={32} />
                        </button>
                        <button title="Gem som favorit">
                            <IoHeartOutline color="#ccc" size={32} />
                        </button>
                    </div>
                    <div className="self-center order-3">
                    <p className="font-bold text-xl text-center md:text-right">Kr. {featuredHome.price.toLocaleString("da-DK")}</p>
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

        {/* Gallery Modal */}
        <Modal 
            isOpen={activeModal === 'gallery'} 
            onClose={() => setActiveModal(null)}
            size="xl"
        >
            <PropertyGallery images={featuredHome.images} />
        </Modal>

        {/* Floorplan Modal */}
        <Modal 
            isOpen={activeModal === 'floorplan'} 
            onClose={() => setActiveModal(null)}
            size="lg"
        >
            <div className="flex justify-center">
                <Image 
                    src={featuredHome.floorplan.url} 
                    width={featuredHome.floorplan.width} 
                    height={featuredHome.floorplan.height}
                    className="object-contain max-w-full max-h-[70vh] p-8" 
                    alt="Plantegning af boligen" 
                />
            </div>
        </Modal>

        {/* Map Modal */}
        <Modal 
            isOpen={activeModal === 'map'} 
            onClose={() => setActiveModal(null)}
            size="xl"
        >
            <div className="h-120 w-[90vw]">
                <LocationMap mapboxToken={maptoken} lat={featuredHome.lat} long={featuredHome.long} />
            </div>
        </Modal>
        </>
    )
}
