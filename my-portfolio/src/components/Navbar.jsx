import React from 'react'
import "../styles/navbar.css"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="mainNav" >
        <nav id="navDiv" className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgb(12, 20, 27)", height : "4rem"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img className="myLogo" src={logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul  className="navbar-nav ham-memo me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <Link to ="./">
            <p id="listComponents" style={{color: "#339fec"}} className="nav-link active" aria-current="page" href="#">Home</p>
          </Link>
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
      {/* <span className="navbar-text">
        Navbar text with an inline element
      </span> */}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar