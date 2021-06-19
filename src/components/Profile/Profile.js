import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../apis/api";
import { getUSerDetails } from "../../utils/local";
import { getUser } from "../../utils/session";
import Validate from "../../utils/validation";
import Loading from "../Loading";
import { toast } from 'react-toastify';
class Profile extends React.Component {
  state = {
    submitting: false,
    activePanel: "account",
    data: {
      "First Name": "",
      "Last Name": "",
      Email: "",
    },
    newPassword: "",
    confirmPassword: "",
    _id: "",
    errors: [],
  };

  async componentDidMount() {
    if(getUser()){
      await this.setState({_id: getUser()})
    }else if(getUSerDetails()){
     await this.setState({_id: getUSerDetails()})
    }
    const url = "users/get/"+ this.state._id;
    const {data} = this.state
    api.get(url).then(res=>{
      data["First Name"]=res.data.data["First Name"]
      data["Last Name"]=res.data.data["Last Name"]
      data.Email = res.data.data.Email
      this.setState({data})
    }).catch(err=>{
      console.log(err)
    })
  }

  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };

  handleSubmit = () => {
    const { errors } = this.state;
    const { data, newPassword, confirmPassword } = this.state;
    if (!errors.includes("First Name") && !Validate.validateNotEmpty(data["First Name"])) {
      errors.push("First Name");
      this.setState({ errors });
    } else if (
      errors.includes("First Name") &&
      Validate.validateNotEmpty(data["First Name"])
    ) {
      errors.splice(errors.indexOf("First Name"), 1);
      this.setState({ errors });
    }
    if (!errors.includes("Last Name") && !Validate.validateNotEmpty(data["Last Name"])) {
      errors.push("Last Name");
      this.setState({ errors });
    } else if (
      errors.includes("Last Name") &&
      Validate.validateNotEmpty(data["Last Name"])
    ) {
      errors.splice(errors.indexOf("Last Name"), 1);
      this.setState({ errors });
    }
    if (!errors.includes("Email") && !Validate.validateNotEmpty(data["Email"])) {
      errors.push("Email");
      this.setState({ errors });
    } else if (
      errors.includes("Email") &&
      Validate.validateNotEmpty(data["Email"])
    ) {
      errors.splice(errors.indexOf("Email"), 1);
      this.setState({ errors });
    }

    if(Validate.validateNotEmpty(newPassword) || Validate.validateNotEmpty(confirmPassword)){
      if(newPassword != confirmPassword && !errors.includes("password")){
        errors.push("password");
        this.setState({ errors });
      }else if(newPassword == confirmPassword && errors.includes("password")){
        errors.splice(errors.indexOf("password"), 1);
      this.setState({ errors });
      }
    }

    if (!Validate.validateNotEmpty(this.state.errors)) {
      console.log(this.state)
      this.setState({ submitting: true });
      api.put('/users', {data: data, _id: this.state._id, requiredPermission: "Edit User", newPassword: this.state.newPassword}).then(res=>{
        console.log(res)
        this.setState({submitting: false})
      }).catch(err=>{
        console.log(err.response.message)
        this.setState({submitting: false})
      })
    } else {
      console.log(errors);
    }
  };
  tabContentToggle = () => {
    if (this.state.activePanel == "account") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Account</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  First Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="First Name"
                    className="form-control "
                    type="text"
                    value={this.state.data["First Name"]}
                    onChange={(e)=>{
                      this.setVal(e.target.name, e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Last Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="Last Name"
                    className="form-control "
                    type="text"
                    value={this.state.data["Last Name"]}
                    onChange={(e)=>{
                      this.setVal(e.target.name, e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Email<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="Email"
                    className="form-control "
                    type="email"
                    value={this.state.data.Email}
                    onChange={(e)=>{
                      this.setVal(e.target.name, e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "newpass") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">New Password</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  New Password
                </label>
                <div className="col-md-9">
                  <input
                    name="password"
                    className="form-control "
                    type="password"
                    value={this.state.newPassword}
                    onChange={(e)=>{
                      this.setState({newPassword: e.target.value})
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Confirm New Password
                </label>
                <div className="col-md-9">
                  <input
                    name="password_confirmation"
                    className="form-control "
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={(e)=>{
                      this.setState({confirmPassword: e.target.value})
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Edit Profile</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li className="active">Edit Profile</li>
          </ol>
        </section>
        <section className="content">
          <form className="form-horizontal">
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a>Flash Sale Information</a>
                        </h4>
                      </div>
                      <div
                        id="brand_information"
                        className="panel-collapse collapse in"
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li
                              className={
                                this.state.activePanel == "account"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "account" });
                              }}
                            >
                              <a data-toggle="tab">Account</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "newpass"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "newpass" });
                              }}
                            >
                              <a data-toggle="tab">New Password</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="accordion-box-content">
                  <div className="tab-content clearfix">
                    {this.tabContentToggle()}
                    <div className="form-group">
                      <div
                        className="col-md-2 col-md-10"
                        style={{ display: "flex" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleSubmit();
                          }}
                        >
                          Save
                        </button>
                        <Loading show={this.state.submitting} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(Profile);
