import { type NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    
  const { id } = await params
    
    const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`)
    const data = await res.json()
   
    return Response.json({ data })
  }