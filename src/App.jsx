import React from "react";
// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Services />
      </div>
    </div>
  );
}

export default App;
