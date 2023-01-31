import { useState } from "react";
import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
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

  const location = useLocation()

  return (
    <>
    <header>
        <Link to="/" className="logo"><img src="images/logo.png" alt="logo" /><span className="text-logo">Joe</span></Link>
        <div 
        className={`bx ${isOpen ? 'bx-x' : 'bx-menu-alt-right'}`}
        id="menu-icon"
        onClick={toggleMenu}
        ></div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to={{pathname: '/about'}} className={`nav-links-a ${location.pathname === '/about' ? 'selected' : ''}`}>About</Link></li>
            <li><Link to="/skills" className={`nav-links-a ${location.pathname == '/skills' ? 'selected' : ''}`}>Skills</Link></li>
            <li><Link to="/projects" className={`nav-links-a ${location.pathname == '/projects' ? 'selected' : ''}`}>Projects</Link></li>
            <li><Link to="/contact" className={`nav-links-a ${location.pathname == '/contact' ? 'selected' : ''}`}>Contact</Link></li>
            <button className="btn-sm-purple">Download CV</button>
        </ul>
    </header> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    {/* <Footer /> */}
    </>
    // <>
    // <Navbar toggleMenu={toggleMenu} isOpen={isOpen}/>
    // <Home />
    // <About />
    // <Skills />
    // <Projects />
    // <Contact />

    // </>
  );
}


export default App;
