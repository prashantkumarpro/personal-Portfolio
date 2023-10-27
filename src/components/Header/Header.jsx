import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const [navActive, setNavActive] = useState(false)
    
    const navActiveHandler = () => {
        setNavActive(!navActive)

    }

    return (
        <>

            <header className="hero">
                <NavLink className="logo" to="/" >PortFolio
                </NavLink>
                <nav id="navbar" className={`nav-links ${navActive ? 'nav-active' : ''}`} >
                    <ul className={` links ${navActive ? 'nav-active' : ''}`}
                        onClick={navActiveHandler}>
                        {/* By default, an active class is added to a <NavLink> component when it is active so you can use CSS to style it. */}
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li> <NavLink to="About" >About</NavLink></li>
                        <li><NavLink to="Skills">Skills</NavLink></li>
                        <li><NavLink to="Projects">Projects</NavLink></li>
                        <li><NavLink to="Blog">Blog</NavLink></li>
                        <li><NavLink to="Contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="ham-button"
                    onClick={navActiveHandler}>
                    <i className="ri-menu-3-line ham_menu"
                        style={{ display: navActive ? 'none' : 'block' }}></i>
                    <i className="ri-close-line ham_close"
                        style={{ display: navActive ? 'block' : 'none', fontSize: '3.5rem' }} ></i>
                </div>
            </header >


        </>
    )
}

export default Header