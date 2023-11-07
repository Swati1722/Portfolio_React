import React from 'react'
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
// import { Link } from "react-scroll";

const Navbar = () => {
  return (
      <div className="n-wrapper" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name">Swati</div>
                <Toggle />
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>Home</li>
                        <li> Serivces </li>
                        <li> Experience </li>
                        <li> Protfolio </li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                    <button className="button n-button">Contact</button>
            </div>
        </div>
   
  )
}

export default Navbar
