import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Logo } from "../../util/AssetUtil";

const Menu = () => (
  <>
    <Link to="/home" className="links-item">
      Home
    </Link>
    <Link to="/wgpt3" className="links-item">
      What is GPT3
    </Link>
    <Link to="/possibility" className="links-item">
      Open AI
    </Link>
    <Link to="/features" className="links-item">
      Case Studies
    </Link>
    <Link to="/blog" className="links-item">
      Library
    </Link>
  </>
);
const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  const handleMenuClick = () => setToogleMenu(!toogleMenu);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      setToogleMenu(false);
    }
  });
  return (
    <div className="navbar__container section__padding">
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="navbar-links__tabs links-item ">
          <Menu />
        </div>

        <div className="navbar-signup-button">
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="navbar-menu" onClick={handleMenuClick}>
          {toogleMenu ? (
            <RiCloseLine className="navbar-menu-icon" />
          ) : (
            <RiMenu3Line className="navbar-menu-icon" />
          )}

          {toogleMenu && (
            <div className="navbar-menu-container scale-up-center links-item ">
              <Menu />
              <div className="navbar-signup-button navbar-menu-signup-button">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
