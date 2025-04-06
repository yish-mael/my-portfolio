import React from 'react'
import Image from 'next/image'

function Hero() {

  const imageLoader = () => `https://ui-avatars.com/api/?name=A+T`

  return (
    <section className="p-7">
        <div className="text-center py-20">
            <Image src={imageLoader()} className="rounded-full mx-auto my-5 w-36" alt="Profile Image" width={35} height={35} />
            <h1 className="text-7xl font-bold py-1">Hi! I&rsquo;m Akinnubi Y. Toulope</h1>
            <h1 className="text-7xl font-light py-1">Software Engineer</h1>
            <p className="text-2xl mt-10 ">Engineering Scalable, Secure, and High-Performance Applications.</p>
            <button className="px-5 py-2 mt-7 rounded-full border border-black flex mx-auto">
                <span>Let&rsquo;s Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                </svg>
            </button>
        </div>
    </section>
  )
}

export default Hero