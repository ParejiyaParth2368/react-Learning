import React from 'react'
import Mobileappdevelopment from '../../assets/icons/Our services/Mobileappdevelopment'
import WebdevelopmentCMS from '../../assets/icons/Our services/WebdevelopmentCMS'
import UIUXDesign from '../../assets/icons/Our services/UIUXDesign'
import Enterpriseappdevelopment from '../../assets/icons/Our services/Enterpriseappdevelopment'
import './Ourservices.css'
import Linkbutton from '../Global Components/Linkbutton'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'

const Ourservices = () => {

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
    }

    return (
        <div className="ourservices position-relative">
            <div className="ourservices_bg"></div>
            <div className="container-fluid">
                <div className="ourservices_content position-relative">
                    <div className="ourservices_header mb-5">
                        <div className="title mb-3">
                            <h2>Our Services</h2>
                        </div>
                        <div className="subtitle">
                            <p>
                                Tailored Services for Individual Business Requirements
                            </p>
                        </div>
                    </div>
                    <div className="ourservices_body desktop_view">
                        <Tabs>
                            <div className="d-flex">
                                <div className="item_list p-5">
                                    <TabList>
                                        <Tab>
                                            <Mobileappdevelopment className="item_icon" />
                                            <span className="item_title">Mobile App Development</span>
                                        </Tab>
                                        <Tab>
                                            <WebdevelopmentCMS className="item_icon" />
                                            <span className="item_title">Web Development & CMS</span>
                                        </Tab>
                                        <Tab>
                                            <UIUXDesign className="item_icon" />
                                            <span className="item_title">UI/UX Design</span>
                                        </Tab>
                                        <Tab>
                                            <Enterpriseappdevelopment className="item_icon" />
                                            <span className="item_title">Enterprise App Development</span>
                                        </Tab>
                                    </TabList>
                                    <div className="explore_all_btn_box">
                                        <Link className="explore_all_btn" to={"/"}>Explore all Industries</Link>
                                        <FontAwesomeIcon className="fa_turnUp" icon={faArrowRight} />
                                    </div>
                                </div>
                                <div className="item_list_display p-5">
                                    <TabPanel>
                                        <div className="item_list_display_box">
                                            <Mobileappdevelopment className="item_icon_display" />
                                            <span className="item_title_display">Mobile App Development</span>
                                            <p className="item_description_display">Building avent-grade app solutions across all industry verticals through advanced technologies.</p>
                                            <Linkbutton to={"/"} btnlabel="Explore" />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="item_list_display_box">
                                            <WebdevelopmentCMS className="item_icon_display" />
                                            <span className="item_title_display">Web Development & CMS</span>
                                            <p className="item_description_display">Intuitive and customer-centric web and CMS development solutions to drive more traffic and revenues.</p>
                                            <Linkbutton to={"/"} btnlabel="Explore" />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="item_list_display_box">
                                            <UIUXDesign className="item_icon_display" />
                                            <span className="item_title_display">UI/UX Design</span>
                                            <p className="item_description_display">Impressive and easy-to-navigate User interfaces offer an unparalleled user experience.</p>
                                            <Linkbutton to={"/"} btnlabel="Explore" />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="item_list_display_box">
                                            <Enterpriseappdevelopment className="item_icon_display" />
                                            <span className="item_title_display">Enterprise App Development</span>
                                            <p className="item_description_display">Highly productive and market-ready enterprise app development solutions to streamline processes and business operations.</p>
                                            <Linkbutton to={"/"} btnlabel="Explore" />
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                    <div className="mobile_view">
                        <Slider {...sliderSettings}>
                            <div>
                                <div className="item_list_display_box">
                                    <Mobileappdevelopment className="item_icon_display" />
                                    <span className="item_title_display">Mobile App Development</span>
                                    <p className="item_description_display">Building avent-grade app solutions across all industry verticals through advanced technologies.</p>
                                    <Linkbutton to={"/"} btnlabel="Explore" />
                                </div>
                            </div>
                            <div>
                                <div className="item_list_display_box">
                                    <WebdevelopmentCMS className="item_icon_display" />
                                    <span className="item_title_display">Web Development & CMS</span>
                                    <p className="item_description_display">Intuitive and customer-centric web and CMS development solutions to drive more traffic and revenues.</p>
                                    <Linkbutton to={"/"} btnlabel="Explore" />
                                </div>
                            </div>
                            <div>
                                <div className="item_list_display_box">
                                    <UIUXDesign className="item_icon_display" />
                                    <span className="item_title_display">UI/UX Design</span>
                                    <p className="item_description_display">Impressive and easy-to-navigate User interfaces offer an unparalleled user experience.</p>
                                    <Linkbutton to={"/"} btnlabel="Explore" />
                                </div>
                            </div>
                            <div>
                                <div className="item_list_display_box">
                                    <Enterpriseappdevelopment className="item_icon_display" />
                                    <span className="item_title_display">Enterprise App Development</span>
                                    <p className="item_description_display">Highly productive and market-ready enterprise app development solutions to streamline processes and business operations.</p>
                                    <Linkbutton to={"/"} btnlabel="Explore" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourservices