import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav classname="navbar navbar-expand-lg bg-body-tertiary">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="#">Navbar</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">Link</a>
        </li>
        <li classname="nav-item dropdown">
          <a classname="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          
        </li>
        <li classname="nav-item">
          <a classname="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classname="d-flex" role="search">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classname="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
