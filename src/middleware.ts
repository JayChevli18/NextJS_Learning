import { NextResponse, type NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/profile') {
        return NextResponse.redirect(new URL('/comments', request.url));
        // return NextResponse.rewrite(new URL('/comments', request.url));
    }
}

// export const config={
//     matcher:"/profile",
// }
