import React from "react";
import { FiBookmark, FiHome, FiList } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/perspective.css';
import '../styles/components/nav-bar.css';

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="../../img/logo.png" alt="better me's logo"/>
        <h1>Better Me</h1>
      </div>
      <div className="nav-container">
        <div className="nav-item">
          <Tippy interactive={true} content='Homepage' offset={[0, 20]} theme='light-border' animation='perspective'>
            { pathname === '/'
              ? <Link to='/' className="selected" ><FiHome /></Link>
              : <Link to='/' ><FiHome /></Link>
            }
          </Tippy>
        </div>
        <div className="nav-item">
          <Tippy interactive={true} content='Recipes List Page' offset={[0, 20]} theme='light-border' animation='perspective'>
            { pathname === '/recipes'
              ? <Link to='/recipes' className="selected" ><FiList /></Link>
              : <Link to='/recipes' ><FiList /></Link>
            }
          </Tippy>
        </div>
        <div className="nav-item">
          <Tippy interactive={true} content='Bookmarks Page' offset={[0, 20]} theme='light-border' animation='perspective'>
            { pathname === '/bookmarks'
              ? <Link to='/bookmarks' className="selected" ><FiBookmark /></Link>
              : <Link to='/bookmarks' ><FiBookmark /></Link>
            }
          </Tippy>
        </div>
      </div>
    </div>
  )
}
