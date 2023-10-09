import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const [navActive, setNavActive] = useState(false)

    // useEffect(() => {
    //     let closeMenu = document.querySelector('.ham_close');
    //     closeMenu.style.display = 'none'

    // }, [])



    const navAciveHandler = () => {
        setNavActive(!navActive)

    }
    

    return (
        <>

            <header className="hero">
                <h1 className="logo">port<span>Folio</span> </h1>
                <div className="ham-button"
                    onClick={navAciveHandler}>
                    <i className="ri-menu-3-line ham_menu"
                        style={{ display: navActive ? 'none' : 'block' }}></i>
                    <i className="ri-close-line ham_close"
                        style={{ display: navActive ? 'block' : 'none', fontSize: '35px' }} ></i>
                </div>

                <nav id="navbar" className={`nav-links ${navActive ? 'nav-active' : ''}`} >
                    <ul className={` links ${navActive ? 'nav-active' : ''}`} 
                     onClick={navAciveHandler}>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="About" >About</Link></li>
                        <li><Link to="Skills">Skills</Link></li>
                        <li><Link to="Projects">Projects</Link></li>
                        <li><Link to="Blog">Blog</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                    </ul>

                </nav>


            </header >


        </>
    )
}

export default Header