import React from 'react';
import './Navbar.css';
import logo from '../../assets/ON TARGET LOGO 2024 (1).png'

function Navbar() {
  return (
    <nav className='container'>
        <img src={logo} alt="Company Logo" className='logo' />
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Articles</li>   
            <li>Testimonials</li>   
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar