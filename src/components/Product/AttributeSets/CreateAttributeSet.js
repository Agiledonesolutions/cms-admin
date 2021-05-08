import React from "react";
import { Link, withRouter } from "react-router-dom";
import Validate from '../../../utils/validation'
import api from '../../../apis/api'
import Loading from "../../Loading";
class CreateAttributeSet extends React.Component {
  state = {
    submitting: false,
    data: {
      name: "",
    },
    requiredPermission: "Create Attribute Set",
    errors: [],
  };
   componentDidMount(){
    if(this.props.edit == "true"){
      const url = "/attributeset/get/" + this.props.match.params.id
      const {data} = this.state
        api.get(url).then(res=>{
        console.log(res)
        data.name = res.data.data.name
      }).catch(err=>{
        console.log("error")
      })
      this.setState({data})
    }
  }
  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };

  handlesubmit = () => {
      console.log(this.state.data)
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
      this.setState({submitting: true})
      if(this.props.edit){
        console.log("edit")
        const _id = this.props.match.params.id
        api.put('/attributeset', {data, _id, requiredPermission: "Edit Attribute Set"}).then(res=>{
          console.log(res)
          this.setState({submitting: false})
        }).catch(err=>{
          console.log("edit attri set error")
          this.setState({submitting: false})

        })
      }else{
        const {requiredPermission} = this.state
        api.post('/attributeset',{data: data, requiredPermission}).then(res=>{
          console.log(res)
          this.setState({submitting: false})
        }).catch(err=>{
          console.log("tag add error")
          this.setState({submitting: false})

        })
      }
      
    }else{
      console.log("name empty")
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="content-header clearfix">
        {this.props.edit == "true"? <h3>Edit Attribute Set</h3>: <h3>Create Attribute Set</h3>}
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/attribute-sets">Attribute Sets</Link>
            </li>
            {this.props.edit == "true"? <li className="active">Edit Attribute Set</li>: <li className="active">Create Attribute Set</li>}
          </ol>
        </section>
        <section className="content">
          <form className="form-horizontal">
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group" id="AttributeSetTabs">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a>Attribute Set Information</a>
                        </h4>
                      </div>
                      <div
                        id="attribute_set_information"
                        className="panel-collapse collapse in"
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li className="active ">
                              <a  data-toggle="tab">
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
                                value={this.state.data.name}
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
                      <div className="col-md-offset-2 col-md-10" style={{display: "flex"}}>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e)=>{
                              e.preventDefault();
                              this.handlesubmit()
                          }}
                        >
                          Save
                        </button>
                        <Loading show={this.state.submitting}/>
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
export default withRouter(CreateAttributeSet);
