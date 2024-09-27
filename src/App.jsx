import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import ArticleLayout from "./components/Articles/ArticleLayout";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title id="services" title="What We Offer" subtitle="Our Services" />
        <Services />
        <About />
        <Title title="Articles" />
        <ArticleLayout />
        <Title id="testimonials" title="Testimonials" subtitle="Hear What Others Have To Say" />
        <Testimonials />
        <Title title="Get In Touch" subtitle="Contact Us" />
        <ContactSection />
      </div>
      
    </div>
  );
}

export default App;
