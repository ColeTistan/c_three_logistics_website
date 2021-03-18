import React from 'react';

const NavBar = () => {
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#home">C Three Logistics LLC</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
          <a className="nav-link" href="#testimonials">Testimonials</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;