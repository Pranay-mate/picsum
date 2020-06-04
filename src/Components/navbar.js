import React from "react";
import '../css/navbar.css';
import { Link as Li } from "react-router-dom";
import { Link} from "react-scroll";


function Navbar(props) {
  const dishId= window.location.pathname;
  return (
    <div className="main_banner sticky-top">
    <collapse navbar>
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Link className="navbar-brand" href="/">
          TREK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="Cards">
              <Li className="nav-item nav-link" to="/">TrekImages</Li><span className="sr-only">(current)</span>
            </Link>
          <Link
            className="nav-item nav-link"
              activeClass="active"
              to="CardDetails"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><Li className="nav-item nav-link" to={dishId}>CardDetails</Li></Link>
          </div>
        </div>
      </nav>
      </collapse>

    </div>
  );
}

export default Navbar;
