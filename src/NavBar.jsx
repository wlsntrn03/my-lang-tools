import React from 'react';
import { NavLink } from 'react-router-dom';
import { getImageUrl } from "./utils";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src="/books.png" alt="books logo" className="logoImg" />
      </a>
      <img className="badge" src="https://visitor-badge.laobi.icu/badge?page_id=mylangtools" alt="visitors" />
      <div className="nav-logo">MyLangTools</div>
      <ul className="nav-links">
        <li><NavLink
          to="/dictionary"
          className={({ isActive, location }) =>
            window.location.pathname === "/" || isActive ? "active" : ""
          }
        >
          Dictionary
        </NavLink>
        </li>
        <li><NavLink to="/thesaurus" className={({ isActive }) => isActive ? "active" : ""}>Thesaurus</NavLink></li>
        <li><NavLink to="/translator" className={({ isActive }) => isActive ? "active" : ""}>Translator</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
