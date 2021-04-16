import { Android } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/api";
import Validate from '../../../utils/validation'

class CreateTag extends React.Component {
  state = {
    data: {
      "name": ""
    },
    requiredPermission: "Create Tag",
    errors: []
  }
  setVal = (key,val) => {
    const {data} = this.state
    data[key] = val;
    this.setState({data})
  }
  handleSubmit = () =>{
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
    if(!Validate.validateNotEmpty(this.state.errors)){
      const {requiredPermission} = this.state
      api.post('/tag',{data: data, requiredPermission}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log("tag add error")
      })
    }else{
      console.log("name empty")
    }
    
  }
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
          <form>
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
                              <a >
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
                                onChange={(e)=>{this.setVal(e.target.name, e.target.value)}}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-offset-2 col-md-10">
                        <button
                          className="btn btn-primary "
                          style={{marginTop: "5px"}}
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
export default CreateTag;