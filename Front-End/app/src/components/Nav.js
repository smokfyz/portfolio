import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
import './Nav.scss'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo">Ivan Sharapenkov <br /> <span>Portfolio Page</span></div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Work</Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cv">CV</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav