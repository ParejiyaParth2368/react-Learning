import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './footer.css'

const Footer = ({ mode }) => {
    return (
        <div className={`Fotter_section px-5 bg-${mode === 'dark' ? 'black' : 'white'} text-white`}>
            <div div className="container-fluid" >
                <footer className="py-5 ">
                    <div className="row align-items-start">
                        <div className="col-8 col-md-8 mb-3">
                            <ul className="nav justify-content-between align-items-start">
                                <li className="nav-item mb-2">
                                    <a href="/" className={`nav-link p-0 mb-3 text-start text-${mode === 'dark' ? 'white' : 'black'} pb-2 border-bottom`}>Services</a>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">ENTERPRISE MOBILITY</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">CROSS PLATFORM APPS</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">ECOMMERCE & CMS</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">FRONT-END DEVELOPMENT</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">BACK END DEVELOPMENT</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">UI/UX DESIGN SERVICES</a></li>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="/" className={`nav-link p-0 mb-3 text-start text-${mode === 'dark' ? 'white' : 'black'} pb-2 border-bottom`}>Technologies</a>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">React</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Angular</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Vue</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">JavaScript</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">.NET</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">PythonJava</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Node</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">PHP</a></li>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="/" className={`nav-link p-0 mb-3 text-start text-${mode === 'dark' ? 'white' : 'black'} pb-2 border-bottom`}>Industries</a>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">STARTUPS</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">HEALTH CARE</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">TRAVEL & HOSPITALITY</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">CONSTRUCTION</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">MANUFACTURING</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">BANKING & FINANCES</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">MEDIA & ADV</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">LOGISTIC</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">ECOMMERCE</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">FOOD</a></li>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="/" className={`nav-link p-0 mb-3 text-start text-${mode === 'dark' ? 'white' : 'black'} pb-2 border-bottom`}>Company</a>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Newsletters</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Sitemap</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Privacy Policy</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Terms of use</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Career</a></li>
                                    <li><a className={`dropdown-item text-start text-${mode === 'dark' ? 'white' : 'black'}-50`} href="/">Blogs</a></li>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 offset-md-1 mb-3">
                            <div className="company_address_box">
                                <div className="header mb-3 pb-2 border-bottom text-start">
                                    <span className={`title text-${mode === 'dark' ? 'white' : 'black'}`}>INDIA OFFICE</span>
                                </div>
                                <div className={`loacation_phone text-${mode === 'dark' ? 'white' : 'black'}`}>
                                    <div className="row">
                                        <div className="icon_box col-1">
                                            <FontAwesomeIcon icon={faLocationCrosshairs} />
                                        </div>
                                        <div className="text_box col-11 text-start">
                                            <span className="text">305, Shukan Business Centre,
                                                Nr. Swastik Cross Road, Navrangpura,
                                                A’bad – 380009, Gujarat, India</span>
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="icon_box col-1">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className="text_box col-11 text-start">
                                            <span className="text">0123456789</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-${mode === 'dark' ? 'white' : 'black'}`}>
                        <p>© 2022 <b>disciplineinfotech.com</b>. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div >
        </div >
    )
}

export default Footer