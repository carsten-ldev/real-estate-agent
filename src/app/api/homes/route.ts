import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    
    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get('_limit')
    
    const res = await fetch(`https://dinmaegler.onrender.com/homes${limit ? '?_limit='+limit : ''}`)
    const data = await res.json()
   
    return Response.json({ data })
  }