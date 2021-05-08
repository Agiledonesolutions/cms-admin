import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../apis/api";
import Validate from "../../../utils/validation";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FileManager from "../../Media/FileManager";
import "./slider.css";

class CreateSlide extends React.Component {
  state = {
    showModal: false,
    multiple: false,
    imageTab: "general",
    activePanel: "slides",
    data: {
      Name: "",
      Settings: {
        Speed: "",
        Fade: false,
        Autoplay: false,
        AutoplaySpeed: "",
        Dots: false,
        Arrows: false,
      },
    },
    slides: [
      {
        imageId: "",
        General: {
          Caption1: "",
          Caption2: "",
          Direction: "",
          CallToActionText: "",
          CallToActionUrl: "",
          NewWindow: false,
        },
        Options: [
          {
            target: "",
            Delay: "",
            Effect: "",
          },
        ],
        slideTab: "general",
      },
    ],
    errors: [],
  };
  setData = (val, key1, key2) => {
    const { data } = this.state;
    if (key2) {
      data[key1][key2] = val;
    } else {
      data[key1] = val;
    }
    this.setState({ data });
  };
  componentDidMount() {
    if (this.props.edit == "true") {
      const url = "/slides/get/" + this.props.match.params.id;
    }
  }

  setImageId = (id, multiple, image) => {
    if (multiple) {
    } else {
    }
  };

  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };
  handleAddRow = () => {
    const { slides } = this.state;
    slides.push({
      imageId: "",
      General: {
        Caption1: "",
        Caption2: "",
        Direction: "",
        CallToActionText: "",
        CallToActionUrl: "",
        NewWindow: false,
      },
      Options: [
        {
          target: "",
          Delay: "",
          Effect: "",
        },
      ],
      slideTab: "general"
    })
    this.setState({ slides });
  };
  handleRemoveSpecificRow = (idx) => {
    const { slides } = this.state;
    slides.splice(idx,1)
    this.setState({ slides });
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

    if (!Validate.validateNotEmpty(this.state.errors)) {
      if (this.props.edit == "true") {
      } else {
      }
    } else {
      console.log(errors);
    }
  };

  tabContentToggle = () => {
    if (this.state.activePanel == "slides") {
      return (
        <div className="tab-pane fade active in">
          <h3 className="tab-content-title">Slides</h3>
          <div id="slides-wrapper" className="clearfix">
            {this.state.slides.map((slide,idx)=>(
            <div className="slide" key={idx}>
              <div className="slide-header clearfix">
                <span className="slide-drag pull-left">
                  <i className="fa"></i>
                  <i className="fa"></i>
                </span>
                <span className="pull-left">Image Slide</span>
                <button type="button" className="delete-slide btn pull-right" onClick={()=>{this.handleRemoveSpecificRow(idx)}}>
                  <i className="fa fa-times" />
                </button>
              </div>
              <div className="slide-body">
                <div className="slide-image" >
                  <i className="fa fa-picture-o" />
                </div>
                <div className="slide-tabs tab-wrapper">
                  <ul className="nav nav-tabs">
                    <li className={this.state.slides[idx].slideTab == "general"? "active": ""} onClick={()=>{
                      const {slides} = this.state
                      slides[idx].slideTab = "general"
                      this.setState({slides})
                    }}>
                      <a
                      >
                        General
                      </a>
                    </li>
                    <li className={this.state.slides[idx].slideTab == "options"? "active": ""} onClick={()=>{
                      const {slides} = this.state
                      slides[idx].slideTab = "options"
                      this.setState({slides})
                    }}>
                      <a
                      >
                        Options
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {this.state.slides[idx].slideTab == "general"? 
                    <div
                      className="tab-pane fade in clearfix active"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="form-group">
                            <label htmlFor="slides-0-caption-1">
                              Caption 1
                            </label>
                            <input
                              type="text"
                              name="slides[0][caption_1]"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="form-group">
                            <label htmlFor="slides-0-caption-2">
                              Caption 2
                            </label>
                            <input
                              type="text"
                              name="slides[0][caption_2]"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="form-group">
                            <label htmlFor="slides-0-direction">
                              Direction
                            </label>
                            <select
                              name="slides[0][direction]"
                              className="form-control"
                            >
                              <option value="left">Left</option>
                              <option value="right">Right</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="form-group">
                            <label htmlFor="slides[0][call-to-action-text]">
                              Call to Action Text
                            </label>
                            <input
                              type="text"
                              name="slides[0][call_to_action_text]"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="form-group">
                            <label htmlFor="slides-0-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="slides[0][call_to_action_url]"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="checkbox">
                            
                            <input
                              type="checkbox"
                              name="slides[0][open_in_new_window]"
                              id="slides-0-open-in-new-window"
                            />
                            <label htmlFor="slides-0-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>: 
                    <div
                      className="tab-pane fade in clearfix active"
                    >
                      <select className="change-option-block custom-select-black pull-right">
                        <option value="caption-1" selected>
                          Caption 1
                        </option>
                        <option value="caption-2">Caption 2</option>
                        <option value="call-to-action">Call to Action</option>
                      </select>
                      <div
                        className="slide-options caption-1"
                        style={{ display: "block" }}
                      >
                        <h4>Caption 1</h4>
                        <div className="form-group">
                          <div className="col-md-12 p-l-0">
                            <label
                              className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12 text-left p-l-0"
                            >
                              Delay
                            </label>
                            <div className="col-lg-4 col-md-7 col-sm-6 col-xs-7 p-l-0">
                              <input
                                type="number"
                                name="slides[0][options][caption_1][delay]"
                                className="form-control"
                                placeholder="0s"
                                step="0.01"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12 p-l-0">
                            <label
                              className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12 text-left p-l-0"
                            >
                              Effect
                            </label>
                            <div className="col-lg-4 col-md-7 col-sm-6 col-xs-7 p-l-0">
                              <select
                                name="slides[0][options][caption_1][effect]"
                                className="form-control custom-select-black"
                              >
                                <option value="fadeInUp">fadeInUp</option>
                                <option value="fadeInDown">fadeInDown</option>
                                <option value="fadeInLeft">fadeInLeft</option>
                                <option value="fadeInRight">fadeInRight</option>
                                <option value="lightSpeedIn">
                                  lightSpeedIn
                                </option>
                                <option value="slideInUp">slideInUp</option>
                                <option value="slideInDown">slideInDown</option>
                                <option value="slideInLeft">slideInLeft</option>
                                <option value="slideInRight">
                                  slideInRight
                                </option>
                                <option value="zoomIn">zoomIn</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                 
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="form-group">
            <button type="button" className="add-slide btn btn-default m-l-15" onClick={()=>{this.handleAddRow()}}>
              Add Slide
            </button>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "settings") {
      return (
        <div className="tab-pane fade active in">
          <h3 className="tab-content-title">Settings</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="Name"
                    className="form-control "
                    type="text"
                    value={this.state.data.Name}
                    onChange={(e) => {
                      this.setData(e.target.value, e.target.name);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Speed
                </label>
                <div className="col-md-9">
                  <input
                    name="Speed"
                    className="form-control "
                    placeholder="300ms"
                    type="number"
                    step={100}
                    value={this.state.data.Settings.Speed}
                    onChange={(e) => {
                      this.setData(e.target.value, "Settings", e.target.name);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="fade"
                  className="col-md-3 control-label text-left"
                >
                  Fade
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="Fade"
                      id="fade"
                      checked={this.state.data.Settings.Fade}
                      onChange={(e) => {
                        this.setData(
                          !this.state.data.Settings.Fade,
                          "Settings",
                          e.target.name
                        );
                      }}
                    />
                    <label htmlFor="fade">Fade slides instead of sliding</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="autoplay"
                  className="col-md-3 control-label text-left"
                >
                  Autoplay
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="Autoplay"
                      id="autoplay"
                      checked={this.state.data.Settings.Autoplay}
                      onChange={(e) => {
                        this.setData(
                          !this.state.data.Settings.Autoplay,
                          "Settings",
                          e.target.name
                        );
                      }}
                    />
                    <label htmlFor="autoplay">Enable autoplay</label>
                  </div>
                </div>
              </div>
              <div className="autoplay-speed-field ">
                <div className="form-group">
                  <label className="col-md-3 control-label text-left">
                    Autoplay Speed
                  </label>
                  <div className="col-md-9">
                    <input
                      name="AutoplaySpeed"
                      className="form-control "
                      placeholder="3000ms"
                      type="number"
                      step={100}
                      value={this.state.data.Settings.AutoplaySpeed}
                      onChange={(e) => {
                        this.setData(e.target.value, "Settings", e.target.name);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="dots"
                  className="col-md-3 control-label text-left"
                >
                  Dots
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="Dots"
                      id="dots"
                      checked={this.state.data.Settings.Dots}
                      onChange={(e) => {
                        this.setData(
                          !this.state.data.Settings.Dots,
                          "Settings",
                          e.target.name
                        );
                      }}
                    />
                    <label htmlFor="dots">Show slider dots</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="arrows"
                  className="col-md-3 control-label text-left"
                >
                  Arrows
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="Arrows"
                      id="arrows"
                      checked={this.state.data.Settings.Arrows}
                      onChange={(e) => {
                        this.setData(
                          !this.state.data.Settings.Arrows,
                          "Settings",
                          e.target.name
                        );
                      }}
                    />
                    <label htmlFor="arrows">Show Prev/Next arrows</label>
                  </div>
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
      <React.Fragment>
        <Modal
          open={this.state.showModal}
          onClose={() => {
            document.querySelector("html").style.overflowY = "auto";

            this.setState({ showModal: false });
          }}
        >
          <div className="modal-header">
            <h4 className="modal-title">File Manager</h4>
          </div>
          <FileManager
            multiple={this.state.multiple}
            setMediaId={
              this.state.activePanel == "downloads"
                ? this.setDownloadId
                : this.setImageId
            }
            close={() => {
              document.querySelector("html").style.overflowY = "auto";

              this.setState({ showModal: false });
            }}
          />
        </Modal>
        <div>
          <section className="content-header clearfix">
            {this.props.edit == "true" ? (
              <h3>Edit Slider</h3>
            ) : (
              <h3>Create Slider</h3>
            )}
            <ol className="breadcrumb">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/sliders">Sliders</Link>
              </li>
              {this.props.edit == "true" ? (
                <li className="active">Edit Slider</li>
              ) : (
                <li className="active">Create slider</li>
              )}
            </ol>
          </section>
          <section className="content">
            <form className="form-horizontal">
              <div className="accordion-content clearfix">
                <div className="col-lg-3 col-md-4">
                  <div className="accordion-box">
                    <div className="panel-group">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a>Slider Information</a>
                          </h4>
                        </div>
                        <div className="panel-collapse collapse in">
                          <div className="panel-body">
                            <ul className="accordion-tab nav nav-tabs">
                              <li
                                className={
                                  this.state.activePanel == "slides"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "slides" });
                                }}
                              >
                                <a data-toggle="tab">Slides</a>
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
      </React.Fragment>
    );
  }
}

export default withRouter(CreateSlide);
