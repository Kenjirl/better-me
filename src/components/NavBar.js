import React from "react";
import { FiBookmark, FiHome, FiList } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import '../styles/components/nav-bar.css';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="../../img/logo.png" alt="better me's logo"/>
        <h1>Better Me</h1>
      </div>
      <div className="nav-container">
        <div className="nav-item">
          { pathname === '/'
            ? <Link to='/' className="selected" ><FiHome /></Link>
            : <Link to='/' ><FiHome /></Link>
          }
        </div>
        <div className="nav-item">
          { pathname === '/recipes'
            ? <Link to='/recipes' className="selected" ><FiList /></Link>
            : <Link to='/recipes' ><FiList /></Link>
          }
        </div>
        <div className="nav-item">
          { pathname === '/bookmarks'
            ? <Link to='/bookmarks' className="selected" ><FiBookmark /></Link>
            : <Link to='/bookmarks' ><FiBookmark /></Link>
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar;
