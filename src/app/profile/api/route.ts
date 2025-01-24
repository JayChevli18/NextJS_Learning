import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";



export async function GET(request:NextRequest) {

    const headerList=headers();
    console.log((await headerList).get("Authorization"));

    (await cookies()).set("resultsPerPage","20");
    const theme=request.cookies.get("theme_cookie_name");

    const reqHeaders=new Headers(request.headers);
    console.log(reqHeaders.get("Authorization"));

    console.log(theme);
    console.log((await cookies()).get("resultsPerPage"));

    return new Response("<h1>Profile API Data</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme_cookie_name=dark"
        }
    });
}