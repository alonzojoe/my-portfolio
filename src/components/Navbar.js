import React,{ useState } from "react";
const Navbar = ({toggleMenu,isOpen}) => {
    return (
        <header>
            <a href="#" className="logo"><img src="images/logo.png" alt="logo" /><span className="text-logo">Joe</span></a>
            <div 
            className={`bx ${isOpen ? 'bx-x' : 'bx-menu-alt-right'}`}

            
            id="menu-icon"
            onClick={toggleMenu}
            ></div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <button className="btn-sm-purple">Download CV</button>
            </ul>
        </header>  
    );
}


export default Navbar;
