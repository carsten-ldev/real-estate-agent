import AgentCard from "@/components/AgentCard"
import { HeadlineRibbon } from "@/components/HeadlineRibbon"
import { Agent } from "@/lib/types"

export const dynamic = "force-dynamic"

async function getAgents(): Promise<Agent[]>  {
    const response = await fetch("http://dinmaegler.onrender.com/agents")
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return await response.json()
}

export default async function AgentsPage() {
    const agents: Agent[] = await getAgents()
    
    return (
        <>
        <HeadlineRibbon headline="Medarbejdere i Roskilde" />
        <section className="px-3 py-24 bg-white">
            <div className="container mx-auto text-center">
                <div className="grid md:grid-cols-3 gap-6">
                        {agents.map(agent => (
                            <AgentCard data={agent} key={agent.id} />
                        ))}
                </div>
            </div>
        </section>
        </>
    )
}