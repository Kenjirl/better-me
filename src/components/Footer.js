import React from "react";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/perspective.css';
import '../styles/components/footer.css'
import { BsDiscord, BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-title">
            <h3>Better Me</h3>
            <img src="../../img/logo.png" alt="better me's logo"/>
            <p>Fill your nutrition needs</p>
          </div>
          <div className="footer-nav">
            <h3>Navigate</h3>
            <div>
              <Link className="footer-item" to='/'>Homepage</Link>
              <Link className="footer-item" to='/recipes'>Recipe List</Link>
              <Link className="footer-item" to='/bookmarks'>Bokmarks</Link>
            </div>
          </div>
          <div className="contact">
            <h3>Contacts</h3>
            <div>
              <Tippy placement="bottom" trigger="click" hideOnClick="toggle" interactive={true} offset={[0, 5]} theme='light-border' animation='perspective' content={
                <div className="contact-icon">
                  <Link target='_blank' rel="noreferrer" to="https://wa.me/6281246007474"><BsWhatsapp /></Link>
                  <Link target='_blank' rel="noreferrer" to="https://www.instagram.com/kenjirl_/"><BsInstagram /></Link>
                  <Link target='_blank' rel="noreferrer" to="https://www.discordapp.com/users/Kencong#7353"><BsDiscord /></Link>
                  <Link target='_blank' rel="noreferrer" to="https://github.com/Kenjirl"><BsGithub /></Link>
                  <Link target='_blank' rel="noreferrer" to="https://www.linkedin.com/in/benedict-kenjiro-558325251/"><BsLinkedin /></Link>
                </div>
              }>
                <button className="footer-item">Kencong</button>
              </Tippy>
            </div>
            {/* <a href="https://www.linkedin.com/in/benedict-kenjiro-558325251/">Kencong</a> */}
          </div>
        </div>
        <div className="copyright">
          <p>copyright 	&#169; 2022 | Better Me. All Rights Reserved</p>
        </div>
      </footer>
      <div></div>
    </>
  );
}

export default Footer;
