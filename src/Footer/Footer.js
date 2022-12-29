import React from 'react'

const Footer = () => {
    return (
        <div className="Fotter_section bg-black text-white">
            <div class="container">
                <footer class="py-5 ">
                    <div class="row align-items-center">
                        <div class="col-6 col-md-6 mb-3">
                            <ul class="nav justify-content-between align-items-center">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-outline-light" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2022 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer