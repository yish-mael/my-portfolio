import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <section className="px-7 bg-black text-white">
        <div className="px-10 py-5 ">
            <h1 className="text-center text-4xl font-bold mb-5">About Me</h1>
            <div className="grid grid-cols-3 gap-10 p-10 items-center">
                <div className="col-span-2">
                    <p className="mb-10">I&rsquo;m Akinnubi Yishmael Tolulope, a software engineer specializing in frontend development, backend development, system architecture, and cloud solutions. I build high-performance applications that scale seamlessly while ensuring security and efficiency.</p>
                    <div className="grid grid-cols-2 mb-10">
                        <div className="flex items-center">
                            <h2 className="text-4xl font-bold">10+</h2> <span className="text-2xl px-2">Years of Experience.</span>
                        </div>
                        <div className="flex items-center"> 
                            <h2 className="text-4xl font-bold">50+</h2> <span className="text-2xl px-2">Projects Completed.</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">Key Focus Areas</h4>
                        <ul className="my-3">
                            <li>
                                <b>Backend Engineering:</b> RESTful APIs, GraphQL, WebSockets, Microservices. 
                            </li>
                            <li>
                                <b>Database & Storage:</b> SQL, NoSQL, Indexing, Caching
                            </li>
                            <li>
                                <b>DevOps & Cloud:</b> Docker, Kubernetes, CI/CD, AWS, Azure, GCP.
                            </li>
                            <li>
                                <b>Frontend:</b> React.js, Next.js, Web Performance Optimization.
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Image src="https://placehold.co/400x500/png" width={400} height={500} alt="" />
                </div>
            </div>
        </div>    
    </section>
  )
}

export default About