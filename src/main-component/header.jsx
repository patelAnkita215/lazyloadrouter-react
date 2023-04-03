import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/header.css";


class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      const data = ["home","about","contact","component"];
      const MenuData = data.map((dt,index) => {
        return <Link to={`/${dt}`} key={index} className="nav-link">{dt}</Link>
      })
        return (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between w-100">
              <Link to="/home" className="navbar-brand">
                Logo
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              {MenuData}
                {/* <Link to="/" className="nav-link">
                 {MenuData}
                </Link> */}
                {/* <Link to="/about" className="nav-link">
                  About Us
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
                <Link to="/component" className="nav-link">
                  Component
                </Link> */}
              </div>
            </div>
          </div>
      </nav>  
            </>
        );
    }
}

export default HeaderComponent;