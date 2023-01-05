import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark stikey_header position-fixed px-5 py-4">
            <div className="container">
                <a className="navbar-brand" href="/">DI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu_bar" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                                <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                            </a>
                            <div className="dropdown-menu px-3">
                                <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                    <li><a className="dropdown-item" href="/">ENTERPRISE MOBILITY</a></li>
                                    <li><a className="dropdown-item" href="/">CROSS PLATFORM APPS</a></li>
                                    <li><a className="dropdown-item" href="/">ECOMMERCE & CMS</a></li>
                                    <li><a className="dropdown-item" href="/">FRONT-END DEVELOPMENT</a></li>
                                    <li><a className="dropdown-item" href="/">BACK END DEVELOPMENT</a></li>
                                    <li><a className="dropdown-item" href="/">UI/UX DESIGN SERVICES</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Technologies
                                <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                            </a>
                            <div className="dropdown-menu px-3">
                                <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                    <li><a className="dropdown-item" href="/">React</a></li>
                                    <li><a className="dropdown-item" href="/">Angular</a></li>
                                    <li><a className="dropdown-item" href="/">Vue</a></li>
                                    <li><a className="dropdown-item" href="/">JavaScript</a></li>
                                    <li><a className="dropdown-item" href="/">.NET</a></li>
                                    <li><a className="dropdown-item" href="/">PythonJava</a></li>
                                    <li><a className="dropdown-item" href="/">Node</a></li>
                                    <li><a className="dropdown-item" href="/">PHP</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                                <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                            </a>
                            <div className="dropdown-menu px-3">
                                <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                    <li><a className="dropdown-item" href="/">STARTUPS</a></li>
                                    <li><a className="dropdown-item" href="/">HEALTH CARE</a></li>
                                    <li><a className="dropdown-item" href="/">TRAVEL & HOSPITALITY</a></li>
                                    <li><a className="dropdown-item" href="/">CONSTRUCTION</a></li>
                                    <li><a className="dropdown-item" href="/">MANUFACTURING</a></li>
                                    <li><a className="dropdown-item" href="/">BANKING & FINANCES</a></li>
                                    <li><a className="dropdown-item" href="/">MEDIA & ADV</a></li>
                                    <li><a className="dropdown-item" href="/">LOGISTIC</a></li>
                                    <li><a className="dropdown-item" href="/">ECOMMERCE</a></li>
                                    <li><a className="dropdown-item" href="/">FOOD</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar