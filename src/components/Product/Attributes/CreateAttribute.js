import React from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/api";
import "./attribute.css";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

class CreateAttribute extends React.Component {
  state = {
    activePanel: "general",
    categoryOptions: [],
    rows: [
      {
        name: "",
      },
    ],
    attributesSets: [],
    data: {
      name: "",
      attributeSetId: "",
      filterable: false,
      value: [],
    },
    rolesArray: []
  };
  async UNSAFE_componentWillMount() {
    const { attributesSets } = this.state;
    await api
      .get("/attributeset/get")
      .then((res) => {
        res.data.data.map((val) => {
          attributesSets.push(val);
        });
      })
      .catch((err) => {
        console.log("error fetching attri sets");
      });
    this.setState({ attributesSets });
    const {categoryOptions} = this.state
    api.get('/roles/get').then(res=>{
      res.data.data.forEach(x=>{
        let tmp = {}
        tmp['label'] = x.Name
        tmp['value'] = x.Name
        tmp['_id'] = x._id
        categoryOptions.push(tmp)

      })
    }).catch((err)=>{
      console.log(err)
    })
  }

  setValueArray = (val) => {
      console.log(val)
    const { rolesArray } = this.state;
    const { data } = this.state;
    rolesArray.push(val);
    var n = rolesArray.length;
    data.CategoryId = rolesArray[n - 1].split(",");
    this.setState({ rolesArray });
    this.setState({ data });
  };
  setVal = (key, val) => {
    const { data } = this.state;
    if(key == "filterable"){
        data["filterable"] = !this.state.data.filterable
    }else{
        data[key] = val;
    }
    this.setState({ data });
    
  };
  handleAddRow = () => {
    const item = {
      name: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
    console.log(this.state.rows);
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  handleSubmit = () => {
    console.log(this.state.data);
  };
  tabContentToggle = () => {
    if (this.state.activePanel == "general") {
      return (
        <div className="tab-pane fade in active" id="general">
          <h3 className="tab-content-title">General</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="attribute_set_id"
                  className="col-md-3 control-label text-left"
                >
                  Attribute Set<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <select
                    name="attributeSetId"
                    className="form-control custom-select-black "
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  >
                    <option value="">Please Select</option>
                    {this.state.attributesSets.map((val, key) => (
                      <option value={val._id} key={key}>
                        {val.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
              <div className="form-group">
                <label
                  htmlFor="categories[]"
                  className="col-md-3 control-label text-left"
                >
                  Categories
                </label>
                <div className="col-md-9">
                  <MultiSelect
                    onChange={this.setValueArray}
                    options={this.state.categoryOptions}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="filterable"
                  className="col-md-3 control-label text-left"
                >
                  Filterable
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    
                    <input
                      type="checkbox"
                      name="filterable"
                      checked={this.state.data.filterable}
                      value={this.state.data.filterable}
                      onChange={(e)=>{
                          this.setVal(e.target.name, e.target.value)}
                      }
                    />
                    <label >
                      Use this attribute for filtering products
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "values") {
      return (
        <div className="tab-pane fade in active" id="values">
          <h3 className="tab-content-title">Values</h3>
          <div id="attribute-values-wrapper">
            <div className="table-responsive">
              <table className="options table table-bordered">
                <thead>
                  <tr>
                    <th />
                    <th>Value</th>
                    <th />
                  </tr>
                </thead>
                <tbody id="attribute-values">
                  {this.state.rows.map((item, idx) => (
                    <tr key={idx}>
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
                            name="values[<%- valueId %>][value]"
                            className="form-control"
                          />
                        </div>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-default delete-row"
                          data-toggle="tooltip"
                          data-title="Delete Value"
                          onClick={this.handleRemoveSpecificRow(idx)}
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
      );
    }
  };
  render() {
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Create Attribute</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/attributes">Attributes</Link>
            </li>
            <li className="active">Create Attribute</li>
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
                          <a>Attribute Information</a>
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

export default CreateAttribute;
