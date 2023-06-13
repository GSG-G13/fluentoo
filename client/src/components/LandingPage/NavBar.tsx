/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import './index.css';
import React from 'react';

function NavBar() {
  return (
    <div>
      <header>

        <nav className="nav-bar">
          <div className="logo">Logo</div>
          <ul className="nav-ele">
            <li><a href="#">Home</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Messages</a></li>
            <li><a href="">Profile</a></li>

          </ul>
          <div className="sign-btn">
            <button className="signup-btn">SignUp</button>
            <button className="signin-btn">SignIn</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
