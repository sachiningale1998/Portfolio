import React from 'react'
import "../styles/navbar.css"


const Navbar = () => {
  return (
    <div>
        <nav id="navDiv" className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgb(12, 20, 27)", height : "4rem"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img className="myLogo" src="https://o.remove.bg/downloads/9bc8a392-3a6b-43a8-a90f-aa55ceb72168/sachin_logo-removebg-preview.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <p id="listComponents" style={{color: "#339fec"}} className="nav-link active" aria-current="page" href="#">Home</p>
        </li>
        <li  className="nav-item">
          <p id="listComponents" style={{color: "#339fec"}} className="nav-link" href="#">About</p>
        </li>
        <li  className="nav-item">
          <p id="listComponents" style={{color: "#339fec"}} className="nav-link" href="#">Skills</p>
        </li>
        <li  className="nav-item">
          <p id="listComponents" style={{color: "#339fec"}} className="nav-link" href="#">Projects</p>
        </li>
        <li  className="nav-item">
          <p id="listComponents" style={{color: "#339fec"}} className="nav-link" href="#">Contact</p>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar