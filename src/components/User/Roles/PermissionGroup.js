import React from "react";
import { Link } from "react-router-dom";

class PermissionGroup extends React.Component{
    constructor(props){
        super(props)
    }
   
    getAttributes = (name, key)=>{
        return(
            <div className="permission-row" key={key}>
                        <div className="row">
                          <div className="col-md-5 col-sm-4">
                            <span className="permission-label">
                              {name+ " "+this.props.suffix}
                            </span>
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <div className="row">
                              <div className="radio-btn clearfix">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    id={this.props.heading + "."+name+"-inherit"}
                                    name={name+ " " +this.props.suffix}
                                    className="permission-inherit"
                                    defaultChecked
                                    value="Inherit"
                                    onChange={(e)=>this.props.setVal("Permissions", e.target.value, e.target.name)}
                                  />
                                  <label htmlFor={this.props.heading + "."+name+"-inherit"}>
                                    Inherit
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    id={this.props.heading + "."+name+"-deny"}
                                    name={name+ " "+this.props.suffix}
                                    className="permission-deny"
                                    value="Deny"
                                    onChange={(e)=>this.props.setVal("Permissions", e.target.value, e.target.name)}

                                  />
                                  <label htmlFor={this.props.heading + "."+name+"-deny"}>
                                    Deny
                                  </label>
                                </div>
                                <div className="radio">
                                  <input
                                    type="radio"
                                    id={this.props.heading + "."+name+"-allow"}
                                    name={name+" "+this.props.suffix}
                                    className="permission-allow"
                                    value="Allow"
                                    onChange={(e)=>this.props.setVal("Permissions", e.target.value, e.target.name)}

                                  />
                                  <label htmlFor={this.props.heading + "."+name+"-allow"}>
                                    Allow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
        );
    }
    render(){
        return(
            <div className="permission-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="permission-group-head">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <h4>{this.props.heading}</h4>
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
                      {this.props.attributes.map((attribute, key)=>{
                          return this.getAttributes(attribute, key)
                          
                      })}
                      
                    </div>
                  </div>
                </div>
              </div>
        )
    }
}

export default PermissionGroup;