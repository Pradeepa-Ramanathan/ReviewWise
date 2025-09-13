<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

import phoneIcon from '../assets/PhoneLogo.png';
import mailIcon from '../assets/MailLogo.png';
import facebookIcon from '../assets/FacebookLogo.png';
import instagramIcon from '../assets/InstagramLogo.png';
import youtubeIcon from '../assets/YouTubeLogo.png';
import ravueLogo from '../assets/RavueLogo.png';
import './Navbar.css';

const robotoStyle = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '20px',
};

const Navbar = () => {
  return (
    <header>
      
      <div style={{ backgroundColor: '#E8EEF1', color: '#1E3D58' ,position:''}} className="py-2 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <span className="d-flex align-items-center gap-2">
            <img src={phoneIcon} alt="Phone" width="30" height="30" />
            <span className="px-2">|</span>
            <span>+1-234-5678</span>
          </span>
          <span className="d-flex align-items-center gap-2">
            <img src={mailIcon} alt="Mail" width="30" height="30" />
            <span className="px-2">|</span>
            <span>ravuequeries@gmail.com</span>
          </span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook" width="30" /></a>
          <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" width="30" /></a>
          <a href="https://www.youtube.com"><img src={youtubeIcon} alt="Youtube" width="30" /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: 'white' ,paddingTop: '0px', paddingBottom: '4px' }} className="navbar navbar-expand-lg px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
         <a className="navbar-brand logo" href="#">
        <img src={ravueLogo} alt="logo" width="150" height="60-" />
        </a>

          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
           <ul className="navbar-nav d-flex flex-row gap-5 mb-2 mb-lg-0">
  <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/">Home</Link></li>
  <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/">About Us</Link></li>
  <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/analyze">Get Review</Link></li>
  <li className="nav-item"><Link className="nav-link text-dark" style={robotoStyle} to="/contact">Contact Us</Link></li>


</ul>

          </div>

          <button
            style={{
                backgroundColor: '#E8EEF1',
                color: 'black',
                border: '2px solid black',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                fontSize: '20px',
                
                borderRadius: '6px',
            }} className="btn login-button">
            Login
        </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
=======
// src/components/Navbar.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: '#E8EEF1', color: '#1E3D58' }} className="py-2 px-3 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <span><FaPhone className="me-1" /> +1-234-5678</span>
          <span><FaEnvelope className="me-1" /> ravuequeries@gmail.com</span>
        </div>
        <div className="d-flex gap-3">
          <a href="#" style={{ color: '#1E3D58' }}><FaFacebookF /></a>
          <a href="#" style={{ color: '#1E3D58' }}><FaInstagram /></a>
          <a href="#" style={{ color: '#1E3D58' }}><FaYoutube /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: '#057DCD' }} className="navbar navbar-expand-lg px-3">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center text-white" href="#">
            <FaSearch className="me-2" style={{ color: '#43B0F1' }} />
            <strong>RAVUE</strong>
          </a>

          {/* Toggler for mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Get review</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Contact Us</a></li>
            </ul>

            {/* Login Button */}
            <button style={{ backgroundColor: '#e8eef1', color: 'black' }} className="btn">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
>>>>>>> origin/preethi
