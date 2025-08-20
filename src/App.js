import React from "react";
import './App.css';
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Navbar from "./components/Navbar.js";
//import Skills from "./components/Skills.js";
import Certificates from "./components/Certificates.js";
import ThemeToggle from "./components/ThemeToggle.js";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <main>
      <Navbar/>
      <About />
      <Projects />
      {/* <Skills/> */}
      <Certificates/>
      <ThemeToggle />
      
      
    </main>
  );
};
export default App
