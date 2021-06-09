import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../apis/api";
import Validate from "../../../utils/validation";

class EditCurrency extends React.Component {
  state = {
    activePanel: "general",

    errors: [],
  };

  componentDidMount() {
 
  }

  handleSubmit = () => {
    const { errors } = this.state;
    const { data } = this.state;

    if (!errors.includes("taxClass") && !Validate.validateNotEmpty(data["taxClass"])) {
      errors.push("taxClass");
      this.setState({ errors });
    } else if (
      errors.includes("taxClass") &&
      Validate.validateNotEmpty(data["taxClass"])
    ) {
      errors.splice(errors.indexOf("taxClass"), 1);
      this.setState({ errors });
    }
   
    if (!Validate.validateNotEmpty(this.state.errors)) {
      
    } else {
      console.log(errors);
    }
  };
  tabContentToggle = () => {
    if (this.state.activePanel == "general") {
      return (
        <div className="tab-pane fade in active" >
          <h3 className="tab-content-title">General</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Rate<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="taxClass"
                    className="form-control "
                    type="text"
                    
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
          <h3>Edit Currency Rate</h3> 
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/currency-rates">Currency Rates</Link>
            </li>
              <li className="active">Edit Currency Rate</li>
            
          </ol>
        </section>
        <section className="content">
          <form className="form-horizontal">
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group" >
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a>Currency Rate Information</a>
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
                                this.state.activePanel == "general"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "general" });
                              }}
                            >
                              <a data-toggle="tab">General</a>
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
                      <div className="col-md-2 col-md-10">
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

export default withRouter(EditCurrency);
