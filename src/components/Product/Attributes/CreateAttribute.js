import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../apis/api";
import "./attribute.css";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Validate from '../../../utils/validation'

class CreateAttribute extends React.Component {
  state = {
    activePanel: "general",
    categoryOptions: [],
    attributesSets: [],
    data: {
      name: "",
      attributeSetId: "",
      filterable: false,
      value: [""],
    },
    CategoryIds: [],
    rolesArray: [],
    errors:[]
  };

   componentDidMount() {
    if(this.props.edit == "true"){
      const url = "/attribute/get/" + this.props.match.params.id
      const {data} = this.state
      const {rolesArray} = this.state
      api.get(url).then(res=>{
        console.log(res.data.data)
        data.name = res.data.data.name
        data.attributeSetId = res.data.data.attributeSet
        rolesArray.push(res.data.data.categories.toString())
        data.filterable = res.data.data.filterable
        data.value = res.data.data.value
        this.setState({data})
        this.setState({rolesArray})
      }).catch(err=>{
        console.log("error fetching attri")
      })
    }
    const { attributesSets } = this.state;
     api
      .get("/attributeset/get")
      .then((res) => {
        res.data.data.map((val) => {
          attributesSets.push(val);
          this.setState({ attributesSets });
        });
      })
      .catch((err) => {
        console.log("error fetching attri sets");
      });

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
  setValues = (idx, val) =>{
    const {data} = this.state
    data["value"][idx] = val
    this.setState({data})
  }
  setCategoryArray = (val) => {
    const { rolesArray } = this.state;
    rolesArray.push(val);
    console.log(rolesArray)
    var n = rolesArray.length;
    var {CategoryIds} = this.state
    CategoryIds = rolesArray[n - 1].split(",") 
    this.setState({ rolesArray });
    this.setState({ CategoryIds });
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
                    value={this.state.data.attributeSetId}
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
                    onChange={this.setCategoryArray}
                    options={this.state.categoryOptions}
                    defaultValue={this.state.rolesArray[this.state.rolesArray.length-1]}
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
                  <div className="check">
                    <input
                      type="checkbox"
                      name="filterable"
                      id="filterable"
                      checked={this.state.data.filterable}
                      onChange={()=>{
                        const {data} = this.state
                        data.filterable = !this.state.data.filterable
                        this.setState({data})
                      }}      
                    />
                    <label htmlFor="filterable">
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
                  {this.state.data.value.map((item, idx) => (
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
                            name={idx}
                            value={this.state.data.value[idx]}
                            className="form-control"
                            onChange={(e)=>{
                              this.setValues(e.target.name, e.target.value)
                            }}
                          />
                        </div>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-default delete-row"
                          data-toggle="tooltip"
                          name={idx}
                          data-title="Delete Value"
                          onClick={(e)=>{this.handleRemoveSpecificRow(idx)}}
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

export default withRouter(CreateAttribute);
