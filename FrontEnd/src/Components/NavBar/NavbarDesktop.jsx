import React from 'react'
import logo from "/src/assets/Elogo.png"
import "./NavbarStyles/Navbar.css"
const NavbarDesktop = () => {
  return (
    <div id='navBg-desk'>
     <nav className="navbar navbar-expand-sm font" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='img-fluid' id='logo' src={logo} alt=""  style={{height:"120px"}} /></a>
    <h3 id='Brand_Desktop' className='header-font'>FOODHUB</h3>
    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link txt-color" href="#"><b>Cart</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link txt-color" href="#"><b>Contact</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link txt-color" href="#"><b>SignUp</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default NavbarDesktop
