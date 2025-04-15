import React from 'react'

function Experience() {
  return (
    <section className="px-40 py-7 bg-black text-white">
        <div className="p-10">
            <h1 className="text-center text-4xl font-bold mb-5">Experience</h1>

            <section className="grid grid-cols-1 gap-y-3 divide-y">

                <details open className="group py-1 text-lg">
                    <summary className="flex mb-5 cursor-pointer items-center justify-between py-1 font-semibold text-white marker:[font-size:0px]">
                        Partner & CTO @ Nohat LLC
                        <div className="w-60 flex justify-between"> 
                            <div className="px-10">2023 - Present</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-white bg-gray-800 p-5 rounded-lg">
                        Since 2023, I&lsquo;ve served as the CTO of Nohat LLC, spearheading the development of cutting-edge security solutions. My focus includes endpoint protection, anti-phishing technologies, and other solutions leveraging AI to enhance threat detection and incident response capabilities.
                    </p>
                </details>

                <details className="group py-1 text-lg">
                    <summary className="flex mb-5 cursor-pointer flex-row items-center justify-between py-1 font-semibold text-white marker:[font-size:0px]">
                        Partner & CTO @ SmartRentics Inc
                        <div className="w-60 flex justify-between"> 
                            <div className="px-10">2022 - 2024</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-white bg-gray-800 p-5 rounded-lg">
                        As Partner and CTO of SmartRentics Inc, I led the development of a machine learning-powered AI platform that improves the apartment hunting process. The system leveraged advanced savings algorithms to help users save time, money, and effort, transforming how people find and secure rental properties.
                    </p>
                </details>

                <details className="group py-1 text-lg">
                    <summary className="flex mb-5 cursor-pointer flex-row items-center justify-between py-1 font-semibold text-white marker:[font-size:0px]">
                        Founder @ Maiel Technologies LLC
                        <div className="w-60 flex justify-between"> 
                            <div className="px-10">2020 - Present</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-white bg-gray-800 p-5 rounded-lg">
                        As the Founder of Maiel Technologies LLC, I established a web development and maintenance agency dedicated to helping SMEs build and maintain their online presence. Through innovative solutions and personalized support, we empower businesses to create professional, high-performing websites that drive growth and engagement.
                    </p>
                </details>

                <details className="group py-1 text-lg">
                    <summary className="flex mb-5 cursor-pointer flex-row items-center justify-between py-1 font-semibold text-white marker:[font-size:0px]">
                        Software Engineer @ Roundstone Consulting
                        <div className="w-60 flex justify-between"> 
                            <div className="px-10">2017 - 2023</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-white bg-gray-800 p-5 rounded-lg">
                    As a Software Engineer at Roundstone Consulting, I contributed to the design and development of innovative software solutions tailored to solve real-world business challenges. Working closely with small and medium-sized firms, I helped create custom applications and ICT solutions that empowered clients to grow their businesses and achieve their goals.
                    </p>
                </details>
            </section>

        </div>
    </section>
  )
}

export default Experience