"use client";

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Order Product");
        router.push("/");
    }
    return (
        <> 
            <h1>OrderProduct Page</h1> 
            <button onClick={handleClick}>Order Product</button>
        </>
    )
}