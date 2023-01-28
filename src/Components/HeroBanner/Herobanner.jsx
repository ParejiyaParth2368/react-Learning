import React from 'react';
import Bannerlogo from './Banner Logo/Bannerlogo';
import './herobanner.css'

const Herobanner = () => {
    return (
        <div className="herobanner">
            <div className="container-fluid">
                <div className="banner_caption_logo">
                    <div className="caption">
                        <h1 className="banner_heading text-start">The Future Of Technology Starts Here</h1>
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