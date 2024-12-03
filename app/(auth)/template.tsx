"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
    {name:"Register", path:"/register"},
    {name:"Login", path:"/login"},
    {name:"Forgot Password", path:"/forgot-password"}
]

export default function AuthLayout({
  children,
}:{children: React.ReactNode}
) {

  const pathname = usePathname();
  const [input , setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          className="border-2 border-gray-300 p-2 rounded-lg"
        />
      </div>
        {navLinks.map((link, index) => {
          const isActive = pathname === link.path;

            return (
                <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4" } href={link.path} key={index}>
                    {link.name}
                </Link>
            )
        })}
        {children}
    </div>
  );
}
