import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="sticky top-0 flex justify-between bg-black px-4 py-2 text-white z-50">
        <div>
        <Link href="#home"><h1 className="font-bold text-lg">AYT</h1></Link>
        </div>
        <nav> 
            <Link className="px-3" href="#about">About</Link> 
            
            <Link className="px-3" href="#projects">Projects</Link> 
            
            <Link className="px-3" href="#experience">Experience</Link> 
            
            <Link className="px-2" href="#contact">Contact</Link> 
        </nav>
    </header>
  )
}

export default Header