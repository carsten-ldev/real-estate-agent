import AgentCard from "@/components/AgentCard"
import { Agent } from "@/lib/types"
import Link from "next/link"
import { Suspense } from "react"

export async function getAgents() {
    const response = await fetch("http://dinmaegler.onrender.com/agents?_limit=3")
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return await response.json()
}

export default async function FeaturedAgents() {
    const agents: Agent[] = await getAgents()
    
    return (
        <section className="bg-white px-3 py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Mød vores engagerede medarbejdere</h2>
                <p className="mb-6">Din Mægler er garant for altid veluddannet assistance i dit boligsalg.<br />
                Kontakt en af vores medarbejdere. </p>
                <div className="grid md:grid-cols-3 gap-6">
                    <Suspense fallback={<p>Loading...</p>}>
                        {agents.map(agent => (
                            <AgentCard data={agent} key={agent.id} />
                        ))}
                    </Suspense>
                </div>
            <Link href="/maeglere" className="bg-primary text-white py-2 px-6 mt-8 inline-block">Se alle mæglere</Link>
            </div>
        </section>
    )
}