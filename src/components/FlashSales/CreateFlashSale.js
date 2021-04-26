import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../apis/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Validate from '../../utils/validation'

class CreateFlashSale extends React.Component {
  state = {
    activePanel: "products",
    data: {
      name: "",
      value: [""],
    },
    errors:[]
  };

   componentDidMount() {
    if(this.props.edit == "true"){
      const url = "/flashsales/get/" + this.props.match.params.id
      
    }
  }
  setValues = (idx, val) =>{
    const {data} = this.state
    data["value"][idx] = val
    this.setState({data})
  }

  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });  
  };
  handleAddRow = () => {
    const {data} =this.state
    data["value"].push("")
    this.setState({data})
  };
  handleRemoveSpecificRow = (idx)  => {
    const {data} = this.state
    data['value'].splice(idx, 1)
    this.setState({data})
  };
  handleSubmit = () => {
    const {errors} = this.state
    const {data} = this.state
    
    if (
      !errors.includes("name") &&
      !Validate.validateNotEmpty(data['name'])
    ) {
      errors.push("name");
      this.setState({ errors });
    } else if (
      errors.includes("name") &&
      Validate.validateNotEmpty(data['name'])
    ) {
      errors.splice(errors.indexOf("name"), 1);
      this.setState({ errors });
    }
    if (
      !errors.includes("attributeSetId") &&
      !Validate.validateNotEmpty(data['attributeSetId'])
    ) {
      errors.push("attributeSetId");
      this.setState({ errors });
    } else if (
      errors.includes("attributeSetId") &&
      Validate.validateNotEmpty(data['attributeSetId'])
    ) {
      errors.splice(errors.indexOf("attributeSetId"), 1);
      this.setState({ errors });
    }
    if(!Validate.validateNotEmpty(this.state.errors)){
    if(this.props.edit == "true"){
      api.put('/attribute', {data: this.state.data, _id: this.props.match.params.id, categoryIds: this.state.CategoryIds, requiredPermission: "Edit Attributes"}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log("error updating attri")
      })
    }else{
      api.post('/attribute', {data: this.state.data, categoryIds: this.state.CategoryIds, requiredPermission: "Create Attributes"}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log("error creating attribute")
      })
    }
  }else{
    console.log(errors)
  }

  };
  tabContentToggle = () => {
    if (this.state.activePanel == "settings") {
      return (
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
                    value={this.state.data.name}
                    type="text"
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "products") {
      return (
        <div className="tab-pane fade in active" id="values">
          <h3 className="tab-content-title">Values</h3>
               
                  {this.state.data.value.map((item, idx) => (
                    <div className="panel-wrap flash-sale" id="products-wrapper" key={idx}>
                    <div className="panel">
                      <div className="panel-header clearfix">
                        <span className="drag-icon pull-left">
                          <i className="fa"></i>
                          <i className="fa"></i>
                        </span>
                        Flash Sale Product
                        <button type="button" className="delete-product-panel btn pull-right" onClick={()=>this.handleRemoveSpecificRow(idx)}>
                          <i className="fa fa-times" />
                        </button>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label htmlFor="products-0-product-id-selectized">
                                Product<span className="m-l-5 text-red">*</span>
                              </label>
                              <input type="hidden" name="products[0][name]" className="form-control" id="products-0-name" defaultValue />
                              <select name="products[0][product_id]" className="selectize prevent-creation selectized" id="products-0-product-id" data-url="https://fleetcart.envaysoft.com/en/admin/products" tabIndex={-1} style={{display: 'none'}}><option value selected="selected" /></select><div className="selectize-control selectize prevent-creation single plugin-remove_button"><div className="selectize-input items not-full"><input type="select-one" autoComplete="off" tabIndex id="products-0-product-id-selectized" style={{width: 4}} /></div><div className="selectize-dropdown single selectize prevent-creation plugin-remove_button" style={{display: 'none'}}><div className="selectize-dropdown-content" /></div></div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <label htmlFor="products-0-campaign-end">
                                End Date<span className="m-l-5 text-red">*</span>
                              </label>
                              <input type="hidden" name="products[0][end_date]" className="form-control datetime-picker flatpickr-input" id="products-0-campaign-end" defaultValue /><input className="form-control datetime-picker flatpickr-input form-control input" placeholder type="text" readOnly="readonly" />
                            </div>
                          </div>
                          <div className="col-sm-3 col-xs-6">
                            <div className="form-group">
                              <label htmlFor="products-0-price">
                                Price<span className="m-l-5 text-red">*</span>
                              </label>
                              <input type="number" name="products[0][price]" className="form-control" id="products-0-price" defaultValue min={0} />
                            </div>
                          </div>
                          <div className="col-sm-3 col-xs-6">
                            <div className="form-group">
                              <label htmlFor="products-0-qty">
                                Quantity<span className="m-l-5 text-red">*</span>
                              </label>
                              <input type="number" name="products[0][qty]" className="form-control" id="products-0-qty" defaultValue />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div>
                  
                  ))}
            <button
              type="button"
              className="btn btn-default"
              onClick={this.handleAddRow}
            >
              Add New Value
            </button>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <section className="content-header clearfix">
        {this.props.edit == "true"? <h3>Edit Flash Sale</h3>: <h3>Create Flash Sale</h3>}
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/flashsales">Flash Sales</Link>
            </li>
            <li className="active">Create Flash Sale</li>
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
                                this.state.activePanel == "products"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "products" });
                              }}
                            >
                              <a data-toggle="tab">Products</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "settings"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "settings" });
                              }}
                            >
                              <a data-toggle="tab">Settings</a>
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

export default withRouter(CreateFlashSale);
