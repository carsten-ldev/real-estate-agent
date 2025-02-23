import Link from "next/link"
import { Agent } from "@/lib/types"
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt, FaPaperPlane } from "react-icons/fa"
 import Image from "next/image"

type AgentCardProps = {
    data: Agent
    horizontal?: boolean
    includeLink? : boolean
    includeAbout?: boolean
}


export default function AgentCard({ data, horizontal = false, includeLink = true, includeAbout = false }: AgentCardProps) {


    return (

        <article className={`relative ${horizontal ? "border border-gray-400 p-4 sm:grid sm:grid-cols-2 gap-4" : "shadow-xl"}`}>
                <Image src={data.image.url} width={data.image.width} height={data.image.height} alt={data.name} />
                <div className={`agent__body ${!horizontal ? 'p-6 text-center' : ''}`}>
                    <h2 className="font-bold text-lg mt-4 sm:mt-0"> 
                        {data.name}
                    </h2>
                    <p className="mt-1">
						{data.title} 
					</p>

                    {horizontal ? (
                        <>
                        <p className="mt-3 flex gap-4 items-center">
                           <FaPhoneAlt /> {data.phone}
                        </p>
                        <p className="mt-1 flex gap-4 items-center">
                        <FaPaperPlane /> {data.email}
                    </p>
                    </> ) : (
                        <p className="mt-3 flex gap-4 justify-center text-lg relative z-10">
						<FaEnvelope /> <FaLinkedinIn />
					</p>
        )}
                    { includeLink ? <Link href={`/maeglere/${data.id}`} className="absolute inset-0"></Link> : null }
                </div>
                    { includeAbout ? (
                        <div className="col-span-2 mt-8">
                            <p className="mb-4 text-xl font-bold">Om {data.name}</p>
                            <p>{data.description}</p>
                        </div>
                        ) : null }
            </article>

    )
}