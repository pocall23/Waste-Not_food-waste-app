import React from "react"
import { Link } from 'react-router-dom';
import "./header.css"


export default function Header() {
  return (
    <>
    <div className="header-container">
            <div className="header-left">
            <div className="title">WASTE NOT!</div>
        </div>
        <div className="header-centre">
            <div className="navbar">
                <ul>
                    <span className="nav">
                        <Link to="/Login">login</Link>
                    </span>
                    <span className="nav">
                        <Link to="/FAQ">FAQ</Link>
                    </span>
                </ul>
            </div>
        </div>
        </div>
        </>
  )
}