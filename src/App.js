import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
    
  const toggleMenu = () => {
      setIsOpen(!isOpen)
      console.log([isOpen, setIsOpen])
  } 
  return (
    <>
    <Navbar toggleMenu={toggleMenu} isOpen={isOpen}/>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
