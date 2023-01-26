import React from 'react'
import './linkbutton.css'
import { Link } from 'react-router-dom'

const Linkbutton = ({ to, btnlabel }) => {
    return (
        <Link to={to} className="global_btn">{btnlabel}</Link>
    )
}

export default Linkbutton