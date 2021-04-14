import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import api from '../../apis/api';
import Validate from '../../utils/validation'
import {setUserSession} from '../../utils/session'


class Login extends React.Component {
  state = {
    data: {
      Email: "",
      Password: ""
    },
    errors: []
  }
  setVal = (key, val) =>{
    const {data} = this.state
    data[key] = val;
    this.setState({data})
  }
  handleSubmit = () => {
    const {errors} = this.state
    const email = this.state.data["Email"]
    const password = this.state.data["Password"]
    if(!Validate.validateNotEmpty(email)){
      errors.push("Email")
      this.setState({errors})
    }
    if(!Validate.validateNotEmpty(password)){
      errors.push("Password")
      this.setState({errors})
    }
    if (
      !errors.includes("Email") &&
      !Validate.validateEmail(email) &&
      Validate.validateNotEmpty(email)
    ) {
      errors.push("Email");
      this.setState({ errors });
    } else if (
      errors.includes("Email") &&
      Validate.validateEmail(email) &&
      Validate.validateNotEmpty(email)
    ) {
      errors.splice(errors.indexOf("Email"), 1);
      this.setState({ errors });
    }
    if (
      errors.includes("Password") &&
      Validate.validateNotEmpty(password)
    ) {
      errors.splice(errors.indexOf("Password"), 1);
      this.setState({ errors });
    }

    console.log(this.state.errors)

    if(!Validate.validateNotEmpty(this.state.errors)){
      const {data} = this.state
      api.post('/users/login', {data: data}).then(async(res)=>{
        // console.log(res.data.data.token)
        await setUserSession(res.data.data.token)
        window.location.href='/dashboard'

      }).catch(error=>{
        if(error.response.status === 422){
          console.log("Wrong EMail or paass")
        }else if(error.response.status === 500){
          console.log("Something went wrong")
        }
      })
    } 
  }
  render(){
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="bg-blue">
          <div className="reflection" />
        </div>
        <div className="form-inner clearfix">
          <h3 className="text-center">FleetCart</h3>
          <form>
            <div className="form-group">
              <label htmlFor="Email">
                Email<span>*</span>
              </label>
              <input
                type="text"
                name="Email"
                className="form-control"
                placeholder="Email"
                onChange={(e)=>{
                  this.setVal(e.target.name, e.target.value)
                }}
              />
              <div className="input-icon">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Password">
                Password<span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="Password"
                placeholder="Password"
                onChange={(e)=>{
                  this.setVal(e.target.name, e.target.value)
                }}
              />
              <div className="input-icon">
                <i className="fa fa-lock" aria-hidden="true" />
              </div>
            </div>
            <button  className="btn btn-primary" data-loading onClick={(e)=>{
              e.preventDefault()
              this.handleSubmit()
            }}>
              Login
            </button>
            <div className="clearfix" />
            {/* <div className="checkbox pull-left">
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
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
  }
};
export default Login;
