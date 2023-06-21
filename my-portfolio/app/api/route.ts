/**
 *
 * The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.
 * If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.
 **/
import { NextResponse } from 'next/server'
export async function GET(request: Request) {}