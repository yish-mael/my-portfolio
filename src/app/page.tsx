import About from "@/components/About"
import Contact from "@/components/Contact";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
