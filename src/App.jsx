import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import WorkingStep from "./pages/WorkingStep";
import Pricing from "./pages/Pricing";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep />
      <Pricing />
      <Testimonial />
      <Contact />
      <Footer />
      <div className="mt-20">
        {" "}
        {/* Push content below fixed navbar */}
        {/* <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
