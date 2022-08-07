
import React from "react"
import { Link } from 'react-router-dom';
import "./header.css"

export default function Header() {
  return (
    <>

      <div className="container">
        <div className="container">
          <div className="">
            <a className="picture" href="">
              <img
                src="https://res.cloudinary.com/dqw6fjffy/image/upload/v1659754149/waste_not_suepl3.png"
                alt="logo image"
                className="title"
              />
            </a>
          </div>

        </div>
        <button className="nav-toggle" >
        <i className="fas fa-bars"></i>
        </button>
            <ul className="nav-menu nav-menu_visible">
              <li>
                <a className="nav-menu-item nav-menu-link" href="/">Home</a>
              </li>
              <li>
                <a className="nav-menu-item nav-menu-link" href="#what-we-do">What We Do</a>
              </li>
              <li>
                <a className="nav-menu-item nav-menu-link" href="/foods">Feed</a>
              </li>
              <li>
                <a className="nav-menu-item nav-menu-link" href="#donations">Donations</a>
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
