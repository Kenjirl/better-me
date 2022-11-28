import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import { navSubItemClicked, mobileNavToggle, dropdownToggle } from "../utils/nav-bar-init";
import bg from '../svg/search-wave.svg';
import '../styles/components/nav-bar.css';

const NavBar = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return(
      <header className="header-home">

        <Link to="/" className="logo">
          <img className="logo-img" src="../../img/logo.png" alt="better me's logo"/>
          <h1>Better Me</h1>
        </Link>

        <nav id="desktop" className="desktop">
          <div className="dropdown-container">
            <button id="dropdownToggle" className="nav-item" onClick={dropdownToggle} type="button">Navigate</button>
            <div id="dropdown-item-container" className="dropdown-item-container">
              <a className="nav-sub-item" onClick={navSubItemClicked} href="#description" tabIndex="-1">Description</a>
              <a className="nav-sub-item" onClick={navSubItemClicked} href="#services" tabIndex="-1">Services</a>
              {/* <!-- <Link className="nav-sub-item" onClick={navSubItemClicked} to="#about">About</Link> --> */}
            </div>
          </div>
          <Link className="nav-item" to="/recipes">Food Recipes</Link>
        </nav>

        <div className="mobile-btn-wrapper">
          <button id="mobileNavToggle" className="mobile-nav-toggle" onClick={mobileNavToggle} type="button"><FiMenu/></button>
        </div>
        <nav id="mobile" className="mobile">
          <div className="logo">
            <img src="../../img/logo.png" alt="better me's logo"/>
            <h1>Better Me</h1>
          </div>
          <div className="mobile-btn-wrapper">
            <button id="mobileNavToggle" className="mobile-nav-toggle" onClick={mobileNavToggle} type="button" tabIndex="-1"><FiX/></button>
          </div>
          <div className="container">
            <a className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" href="#description">Description</a>
            <a className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" href="#services">Services</a>
            {/* <!-- <Link className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" to="#about">About</Link> --> */}
            <Link className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" to="/recipes">Food Recipes</Link>
          </div>
        </nav>

      </header>
    )
  }

  return (
    <header className="header-2">
      <Link to="/" className="logo">
        <img src="../../img/logo.png" alt="better me's logo"/>
        <h1>Better Me</h1>
      </Link>
      <div>
        <img className="svg" src={bg} alt='' />
      </div>
    </header>
  )
}

export default NavBar;
