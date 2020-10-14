import React from "react";
import logoPng from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
      <a className="navbar-brand" href="#somewhere">
        <img src={logoPng} width="70" height="70" alt="" loading="lazy" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse col-10" id="navbarCollapse">
        <div className="form-group mt-2 mt-md-0  mr-5 ml-auto">
          <input
            className="form-control  mr-sm-5"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
