import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <section className="px-7 bg-black text-white">
        <div className="px-10 py-5 ">
            <h1 className="text-center text-4xl font-bold mb-5">About Me</h1>
            <div className="grid grid-cols-3 gap-10 p-10 items-center">
                <div className="col-span-2">
                    <p className="mb-5">Hi, I&lsquo;m Akinnubi Yishmael Tolulope — a software engineer passionate about building high-performance, scalable applications. With expertise spanning frontend and backend development, system architecture, and cloud solutions, I craft secure, efficient systems that solve real-world problems and drive business success.</p>
                    <div className="grid grid-cols-2 mb-5">
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
                                <b>Frontend Engineering:</b> Building clean, accessible, and high-performance user interfaces. 
                            </li>
                            <li>
                                <b>API Design & Security:</b> Creating secure, scalable RESTful APIs and applying best-in-class security practices.
                            </li>
                            <li>
                                <b>DevOps & CI/CD:</b> Automating development workflows and deployment pipelines for fast and reliable releases.
                            </li>
                            <li>
                                <b>Cloud Solutions:</b> Designing and deploying scalable infrastructure using AWS and Azure.
                            </li>
                            <li>
                                <b>System Architecture:</b> Crafting modular, maintainable architectures that support growth and flexibility.
                            </li>
                            <li>
                                <b>Software Scalability & Performance Optimization:</b> Ensuring applications perform efficiently and scale smoothly under load.
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">React</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Next.js</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Node.js</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">TypeScript</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">JavaScript</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Express</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">PHP</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">C#</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Laravel</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">MySQL</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">MongoDB</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">PostgreSQL</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Redis</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">RabbitMQ</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Docker</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Git</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">GitHub Actions</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Bash</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">AWS</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Azure</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Nginx</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Bootstrap</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Tailwind CSS</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">REST APIs</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">GraphQL</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">CI/CD</span>
                            <span className="bg-white text-gray-800 text-sm font-medium px-2 rounded-full border">Linux</span>
                        </div>

                    </div>
                </div>
                <div>
                    <Image src="/images/about-me1.jpg" className="rounded-4xl" width={400} height={500} alt="" />
                </div>
            </div>
        </div>    
    </section>
  )
}

export default About