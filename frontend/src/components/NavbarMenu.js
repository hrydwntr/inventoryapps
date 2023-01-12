import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className='container'>
    <Link className="navbar-brand" to="/">Nazar Paint</Link>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Users</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Product</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Brand</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='#'>Login</a>
  </li>
</ul>
    </div>
    </nav>
  )
}

export default NavbarMenu