import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import Testimonials from "./testimonial";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
