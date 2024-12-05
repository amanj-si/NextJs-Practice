import Link from "next/link";

export default function f4() {
    return (
        <> 
            <h1>f4 Page</h1> 
            <div>
                <Link href="/f1/f3" >F3 </Link>
                <Link href="/about" >About </Link>
            </div>
        </>
    )
}