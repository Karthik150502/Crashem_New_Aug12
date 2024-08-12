import { type NextResponse } from "next/server"



export async function GET(req: Request) {
    const url = new URL(req.url)
    const id = url.searchParams.get('id')
    // query is "hello" for /api/search?query=hello

    // return new Response("Hello, brother.", { status: 200, statusText: "Successfully succeeded." })
    return Response.json({ status: 200, statusText: "Successfully succeeded.", id })
}