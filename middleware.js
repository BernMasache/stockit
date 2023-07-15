import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request = NextRequest) {
    if (request.nextUrl.pathname == ('/')) {
        return NextResponse.rewrite(new URL('/login', request.url))
    }

    if (request.nextUrl.pathname == ('/user')) {
        return NextResponse.rewrite(new URL('/user', request.url))
    }
}