import React from 'react'
import logo from "/src/assets/Elogo.png"
import "./NavbarStyles/Navbar.css"
const NavbarMobile = () => {
  return (
    <div id='navBg-mobile'>
      

<nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)"><img className='img-fluid' src={logo} alt=""  /></a>
<div class="offcanvas offcanvas-start" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id='Brand_Mobile'>Food Hub!</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">

<a className='nav-link font' href="#"><b>Cart</b></a><br />
<a className='nav-link' href="#"><b>Contact</b></a><br />
<a className='nav-link' href="#"><b>SignUp</b></a>

  </div>
</div>
<div >
    <h1 ><b>Food Hub</b></h1>
</div>
  <button className='btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
      <span className="navbar-toggler-icon" />
    </button>

  </div>
</nav>



    </div>
  )
}

export default NavbarMobile
