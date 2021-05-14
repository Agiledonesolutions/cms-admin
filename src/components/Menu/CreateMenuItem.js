import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../apis/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Validate from "../../utils/validation";
import Loading from '../Loading'

class CreateMenuItem extends React.Component {
  state = {
    submitting: false,
    activePanel: "general",
   
    errors: [],
  };
  

  componentDidMount() {

  }


  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };


  handleSubmit = () => {
    const { errors } = this.state;
    const { data } = this.state;
    // if (!errors.includes("campaignName") && !Validate.validateNotEmpty(data["campaignName"])) {
    //   errors.push("campaignName");
    //   this.setState({ errors });
    // } else if (
    //   errors.includes("campaignName") &&
    //   Validate.validateNotEmpty(data["campaignName"])
    // ) {
    //   errors.splice(errors.indexOf("campaignName"), 1);
    //   this.setState({ errors });
    // }

    console.log(this.state)
    if (!Validate.validateNotEmpty(this.state.errors)) {
      this.setState({submitting: true})

      if (this.props.edit == "true") {

       
      } else {
        
     
      }
    } else {
      console.log(errors);
    }
  };
  tabContentToggle = () => {
    if (this.state.activePanel == "general") {
      return (
        <div className="tab-pane fade active in" id="general"><h3 className="tab-content-title">General</h3><div className="row">
        <div className="col-md-8">
          <div className="form-group"><label htmlFor="name" className="col-md-3 control-label text-left">Name<span className="m-l-5 text-red">*</span></label><div className="col-md-9"><input name="name" className="form-control " id="name" defaultValue type="text" /></div></div>
          <div className="form-group"><label htmlFor="type" className="col-md-3 control-label text-left">Type<span className="m-l-5 text-red">*</span></label><div className="col-md-9"><select name="type" className="form-control custom-select-black " id="type"><option value="category">Category</option><option value="page">Page</option><option value="url">URL</option></select></div></div>
          <div className="link-field category-field ">
            <div className="form-group"><label htmlFor="category_id" className="col-md-3 control-label text-left">Category<span className="m-l-5 text-red">*</span></label><div className="col-md-9"><select name="category_id" className="form-control custom-select-black " id="category_id"><option value>Select Category</option><option value={98}>Backpacks</option><option value={59}>Consumer Electronics</option><option value={181}>Electronics</option><option value={156}>Home Appliances</option><option value={12}>Men's Fashion</option><option value={82}>Watches</option><option value={126}>Women's Fashion</option></select></div></div>
          </div>
          <div className="link-field page-field hide">
            <div className="form-group"><label htmlFor="page_id" className="col-md-3 control-label text-left">Page<span className="m-l-5 text-red">*</span></label><div className="col-md-9"><select name="page_id" className="form-control custom-select-black " id="page_id"><option value>Select Page</option><option value={5}>About Us</option><option value={4}>FAQ</option><option value={1}>Privacy &amp; Policy</option><option value={3}>Return Policy</option><option value={2}>Terms &amp; Conditions</option></select></div></div>
          </div>
          <div className="link-field url-field hide">
            <div className="form-group"><label htmlFor="url" className="col-md-3 control-label text-left">URL<span className="m-l-5 text-red">*</span></label><div className="col-md-9"><input name="url" className="form-control " id="url" defaultValue type="text" /></div></div>
          </div>
          <div className="form-group"><label htmlFor="icon" className="col-md-3 control-label text-left">Icon</label><div className="col-md-9"><input name="icon" className="form-control " id="icon" defaultValue type="text" /></div></div>
          <div className="form-group"><label htmlFor="is_fluid" className="col-md-3 control-label text-left">Fluid Menu</label><div className="col-md-9"><div className="checkbox"><input type="hidden" defaultValue={0} name="is_fluid" /><input type="checkbox" name="is_fluid" className id="is_fluid" defaultValue={1} /><label htmlFor="is_fluid">This is a full width menu</label></div></div></div>
          <div className="form-group"><label htmlFor="target" className="col-md-3 control-label text-left">Target</label><div className="col-md-9"><select name="target" className="form-control custom-select-black " id="target"><option value="_self">Same Tab</option><option value="_blank">New Tab</option></select></div></div>
          <div className="form-group"><label htmlFor="parent_id" className="col-md-3 control-label text-left">Parent Menu Item</label><div className="col-md-9"><select name="parent_id" className="form-control custom-select-black " id="parent_id"><option value>Select Parent</option><option value={36}>Specials</option><option value={37}>Hot Deals</option><option value={38}>New Arrivals</option><option value={39}>Backpacks</option><option value={40}>Men's Fashion</option></select></div></div>
          <div className="form-group"><label htmlFor="is_active" className="col-md-3 control-label text-left">Status</label><div className="col-md-9"><div className="checkbox"><input type="hidden" defaultValue={0} name="is_active" /><input type="checkbox" name="is_active" className id="is_active" defaultValue={1} /><label htmlFor="is_active">Enable the menu item</label></div></div></div>
        </div>
      </div>
    </div>
    
       );
    } else if (this.state.activePanel == "image") {
      return (
        <div className="tab-pane fade active in" id="image"><h3 className="tab-content-title">Image</h3><div className="single-image-wrapper">
        <h4>Background Image</h4>
        <button type="button" className="image-picker btn btn-default" data-input-name="files[background_image]">
          <i className="fa fa-folder-open m-r-5" />Browse
        </button>
        <div className="clearfix" />
        <div className="single-image image-holder-wrapper clearfix">
          <div className="image-holder placeholder">
            <i className="fa fa-picture-o" />
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
          {this.props.edit == "true" ? (
            <h3>Edit Menu Item Sale</h3>
          ) : (
            <h3>Create Menu Item</h3>
          )}
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/menus">Menus</Link>
            </li>
            <li>
              <Link to="/menus/:id/edit">Edit Menu</Link>
            </li>
           
             {this.props.edit == "true" ? (
            <li className="active">Edit Menu Item</li>
          ) : (
            <li className="active">Create Menu Item</li>
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
                          <a>Menu Item Information</a>
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
                                this.state.activePanel == "image"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "image" });
                              }}
                            >
                              <a data-toggle="tab">Image</a>
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
                      <div className="col-md-2 col-md-10" style={{display: "flex"}}>
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
                        <Loading show={this.state.submitting}/>
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

export default withRouter(CreateMenuItem);
