import React from "react";
import "./login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="bg-blue">
          <div className="reflection" />
        </div>
        <div className="form-inner clearfix">
          <h3 className="text-center">FleetCart</h3>
          <form
            method="POST"
            action="#"
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="GN6h3SWdOEM7GJ3IludBfgE13rOE6VZZ0pHus17c"
            />
            <div className="form-group">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email"
                autoFocus
              />
              <div className="input-icon">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password<span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
              <div className="input-icon">
                <i className="fa fa-lock" aria-hidden="true" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" data-loading>
              Login
            </button>
            <div className="clearfix" />
            <div className="checkbox pull-left">
              <input type="hidden" name="remember_me" defaultValue={0} />
              <input
                type="checkbox"
                name="remember_me"
                defaultValue={1}
                id="remember-me"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link to="/reset-password" className="text-center pull-right">
              forgot password?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
