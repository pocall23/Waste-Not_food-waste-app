
import React from "react"
import { Link } from 'react-router-dom';
import "./Header.css"

export default function Header() {
  return (
    <>
      <div className="container container2">
        <div className="container container2">
          <div className="">
            <a className="picture">
              <img
                src="https://res.cloudinary.com/dqw6fjffy/image/upload/v1659754149/waste_not_suepl3.png"
                alt="logo image"
                className="title"
              />
            </a>
          </div>

        </div>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
            <ul className="nav-menu nav-menu_visible">
              
              <li>
                <a className="nav-menu-item nav-menu-link .nav-menu-link_active" href="/">Home</a>
              </li>
              <li>
                <a className="nav-menu-item nav-menu-link" href="/about">About</a>
              </li>
              <li>
                <a className="nav-menu-item nav-menu-link" href="/foods">Donations</a>
              </li>
              <li>
                <a className="nav-menu-item nav-menu-link" href="/login">Log in</a>
              </li>
              <li>
                <a className="nav-menu-item nav-menu-link" href="/signup">Sign Up</a>
              </li>
            </ul>

        </div>
      
    </>
  );
}
