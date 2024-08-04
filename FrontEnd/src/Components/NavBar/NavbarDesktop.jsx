import React from 'react'
import logo from "/src/assets/FoodHub.png"
const NavbarDesktop = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='img-fluid' src={logo} alt="" style={{width:"60px"}} /></a>
    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavbarDesktop
