import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigation = useNavigate()

    const handleLink = (path) => {
        navigation(path)
    }

    return (
        <div className='container'>
            <div className='logo'>
                <h1>WISTIA</h1>
            </div>

            <div className='menu'>
                <div className='menuItem'>
                    <p onClick={()=> handleLink('/products')}>Product</p>
                </div>

                <div className='menuItem'>
                    <p onClick={()=> handleLink('/learning-center')}>Learning center</p>
                </div>

                <div className='menuItem'>
                    <p onClick={()=> handleLink('/original-series')}>Original Series</p>
                </div>

                <div className='menuItem'>
                    <p onClick={()=> handleLink('/aboutus')}>About</p>
                </div>
            </div>

            <div className='button'>
                <button className='loginButtonStyle'>Login</button>
                <button className='getStartButtonStyle'>Get started</button>
            </div>
        </div>
    )
}
