import { type NextRequest } from "next/server";
import { headers ,cookies } from "next/headers";

export async  function GET(request:NextRequest){
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    (await cookies()).set("resultPerPage","10");
    const theme = request.cookies.get("theme");

    console.log((await headerList).get("Authorization"));
    console.log(requestHeaders.get("Authorization"));

    console.log(theme);
    console.log((await cookies()).get("resultPerPage"));

    return new Response("<h1>profile world</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=light"
        }
    }
    );
}