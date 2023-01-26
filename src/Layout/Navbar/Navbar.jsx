import { faBars, faChevronDown, faClose, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Logo/Logo'
import './navbar.css'

const Navbar = ({ mode, toggledarklight }) => {
    const [mobilemenu, setMobilemenu] = useState(false)

    const openmenulist = () => {
        setMobilemenu(true)
    }
    const closemenulis = () => {
        setMobilemenu(false)
    }


    return (
        <>
            <nav className={`navbar navbar-expand-lg py-4 justify-content-between`}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <Logo mode={mode} />
                    </a>
                    <div className="collapse navbar-collapse menu_bar" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                    <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                                </Link>
                                <div className={`dropdown-menu px-3`}>
                                    <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                        <li><Link className={`dropdown-item`} href="/">ENTERPRISE MOBILITY</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">CROSS PLATFORM APPS</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">ECOMMERCE & CMS</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">FRONT-END DEVELOPMENT</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">BACK END DEVELOPMENT</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">UI/UX DESIGN SERVICES</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Technologies
                                    <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                                </Link>
                                <div className={`dropdown-menu px-3`}>
                                    <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                        <li><Link className={`dropdown-item`} href="/">React</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">Angular</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">Vue</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">JavaScript</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">.NET</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">PythonJava</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">Node</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">PHP</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Industries
                                    <FontAwesomeIcon className='down_arrow' icon={faChevronDown} />
                                </Link>
                                <div className={`dropdown-menu px-3`}>
                                    <ul className="dropdown-menu-box d-flex justify-content-between flex-wrap">
                                        <li><Link className={`dropdown-item`} href="/">STARTUPS</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">HEALTH CARE</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">TRAVEL & HOSPITALITY</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">CONSTRUCTION</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">MANUFACTURING</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">BANKING & FINANCES</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">MEDIA & ADV</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">LOGISTIC</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">ECOMMERCE</Link></li>
                                        <li><Link className={`dropdown-item`} href="/">FOOD</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/ourwork">Our Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/aboutus">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="icon-list">
                        <div className="dark_light_mode">
                            <button className="btn p-0" onClick={toggledarklight}>
                                {mode === 'dark' ? <FontAwesomeIcon className='sunicon' icon={faSun} /> : <FontAwesomeIcon className='moonicon' icon={faMoon} />}
                            </button>
                        </div>
                        <div className="mobile_menu">
                            <button className="btn p-0" onClick={openmenulist}>
                                <FontAwesomeIcon className="menubaricon" icon={faBars} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mobile_menu_list_box" style={{ display: mobilemenu ? 'block' : 'none' }}>
                <div className="overlay" onClick={closemenulis}></div>
                <div className={`mobile_menu_list`}>
                    <div className="close_icon text-end my-3 mx-4">
                        <FontAwesomeIcon onClick={closemenulis} className="closeicon" icon={faClose} />
                    </div>
                    <ul className="navbar-nav m-3 ">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <li className="nav-item">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <Link className={`nav-link text-start accordion-button collapsed`} href="/" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Services
                                        </Link>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <ul class="accordion-body py-0 text-start">
                                            <li><Link className={`nav-link`} href="/">ENTERPRISE MOBILITY</Link></li>
                                            <li><Link className={`nav-link`} href="/">CROSS PLATFORM APPS</Link></li>
                                            <li><Link className={`nav-link`} href="/">ECOMMERCE & CMS</Link></li>
                                            <li><Link className={`nav-link`} href="/">FRONT-END DEVELOPMENT</Link></li>
                                            <li><Link className={`nav-link`} href="/">BACK END DEVELOPMENT</Link></li>
                                            <li><Link className={`nav-link`} href="/">UI/UX DESIGN SERVICES</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <Link className={`nav-link text-start accordion-button collapsed`} href="/" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Technologies
                                        </Link>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <ul class="accordion-body py-0 text-start">
                                            <li><Link className={`nav-link`} href="/">React</Link></li>
                                            <li><Link className={`nav-link`} href="/">Angular</Link></li>
                                            <li><Link className={`nav-link`} href="/">Vue</Link></li>
                                            <li><Link className={`nav-link`} href="/">JavaScript</Link></li>
                                            <li><Link className={`nav-link`} href="/">.NET</Link></li>
                                            <li><Link className={`nav-link`} href="/">PythonJava</Link></li>
                                            <li><Link className={`nav-link`} href="/">Node</Link></li>
                                            <li><Link className={`nav-link`} href="/">PHP</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <Link className={`nav-link text-start accordion-button collapsed`} href="/" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Industries
                                        </Link>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <ul class="accordion-body py-0 text-start">
                                            <li><Link className={`nav-link`} href="/">STARTUPS</Link></li>
                                            <li><Link className={`nav-link`} href="/">HEALTH CARE</Link></li>
                                            <li><Link className={`nav-link`} href="/">TRAVEL & HOSPITALITY</Link></li>
                                            <li><Link className={`nav-link`} href="/">CONSTRUCTION</Link></li>
                                            <li><Link className={`nav-link`} href="/">MANUFACTURING</Link></li>
                                            <li><Link className={`nav-link`} href="/">BANKING & FINANCES</Link></li>
                                            <li><Link className={`nav-link`} href="/">MEDIA & ADV</Link></li>
                                            <li><Link className={`nav-link`} href="/">LOGISTIC</Link></li>
                                            <li><Link className={`nav-link`} href="/">ECOMMERCE</Link></li>
                                            <li><Link className={`nav-link`} href="/">FOOD</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-start`} to="/ourwork">Our Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-start`} to="/aboutus">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-start`} to="/contactus">Contact Us</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar