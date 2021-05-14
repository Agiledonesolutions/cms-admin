import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../apis/api";
import Validate from "../../utils/validation";
import Loading from "../Loading";

class Profile extends React.Component {
  state = {
    submitting: false,
    activePanel: "account",

    errors: [],
  };

  componentDidMount() {}

  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };

  handleSubmit = () => {
    const { errors } = this.state;
    const { data } = this.state;
    // if (!errors.includes("campaignName") && !Validate.validateNotEmpty(data["campaignName"])) {
    //   errors.push("campaignName");
    //   this.setState({ errors });
    // } else if (
    //   errors.includes("campaignName") &&
    //   Validate.validateNotEmpty(data["campaignName"])
    // ) {
    //   errors.splice(errors.indexOf("campaignName"), 1);
    //   this.setState({ errors });
    // }

    console.log(this.state);
    if (!Validate.validateNotEmpty(this.state.errors)) {
      this.setState({ submitting: true });
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
                  htmlFor="first_name"
                  className="col-md-3 control-label text-left"
                >
                  First Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="first_name"
                    className="form-control "
                    id="first_name"
                    defaultValue="Demo"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="last_name"
                  className="col-md-3 control-label text-left"
                >
                  Last Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="last_name"
                    className="form-control "
                    id="last_name"
                    defaultValue="Admin"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="email"
                  className="col-md-3 control-label text-left"
                >
                  Email<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="email"
                    className="form-control "
                    id="email"
                    defaultValue="admin@email.com"
                    type="email"
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
                  htmlFor="password"
                  className="col-md-3 control-label text-left"
                >
                  New Password
                </label>
                <div className="col-md-9">
                  <input
                    name="password"
                    className="form-control "
                    id="password"
                    defaultValue
                    type="password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="password_confirmation"
                  className="col-md-3 control-label text-left"
                >
                  Confirm New Password
                </label>
                <div className="col-md-9">
                  <input
                    name="password_confirmation"
                    className="form-control "
                    id="password_confirmation"
                    defaultValue
                    type="password"
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
