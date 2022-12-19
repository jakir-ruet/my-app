import React from "react";
import logo from '../app/logo.svg';

function Header() {
   return (
      <header className="app-header">
        <nav className="navbar bg-dark">
          <div className="container">
            <a className="navbar-brand app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="logo" width="65" height="65" className="d-inline-block app-logo"/>
              <span className='app-name'>React Learning</span>
            </a>
          </div>
       </nav>
       
      </header>
   )
}
export default Header;