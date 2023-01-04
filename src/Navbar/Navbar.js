import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark stikey_header position-fixed px-5 py-4">
            <div className="container">
                <a className="navbar-brand" href="#">DI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu_bar" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Technologies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Industries</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar