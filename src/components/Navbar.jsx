import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <div className='container'>
            <div className='logo'>
                <h1>WISTIA</h1>
            </div>

            <div className='menu'>
                <div className='menuItem'>
                    <p>Product</p>
                    <i class='fa fa-angle-down'></i>
                </div>

                <div className='menuItem'>
                    <p>Learning center</p>
                    <i class='fa fa-angle-down'></i>
                </div>

                <div className='menuItem'>
                    <p>Original Series</p>
                    <i class='fa fa-angle-down'></i>
                </div>

                <div className='menuItem'>
                    <p>About</p>
                    <i class='fa fa-angle-down'></i>
                </div>
            </div>

            <div className='button'>
                <button className='loginButtonStyle'>Login</button>
                <button className='getStartButtonStyle'>Get started</button>
            </div>
        </div>
    )
}
