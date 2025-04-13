import React from 'react'

function Experience() {
  return (
    <section className="px-40 py-7 bg-black text-white">
        <div className="p-10">
            <h1 className="text-center text-4xl font-bold mb-5">Experience</h1>

            <section className="grid grid-cols-1 gap-y-3 divide-y">

                <details open className="group py-1 text-lg">
                    <summary className="flex mb-5 cursor-pointer items-center justify-between py-1 font-semibold text-white marker:[font-size:0px]">
                        Nohat LLC
                        <div className="w-70 flex"> 
                            <div className="px-10">2023 - Present</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-gray-500">This demo was built by <a className="text-blue-500 hover:text-blue-700" href="https://marktownsend.rocks">Mark Townsend</a>, a professional web developer with a passion for Laravel and Tailwind CSS.</p>
                </details>

                <details className="group py-1 text-lg">
                    <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                        SmartRentics Inc
                        <div className="w-20 flex"> 
                            <div>2022 - 2024</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-gray-500">It&lsquo;s true, you could just sprinkle in some Javascript. Many modern Javascript libraries are incredibly easy to use. But sometimes you don&lsquo;t need Javascript when you can solve your problem with simple HTML and CSS.</p>
                </details>

                <details className="group py-1 text-lg">
                    <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                        Maiel Technologies LLC
                        <div className="w-20 flex"> 
                            <div>2020 - Present</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-gray-500">Absolutely! I think sharing ideas (and sometimes code) are invaluable to the learning process. And let&lsquo;s face it: sometimes you just want to get a simple FAQ or accordion section up fast and move on to more pressing parts of whatever you&lsquo;re building.</p>
                </details>

                <details className="group py-1 text-lg">
                    <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                        Roundstone Consulting
                        <div className="w-20 flex"> 
                            <div>2017 - 2023</div> 
                            <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </summary>
                    <p className="text-gray-500">Absolutely! I think sharing ideas (and sometimes code) are invaluable to the learning process. And let&lsquo;s face it: sometimes you just want to get a simple FAQ or accordion section up fast and move on to more pressing parts of whatever you&lsquo;re building.</p>
                </details>
            </section>

        </div>
    </section>
  )
}

export default Experience