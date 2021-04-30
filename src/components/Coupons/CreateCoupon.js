import React from "react";
import { Link, withRouter } from "react-router-dom";
import Validate from "../../utils/validation";
import api from "../../apis/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

class CreateCoupon extends React.Component {
  state = {
    activePanel: "general",
    rolesArray: [],
    rolesArray2: [],
    categoryOptions: [],
    data: {
      name: "",
      code: "",
      discountType: "fixed",
      value: "",
      freeshipping: false,
      status: "",
      usageLimitPerCoupon: "",
      usageLimitPerCustomer: "",
      startDate: "",
      endDate: "",
      minimumSpend: "0",
      maximumSpend: "",
      
    },
    productIds: [],
    excludedProductIds: [],
    categoryIds: [],
    excludedCategoryIds: [],
    errors: [],
  };
  componentDidMount() {
    if (this.props.edit == "true") {
      const url = "/coupon/get/" + this.props.match.params.id;
      api.get(url).then(res=>{
        const {data} = this.state
        const { rolesArray} = this.state
        const {rolesArray2} = this.state
        data.name = res.data.data.name
        data.code = res.data.data.code
        data.discountType = res.data.data.discountType
        data.value = res.data.data.value
        data.freeshipping = res.data.data.freeshipping
        data.startDate = res.data.data.startDate != null?res.data.data.startDate.substr(0,10): ""
        data.endDate = res.data.data.endDate !=null? res.data.data.endDate.substr(0,10):""
        data.status = res.data.data.status
        data.minimumSpend = res.data.data.minimumSpend
        data.maximumSpend = res.data.data.maximumSpend
        data.usageLimitPerCoupon = res.data.data.usageLimitPerCoupon
        data.usageLimitPerCustomer = res.data.data.usageLimitPerCustomer
        rolesArray.push(res.data.data.categories.toString()) 
        rolesArray2.push(res.data.data.excludedCategories.toString())
        this.setState({data})
        this.setState({rolesArray})
        this.setState({rolesArray2})
      }).catch(err=>{
        console.log("error fetching coupon")
      })
     
    }
    const {categoryOptions} = this.state
    const addToCategories = (x, sub) =>{
      let tmp = {}
      let name = ""
      for(var i = 0; i < sub.length; i++){
        name+="| - - "
      }
      tmp['label'] = name+ x.name
      tmp['value'] = x._id
      categoryOptions.push(tmp)
      if(x.childrenCategory.length > 0){
        sub.push("sub")
        x.childrenCategory.forEach(y=>{
          addToCategories(y, sub)
        })      
      }else{
        return
      }
      
    }

     api.get('/category/get').then(res=>{
      res.data.data.forEach(val=>{
        addToCategories(val, []) 
      })
    }).catch((err)=>{
      console.log(err)
    })
    this.setState({categoryOptions})
  }
  setCategoryArray1 = (val) => {
        const { rolesArray } = this.state;
        rolesArray.push(val);
        var n = rolesArray.length;
        var {categoryIds} = this.state
        categoryIds = rolesArray[n - 1].split(",") 
        this.setState({ rolesArray });
        this.setState({ categoryIds });
  };
  setCategoryArray2 = (val) => {
    const { rolesArray2 } = this.state;
    rolesArray2.push(val);
    var n = rolesArray2.length;
    var {excludedCategoryIds} = this.state
    excludedCategoryIds = rolesArray2[n - 1].split(",") 
    this.setState({ rolesArray2 });
    this.setState({ excludedCategoryIds });
  }
  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };
  handleSubmit = () => {
    const { errors } = this.state;
    const { data } = this.state;
    if (!errors.includes("name") && !Validate.validateNotEmpty(data["name"])) {
      errors.push("name");
      this.setState({ errors });
    } else if (
      errors.includes("name") &&
      Validate.validateNotEmpty(data["name"])
    ) {
      errors.splice(errors.indexOf("name"), 1);
      this.setState({ errors });
    }
    if (!errors.includes("code") && !Validate.validateNotEmpty(data["code"])) {
      errors.push("code");
      this.setState({ errors });
    } else if (
      errors.includes("code") &&
      Validate.validateNotEmpty(data["code"])
    ) {
      errors.splice(errors.indexOf("code"), 1);
      this.setState({ errors });
    }

    if (!Validate.validateNotEmpty(this.state.errors)) {
      if (this.props.edit == "true") {
        api
          .put("/coupon", { data: data, _id: this.props.match.params.id, productIds: this.state.productIds, excludedProductIds: this.state.excludedProductIds, categoryIds: this.state.categoryIds, excludedCategoryIds: this.state.excludedCategoryIds,  requiredPermission: "Edit Coupons" })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("error updating brand");
          });
      } else {
        api
          .post("/coupon", { data: data, productIds: this.state.productIds, excludedProductIds: this.state.excludedProductIds, categoryIds: this.state.categoryIds, excludedCategoryIds: this.state.excludedCategoryIds,  requiredPermission: "Create Coupons" })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("error posting coupon");
          });
      }
    } else {
      console.log(this.state.errors);
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
                  htmlFor="name"
                  className="col-md-3 control-label text-left"
                >
                  Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="name"
                    className="form-control "
                    type="text"
                    value={this.state.data.name}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Code<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="code"
                    className="form-control "
                    type="text"
                    value={this.state.data.code}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Discount Type
                </label>
                <div className="col-md-9">
                  <select
                    name="discountType"
                    className="form-control custom-select-black "
                    value={this.state.data.discountType}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  >
                    <option value="fixed">Fixed</option>
                    <option value="percent">Percent</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Value
                </label>
                <div className="col-md-9">
                  <input
                    name="value"
                    className="form-control "
                    type="number"
                    value={this.state.data.value}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="free_shipping"
                  className="col-md-3 control-label text-left"
                >
                  Free Shipping
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    
                    <input
                      type="checkbox"
                      name="freeshipping"
                      id="free_shipping"
                      checked={this.state.data.freeshipping}
                      onChange={()=>{
                        const {data} = this.state
                        data.freeshipping = !this.state.data.freeshipping
                        this.setState({data})
                      }}
                    />
                    <label htmlFor="free_shipping">Allow free shipping</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="start_date"
                  className="col-md-3 control-label text-left"
                >
                  Start date
                </label>
                <div className="col-md-9">
                  <input
                    name="startDate"
                    className="form-control "
                    type="date"
                    value={this.state.data.startDate}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  End date
                </label>
                <div className="col-md-9">
                  <input
                    name="endDate"
                    className="form-control"
                    type="date"
                    value={this.state.data.endDate}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="is_active"
                  className="col-md-3 control-label text-left"
                >
                  Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="status"
                      id="is_active"
                      checked={this.state.data.status}
                      onChange={()=>{
                        const {data} = this.state
                        data.status = !this.state.data.status
                        this.setState({data})
                      }}
                    />
                    <label htmlFor="is_active">Enable the coupon</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "usageRestrictions") {
      return (
        <div className="tab-pane fade in active" id="usage_restrictions">
          <h3 className="tab-content-title">Usage Restrictions</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="minimum_spend"
                  className="col-md-3 control-label text-left"
                >
                  Minimum Spend
                </label>
                <div className="col-md-9">
                  <input
                    name="minimumSpend"
                    className="form-control "
                    min="0"
                    value={this.state.data.minimumSpend}
                    type="number"
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="maximum_spend"
                  className="col-md-3 control-label text-left"
                >
                  Maximum Spend
                </label>
                <div className="col-md-9">
                  <input
                    name="maximumSpend"
                    className="form-control "
                    min="0"
                    type="number"
                    value={this.state.data.maximumSpend != null? this.state.data.maximumSpend: ""}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Products
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control custom-select-black selectize prevent-creation"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Exclude Products
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control custom-select-black selectize prevent-creation"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Categories
                </label>
                <div className="col-md-9">
                  <MultiSelect
                    onChange={this.setCategoryArray1}
                    options={this.state.categoryOptions}
                    defaultValue={this.state.rolesArray[this.state.rolesArray.length-1]}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Exclude Categories
                </label>
                <div className="col-md-9">
                  <MultiSelect
                    onChange={this.setCategoryArray2}
                    options={this.state.categoryOptions}
                    defaultValue={this.state.rolesArray2[this.state.rolesArray.length-1]}
                  />
                </div>
              </div>
              </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "usageLimits") {
      return (
        <div className="tab-pane fade in active" id="usage_limits">
          <h3 className="tab-content-title">Usage Limits</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="usage_limit_per_coupon"
                  className="col-md-3 control-label text-left"
                >
                  Usage Limit Per Coupon
                </label>
                <div className="col-md-9">
                  <input
                    name="usageLimitPerCoupon"
                    className="form-control "
                    type="number"
                    min="0"
                    value={this.state.data.usageLimitPerCoupon}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="usage_limit_per_customer"
                  className="col-md-3 control-label text-left"
                >
                  Usage Limit Per Customer
                </label>
                <div className="col-md-9">
                  <input
                    name="usageLimitPerCustomer"
                    className="form-control "
                    type="number"
                    min="0"
                    value={this.state.data.usageLimitPerCustomer}
                    onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}

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
          {this.props.edit == "true"? <h3>Edit Coupon</h3>: <h3>Create Coupon</h3>}
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/coupons">Coupons</Link>
            </li>
            <li className="active">Create coupon</li>
          </ol>
        </section>
        <section className="content">
          <form className="form-horizontal">
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group" id="BrandTabs">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a>Coupon Information</a>
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
                            <li
                              className={
                                this.state.activePanel == "usageRestrictions"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({
                                  activePanel: "usageRestrictions",
                                });
                              }}
                            >
                              <a data-toggle="tab">Usage Restrictions</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "usageLimits"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "usageLimits" });
                              }}
                            >
                              <a data-toggle="tab">Usage Limits</a>
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

export default withRouter(CreateCoupon);