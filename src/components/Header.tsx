import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="sticky top-0 flex justify-between bg-black px-7 py-3 text-white z-50">
        <div>
            <h1 className="font-bold text-lg">AYT</h1>
        </div>
        <nav>
            <Link className="px-3" href="#home">Home</Link> 
            
            <Link className="px-3" href="#about">About</Link> 
            
            <Link className="px-3" href="#projects">Projects</Link> 
            
            <Link className="px-3" href="#experience">Experience</Link> 
            
            <Link className="px-3" href="#contact">Contact</Link> 
        </nav>
    </header>
  )
}

export default Header