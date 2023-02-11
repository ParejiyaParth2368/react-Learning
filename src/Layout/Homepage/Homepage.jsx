import React from 'react'
import Herobanner from '../../Components/HeroBanner/Herobanner'
import Ourservices from '../../Components/OurServices/Ourservices'
import Technologies from '../../Components/Technologies/Technologies'
import Whychooseus from '../../Components/Why_chooes_us/Whychooseus'

const Homepage = ({ mode }) => {
    return (<>
        <Herobanner />
        <Whychooseus mode={mode} />
        <Ourservices mode={mode} />
        <Technologies mode={mode} />
    </>
    )
}

export default Homepage