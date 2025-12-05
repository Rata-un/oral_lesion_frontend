'use client'
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Image from "next/image"

await new Promise((resolve) => setTimeout(resolve, 1000))

const AboutPage = () => {
const [count, setCount] = useState(0)
  return (
    <>
        <Navbar />
        <div>
            
        </div>
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-7xl dark:bg-black">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </>
  )
}
export default AboutPage