import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

class CreateUser extends React.Component {
  state = {
    activePanel: "account",
    dropdownActive: false,
    data:{
      "Email": "",
      "Password": "",
      "First Name": "",
      "Last Name": "",    
    },
    "first name": "hel"
  };
  // changeState=(name,value)=>
  // { const {data}=this.state;
  // data[name]=value
  //     this.setState({data})
  // }
  componentDidMount(){
    // console.log(this.state['first name'])
    // const {data} = this.state;
    // data["First Name"] = "vidhi"
    // this.setState({data})
  
    // console.log(this.state)
  }
  tabContentToggle = () => {
    if (this.state.activePanel == "account") {
      return (
        <div className="tab-pane fade in active" id="account">
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
                    type="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="roles[]"
                  className="col-md-3 control-label text-left"
                >
                  Roles<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="roles[]"
                    className="form-control custom-select-black selectize prevent-creation"
                    id="roles[]"
                    multiple={1}
                    style={{display: "none"}}
                  >
                    <option value={1}>Admin</option>
                    <option value={2}>Customer</option>
                  </select>
                  <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                    <div  className={this.state.dropdownActive?"selectize-input items not-full has-options has-items focus input-active dropdown-active": "selectize-input items not-full has-options has-items"} >
                      <div className="item" data-value={2}>
                        Customer
                        <a
                          
                          className="remove"
                          // tabIndex={-1}
                          title="Remove"
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={1}>
                        Admin
                        <a
                          
                          className="remove"
                          // tabIndex={-1}
                          title="Remove"
                        >
                          ×
                        </a>
                      </div>
                      <input
                        type="select-multiple"
                        autoComplete="off"
                        // tabIndex
                        id="roles[]-selectized"
                        style={{
                          width: 4,
                          opacity: 1,
                          position: "relative",
                          left: 0,
                        }}
                      />
                    </div>
                    <div
                      className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                      
                      style={this.state.dropdownActive?{display: "block",
                      visibility: "visible",
                      width: "207.588px",
                      top: 40,
                      left: 0,}:{display: "none",
                      visibility: "visible",
                      width: "207.588px",
                      top: 40,
                      left: 0,}}
                    >
                      <div className="selectize-dropdown-content">
                        <div
                          className="option selected"
                          data-selectable
                          data-value={1}
                        >
                          Admin
                        </div>
                        <div
                          className="option selected"
                          data-selectable
                          data-value={2}
                        >
                          Customer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className="col-md-3 control-label text-left"
                >
                  Password<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="password"
                    className="form-control "
                    id="password"
                    type="password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="password_confirmation"
                  className="col-md-3 control-label text-left"
                >
                  Confirm Password<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="password_confirmation"
                    className="form-control "
                    id="password_confirmation"
                    type="password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "permissions") {
      return (
        <div className="tab-pane fade in active" id="permissions">
          <h3 className="tab-content-title">Permissions</h3>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="btn-group permission-parent-actions pull-right">
                <button type="button" className="btn btn-default allow-all">
                  Allow all
                </button>
                <button type="button" className="btn btn-default deny-all">
                  Deny all
                </button>
                <button type="button" className="btn btn-default inherit-all">
                  Inherit all
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Attribute</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.attributes</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Attribute
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attributes-index-inherit"
                                    name="permissions[admin.attributes.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attributes-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attributes-index-deny"
                                    name="permissions[admin.attributes.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attributes-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attributes-index-allow"
                                    name="permissions[admin.attributes.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attributes-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Attribute
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attributes-create-inherit"
                                    name="permissions[admin.attributes.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attributes-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attributes-create-deny"
                                    name="permissions[admin.attributes.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attributes-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attributes-create-allow"
                                    name="permissions[admin.attributes.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attributes-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Attribute
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attributes-edit-inherit"
                                    name="permissions[admin.attributes.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attributes-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attributes-edit-deny"
                                    name="permissions[admin.attributes.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attributes-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attributes-edit-allow"
                                    name="permissions[admin.attributes.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attributes-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Attribute
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attributes-destroy-inherit"
                                    name="permissions[admin.attributes.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attributes-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attributes-destroy-deny"
                                    name="permissions[admin.attributes.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attributes-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attributes-destroy-allow"
                                    name="permissions[admin.attributes.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attributes-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.attribute_sets</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Attribute Set
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attribute_sets-index-inherit"
                                    name="permissions[admin.attribute_sets.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attribute_sets-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attribute_sets-index-deny"
                                    name="permissions[admin.attribute_sets.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attribute_sets-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attribute_sets-index-allow"
                                    name="permissions[admin.attribute_sets.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attribute_sets-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Attribute Set
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attribute_sets-create-inherit"
                                    name="permissions[admin.attribute_sets.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attribute_sets-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attribute_sets-create-deny"
                                    name="permissions[admin.attribute_sets.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attribute_sets-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attribute_sets-create-allow"
                                    name="permissions[admin.attribute_sets.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attribute_sets-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Attribute Set
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attribute_sets-edit-inherit"
                                    name="permissions[admin.attribute_sets.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attribute_sets-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attribute_sets-edit-deny"
                                    name="permissions[admin.attribute_sets.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attribute_sets-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attribute_sets-edit-allow"
                                    name="permissions[admin.attribute_sets.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attribute_sets-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Attribute Set
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.attribute_sets-destroy-inherit"
                                    name="permissions[admin.attribute_sets.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.attribute_sets-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.attribute_sets-destroy-deny"
                                    name="permissions[admin.attribute_sets.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.attribute_sets-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.attribute_sets-destroy-allow"
                                    name="permissions[admin.attribute_sets.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.attribute_sets-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Brand</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.brands</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Brand
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.brands-index-inherit"
                                    name="permissions[admin.brands.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.brands-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.brands-index-deny"
                                    name="permissions[admin.brands.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.brands-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.brands-index-allow"
                                    name="permissions[admin.brands.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.brands-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Brand
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.brands-create-inherit"
                                    name="permissions[admin.brands.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.brands-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.brands-create-deny"
                                    name="permissions[admin.brands.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.brands-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.brands-create-allow"
                                    name="permissions[admin.brands.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.brands-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Brand</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.brands-edit-inherit"
                                    name="permissions[admin.brands.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.brands-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.brands-edit-deny"
                                    name="permissions[admin.brands.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.brands-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.brands-edit-allow"
                                    name="permissions[admin.brands.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.brands-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Brand
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.brands-destroy-inherit"
                                    name="permissions[admin.brands.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.brands-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.brands-destroy-deny"
                                    name="permissions[admin.brands.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.brands-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.brands-destroy-allow"
                                    name="permissions[admin.brands.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.brands-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Category</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.categories</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Categories
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.categories-index-inherit"
                                    name="permissions[admin.categories.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.categories-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.categories-index-deny"
                                    name="permissions[admin.categories.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.categories-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.categories-index-allow"
                                    name="permissions[admin.categories.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.categories-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Categories
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.categories-create-inherit"
                                    name="permissions[admin.categories.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.categories-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.categories-create-deny"
                                    name="permissions[admin.categories.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.categories-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.categories-create-allow"
                                    name="permissions[admin.categories.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.categories-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Categories
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.categories-edit-inherit"
                                    name="permissions[admin.categories.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.categories-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.categories-edit-deny"
                                    name="permissions[admin.categories.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.categories-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.categories-edit-allow"
                                    name="permissions[admin.categories.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.categories-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Categories
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.categories-destroy-inherit"
                                    name="permissions[admin.categories.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.categories-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.categories-destroy-deny"
                                    name="permissions[admin.categories.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.categories-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.categories-destroy-allow"
                                    name="permissions[admin.categories.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.categories-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Coupon</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.coupons</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Coupons
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.coupons-index-inherit"
                                    name="permissions[admin.coupons.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.coupons-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.coupons-index-deny"
                                    name="permissions[admin.coupons.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.coupons-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.coupons-index-allow"
                                    name="permissions[admin.coupons.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.coupons-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Coupons
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.coupons-create-inherit"
                                    name="permissions[admin.coupons.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.coupons-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.coupons-create-deny"
                                    name="permissions[admin.coupons.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.coupons-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.coupons-create-allow"
                                    name="permissions[admin.coupons.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.coupons-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Coupons
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.coupons-edit-inherit"
                                    name="permissions[admin.coupons.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.coupons-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.coupons-edit-deny"
                                    name="permissions[admin.coupons.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.coupons-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.coupons-edit-allow"
                                    name="permissions[admin.coupons.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.coupons-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Coupons
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.coupons-destroy-inherit"
                                    name="permissions[admin.coupons.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.coupons-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.coupons-destroy-deny"
                                    name="permissions[admin.coupons.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.coupons-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.coupons-destroy-allow"
                                    name="permissions[admin.coupons.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.coupons-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Currency</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.currency_rates</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Currency Rates
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.currency_rates-index-inherit"
                                    name="permissions[admin.currency_rates.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.currency_rates-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.currency_rates-index-deny"
                                    name="permissions[admin.currency_rates.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.currency_rates-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.currency_rates-index-allow"
                                    name="permissions[admin.currency_rates.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.currency_rates-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Currency Rates
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.currency_rates-edit-inherit"
                                    name="permissions[admin.currency_rates.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.currency_rates-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.currency_rates-edit-deny"
                                    name="permissions[admin.currency_rates.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.currency_rates-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.currency_rates-edit-allow"
                                    name="permissions[admin.currency_rates.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.currency_rates-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>FlashSale</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.flash_sales</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Flash Sale
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.flash_sales-index-inherit"
                                    name="permissions[admin.flash_sales.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.flash_sales-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.flash_sales-index-deny"
                                    name="permissions[admin.flash_sales.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.flash_sales-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.flash_sales-index-allow"
                                    name="permissions[admin.flash_sales.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.flash_sales-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Flash Sale
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.flash_sales-create-inherit"
                                    name="permissions[admin.flash_sales.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.flash_sales-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.flash_sales-create-deny"
                                    name="permissions[admin.flash_sales.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.flash_sales-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.flash_sales-create-allow"
                                    name="permissions[admin.flash_sales.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.flash_sales-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Flash Sale
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.flash_sales-edit-inherit"
                                    name="permissions[admin.flash_sales.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.flash_sales-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.flash_sales-edit-deny"
                                    name="permissions[admin.flash_sales.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.flash_sales-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.flash_sales-edit-allow"
                                    name="permissions[admin.flash_sales.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.flash_sales-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Flash Sale
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.flash_sales-destroy-inherit"
                                    name="permissions[admin.flash_sales.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.flash_sales-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.flash_sales-destroy-deny"
                                    name="permissions[admin.flash_sales.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.flash_sales-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.flash_sales-destroy-allow"
                                    name="permissions[admin.flash_sales.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.flash_sales-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Import</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.importer</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Import
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.importer-index-inherit"
                                    name="permissions[admin.importer.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.importer-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.importer-index-deny"
                                    name="permissions[admin.importer.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.importer-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.importer-index-allow"
                                    name="permissions[admin.importer.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.importer-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Import
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.importer-create-inherit"
                                    name="permissions[admin.importer.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.importer-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.importer-create-deny"
                                    name="permissions[admin.importer.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.importer-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.importer-create-allow"
                                    name="permissions[admin.importer.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.importer-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Media</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.media</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Media
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.media-index-inherit"
                                    name="permissions[admin.media.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.media-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.media-index-deny"
                                    name="permissions[admin.media.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.media-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.media-index-allow"
                                    name="permissions[admin.media.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.media-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Media
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.media-create-inherit"
                                    name="permissions[admin.media.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.media-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.media-create-deny"
                                    name="permissions[admin.media.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.media-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.media-create-allow"
                                    name="permissions[admin.media.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.media-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Media
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.media-destroy-inherit"
                                    name="permissions[admin.media.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.media-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.media-destroy-deny"
                                    name="permissions[admin.media.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.media-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.media-destroy-allow"
                                    name="permissions[admin.media.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.media-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Menu</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.menus</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Menus
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menus-index-inherit"
                                    name="permissions[admin.menus.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menus-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menus-index-deny"
                                    name="permissions[admin.menus.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menus-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menus-index-allow"
                                    name="permissions[admin.menus.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menus-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Menus
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menus-create-inherit"
                                    name="permissions[admin.menus.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menus-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menus-create-deny"
                                    name="permissions[admin.menus.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menus-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menus-create-allow"
                                    name="permissions[admin.menus.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menus-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Menus</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menus-edit-inherit"
                                    name="permissions[admin.menus.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menus-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menus-edit-deny"
                                    name="permissions[admin.menus.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menus-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menus-edit-allow"
                                    name="permissions[admin.menus.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menus-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Menus
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menus-destroy-inherit"
                                    name="permissions[admin.menus.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menus-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menus-destroy-deny"
                                    name="permissions[admin.menus.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menus-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menus-destroy-allow"
                                    name="permissions[admin.menus.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menus-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.menu_items</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Menu Items
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menu_items-index-inherit"
                                    name="permissions[admin.menu_items.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menu_items-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menu_items-index-deny"
                                    name="permissions[admin.menu_items.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menu_items-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menu_items-index-allow"
                                    name="permissions[admin.menu_items.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menu_items-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Menu Items
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menu_items-create-inherit"
                                    name="permissions[admin.menu_items.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menu_items-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menu_items-create-deny"
                                    name="permissions[admin.menu_items.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menu_items-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menu_items-create-allow"
                                    name="permissions[admin.menu_items.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menu_items-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Menu Items
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menu_items-edit-inherit"
                                    name="permissions[admin.menu_items.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menu_items-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menu_items-edit-deny"
                                    name="permissions[admin.menu_items.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menu_items-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menu_items-edit-allow"
                                    name="permissions[admin.menu_items.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menu_items-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Menu Items
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.menu_items-destroy-inherit"
                                    name="permissions[admin.menu_items.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.menu_items-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.menu_items-destroy-deny"
                                    name="permissions[admin.menu_items.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.menu_items-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.menu_items-destroy-allow"
                                    name="permissions[admin.menu_items.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.menu_items-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Option</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.options</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Options
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.options-index-inherit"
                                    name="permissions[admin.options.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.options-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.options-index-deny"
                                    name="permissions[admin.options.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.options-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.options-index-allow"
                                    name="permissions[admin.options.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.options-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Options
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.options-create-inherit"
                                    name="permissions[admin.options.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.options-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.options-create-deny"
                                    name="permissions[admin.options.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.options-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.options-create-allow"
                                    name="permissions[admin.options.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.options-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Options
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.options-edit-inherit"
                                    name="permissions[admin.options.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.options-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.options-edit-deny"
                                    name="permissions[admin.options.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.options-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.options-edit-allow"
                                    name="permissions[admin.options.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.options-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Options
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.options-destroy-inherit"
                                    name="permissions[admin.options.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.options-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.options-destroy-deny"
                                    name="permissions[admin.options.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.options-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.options-destroy-allow"
                                    name="permissions[admin.options.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.options-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Order</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.orders</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Order
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.orders-index-inherit"
                                    name="permissions[admin.orders.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.orders-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.orders-index-deny"
                                    name="permissions[admin.orders.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.orders-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.orders-index-allow"
                                    name="permissions[admin.orders.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.orders-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Show Order</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.orders-show-inherit"
                                    name="permissions[admin.orders.show]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.orders-show-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.orders-show-deny"
                                    name="permissions[admin.orders.show]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.orders-show-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.orders-show-allow"
                                    name="permissions[admin.orders.show]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.orders-show-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Order</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.orders-edit-inherit"
                                    name="permissions[admin.orders.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.orders-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.orders-edit-deny"
                                    name="permissions[admin.orders.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.orders-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.orders-edit-allow"
                                    name="permissions[admin.orders.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.orders-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Page</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.pages</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Pages
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.pages-index-inherit"
                                    name="permissions[admin.pages.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.pages-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.pages-index-deny"
                                    name="permissions[admin.pages.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.pages-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.pages-index-allow"
                                    name="permissions[admin.pages.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.pages-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Pages
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.pages-create-inherit"
                                    name="permissions[admin.pages.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.pages-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.pages-create-deny"
                                    name="permissions[admin.pages.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.pages-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.pages-create-allow"
                                    name="permissions[admin.pages.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.pages-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Pages</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.pages-edit-inherit"
                                    name="permissions[admin.pages.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.pages-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.pages-edit-deny"
                                    name="permissions[admin.pages.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.pages-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.pages-edit-allow"
                                    name="permissions[admin.pages.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.pages-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Pages
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.pages-destroy-inherit"
                                    name="permissions[admin.pages.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.pages-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.pages-destroy-deny"
                                    name="permissions[admin.pages.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.pages-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.pages-destroy-allow"
                                    name="permissions[admin.pages.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.pages-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Product</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.products</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Products
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.products-index-inherit"
                                    name="permissions[admin.products.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.products-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.products-index-deny"
                                    name="permissions[admin.products.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.products-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.products-index-allow"
                                    name="permissions[admin.products.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.products-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Products
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.products-create-inherit"
                                    name="permissions[admin.products.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.products-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.products-create-deny"
                                    name="permissions[admin.products.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.products-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.products-create-allow"
                                    name="permissions[admin.products.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.products-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Products
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.products-edit-inherit"
                                    name="permissions[admin.products.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.products-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.products-edit-deny"
                                    name="permissions[admin.products.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.products-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.products-edit-allow"
                                    name="permissions[admin.products.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.products-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Products
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.products-destroy-inherit"
                                    name="permissions[admin.products.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.products-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.products-destroy-deny"
                                    name="permissions[admin.products.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.products-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.products-destroy-allow"
                                    name="permissions[admin.products.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.products-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Report</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.reports</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Reports
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.reports-index-inherit"
                                    name="permissions[admin.reports.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.reports-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.reports-index-deny"
                                    name="permissions[admin.reports.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.reports-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.reports-index-allow"
                                    name="permissions[admin.reports.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.reports-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Review</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.reviews</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Reviews
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.reviews-index-inherit"
                                    name="permissions[admin.reviews.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.reviews-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.reviews-index-deny"
                                    name="permissions[admin.reviews.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.reviews-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.reviews-index-allow"
                                    name="permissions[admin.reviews.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.reviews-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Reviews
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.reviews-edit-inherit"
                                    name="permissions[admin.reviews.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.reviews-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.reviews-edit-deny"
                                    name="permissions[admin.reviews.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.reviews-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.reviews-edit-allow"
                                    name="permissions[admin.reviews.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.reviews-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Reviews
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.reviews-destroy-inherit"
                                    name="permissions[admin.reviews.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.reviews-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.reviews-destroy-deny"
                                    name="permissions[admin.reviews.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.reviews-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.reviews-destroy-allow"
                                    name="permissions[admin.reviews.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.reviews-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Setting</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.settings</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Settings
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.settings-edit-inherit"
                                    name="permissions[admin.settings.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.settings-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.settings-edit-deny"
                                    name="permissions[admin.settings.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.settings-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.settings-edit-allow"
                                    name="permissions[admin.settings.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.settings-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Slider</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.sliders</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Slider
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.sliders-index-inherit"
                                    name="permissions[admin.sliders.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.sliders-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.sliders-index-deny"
                                    name="permissions[admin.sliders.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.sliders-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.sliders-index-allow"
                                    name="permissions[admin.sliders.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.sliders-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Slider
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.sliders-create-inherit"
                                    name="permissions[admin.sliders.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.sliders-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.sliders-create-deny"
                                    name="permissions[admin.sliders.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.sliders-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.sliders-create-allow"
                                    name="permissions[admin.sliders.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.sliders-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Slider
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.sliders-edit-inherit"
                                    name="permissions[admin.sliders.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.sliders-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.sliders-edit-deny"
                                    name="permissions[admin.sliders.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.sliders-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.sliders-edit-allow"
                                    name="permissions[admin.sliders.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.sliders-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Slider
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.sliders-destroy-inherit"
                                    name="permissions[admin.sliders.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.sliders-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.sliders-destroy-deny"
                                    name="permissions[admin.sliders.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.sliders-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.sliders-destroy-allow"
                                    name="permissions[admin.sliders.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.sliders-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Tag</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.tags</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Index Tag</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.tags-index-inherit"
                                    name="permissions[admin.tags.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.tags-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.tags-index-deny"
                                    name="permissions[admin.tags.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.tags-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.tags-index-allow"
                                    name="permissions[admin.tags.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.tags-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Create Tag</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.tags-create-inherit"
                                    name="permissions[admin.tags.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.tags-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.tags-create-deny"
                                    name="permissions[admin.tags.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.tags-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.tags-create-allow"
                                    name="permissions[admin.tags.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.tags-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Tag</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.tags-edit-inherit"
                                    name="permissions[admin.tags.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.tags-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.tags-edit-deny"
                                    name="permissions[admin.tags.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.tags-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.tags-edit-allow"
                                    name="permissions[admin.tags.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.tags-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Delete Tag</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.tags-destroy-inherit"
                                    name="permissions[admin.tags.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.tags-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.tags-destroy-deny"
                                    name="permissions[admin.tags.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.tags-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.tags-destroy-allow"
                                    name="permissions[admin.tags.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.tags-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Tax</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.taxes</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Index Tax</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.taxes-index-inherit"
                                    name="permissions[admin.taxes.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.taxes-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.taxes-index-deny"
                                    name="permissions[admin.taxes.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.taxes-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.taxes-index-allow"
                                    name="permissions[admin.taxes.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.taxes-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Create Tax</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.taxes-create-inherit"
                                    name="permissions[admin.taxes.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.taxes-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.taxes-create-deny"
                                    name="permissions[admin.taxes.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.taxes-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.taxes-create-allow"
                                    name="permissions[admin.taxes.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.taxes-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Tax</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.taxes-edit-inherit"
                                    name="permissions[admin.taxes.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.taxes-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.taxes-edit-deny"
                                    name="permissions[admin.taxes.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.taxes-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.taxes-edit-allow"
                                    name="permissions[admin.taxes.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.taxes-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Delete Tax</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.taxes-destroy-inherit"
                                    name="permissions[admin.taxes.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.taxes-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.taxes-destroy-deny"
                                    name="permissions[admin.taxes.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.taxes-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.taxes-destroy-allow"
                                    name="permissions[admin.taxes.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.taxes-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Transaction</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.transactions</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Transaction
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.transactions-index-inherit"
                                    name="permissions[admin.transactions.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.transactions-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.transactions-index-deny"
                                    name="permissions[admin.transactions.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.transactions-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.transactions-index-allow"
                                    name="permissions[admin.transactions.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.transactions-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Translation</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.translations</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Translations
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.translations-index-inherit"
                                    name="permissions[admin.translations.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.translations-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.translations-index-deny"
                                    name="permissions[admin.translations.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.translations-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.translations-index-allow"
                                    name="permissions[admin.translations.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.translations-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Translations
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.translations-edit-inherit"
                                    name="permissions[admin.translations.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.translations-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.translations-edit-deny"
                                    name="permissions[admin.translations.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.translations-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.translations-edit-allow"
                                    name="permissions[admin.translations.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.translations-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>User</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.users</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Users
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.users-index-inherit"
                                    name="permissions[admin.users.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.users-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.users-index-deny"
                                    name="permissions[admin.users.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.users-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.users-index-allow"
                                    name="permissions[admin.users.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.users-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Users
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.users-create-inherit"
                                    name="permissions[admin.users.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.users-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.users-create-deny"
                                    name="permissions[admin.users.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.users-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.users-create-allow"
                                    name="permissions[admin.users.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.users-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Users</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.users-edit-inherit"
                                    name="permissions[admin.users.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.users-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.users-edit-deny"
                                    name="permissions[admin.users.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.users-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.users-edit-allow"
                                    name="permissions[admin.users.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.users-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Users
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.users-destroy-inherit"
                                    name="permissions[admin.users.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.users-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.users-destroy-deny"
                                    name="permissions[admin.users.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.users-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.users-destroy-allow"
                                    name="permissions[admin.users.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.users-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.roles</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Index Roles
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.roles-index-inherit"
                                    name="permissions[admin.roles.index]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.roles-index-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.roles-index-deny"
                                    name="permissions[admin.roles.index]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.roles-index-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.roles-index-allow"
                                    name="permissions[admin.roles.index]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.roles-index-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Create Roles
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.roles-create-inherit"
                                    name="permissions[admin.roles.create]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.roles-create-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.roles-create-deny"
                                    name="permissions[admin.roles.create]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.roles-create-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.roles-create-allow"
                                    name="permissions[admin.roles.create]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.roles-create-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">Edit Roles</span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.roles-edit-inherit"
                                    name="permissions[admin.roles.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.roles-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.roles-edit-deny"
                                    name="permissions[admin.roles.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.roles-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.roles-edit-allow"
                                    name="permissions[admin.roles.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.roles-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Delete Roles
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.roles-destroy-inherit"
                                    name="permissions[admin.roles.destroy]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.roles-destroy-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.roles-destroy-deny"
                                    name="permissions[admin.roles.destroy]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.roles-destroy-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.roles-destroy-allow"
                                    name="permissions[admin.roles.destroy]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.roles-destroy-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="col-md-12">
                <div className="row">
                  <div className="permission-parent-head clearfix">
                    <h3>Storefront</h3>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>admin.storefront</h4>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="btn-group permission-group-actions pull-right">
                            <button
                              type="button"
                              className="btn btn-default allow-all"
                            >
                              Allow all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default deny-all"
                            >
                              Deny all
                            </button>
                            <button
                              type="button"
                              className="btn btn-default inherit-all"
                            >
                              Inherit all
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="permission-row">
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              Edit Storefront Settings
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={0}
                                    id="admin.storefront-edit-inherit"
                                    name="permissions[admin.storefront.edit]"
                                    className="permission-inherit"
                                    defaultChecked
                                  />
                                  <label htmlFor="admin.storefront-edit-inherit">
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={-1}
                                    id="admin.storefront-edit-deny"
                                    name="permissions[admin.storefront.edit]"
                                    className="permission-deny"
                                  />
                                  <label htmlFor="admin.storefront-edit-deny">
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    id="admin.storefront-edit-allow"
                                    name="permissions[admin.storefront.edit]"
                                    className="permission-allow"
                                  />
                                  <label htmlFor="admin.storefront-edit-allow">
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Create User</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li className="active">Create User</li>
          </ol>
        </section>
        <section className="content">
          <form
            method="POST"
            action="#"
            className="form-horizontal"
            id="user-create-form"
            noValidate
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="PguwciObC6GOcbyK3kA42bPXpFmt7KTr8xNhNLdN"
            />
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group" id="UserTabs">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a>User Information</a>
                        </h4>
                      </div>
                      <div
                        id="user_information"
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
                                this.state.activePanel == "permissions"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "permissions" });
                              }}
                            >
                              <a data-toggle="tab">Permissions</a>
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

export default CreateUser;
