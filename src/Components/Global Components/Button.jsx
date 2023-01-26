import React from 'react'
import './button.css'

const Button = ({ btnlabel }) => {
    return (
        <button className="global_btn">{btnlabel}</button>
    )
}

export default Button