import React from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../../utils/session";
import api from "../../../apis/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

class CreateTag extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Create Tag</h3>
          <ol className="breadcrumb">
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/tags'>Tags</Link>
            </li>
            <li className="active">Create Tag</li>
          </ol>
        </section>
        <section className="content">
          <form
            method="POST"
            action="https://fleetcart.envaysoft.com/en/admin/tags"
            className="form-horizontal"
            id="tag-create-form"
            noValidate
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="b170oSWcVkOhNqbqEGbpocZMzs0zzMACrNxeW4ub"
            />
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group" id="TagTabs">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a>Tag Information</a>
                        </h4>
                      </div>
                      <div
                        id="tag_information"
                        className="panel-collapse collapse in"
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li className="active ">
                              <a href="#general" data-toggle="tab">
                                General
                              </a>
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
                    <div className="tab-pane fade in active" id="general">
                      <h3 className="tab-content-title">General</h3>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="form-group">
                            <label
                              htmlFor="name"
                              className="col-md-3 control-label text-left"
                            >
                              Name<span className="m-l-5 text-red">*</span>
                            </label>
                            <div className="col-md-9">
                              <input
                                name="name"
                                className="form-control "
                                id="name"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-offset-2 col-md-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          data-loading
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
      </React.Fragment>
    );
  }
}
export default CreateTag;
