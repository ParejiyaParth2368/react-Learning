import { faChevronDown, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Logo/Logo'
import './navbar.css'

const Navbar = ({ mode, toggledarklight }) => {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode === 'dark' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'black' : 'white'} stikey_header px-5 py-4`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <Logo mode={mode} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu_bar" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className={`nav-link text-${mode === 'dark' ? 'white' : 'black'} dropdown-toggle`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                                <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                            </a>
                            <div className={`dropdown-menu px-3 bg-${mode === 'dark' ? 'white' : 'black'} text-${mode === 'dark' ? 'black' : 'white'}`}>
                                <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">ENTERPRISE MOBILITY</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">CROSS PLATFORM APPS</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">ECOMMERCE & CMS</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">FRONT-END DEVELOPMENT</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">BACK END DEVELOPMENT</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">UI/UX DESIGN SERVICES</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link text-${mode === 'dark' ? 'white' : 'black'} dropdown-toggle`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Technologies
                                <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                            </a>
                            <div className={`dropdown-menu px-3 bg-${mode === 'dark' ? 'white' : 'black'} text-${mode === 'dark' ? 'black' : 'white'}`}>
                                <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">React</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">Angular</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">Vue</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">JavaScript</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">.NET</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">PythonJava</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">Node</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">PHP</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link text-${mode === 'dark' ? 'white' : 'black'} dropdown-toggle`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                                <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                            </a>
                            <div className={`dropdown-menu px-3 bg-${mode === 'dark' ? 'white' : 'black'} text-${mode === 'dark' ? 'black' : 'white'}`}>
                                <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">STARTUPS</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">HEALTH CARE</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">TRAVEL & HOSPITALITY</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">CONSTRUCTION</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">MANUFACTURING</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">BANKING & FINANCES</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">MEDIA & ADV</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">LOGISTIC</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">ECOMMERCE</a></li>
                                    <li><a className={`dropdown-item text-${mode === 'dark' ? 'black' : 'white'}`} href="/">FOOD</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${mode === 'dark' ? 'white' : 'black'}`} to="/ourwork">Our Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${mode === 'dark' ? 'white' : 'black'}`} to="/aboutus">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${mode === 'dark' ? 'white' : 'black'}`} to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="dark_light_mode">
                    <button className="btn p-0" onClick={toggledarklight}>
                        {mode === 'dark' ? <FontAwesomeIcon className='sunicon' icon={faSun} /> : <FontAwesomeIcon className='moonicon' icon={faMoon} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar