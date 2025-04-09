import React from 'react'

function Header() {
  return (
    <header className="flex justify-between bg-black px-7 py-3 text-white">
        <div>
            <h1 className="font-bold text-lg">AYT</h1>
        </div>
        <nav>
            Home | About | Projects | Contact | Resume
        </nav>
    </header>
  )
}

export default Header