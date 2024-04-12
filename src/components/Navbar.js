import React, { useState } from 'react'
import './Navbar.css'
import './Nav-media.css'
import logo from '../assets/logo.svg'
import nit from '../assets/nit.png'
import nit1 from '../assets/nit1.png'
import { Link, animateScroll as scroll } from 'react-scroll';
import logo2 from '../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faDiscord, faMicrosoft} from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile=window.innerWidth <= 820;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleDropdown = () => {
        if (!isMobile) {
            setIsOpen(!isOpen);
        }
        else{

        }
    };


    return (
        <div>
            {isMobile ? (
                <div className="menu-button" onClick={toggleMenu} ><FontAwesomeIcon icon={faMicrosoft} /></div>
            ) : null}
            <div className={`navbar ${menuOpen? 'open' : ''}`}>
                <div className='icon'><img src={isMobile ? logo2 : logo} alt='microsoft logo' /></div>
                <div className='nav-content'>
                    <Link to='home' smooth={true} duration={500} className='nav-button'>Home</Link>
                    <Link to="about" smooth={true} duration={500} className='nav-button'>About</Link>
                    <Link to="vision" smooth={true} duration={500} className='nav-button'>Vision</Link>
                    <div className='dropdown'>
                        <Link to="benefits" smooth={true} duration={500} onMouseEnter={toggleDropdown} className='nav-button'>Benefits</Link>
                        <div onMouseLeave={toggleDropdown} className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                            <Link to="benefits" smooth={true} duration={500} className='benefit-button developers'>Developers</Link>
                            <Link to="benefits" smooth={true} duration={500} className='benefit-button creators'>Creators</Link>
                            <Link to="benefits" smooth={true} duration={500} className='benefit-button innovators'>Innovators</Link>
                            <Link to="benefits" smooth={true} duration={500} className='benefit-button enthusiasts'>Microsoft Enthusiasts</Link>
                        </div>
                    </div>
                    <Link to="apply" smooth={true} duration={500} className='nav-button'>Apply</Link>
                    <Link to="contact" smooth={true} duration={500} className='nav-button'>Contact</Link>
                </div>
                <div className='icon-content'>
                    <a className='brand-icon' href="" target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                    <a className='brand-icon' href="" target='_blank' ><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a className='brand-icon' href="" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <div className='mit-icon'><img src={isMobile?nit1:nit} alt='microsoft logo' /></div>
            </div>
        </div>
    )
}

export default Navbar
