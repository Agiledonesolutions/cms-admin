import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
import {getToken} from '../../utils/session'
import api from '../../apis/api'
import Validate from '../../utils/validation'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import PermissionGroup from './Roles/PermissionGroup'


class CreateUser extends React.Component {
  state = {
    activePanel: "account",
    dropdownActive: false,
    options: [],
    rolesArray: [],
    data: {
      "First Name": "",
      "Last Name": "",
      "Email": "",
      "Password": "",
      Permissions: [],
      roles: []
    },
    confirmPassword: "",
    requiredPermission: "Create User",
    errors: []
  };
  setRole = (val) => {
    const {rolesArray} =this.state
    const {data} = this.state
    rolesArray.push(val)
    var n = rolesArray.length
    data.roles = rolesArray[n-1].split(',')
    this.setState({rolesArray})
    this.setState({data})
  }
  setVal =(key, val, permName) => {
    const {data} = this.state
    if(key == "Permissions"){
      var flag = true;
      const {Permissions} = this.state.data
      console.log(Permissions)
      Permissions.map((perm, index)=>{
        if(perm['name'] == permName){
          Permissions.splice(perm, index)
          perm['value'] = val
          flag = false;
        }
      })
      if(flag){
        Permissions.push({name: permName, value: val})
      }
    }else{
      data[key] = val
    }
    this.setState({data})
  }

  handleSubmit = () =>{
    console.log(this.state.data)
  }

  componentDidMount(){
    const token = getToken()
    const {options} = this.state
    api.get('/roles/get').then(res=>{
      res.data.data.forEach(x=>{
        let tmp = {}
        tmp['label'] = x.Name
        tmp['value'] = x.Name
        tmp['_id'] = x._id
        options.push(tmp)

      })
    }).catch((err)=>{
      console.log(err)
    })
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
                  className="col-md-3 control-label text-left"
                >
                  First Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="First Name"
                    className="form-control "
                    type="text"
                    value={this.state.data['First Name']}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
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
                    value={this.state.data['Last Name']}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
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
                    value={this.state.data['Email']}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
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
               

      <MultiSelect
      onChange={this.setRole}
        options={this.state.options}
      />
                    </div>
                  </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Password<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="Password"
                    className="form-control "
                    type="password"
                    value={this.state.data['Password']}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Confirm Password<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="confirmPassword"
                    className="form-control "
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={(e)=>{this.setState({confirmPassword: e.target.value})}}
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
                <button type="button" className="btn btn-default allow-all"
                onClick={()=>{
                  const arr = document.querySelectorAll('[id $="-allow"]' )
                  for(var i = 0; i < arr.length; i++){
                    arr[i].click()
                  }
                }}>
                  Allow all
                </button>
                <button type="button" className="btn btn-default deny-all" onClick={()=>{
                  const arr = document.querySelectorAll('[id $="-deny"]' )
                  for(var i = 0; i < arr.length; i++){
                    arr[i].click()
                  }
                }}>
                  Deny all
                </button>
                <button type="button" className="btn btn-default inherit-all"
                onClick={()=>{
                  const arr = document.querySelectorAll('[id $="-inherit"]' )
                  for(var i = 0; i < arr.length; i++){
                    arr[i].click()
                  }
                }}>
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
              <PermissionGroup
                heading="admin.attributes"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Attributes"
                setVal = {this.setVal}
              />
              <PermissionGroup
                heading="admin.attribute_sets"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Attribute Set"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.brands"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Brand"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.categories"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Categories"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.coupons"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Coupons"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.currency_rates"
                attributes={["Index", "Edit"]}
                suffix="Currency Rates"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.flash_sales"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Flash Sales"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.importer"
                attributes={["Index", "Create"]}
                suffix="Import"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.media"
                attributes={["Index", "Create", "Delete"]}
                suffix="Media"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.menus"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Menus"
                setVal = {this.setVal}
              />
              <PermissionGroup
                heading="admin.menu_items"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Menu Items"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.options"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Options"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.orders"
                attributes={["Index", "Show", "Edit"]}
                suffix="Order"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.pages"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Pages"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.products"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Products"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.reports"
                attributes={["Index"]}
                suffix="Report"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.reviews"
                attributes={["Index", "Edit", "Delete"]}
                suffix="Review"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.settings"
                attributes={["Edit"]}
                suffix="Settings"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.sliders"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Slider"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.tags"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Tag"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.taxes"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Tax"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.transactions"
                attributes={["Index"]}
                suffix="Transaction"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.translations"
                attributes={["Index", "Edit"]}
                suffix="Translation"
                setVal = {this.setVal}
              />
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
              <PermissionGroup
                heading="admin.users"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Users"
                setVal = {this.setVal}
              />
              <PermissionGroup
                heading="admin.roles"
                attributes={["Index", "Create", "Edit", "Delete"]}
                suffix="Roles"
                setVal = {this.setVal}

              />
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
              <PermissionGroup
                heading="admin.storefront"
                attributes={["Edit"]}
                suffix="Storefront"
                setVal = {this.setVal}
              />
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
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
          <form className="form-horizontal">
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
                          onClick={(e)=>{
                            e.preventDefault()
                            this.handleSubmit()
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
      </React.Fragment>
    );
  }
}

export default CreateUser;
