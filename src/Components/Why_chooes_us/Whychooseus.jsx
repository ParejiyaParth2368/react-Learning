import React from 'react'
import './whychooseus.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Whychooseus = ({ mode }) => {

    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    }

    return (
        <div className="why_choose_us_section">
            <div className="container-fluid">
                <div className="why_choose_us_containe">
                    <div className="why_choose_us_section_header mx-3 mb-5">
                        <div className="title">
                            <h2 className="text-start position-relative">Why Choose Us?<span className="line"></span></h2>
                        </div>
                    </div >
                    <div className="why_choose_us_section_body pt-5">
                        <Slider {...sliderSettings}>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Client Satisfaction</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">It's written on our chromosomes. Our clients have been the driving force behind the decades of success we've had. As a result, client satisfaction is at the core of our company concept. We don't mind collaborating to improve our ideas and provide top-notch mobile app development services.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Client Satisfaction</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">It's written on our chromosomes. Our clients have been the driving force behind the decades of success we've had. As a result, client satisfaction is at the core of our company concept. We don't mind collaborating to improve our ideas and provide top-notch mobile app development services.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Client Satisfaction</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">It's written on our chromosomes. Our clients have been the driving force behind the decades of success we've had. As a result, client satisfaction is at the core of our company concept. We don't mind collaborating to improve our ideas and provide top-notch mobile app development services.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Client Satisfaction</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">It's written on our chromosomes. Our clients have been the driving force behind the decades of success we've had. As a result, client satisfaction is at the core of our company concept. We don't mind collaborating to improve our ideas and provide top-notch mobile app development services.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Whychooseus