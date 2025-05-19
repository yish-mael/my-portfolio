import About from "@/components/About"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="relative bg-black text-white px-0">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
