import React from 'react'
import logo from "/src/assets/FoodHub.png"
const NavbarMobile = () => {
  return (
    <div>
      

<nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)"><img className='img-fluid' src={logo} alt="" style={{width:"50px"}} /></a>
<div class="offcanvas offcanvas-start" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title">Food HUb!</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">

<a className='nav-link' href="#"><b>link</b></a>
<a className='nav-link' href="#"><b>link</b></a>
<a className='nav-link' href="#"><b>link</b></a>

  </div>
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
