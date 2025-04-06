import About from "@/components/About"
import Contact from "@/components/Contact";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
