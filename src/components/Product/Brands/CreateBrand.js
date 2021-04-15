import React from "react";
import { Link } from "react-router-dom";

class CreateBrand extends React.Component {
  state = {
    activePanel: "general",
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
                    id="name"
                    defaultValue
                    type="text"
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
                    <input type="hidden" defaultValue={0} name="is_active" />
                    <input
                      type="checkbox"
                      name="is_active"
                      className
                      id="is_active"
                      defaultValue={1}
                    />
                    <label htmlFor="is_active">Enable the brand</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "images") {
      return (
        <div className="tab-pane fade in active" >
          <h3 className="tab-content-title">Images</h3>
          <div className="single-image-wrapper">
            <h4>Logo</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              data-input-name="files[logo]"
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="clearfix" />
            <div className="single-image image-holder-wrapper clearfix">
              <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>
            </div>
          </div>
          <div className="media-picker-divider" />
          <div className="single-image-wrapper">
            <h4>Banner</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              data-input-name="files[banner]"
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
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
    } else if (this.state.activePanel == "seo") {
      return (
        <div className="tab-pane fade in active" >
          <h3 className="tab-content-title">SEO</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="meta-title"
                  className="col-md-3 control-label text-left"
                >
                  Meta Title
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="meta[meta_title]"
                    className="form-control"
                    id="meta-title"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="meta-description"
                  className="col-md-3 control-label text-left"
                >
                  Meta Description
                </label>
                <div className="col-md-9">
                  <textarea
                    name="meta[meta_description]"
                    className="form-control"
                    id="meta-description"
                    rows={10}
                    cols={10}
                    defaultValue={""}
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
          <h3>Create Brand</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
            <li className="active">Create Brand</li>
          </ol>
        </section>
        <section className="content">
          <form>
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group" id="BrandTabs">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a>Brand Information</a>
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
                                this.state.activePanel == "images"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "images" });
                              }}
                            >
                              <a data-toggle="tab">Images</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "seo" ? "active" : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "seo" });
                              }}
                            >
                              <a data-toggle="tab">SEO</a>
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
                          data-loading
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

export default CreateBrand;
