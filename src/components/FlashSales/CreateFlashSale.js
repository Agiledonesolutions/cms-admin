import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../apis/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Validate from "../../utils/validation";

class CreateFlashSale extends React.Component {
  state = {
    activePanel: "products",
    productOptions: [],
    data: {
      campaignName: "",
      products: [
        {
          productId: "",
          endDate: "",
          price: "",
          quantity: "",
        },
      ],
    },
    errors: [],
  };
  

  componentDidMount() {
    
    if (this.props.edit == "true") {
      const url = "/flashsale/get/" + this.props.match.params.id;
      api.get(url).then(res=>{
        const {data} = this.state
        data.products = []
        data.campaignName = res.data.data.campaignName
        res.data.data.products.map(val=>{
          let tmp = {}
          tmp.productId = val._id
          tmp.price = val.price
          tmp.endDate = val.endDate.substr(0,10)
          tmp.quantity = val.quantity
          
          data.products.push(tmp);
        })
        this.setState({data})
      }).catch(err=>{
        console.log("error fetching flash sale")
      })
    }

    api.get('/product/get').then(res=>{
      const {productOptions} = this.state
      res.data.data.map(val => {
        let tmp ={}
        tmp.value = val._id
        tmp.label = val.name
        productOptions.push(tmp)
      });
      this.setState({productOptions})
    }).catch(err=>{
      console.log("error fetching products")
    })

  }

  setValues = (name, val, idx) => {
    const { data } = this.state;
    data["products"][idx][name] = val;
    this.setState({ data });
  };

  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };
  handleAddRow = () => {
    const { data } = this.state;
    data["products"].push({
      productId: "",
      endDate: "",
      price: "",
      quantity: "",
    });
    this.setState({ data });
  };
  handleRemoveSpecificRow = (idx) => {
    const { data } = this.state;
    data["products"].splice(idx, 1);
    this.setState({ data });
  };
  handleSubmit = () => {
    const { errors } = this.state;
    const { data } = this.state;
    if (!errors.includes("campaignName") && !Validate.validateNotEmpty(data["campaignName"])) {
      errors.push("campaignName");
      this.setState({ errors });
    } else if (
      errors.includes("campaignName") &&
      Validate.validateNotEmpty(data["campaignName"])
    ) {
      errors.splice(errors.indexOf("campaignName"), 1);
      this.setState({ errors });
    }

    data.products.forEach((val, idx)=>{
      for(var elem in val){
        if (!errors.includes(elem) && !Validate.validateNotEmpty(data["products"][idx][elem])) {
          errors.push(elem);
          this.setState({ errors });
        } else if (
          errors.includes(elem) &&
          Validate.validateNotEmpty(data["products"][idx][elem])
        ) {
          errors.splice(errors.indexOf(elem), 1);
          this.setState({ errors });
        }
      }
    })
    console.log(this.state)
    if (!Validate.validateNotEmpty(this.state.errors)) {
      if (this.props.edit == "true") {
        
      } else {
        
        api.post('/flashsale', {data: data, requiredPermission: "Create Flash Sales"}).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log("error adding flash sale")
        })
      }
    } else {
      console.log(errors);
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
                  className="col-md-3 control-label text-left"
                >
                  Campaign Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="campaignName"
                    className="form-control "
                    value={this.state.data.campaignName}
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

          {this.state.data.products.map((item, idx) => (
            <div
              className="panel-wrap flash-sale"
              id="products-wrapper"
              key={idx}
            >
              <div className="panel">
                <div className="panel-header clearfix">
                  <span className="drag-icon pull-left">
                    <i className="fa"></i>
                    <i className="fa"></i>
                  </span>
                  Flash Sale Product
                  <button
                    type="button"
                    className="delete-product-panel btn pull-right"
                    onClick={() => this.handleRemoveSpecificRow(idx)}
                  >
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

                        <MultiSelect
                    onChange={(val)=>{
                      this.setValues("productId", val, idx)
                    }}
                    singleSelect={true}
                    largeData={true}
                    options={this.state.productOptions}
                    defaultValue={this.state.data.products[idx].productId}
                  />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="products-0-campaign-end">
                          End Date<span className="m-l-5 text-red">*</span>
                        </label>
                        <input
                          className="form-control  form-control input"
                          type="date"
                          name="endDate"
                          value={this.state.data.products[idx].endDate}
                          onChange={(e) => {
                            this.setValues(e.target.name, e.target.value, idx);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                      <div className="form-group">
                        <label htmlFor="products-0-price">
                          Price<span className="m-l-5 text-red">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          min="0"
                          name="price"
                          value={this.state.data.products[idx].price}
                          onChange={(e) => {
                            this.setValues(e.target.name, e.target.value, idx);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                      <div className="form-group">
                        <label htmlFor="products-0-qty">
                          Quantity<span className="m-l-5 text-red">*</span>
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          className="form-control"
                          value={this.state.data.products[idx].quantity}
                          onChange={(e) => {
                            this.setValues(e.target.name, e.target.value, idx);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-default "
            style={{ marginBottom: "10px" }}
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
          {this.props.edit == "true" ? (
            <h3>Edit Flash Sale</h3>
          ) : (
            <h3>Create Flash Sale</h3>
          )}
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/flashsales">Flash Sales</Link>
            </li>
             {this.props.edit == "true" ? (
            <li className="active">Edit Flash Sale</li>
          ) : (
            <li className="active">Create Flash Sale</li>
          )}
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