import React from 'react'
import './Navbar.css'
import navlogo from "../../assets/logo.png"
// import navProfile from "../../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='logo-desc'>

      <img src={navlogo} alt="" className="nav-logo" />
      <p>Admin Panel</p>
      </div>
      <img
        src="https://collinsportfolio.netlify.app/images/avatar.png"
        alt=""
        className="nav-profile"
      />
    </div>
  );
}

export default Navbar