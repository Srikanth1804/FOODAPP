import React from 'react'
import NavbarDesktop from './NavbarDesktop'
import "./NavbarStyles/Navbar.css"
import NavbarMobile from './NavbarMobile'

const NavBar = () => {
  return (
    <div>
      <div id='NavDesktop'>
        <NavbarDesktop />

      </div>
      <div id='NavMobile'>
         <NavbarMobile/>
      </div>
    </div>
  )
}

export default NavBar
