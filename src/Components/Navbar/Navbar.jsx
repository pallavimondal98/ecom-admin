import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/barlow.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlogo} alt='nav-icon' className='nav_logo' />
            <img src={navProfile} alt='' className='nav_profile' />
        </div>
    )
}

export default Navbar