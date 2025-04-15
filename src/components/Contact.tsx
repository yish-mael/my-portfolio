import React from 'react'

function Contact() {
  return (
    <section className="p-7">
        <div className="p-10">
            <h1 className="text-4xl text-center font-bold">Connect with me</h1>
        </div>
        <div className="py-10 px-50 grid grid-cols-2 gap-10 items-center">
            
            <div className="col-span-1 px-10">
                <p className="text-2xl mb-10">I&rsquo;d love to hear from you! Whether you have a question, a project in mind, or just want to say hi, feel free to reach out.</p>
            </div>

            <div className="col-span-1 px-10">
                <p className="text-2xl mb-1">You can also find me on:</p>
                <ul className="text-2xl mb-10">
                    <li><a href="https://www.linkedin.com/in/yishmael" target="_blank" className="text-blue-500">LinkedIn</a></li>
                    <li><a href="https://github.com/yish-mael" target="_blank" className="text-blue-500">GitHub</a></li>
                    <li><a href="https://x.com/yish_mael" target="_blank" className="text-blue-500">Twitter</a></li>
                </ul>
            </div>

        </div>
    </section>
  )
}

export default Contact