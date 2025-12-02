import { FloatingElements } from "./components/FloatingElements";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { CreativeGallery } from "./components/CreativeGallery";
import { Poetry } from "./components/Poetry";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <FloatingElements />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        
        <section id="about">
          <About />
        </section>
        
        <CaseStudies />
        
        <section id="gallery">
          <CreativeGallery />
        </section>
        
        <Poetry />
        
        <section id="services">
          <Services />
        </section>
        
        <Testimonials />
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
