import React from 'react'

function Contact() {
  return (
    <section className="p-7">
        <div className="p-10">
            <h1 className="text-center text-4xl font-bold mb-5">Contact me</h1>
        </div>
        <div className="p-10 grid grid-cols-2 gap-10 items-center">
            
            <div className="col-span-1 px-10">
                <h2 className="text-4xl font-bold">Connect with me</h2>
                <p className="text-2xl mb-10">You can also find me on:</p>
                <ul className="text-2xl mb-10">
                    <li><a href="#" className="text-blue-500">LinkedIn</a></li>
                    <li><a href="#" className="text-blue-500">GitHub</a></li>
                    <li><a href="#" className="text-blue-500">Twitter</a></li>
                </ul>
            </div>

            <div className="col-span-1 px-10">
                <p className="text-2xl mb-10">I&rsquo;d love to hear from you! Whether you have a question, a project in mind, or just want to say hi, feel free to reach out.</p>
                <form className="flex flex-col gap-5">
                    <input type="text" placeholder="Your Name" className="border p-3 rounded-md text-xl" />
                    <input type="email" placeholder="Your Email" className="border p-3 rounded-md text-xl" />
                    <textarea placeholder="Your Message" className="border p-3 rounded-md text-xl h-32"></textarea>
                    <button type="submit" className="px-5 py-2 mt-7 rounded-full border border-black flex mx-auto">
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact