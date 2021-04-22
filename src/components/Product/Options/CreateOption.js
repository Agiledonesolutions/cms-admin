import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../apis/api";
import "./options.css";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Validate from "../../../utils/validation";

class CreateOption extends React.Component {
  state = {
    activePanel: "general",
    data: {
      name: "",
      type: "",
      required: false,
      value: [""],
    },
    CategoryIds: [],
    rolesArray: [],
    errors: [],
  };

  componentDidMount() {
    // if(this.props.edit == "true"){
    //   const url = "/attribute/get/" + this.props.match.params.id
    //   const {data} = this.state
    //   const {rolesArray} = this.state
    //   api.get(url).then(res=>{
    //     console.log(res.data.data)
    //     data.name = res.data.data.name
    //     data.attributeSetId = res.data.data.attributeSet
    //     rolesArray.push(res.data.data.categories.toString())
    //     data.filterable = res.data.data.filterable
    //     data.value = res.data.data.value
    //     this.setState({data})
    //     this.setState({rolesArray})
    //   }).catch(err=>{
    //     console.log("error fetching attri")
    //   })
    // }
  }
  setValues = (idx, val) => {
    const { data } = this.state;
    data["value"][idx] = val;
    this.setState({ data });
  };

  setVal = (key, val) => {
    const { data } = this.state;
    if (key == "required") {
      data["required"] = !this.state.data.filterable;
    } else {
      data[key] = val;
    }
    this.setState({ data });
  };
  handleAddRow = () => {
    const { data } = this.state;
    data["value"].push("");
    this.setState({ data });
  };
  handleRemoveSpecificRow = (idx) => {
    const { data } = this.state;
    data["value"].splice(idx, 1);
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
    if (
      !errors.includes("attributeSetId") &&
      !Validate.validateNotEmpty(data["attributeSetId"])
    ) {
      errors.push("attributeSetId");
      this.setState({ errors });
    } else if (
      errors.includes("attributeSetId") &&
      Validate.validateNotEmpty(data["attributeSetId"])
    ) {
      errors.splice(errors.indexOf("attributeSetId"), 1);
      this.setState({ errors });
    }
    if (!Validate.validateNotEmpty(this.state.errors)) {
      if (this.props.edit == "true") {
        api
          .put("/attribute", {
            data: this.state.data,
            _id: this.props.match.params.id,
            categoryIds: this.state.CategoryIds,
            requiredPermission: "Edit Attributes",
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("error updating attri");
          });
      } else {
        api
          .post("/attribute", {
            data: this.state.data,
            categoryIds: this.state.CategoryIds,
            requiredPermission: "Create Attributes",
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("error creating attribute");
          });
      }
    } else {
      console.log(errors);
    }
  };
  typeToggle = () => {
    if (this.state.data.type == "Dropdown" || this.state.data.type == "Checkbox" || this.state.data.type == "Custom Checkbox" || this.state.data.type == "Radio Button" || this.state.data.type == "Custom Radio Button" || this.state.data.type == "Multiple Select") {
        return(
            <div className="option-values clearfix" id="option-values">
                <div className="option-select m-b-15">
              <div className="table-responsive">
            <table className="options table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>Label</th>
                <th>Price</th>
                <th>Price Type</th>
                <th></th>
              </tr>
            </thead>

            <tbody id="select-values">
              {this.state.data.value.map((item, idx) => (
                <tr key={idx} className="option-row">
                  <td className="text-center">
                    <span className="drag-icon">
                      <i className="fa">&#xf142;</i>
                      <i className="fa">&#xf142;</i>
                    </span>
                  </td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        name={idx}
                        value={this.state.data.value[idx]}
                        className="form-control"
                        onChange={(e) => {
                          this.setValues(e.target.name, e.target.value);
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        name={idx}
                        value={this.state.data.value[idx]}
                        className="form-control"
                        onChange={(e) => {
                          this.setValues(e.target.name, e.target.value);
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    <select
                      name="values[0][price_type]"
                      id="values-0-price_type"
                      className="form-control custom-select-black"
                    >
                      <option value="fixed" >
                        Fixed
                      </option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-default delete-row"
                      data-toggle="tooltip"
                      name={idx}
                      data-title="Delete Value"
                      onClick={(e) => {
                        this.handleRemoveSpecificRow(idx);
                      }}
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
              <button
                type="button"
                className="btn btn-default"
                onClick={this.handleAddRow}
              >
                Add New Value
              </button>
              </div>
            </div>
        )
    }else if(this.state.data.type == "Field" || this.state.data.type == "Textarea" || this.state.data.type == "Date" || this.state.data.type == "Date Time" || this.state.data.type == "Time"){
        return(
            <div className="option-values clearfix" id="option-values">
            <div className="table-responsive option-text">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Price</th>
                    <th>Price Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="option-row">
                    <td>
                      <input type="number" name="values[0][price]" id="values-0-price" className="form-control" defaultValue />
                    </td>
                    <td>
                      <select name="values[0][price_type]" id="values-0-price-type" className="form-control custom-select-black">
                        <option value="fixed" selected>
                          Fixed
                        </option>
                        <option value="percent">
                          Percent
                        </option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        )
    }
  };
  tabContentToggle = () => {
    if (this.state.activePanel == "general") {
      return (
        <div className="tab-pane fade in active">
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
              <div className="form-group required">
                <label
                  htmlFor="type"
                  className="col-md-3 control-label text-left"
                >
                  Type<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="type"
                    className="form-control custom-select-black"
                    id="type"
                    value={this.state.data.type}
                    onChange={(e)=>{
                        this.setVal(e.target.name, e.target.value)
                        
                    }}
                  >
                    <option value="">
                      Please Select
                    </option>
                    <optgroup label="Text">
                      <option value="Field">Field</option>
                      <option value="Textarea">Textarea</option>
                    </optgroup>
                    <optgroup label="Select">
                      <option value="Dropdown">Dropdown</option>
                      <option value="Checkbox">Checkbox</option>
                      <option value={"Custom Checkbox"}>Custom Checkbox</option>
                      <option value={"Radio Button"}>Radio Button</option>
                      <option value={"Custom Radio Button"}>Custom Radio Button</option>
                      <option value={"Multiple Select"}>Multiple Select</option>
                    </optgroup>
                    <optgroup label="Date">
                      <option value="Date">Date</option>
                      <option value="Date Time">Date &amp; Time</option>
                      <option value="Time">Time</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="is_required"
                  className="col-md-3 control-label text-left"
                >
                  Required
                </label>
                <div className="col-md-9">
                  <div className="check">
                    <input
                      type="checkbox"
                      name="is_required"
                      id="is_required"
                    />
                    <label htmlFor="is_required">This option is required</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "values") {
      if (this.state.data.type == "") {
        return (
          <div className="tab-pane fade in active" id="values">
            <h3 className="tab-content-title">Values</h3>
            <div className="option-values clearfix" id="option-values">
              <div className="alert alert-info" id="option-values-info">
                Please select an option type.
              </div>
            </div>
          </div>
        );
      } else
        return (
          <div className="tab-pane fade in active" id="values">
            <h3 className="tab-content-title">Values</h3>
            
               {this.typeToggle()}
             
          </div>
        );
    }
  };
  render() {
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Create Option</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/options">Options</Link>
            </li>
            <li className="active">Create Option</li>
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
                          <a>Option Information</a>
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
                                this.state.activePanel == "values"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "values" });
                              }}
                            >
                              <a data-toggle="tab">Values</a>
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

export default withRouter(CreateOption);
