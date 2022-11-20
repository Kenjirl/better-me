import React from "react";
import '../styles/components/footer.css'
import { radioThemeClicked } from "../utils/nav-bar-init";

const Footer = () => {
  return (
    <>
      <footer>
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
        <p>copyright 	&#169; 2022 | Better Me</p>
      </footer>
    </>
  );
}

export default Footer;
