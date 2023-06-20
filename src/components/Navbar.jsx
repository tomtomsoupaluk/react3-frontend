import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const navigation = useNavigate()

    const handleLink = (path) => {
        navigation(path)
    }

    return (
        <div className='navbarContainer'>
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

            <div className='navbarIcon'>
                <MenuIcon fontSize='large'/>
            </div>
        </div>
    )
}
