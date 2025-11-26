import About from "./about";
import CaseStudy from "./case-study";
import Contact from "./contact";
import Header from "./header";
import Hero from "./hero";
import Projects from "./projects";
import Service from "./service";
import Skills from "./skills";
import Testimonials from "./testimonial";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service/>
      <Skills />
      <Projects />
      <Testimonials />
      <CaseStudy />
      <Contact />
    </main>
  );
}
