import React from 'react';
import Bannerlogo from './Banner Logo/Bannerlogo';
import './herobanner.css'

const Herobanner = () => {
    return (
        <div className="herobanner">
            <div className="container-fluid">
                <div className="banner_caption_logo">
                    <div className="caption">
                        <h1 className="banner_heading">The Future Of Technology Starts Here</h1>
                        <p>Welcome to Discipline Infotech - where innovation and expertise come together to deliver exceptional software solutions.</p>
                        <p>Discipline Infotech is a software development company providing innovative solutions to help organizations achieve digital transformation. Our team of experts offers custom software development, cloud computing, mobile app development and more, using cutting-edge technologies. Choose us as your partner for efficient, user-friendly software that meets your specific needs and drives business success.</p>
                    </div>
                    <div className="Banner_logo_box">
                        <Bannerlogo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herobanner