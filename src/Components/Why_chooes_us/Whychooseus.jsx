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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
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
                                    <h4 className="infotitle text-start">Expertise and Experience</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">Our team of professionals has a proven track record of delivering high-quality software solutions to clients in a variety of industries.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Customer-Centered Approach</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">We believe in putting the user experience first and always tailor our solutions to meet the unique needs of each client.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Cutting-Edge Technologies</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">We stay ahead of the curve by focusing on innovation and utilizing the latest technologies, such as cloud computing, artificial intelligence, and machine learning.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Commitment to Quality</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">We are dedicated to delivering software solutions that are functional, user-friendly, and meet the highest standards of quality.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Exceptional Support</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">Our team is always here to provide ongoing support and ensure your success, long after the project is complete.</p>
                                </div>
                            </div>
                            <div className="infocard">
                                <div className="infoheader mb-3">
                                    <h4 className="infotitle text-start">Competitive Pricing</h4>
                                </div>
                                <div className="infobody">
                                    <p className="infotext text-start">We offer competitive pricing for our high-quality software development services, making it affordable for organizations of all sizes to achieve their digital transformation goals.</p>
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