import React, { useRef } from "react";
import { removeAuthToken } from "../../utils/local";
import {removeUserSession} from '../../utils/session'
import { Link } from "react-router-dom";


const Wrapper = (props) => {
  const dropdownref = useRef(null);

  const dropdownToggle = () => {
    dropdownref.current.classList.toggle("show");
  };
  const handleLogout = () =>{
    removeUserSession()
    removeAuthToken()
    window.location.href ='/'
  }
  return (
    <React.Fragment>
      <div className="wrapper" style={{ minHeight: 731 }}>
        <div className="content-wrapper">
          <nav className="navbar navbar-static-top clearfix">
            <ul className="nav navbar-nav clearfix">
              <li className="visit-store hidden-sm hidden-xs">
                <a href="http://ecommerce.coddedbrain.com">
                  <i className="fa fa-desktop" />
                  Visit Store
                </a>
              </li>
              <li className="dropdown top-nav-menu pull-right">
                <a
                  style={{ cursor: "pointer" }}
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  onClick={dropdownToggle}
                >
                  <i className="fa fa-user-circle-o" />
                  <span>CoddedBrain</span>
                </a>
                <ul className="dropdown-menu" ref={dropdownref}>
                  <li>
                    <Link to='/profile'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {props.children}

          <div id="notification-toast" />
        </div>
      </div>

      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <span>v2.0.8</span>
        </div>
        <a href="#" data-toggle="modal" data-target="#keyboard-shortcuts-modal">
          <i className="fa fa-keyboard-o" />
        </a>
        &nbsp;
        <span>
          Copyright © 2021{" "}
          <a href="https://envaysoft.com/fleetcart" target="_blank">
            FleetCart
          </a>
        </span>
      </footer>
    </React.Fragment>
  );
};
export default Wrapper;
