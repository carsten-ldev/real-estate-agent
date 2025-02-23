import Link from "next/link"
import Image from "next/image"
import EnergyLabel from "./EnergyLabel"
import { Property } from "@/lib/types"

type PropertyCardProps = { data: Property }

export default function PropertyCard({ data }: PropertyCardProps) {


    return (

        <Link href={`/boliger/${data.id}`}>
            <article className="shadow-xl">
                <figure className="aspect-video">
                    <Image width={data.images[0].width} height={data.images[0].height} className="w-full h-full object-cover" src={data.images[0].url} alt={data.adress1} />
                </figure>
                <div className="artcle__body p-6">
                    <h2 className="font-bold text-lg"> 
                        {data.adress1}
                        {data.adress2 && ` ${String.fromCharCode(8226)} ${data.adress2}`}
                    </h2>
                    <p className="mt-1">
						{data.postalcode} {data.city}{" "}
					</p>
					<p className="mt-1">
						{data.type} &bull; Ejerudgift: Kr. {data.cost.toLocaleString("da-DK")} 
					</p>
                    <footer className=" flex justify-between pt-4 mt-4 border-t">
                        <p>
                            <EnergyLabel label={data.energylabel} />
                            {data.rooms} rum/værelser &bull; {data.livingspace} m<sup>2</sup>
                        </p>
                        <p className="font-bold text-lg">Kr. {data.price.toLocaleString("da-DK")}</p>
                    </footer>
                </div>
            </article>
        </Link>

    )
}