import React from 'react'

const NavbarDesktop = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
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
