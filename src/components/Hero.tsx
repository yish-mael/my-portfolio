import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {

  const imageLoader = () => `https://ui-avatars.com/api/?name=A+T`

  return (
    <section id="home" className="py-4 px-1 sm:p-0">

      <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 text-white">
          <div className="text-center py-20">
              <Image src={imageLoader()} className="rounded-full mx-auto my-5 w-36 animate-bounce" alt="Profile Image" width={35} height={35} />
              <h1 className="text-7xl font-bold py-1">Yishmael</h1>
              <h1 className="text-6xl font-light py-1">Software Engineer</h1>
              <p className="text-2xl mt-10 ">Engineering Scalable, Secure, and High-Performance Applications.</p>
              <button className="px-5 py-2 mt-7 rounded-full text-black bg-white flex mx-auto">
              <Link className="px-2" href="#contact"><span>Let&rsquo;s Talk</span></Link>
                  &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                  </svg>
              </button>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://videos.pexels.com/video-files/6804121/6804121-sd_960_506_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

    </section>
  )
}

export default Hero