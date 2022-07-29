import React from "react";
import './Header.css'
import logo from '../assets/React-icon.svg.png'

export default function Header(){
    return(
        <header className="header">
            <img src={logo} className='logo'/>
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </header>
    )
}