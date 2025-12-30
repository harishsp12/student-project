import React, {useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='contain-box'>
          <div className='title'>
            <span className='title-name'>Vinoth</span>
          </div>

          {/* ☰ Menu Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </div>

          {/* MENU */}
          <div className={`title-list ${menuOpen ? "active" : ""}`}>
            <ul className="nav-menu">

              <li><a href="#" className="li-color">Home</a></li>
              <li><a href="#" className="li-color">About Us</a></li>

              <li className="dropdown">
                <a href="#" className="li-color">Classes ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="li-color">Play Group</a></li>
                  <li><a href="#" className="li-color">Nursery</a></li>
                  <li><a href="#" className="li-color">Junior KG</a></li>
                  <li><a href="#" className="li-color">Senior KG</a></li>
                </ul>
              </li>

              <li><a href="#" className="li-color">Facilities</a></li>
              <li><a href="#" className="li-color">Admissions</a></li>

              <li className="dropdown">
                <a href="#" className="li-color">Gallery ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="li-color">Photos</a></li>
                  <li><a href="#" className="li-color">Videos</a></li>
                </ul>
              </li>

              <li><a href="#" className="li-color">Curriculum</a></li>

              {/* ✅ LOGIN MENU */}
              <li className="dropdown">
                <a href="#" className="li-color">Login ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="li-color">Admin</a></li>
                  <li><a href="#" className="li-color">Staff</a></li>
                  <li><a href="#" className="li-color">Student</a></li>

                  {/* <li>
                    <Link to="/admin-login" className="li-color">Admin</Link>
                  </li>
                  <li>
                    <Link to="/staff-login" className="li-color">Staff</Link>
                  </li>
                  <li>
                    <Link to="/student-login" className="li-color">Student</Link>
                  </li> */}
                
                </ul>
              </li>

            </ul>
          </div>
        </nav>
  )
}

export default Header