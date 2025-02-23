import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    
  // Extracts `id` from the URL
  // netlify functions do not support dynamic routes
  // so we have to extract the id from the URL
    const id = request.nextUrl.pathname.split("/").pop(); // Extracts `id` from the URL  
    
    if (!id) {
      return Response.json({ error: "ID parameter is missing" }, { status: 400 });
    }
    
    const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`)
    const data = await res.json()
   
    return Response.json({ data })
  }