import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/components/nav-bar.css';
import { radioThemeClicked, navSubItemClicked, mobielNavToggle, dropdownToggle } from "../utils/nav-bar-init";

const NavBar = () => {
  const location = useLocation();

  return(
    <>
      <header>

        <Link to="/" className="logo">
          <img src="../../img/logo.png" alt="better me's logo"/>
          <h1>Better Me</h1>
        </Link>

        <div className="color-picker">
          <fieldset>
            <legend className="visually-hidden">Pick Theme</legend>
            <label htmlFor="light" className="visually-hidden">Light</label>
            <input type="radio" name="theme" id="light" onClick={radioThemeClicked} defaultChecked/>
            <label htmlFor="brown" className="visually-hidden">Brown</label>
            <input type="radio" name="theme" id="brown" onClick={radioThemeClicked}/>
            <label htmlFor="dark" className="visually-hidden">Dark</label>
            <input type="radio" name="theme" id="dark" onClick={radioThemeClicked}/>
          </fieldset>
        </div>

        <nav id="desktop" className="desktop">
          { 
            location.pathname === '/'
            ? <div className="dropdown-container">
                <button id="dropdownToggle" className="nav-item" onClick={dropdownToggle} type="button">Navigate</button>
                <div id="dropdown-item-container" className="dropdown-item-container">
                  <a className="nav-sub-item" onClick={navSubItemClicked} href="#description" tabIndex="-1">Description</a>
                  <a className="nav-sub-item" onClick={navSubItemClicked} href="#services" tabIndex="-1">Services</a>
                  {/* <!-- <Link className="nav-sub-item" onClick={navSubItemClicked} to="#about">About</Link> --> */}
                </div>
              </div>
            : <Link className="nav-item" to="/">Homepage</Link>
          }
          <Link className="nav-item" to="/recipes">Food Recipes</Link>
        </nav>

        <div className="mobile-btn-wrapper">
          <button id="mobileNavToggle" className="mobile-nav-toggle" onClick={mobielNavToggle} type="button"><FiMenu/></button>
        </div>
        <nav id="mobile" className="mobile">
          <div className="logo">
            <img src="../../img/logo.png" alt="better me's logo"/>
            <h1>Better Me</h1>
          </div>
          <div className="mobile-btn-wrapper">
            <button id="mobileNavToggle" className="mobile-nav-toggle" onClick={mobielNavToggle} type="button" tabIndex="-1"><FiX/></button>
          </div>
          <div className="container">
            { 
              location.pathname === '/'
              ? <>
                  <a className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" href="#description">Description</a>
                  <a className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" href="#services">Services</a>
                </> 
              : <Link className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" to="/">Homepage</Link>
            }
            {/* <!-- <Link className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" to="#about">About</Link> --> */}
            <Link className="nav-sub-item" onClick={navSubItemClicked} tabIndex="-1" to="/recipes">Food Recipes</Link>
          </div>
        </nav>

      </header>
    </>
  )
}

export default NavBar;
