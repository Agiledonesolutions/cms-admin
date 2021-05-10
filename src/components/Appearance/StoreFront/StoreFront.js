import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../apis/api";
import Validate from "../../../utils/validation";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FileManager from "../../Media/FileManager";
import Loading from "../../Loading";

class StoreFront extends React.Component {
  state = {
    showModal: false,
    multiple: false,
    imageFor: "",
    activePanel: "general",
    activeTab: "generalsettings",
    pagesOptions: [],
    data: {
      SocialLinks: {
        Facebook: "",
        Twitter: "",
        Instagram: "",
        Youtube: "",
      },
      Features: {
        SectionStatus: false,
        Features: [
          {
            Title: "",
            SubTitle: "",
            Icon: ""
          },
          {
            Title: "",
            SubTitle: "",
            Icon: ""
          }, 
          {
            Title: "",
            SubTitle: "",
            Icon: ""
          }, 
          {
            Title: "",
            SubTitle: "",
            Icon: ""
          },        
        ]
      },
      Newsletter: {
        BackgroundImageId: "",
        image: "",
      },
      Logo: {
        FaviconId: "",
        HeaderLogoId: "",
        MailLogoId: "",
        image: {
          FaviconId: "",
          MailLogoId: "",
          MailLogoId: "",
        }
      },
      ProductPage: {
        CalltoActionURL: "",
        OpenInNewWindow: false,
        ImageId: "",
        image: ""
      },
      General: {
        WelcomeText: "",
        ThemeColor: "",
        CustomThemeColor: "",
        MailThemeColor: "",
        CustomMailThemeColor: "",
        Address: "",
        TermsConditionsPageId: "",
        PrivacyPolicyPageId: ""
      }
    },
    errors: [],
  };
  componentDidMount() {
  
    api.get('page/get').then(res=>{
      console.log(res.data.data)
      const {pagesOptions} = this.state
      res.data.data.forEach(val=>{
        let tmp = {
          label: val.name,
          value: val._id
        }
        pagesOptions.push(tmp)
      })
      this.setState({pagesOptions})
    }).catch(err=>{
      console.log("error fetching pages")
    })
  }
  setVal = (val, key, key2) => {
    const { data } = this.state;   
    data[key][key2] = val;
    this.setState({ data });
  };
  setArr = (val, key, key2, idx, key3) => {
    const { data } = this.state;   
    data[key][key2][idx][key3] = val;
    this.setState({ data });
  }
  setImageId = (id, multiple, image) => {
    const {data, imageFor} = this.state
    if(this.state.activePanel == "newsletter"){
      data.Newsletter[imageFor] = id
      data.Newsletter.image = image
    }
    else if(this.state.activePanel == "logo"){
      data.Logo[imageFor] = id
      data.Logo.image[imageFor] = image
    }
    else if(this.state.activePanel == "productpage"){
      data.ProductPage[imageFor] = id
      data.ProductPage.image = image
    }
    this.setState({data})
  };

  handleSubmit = () => {
    console.log(this.state.data);
    const { errors } = this.state;
    const { data } = this.state;

    // if (!errors.includes("name") && !Validate.validateNotEmpty(data["Name"])) {
    //   errors.push("name");
    //   this.setState({ errors });
    // } else if (
    //   errors.includes("name") &&
    //   Validate.validateNotEmpty(data["Name"])
    // ) {
    //   errors.splice(errors.indexOf("name"), 1);
    //   this.setState({ errors });
    // }

    if (!Validate.validateNotEmpty(this.state.errors)) {
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
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">General</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Welcome Text
                </label>
                <div className="col-md-9">
                  <input
                    name="WelcomeText"
                    className="form-control "
                    type="text"
                    value={this.state.data.General.WelcomeText}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "General", e.target.name)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_theme_color"
                  className="col-md-3 control-label text-left"
                >
                  Theme Color
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_theme_color"
                    className="form-control custom-select-black "
                    id="storefront_theme_color"
                  >
                    <option value="blue">Blue</option>
                    <option value="bondi-blue">Bondi Blue</option>
                    <option value="cornflower">Cornflower</option>
                    <option value="violet">Violet</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="pink">Pink</option>
                    <option value="black">Black</option>
                    <option value="indigo">Indigo</option>
                    <option value="magenta">Magenta</option>
                    <option value="custom_color">Custom Color</option>
                  </select>
                </div>
              </div>
              <div className="hide" id="custom-theme-color">
                <div className="form-group">
                  <label
                    htmlFor="storefront_custom_theme_color"
                    className="col-md-3 control-label text-left"
                  >
                    Custom Theme Color
                  </label>
                  <div className="col-md-9">
                    <input
                      name="storefront_custom_theme_color"
                      className="form-control "
                      id="storefront_custom_theme_color"
                      defaultValue
                      type="color"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_mail_theme_color"
                  className="col-md-3 control-label text-left"
                >
                  Mail Theme Color
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_mail_theme_color"
                    className="form-control custom-select-black "
                    id="storefront_mail_theme_color"
                  >
                    <option value="blue">Blue</option>
                    <option value="bondi-blue">Bondi Blue</option>
                    <option value="cornflower">Cornflower</option>
                    <option value="violet">Violet</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="pink">Pink</option>
                    <option value="black">Black</option>
                    <option value="indigo">Indigo</option>
                    <option value="magenta">Magenta</option>
                    <option value="custom_color">Custom Color</option>
                  </select>
                </div>
              </div>
              <div className="hide" id="custom-mail-theme-color">
                <div className="form-group">
                  <label
                    htmlFor="storefront_custom_mail_theme_color"
                    className="col-md-3 control-label text-left"
                  >
                    Custom Mail Theme Color
                  </label>
                  <div className="col-md-9">
                    <input
                      name="storefront_custom_mail_theme_color"
                      className="form-control "
                      id="storefront_custom_mail_theme_color"
                      defaultValue
                      type="color"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_slider"
                  className="col-md-3 control-label text-left"
                >
                  Slider
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_slider"
                    className="form-control custom-select-black "
                    id="storefront_slider"
                  >
                    <option value>Please Select</option>
                    <option value={1} selected>
                      Main Slider
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_terms_page"
                  className="col-md-3 control-label text-left"
                >
                  Terms &amp; Conditions Page
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_terms_page"
                    className="form-control custom-select-black "
                    id="storefront_terms_page"
                  >
                    <option value>Please Select</option>
                    <option value={1}>Privacy &amp; Policy</option>
                    <option value={2} selected>
                      Terms &amp; Conditions
                    </option>
                    <option value={3}>Return Policy</option>
                    <option value={4}>FAQ</option>
                    <option value={5}>About Us</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_privacy_page"
                  className="col-md-3 control-label text-left"
                >
                  Privacy Policy Page
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_privacy_page"
                    className="form-control custom-select-black "
                    id="storefront_privacy_page"
                  >
                    <option value>Please Select</option>
                    <option value={1} selected>
                      Privacy &amp; Policy
                    </option>
                    <option value={2}>Terms &amp; Conditions</option>
                    <option value={3}>Return Policy</option>
                    <option value={4}>FAQ</option>
                    <option value={5}>About Us</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[storefront_address]"
                  className="col-md-3 control-label text-left"
                >
                  Address
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[storefront_address]"
                    className="form-control "
                    id="translatable[storefront_address]"
                    defaultValue="Dhaka, Mohammadpur"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "logo") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Logo</h3>
          <div className="single-image-wrapper">
            <h4>Favicon</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              onClick={()=>{
                this.setState({showModal: true, multiple: false, imageFor: "FaviconId"})
              }}
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="clearfix" />
            <div className="single-image image-holder-wrapper clearfix">
            {this.state.data.Logo.image.FaviconId? <div className="image-holder">
                <img src={"https://big-cms.herokuapp.com/"+this.state.data.Logo.image.FaviconId} height={120} width={120}/>
                <button
                  type="button"
                  className="btn remove-image"
                  onClick={()=>{
                    this.setState({imageFor: "FaviconId"}, ()=>{
                      this.setImageId("", false, "")
                    })
                  }}
                />
                </div>: <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>}
            </div>
          </div>
          <div className="media-picker-divider" />
          <div className="single-image-wrapper">
            <h4>Header Logo</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              onClick={()=>{
                this.setState({showModal: true, multiple: false, imageFor: "HeaderLogoId"})
              }}            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="clearfix" />
            <div className="single-image image-holder-wrapper clearfix">
            {this.state.data.Logo.image.HeaderLogoId? <div className="image-holder">
                <img src={"https://big-cms.herokuapp.com/"+this.state.data.Logo.image.HeaderLogoId} height={120} width={120}/>
                <button
                  type="button"
                  className="btn remove-image"
                  onClick={()=>{
                    this.setState({imageFor: "HeaderLogoId"}, ()=>{
                      this.setImageId("", false, "")
                    })
                  }}
                />
                </div>: <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>}
            </div>
          </div>
          <div className="media-picker-divider" />
          <div className="single-image-wrapper">
            <h4>Mail Logo</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              onClick={()=>{
                this.setState({showModal: true, multiple: false, imageFor: "MailLogoId"})
              }}
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="clearfix" />
            <div className="single-image image-holder-wrapper clearfix">
            {this.state.data.Logo.image.MailLogoId? <div className="image-holder">
                <img src={"https://big-cms.herokuapp.com/"+this.state.data.Logo.image.MailLogoId} height={120} width={120}/>
                <button
                  type="button"
                  className="btn remove-image"
                  onClick={()=>{
                    this.setState({imageFor: "MailLogoId"}, ()=>{
                      this.setImageId("", false, "")
                    })
                  }}
                />
                </div>: <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>}
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "menus") {
      return (
        <div className="tab-pane fade active in" id="menus">
          <h3 className="tab-content-title">Menus</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="translatable[storefront_navbar_text]"
                  className="col-md-3 control-label text-left"
                >
                  Navbar Text
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[storefront_navbar_text]"
                    className="form-control "
                    id="translatable[storefront_navbar_text]"
                    defaultValue="Free shipping over $100+"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_primary_menu"
                  className="col-md-3 control-label text-left"
                >
                  Primary Menu
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_primary_menu"
                    className="form-control custom-select-black "
                    id="storefront_primary_menu"
                  >
                    <option value>Please Select</option>
                    <option value={1} selected>
                      Primary Menu
                    </option>
                    <option value={2}>Category Menu</option>
                    <option value={3}>Footer Menu 1</option>
                    <option value={4}>Footer Menu 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_category_menu"
                  className="col-md-3 control-label text-left"
                >
                  Category Menu
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_category_menu"
                    className="form-control custom-select-black "
                    id="storefront_category_menu"
                  >
                    <option value>Please Select</option>
                    <option value={1}>Primary Menu</option>
                    <option value={2} selected>
                      Category Menu
                    </option>
                    <option value={3}>Footer Menu 1</option>
                    <option value={4}>Footer Menu 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[storefront_footer_menu_one_title]"
                  className="col-md-3 control-label text-left"
                >
                  Footer Menu One Title
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[storefront_footer_menu_one_title]"
                    className="form-control "
                    id="translatable[storefront_footer_menu_one_title]"
                    defaultValue="Our Services"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_footer_menu_one"
                  className="col-md-3 control-label text-left"
                >
                  Footer Menu One
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_footer_menu_one"
                    className="form-control custom-select-black "
                    id="storefront_footer_menu_one"
                  >
                    <option value>Please Select</option>
                    <option value={1}>Primary Menu</option>
                    <option value={2}>Category Menu</option>
                    <option value={3} selected>
                      Footer Menu 1
                    </option>
                    <option value={4}>Footer Menu 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[storefront_footer_menu_two_title]"
                  className="col-md-3 control-label text-left"
                >
                  Footer Menu Two Title
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[storefront_footer_menu_two_title]"
                    className="form-control "
                    id="translatable[storefront_footer_menu_two_title]"
                    defaultValue="Information"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_footer_menu_two"
                  className="col-md-3 control-label text-left"
                >
                  Footer Menu Two
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_footer_menu_two"
                    className="form-control custom-select-black "
                    id="storefront_footer_menu_two"
                  >
                    <option value>Please Select</option>
                    <option value={1}>Primary Menu</option>
                    <option value={2}>Category Menu</option>
                    <option value={3}>Footer Menu 1</option>
                    <option value={4} selected>
                      Footer Menu 2
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "footer") {
      return (
        <div className="tab-pane fade active in" id="footer">
          <h3 className="tab-content-title">Footer</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="box-content clearfix">
                <div className="form-group">
                  <label
                    htmlFor="storefront_footer_tags[]-selectized"
                    className="col-md-3 control-label text-left"
                  >
                    Footer Tags
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_footer_tags[]"
                      className="selectize prevent-creation selectized"
                      id="storefront_footer_tags[]"
                      multiple="multiple"
                      tabIndex={-1}
                      style={{ display: "none" }}
                    >
                      <option value={33} selected="selected">
                        Accessories
                      </option>
                      <option value={4} selected="selected">
                        Electronics
                      </option>
                      <option value={9} selected="selected">
                        Entertainment
                      </option>
                      <option value={3} selected="selected">
                        Fashion
                      </option>
                      <option value={6} selected="selected">
                        Gadgets
                      </option>
                      <option value={8} selected="selected">
                        Hot deals
                      </option>
                      <option value={31} selected="selected">
                        Lifestyle
                      </option>
                      <option value={7} selected="selected">
                        Smartphone
                      </option>
                    </select>
                    <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                      <div className="selectize-input items not-full has-options has-items">
                        <div className="item" data-value={33}>
                          Accessories
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <div className="item" data-value={4}>
                          Electronics
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <div className="item" data-value={9}>
                          Entertainment
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <div className="item" data-value={3}>
                          Fashion
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <div className="item" data-value={6}>
                          Gadgets
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <div className="item" data-value={8}>
                          Hot deals
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <div className="item" data-value={31}>
                          Lifestyle
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <div className="item" data-value={7}>
                          Smartphone
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            tabIndex={-1}
                          >
                            ×
                          </a>
                        </div>
                        <input
                          type="select-multiple"
                          autoComplete="off"
                          tabIndex
                          id="storefront_footer_tags[]-selectized"
                          style={{ width: 4 }}
                        />
                      </div>
                      <div
                        className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                        style={{ display: "none" }}
                      >
                        <div className="selectize-dropdown-content" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_copyright_text]"
                    className="col-md-3 control-label text-left"
                  >
                    Footer Copyright Text
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_copyright_text]"
                      className="form-control "
                      id="translatable[storefront_copyright_text]"
                      defaultValue='Copyright © <a href="{{ store_url }}">{{ store_name }}</a> {{ year }}. All rights reserved.'
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <div className="single-image-wrapper">
                  <h4>Accepted Payment Methods Image</h4>
                  <button
                    type="button"
                    className="image-picker btn btn-default"
                    data-input-name="storefront_accepted_payment_methods_image"
                  >
                    <i className="fa fa-folder-open m-r-5" />
                    Browse
                  </button>
                  <div className="clearfix" />
                  <div className="single-image image-holder-wrapper clearfix">
                    <div className="image-holder">
                      <img src="https://fleetcart.envaysoft.com/storage/media/r28gsyypi1oT531dU1MY1EjSskTWQbRIm7OHyTCl.png" />
                      <button
                        type="button"
                        className="btn remove-image"
                        data-input-name="storefront_accepted_payment_methods_image"
                      />
                      <input
                        type="hidden"
                        name="storefront_accepted_payment_methods_image"
                        defaultValue={983}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "newsletter") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Newsletter</h3>
          <div className="single-image-wrapper">
            <h4>Background Image</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              onClick={()=>{
                this.setState({showModal: true, multiple: false, imageFor: "BackgroundImageId"})
              }}
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="clearfix" />
            <div className="single-image image-holder-wrapper clearfix">
             
              {this.state.data.Newsletter.image? <div className="image-holder">
                <img src={"https://big-cms.herokuapp.com/"+this.state.data.Newsletter.image} height={120} width={120}/>
                <button
                  type="button"
                  className="btn remove-image"
                  onClick={()=>{
                    this.setState({imageFor: "BackgroundImageId"}, ()=>{
                      this.setImageId("", false, "")
                    })
                  }}
                />
                </div>: <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>}
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "features") {
      return (
        <div className="tab-pane fade active in">
          <h3 className="tab-content-title">Features</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="storefront_features_section_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="SectionStatus"
                      id="storefront_features_section_enabled"
                      checked={this.state.data.Features.SectionStatus}
                      onChange={(e)=>{
                        this.setVal(!this.state.data.Features.SectionStatus, "Features", e.target.name)
                      }}
                    />
                    <label htmlFor="storefront_features_section_enabled">
                      Enable features section
                    </label>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              {this.state.data.Features.Features.map((val, idx)=>(
              <div className="box-content">
                <h4 className="section-title">Feature {idx+1}</h4>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="Title"
                      className="form-control "
                      type="text"
                      value={this.state.data.Features.Features[idx].Title}
                      onChange={(e)=>{
                        this.setArr(e.target.value, "Features","Features", idx, e.target.name)
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Subtitle
                  </label>
                  <div className="col-md-9">
                    <input
                      name="SubTitle"
                      className="form-control "
                      type="text"
                      value={this.state.data.Features.Features[0].SubTitle}
                      onChange={(e)=>{
                        this.setArr(e.target.value, "Features","Features", idx, e.target.name)
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Icon
                  </label>
                  <div className="col-md-9">
                    <input
                      name="Icon"
                      className="form-control "
                      type="text"
                      value={this.state.data.Features.Features[0].Icon}
                      onChange={(e)=>{
                        this.setArr(e.target.value, "Features","Features", idx, e.target.name)
                      }}
                    />
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "productpage") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Product Page</h3>
          <div className="accordion-box-content">
            <div className="tab-content clearfix">
              <div className="panel-wrap">
                <div className="panel">
                  <div className="panel-header">
                    <h5>Product Page Banner</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image" onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: "ImageId"})
                    }}>
                    {this.state.data.ProductPage.image?  
                <img src={"https://big-cms.herokuapp.com/"+this.state.data.ProductPage.image} />
                
                
                : <div className="placeholder">
                <i className="fa fa-picture-o" />
              </div>}
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label >
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="CalltoActionURL"
                              className="form-control"
                              value={this.state.data.ProductPage.CalltoActionURL}
                              onChange={(e)=>{
                                this.setVal(e.target.value, "ProductPage", e.target.name)
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              name="OpenInNewWindow"
                              id="storefront_product_page_banner-open-in-new-window"
                              checked={this.state.data.ProductPage.OpenInNewWindow}
                              onChange={(e)=>{
                                this.setVal(!this.state.data.ProductPage.OpenInNewWindow, "ProductPage", e.target.name)
                              }}
                            />
                            <label htmlFor="storefront_product_page_banner-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "sociallinks") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Social Links</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Facebook
                </label>
                <div className="col-md-9">
                  <input
                    name="Facebook"
                    className="form-control "
                    type="text"
                    value={this.state.data.SocialLinks.Facebook}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "SocialLinks", e.target.name)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Twitter
                </label>
                <div className="col-md-9">
                  <input
                    name="Twitter"
                    className="form-control "
                    type="text"
                    value={this.state.data.SocialLinks.Twitter}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "SocialLinks", e.target.name)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Instagram
                </label>
                <div className="col-md-9">
                  <input
                    name="Instagram"
                    className="form-control "
                    type="text"
                    value={this.state.data.SocialLinks.Instagram}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "SocialLinks", e.target.name)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Youtube
                </label>
                <div className="col-md-9">
                  <input
                    name="Youtube"
                    className="form-control "
                    type="text"
                    value={this.state.data.SocialLinks.Youtube}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "SocialLinks", e.target.name)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "sliderbanners") {
      return (
        <div className="tab-pane fade active in" id="slider_banners">
          <h3 className="tab-content-title">Slider Banners</h3>
          <div className="accordion-box-content">
            <div className="tab-content clearfix">
              <div className="panel-wrap">
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 1</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/5siKhRlEDQFmbiJRwCNBW3rDsbG7m1r2PibvtNeF.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_slider_banner_1_file_id]"
                        defaultValue={978}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_slider_banner_1-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_slider_banner_1_call_to_action_url"
                              defaultValue="/categories/backpacks/products"
                              className="form-control"
                              id="storefront_slider_banner_1-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_slider_banner_1_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_slider_banner_1_open_in_new_window"
                              defaultValue={1}
                              id="storefront_slider_banner_1-open-in-new-window"
                            />
                            <label htmlFor="storefront_slider_banner_1-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 2</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/yl6rNkswnKQzh7mouQ0HpagRLwBpnq3Mt9LZMRak.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_slider_banner_2_file_id]"
                        defaultValue={979}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_slider_banner_2-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_slider_banner_2_call_to_action_url"
                              defaultValue="/categories/iphone/products"
                              className="form-control"
                              id="storefront_slider_banner_2-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_slider_banner_2_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_slider_banner_2_open_in_new_window"
                              defaultValue={1}
                              id="storefront_slider_banner_2-open-in-new-window"
                              defaultChecked
                            />
                            <label htmlFor="storefront_slider_banner_2-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "threecolfullwidth") {
      return (
        <div
          className="tab-pane fade active in"
          id="three_column_full_width_banners"
        >
          <h3 className="tab-content-title">Three Column Full Width Banners</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    htmlFor="storefront_three_column_full_width_banners_enabled"
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="storefront_three_column_full_width_banners_enabled"
                      />
                      <input
                        type="checkbox"
                        name="storefront_three_column_full_width_banners_enabled"
                        className
                        id="storefront_three_column_full_width_banners_enabled"
                        defaultValue={1}
                        defaultChecked
                      />
                      <label htmlFor="storefront_three_column_full_width_banners_enabled">
                        Enable three column full width banners section
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content clearfix">
              <div className="panel-wrap">
                <div className="single-image-wrapper">
                  <h4>Background</h4>
                  <button
                    type="button"
                    className="image-picker btn btn-default"
                    data-input-name="storefront_three_column_full_width_banners_background_file_id"
                  >
                    <i className="fa fa-folder-open m-r-5" />
                    Browse
                  </button>
                  <div className="clearfix" />
                  <div className="single-image image-holder-wrapper clearfix">
                    <div className="image-holder">
                      <img src="https://fleetcart.envaysoft.com/storage/media/vm21euwszrldK6E9iEtqsm2WtiJ4OyaA7VIGHPe3.png" />
                      <button
                        type="button"
                        className="btn remove-image"
                        data-input-name="storefront_three_column_full_width_banners_background_file_id"
                      />
                      <input
                        type="hidden"
                        name="storefront_three_column_full_width_banners_background_file_id"
                        defaultValue={982}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 1</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/SnNz5B0YIEGCw1OdLhFJbqF7hfCNc80adaLCdqOE.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_three_column_full_width_banners_1_file_id]"
                        defaultValue={974}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_three_column_full_width_banners_1-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_three_column_full_width_banners_1_call_to_action_url"
                              defaultValue="/categories/home-appliances/products"
                              className="form-control"
                              id="storefront_three_column_full_width_banners_1-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_three_column_full_width_banners_1_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_three_column_full_width_banners_1_open_in_new_window"
                              defaultValue={1}
                              id="storefront_three_column_full_width_banners_1-open-in-new-window"
                            />
                            <label htmlFor="storefront_three_column_full_width_banners_1-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 2</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/3YFgcINuEaLyLvy6QjxKwKVDMALI9qzmXEN7Vqx3.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_three_column_full_width_banners_2_file_id]"
                        defaultValue={977}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_three_column_full_width_banners_2-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_three_column_full_width_banners_2_call_to_action_url"
                              defaultValue="/categories/home-appliances/products"
                              className="form-control"
                              id="storefront_three_column_full_width_banners_2-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_three_column_full_width_banners_2_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_three_column_full_width_banners_2_open_in_new_window"
                              defaultValue={1}
                              id="storefront_three_column_full_width_banners_2-open-in-new-window"
                            />
                            <label htmlFor="storefront_three_column_full_width_banners_2-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 3</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/pmQxhyWNznFCMZvc4KTv4HNk4RfG3eBlNqR0xsCt.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_three_column_full_width_banners_3_file_id]"
                        defaultValue={976}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_three_column_full_width_banners_3-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_three_column_full_width_banners_3_call_to_action_url"
                              defaultValue="/categories/samsung/products"
                              className="form-control"
                              id="storefront_three_column_full_width_banners_3-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_three_column_full_width_banners_3_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_three_column_full_width_banners_3_open_in_new_window"
                              defaultValue={1}
                              id="storefront_three_column_full_width_banners_3-open-in-new-window"
                            />
                            <label htmlFor="storefront_three_column_full_width_banners_3-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "featuredcategories") {
      return (
        <div className="tab-pane fade active in" id="featured_categories">
          <h3 className="tab-content-title">Featured Categories</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="storefront_featured_categories_section_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="storefront_featured_categories_section_enabled"
                    />
                    <input
                      type="checkbox"
                      name="storefront_featured_categories_section_enabled"
                      className
                      id="storefront_featured_categories_section_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="storefront_featured_categories_section_enabled">
                      Enable featured categories section
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[storefront_featured_categories_section_title]"
                  className="col-md-3 control-label text-left"
                >
                  Section Title
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[storefront_featured_categories_section_title]"
                    className="form-control "
                    id="translatable[storefront_featured_categories_section_title]"
                    defaultValue="Top Categories in Sales and Trending"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[storefront_featured_categories_section_subtitle]"
                  className="col-md-3 control-label text-left"
                >
                  Section Subtitle
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[storefront_featured_categories_section_subtitle]"
                    className="form-control "
                    id="translatable[storefront_featured_categories_section_subtitle]"
                    defaultValue="Last Month upto 1500+ Products Sales From this catagory. You can choose a product from here and save money."
                    type="text"
                  />
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Category 1</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_1_category_id"
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_1_category_id"
                      className="form-control custom-select-black "
                      id="storefront_featured_categories_section_category_1_category_id"
                    >
                      <option value>Please Select</option>
                      <option value={181}>Electronics</option>
                      <option value={183}>¦–– Mobiles</option>
                      <option value={192}>¦–– ¦–– Smartphones</option>
                      <option value={193}>¦–– ¦–– Android</option>
                      <option value={194}>¦–– ¦–– iPhone</option>
                      <option value={195}>¦–– ¦–– Featured</option>
                      <option value={196}>¦–– ¦–– Refurbished</option>
                      <option value={197}>¦–– ¦–– Brands</option>
                      <option value={185}>¦–– Mobile Accessories</option>
                      <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                      <option value={199}>¦–– ¦–– Cables</option>
                      <option value={200}>¦–– ¦–– Chargers</option>
                      <option value={201}>¦–– ¦–– Power Bank</option>
                      <option value={202}>¦–– ¦–– Headphones</option>
                      <option value={203}>¦–– ¦–– Screen Protectors</option>
                      <option value={184}>¦–– Hot Brands</option>
                      <option value={187}>¦–– ¦–– OnePlus</option>
                      <option value={188}>¦–– ¦–– Apple</option>
                      <option value={189}>¦–– ¦–– Samsung</option>
                      <option value={190}>¦–– ¦–– Huawei</option>
                      <option value={191}>¦–– ¦–– Sony</option>
                      <option value={182} selected>
                        ¦–– Laptops
                      </option>
                      <option value={204}>¦–– ¦–– Mackbook</option>
                      <option value={205}>¦–– ¦–– Gaming</option>
                      <option value={206}>¦–– ¦–– Ultraslim</option>
                      <option value={207}>¦–– ¦–– Tablets</option>
                      <option value={212}>¦–– ¦–– All Laptops</option>
                      <option value={186}>¦–– Computer Accessories</option>
                      <option value={208}>¦–– ¦–– Monitors</option>
                      <option value={209}>¦–– ¦–– Keyboard &amp; Mouse</option>
                      <option value={210}>¦–– ¦–– Pendrive</option>
                      <option value={211}>¦–– ¦–– Speaker</option>
                      <option value={12}>Men's Fashion</option>
                      <option value={13}>¦–– Clothing</option>
                      <option value={15}>¦–– ¦–– Shirts</option>
                      <option value={14}>¦–– ¦–– All Clothing</option>
                      <option value={16}>¦–– ¦–– Sportswear</option>
                      <option value={17}>¦–– ¦–– Belts</option>
                      <option value={18}>¦–– ¦–– Pants</option>
                      <option value={26}>¦–– ¦–– Formal Shoes</option>
                      <option value={19}>¦–– Shoes</option>
                      <option value={20}>¦–– ¦–– All Shoes</option>
                      <option value={21}>¦–– ¦–– Sneakers</option>
                      <option value={22}>¦–– ¦–– Boots</option>
                      <option value={23}>¦–– ¦–– Sandals</option>
                      <option value={24}>
                        ¦–– ¦–– Slippers &amp; Flip-flops
                      </option>
                      <option value={25}>¦–– ¦–– Sports Shoes</option>
                      <option value={27}>¦–– Outerwear &amp; Jackets</option>
                      <option value={28}>¦–– ¦–– Trench</option>
                      <option value={30}>¦–– ¦–– Genuine Leather</option>
                      <option value={32}>¦–– ¦–– Down Jackets</option>
                      <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                      <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                      <option value={35}>¦–– Hot Sale</option>
                      <option value={36}>¦–– ¦–– Glasses</option>
                      <option value={37}>¦–– ¦–– Jackets</option>
                      <option value={38}>¦–– ¦–– T-Shirts</option>
                      <option value={39}>¦–– ¦–– Shirts</option>
                      <option value={40}>¦–– ¦–– Belts</option>
                      <option value={52}>¦–– Bottoms</option>
                      <option value={53}>¦–– ¦–– Casual Pants</option>
                      <option value={54}>¦–– ¦–– Sweatpants</option>
                      <option value={55}>¦–– ¦–– Cargo Pants</option>
                      <option value={56}>¦–– ¦–– Jeans</option>
                      <option value={57}>¦–– ¦–– Harem Pants</option>
                      <option value={59}>Consumer Electronics</option>
                      <option value={120}>¦–– Televisions</option>
                      <option value={7}>¦–– Gadgets</option>
                      <option value={142}>¦–– Drones</option>
                      <option value={108}>¦–– Supplies</option>
                      <option value={109}>¦–– Camera &amp; Photo</option>
                      <option value={110}>¦–– Car &amp; Vehicle</option>
                      <option value={111}>¦–– Cell Phones</option>
                      <option value={112}>¦–– Computer</option>
                      <option value={113}>¦–– GPS &amp; Navigation</option>
                      <option value={114}>¦–– Headphones</option>
                      <option value={115}>¦–– Home Audio</option>
                      <option value={116}>¦–– Office Electronics</option>
                      <option value={117}>¦–– Audio &amp; Video</option>
                      <option value={118}>¦–– Security</option>
                      <option value={119}>¦–– Service Plans</option>
                      <option value={121}>¦–– Video Game</option>
                      <option value={122}>¦–– Video Projectors</option>
                      <option value={123}>¦–– Wearable Technology</option>
                      <option value={124}>¦–– eBook Readers</option>
                      <option value={60}>¦–– Office Supplies</option>
                      <option value={61}>¦–– All Computers</option>
                      <option value={63}>¦–– Desktops &amp; Monitors</option>
                      <option value={64}>¦–– Drives &amp; Storage</option>
                      <option value={65}>¦–– Networking</option>
                      <option value={66}>¦–– Keyboards &amp; Mice</option>
                      <option value={67}>¦–– PC Gaming</option>
                      <option value={68}>¦–– Computer Accessories</option>
                      <option value={69}>¦–– Printers &amp; Ink</option>
                      <option value={70}>¦–– Office Supplies</option>
                      <option value={82}>Watches</option>
                      <option value={83}>¦–– Men's Watches</option>
                      <option value={84}>¦–– ¦–– Analog Watches</option>
                      <option value={85}>¦–– ¦–– Sports Watches</option>
                      <option value={86}>¦–– ¦–– Mechanical Watches</option>
                      <option value={87}>¦–– ¦–– Digital Watches</option>
                      <option value={88}>¦–– Women's Watches</option>
                      <option value={89}>¦–– Children's Watches</option>
                      <option value={90}>¦–– Pocket Watches</option>
                      <option value={91}>¦–– Watch Accessories</option>
                      <option value={92}>¦–– Women's Bracelets</option>
                      <option value={156}>Home Appliances</option>
                      <option value={157}>¦–– Bedding</option>
                      <option value={158}>¦–– Furniture</option>
                      <option value={159}>¦–– Decor</option>
                      <option value={160}>¦–– Curtains</option>
                      <option value={161}>¦–– Kitchen Utensils</option>
                      <option value={162}>¦–– Cooking &amp; Baking</option>
                      <option value={163}>¦–– Gas &amp; Stove</option>
                      <option value={164}>¦–– Plastics &amp; Melamine</option>
                      <option value={165}>¦–– Ceramics &amp; Dinnerware</option>
                      <option value={166}>
                        ¦–– Storage &amp; Organisation
                      </option>
                      <option value={167}>¦–– Home Care</option>
                      <option value={168}>¦–– Cleaning Tools</option>
                      <option value={169}>¦–– Laundry</option>
                      <option value={170}>¦–– Towel</option>
                      <option value={171}>¦–– Travel Accessories</option>
                      <option value={172}>¦–– Pest Control</option>
                      <option value={98}>Backpacks</option>
                      <option value={99}>¦–– Men's Bags</option>
                      <option value={100}>¦–– Women's Bags</option>
                      <option value={102}>¦–– Wallets</option>
                      <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                      <option value={104}>¦–– Travel Bags</option>
                      <option value={105}>¦–– Functional Bags</option>
                      <option value={106}>¦–– Coin Purses</option>
                      <option value={107}>¦–– Bag Parts</option>
                      <option value={126}>Women's Fashion</option>
                      <option value={127}>¦–– All Beauty</option>
                      <option value={128}>¦–– Make-up</option>
                      <option value={129}>¦–– Luxury Beauty</option>
                      <option value={130}>¦–– Watches</option>
                      <option value={213}>¦–– Necklace</option>
                      <option value={133}>¦–– Rings</option>
                      <option value={131}>¦–– Glasses</option>
                      <option value={132}>¦–– All Perfumes</option>
                      <option value={134}>¦–– Women Perfumes</option>
                      <option value={135}>¦–– Gift Sets</option>
                      <option value={136}>¦–– All Health</option>
                      <option value={137}>¦–– Personal Care</option>
                      <option value={138}>¦–– Hair Care &amp; Styling</option>
                      <option value={139}>¦–– Bath &amp; Body</option>
                      <option value={140}>¦–– Dental Care</option>
                      <option value={141}>¦–– Diet &amp; Nutrition</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_1_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_1_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_featured_categories_section_category_1_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_1_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_featured_categories_section_category_1_products_limit"
                        className="form-control "
                        id="storefront_featured_categories_section_category_1_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_1_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_featured_categories_section_category_1_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_featured_categories_section_category_1_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full has-options">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_featured_categories_section_category_1_products[]-selectized"
                            style={{
                              width: 4,
                              opacity: 1,
                              position: "relative",
                              left: 0,
                            }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{
                            display: "none",
                            width: "434.7px",
                            top: 40,
                            left: 0,
                            visibility: "visible",
                          }}
                        >
                          <div className="selectize-dropdown-content">
                            <div
                              className="option"
                              data-selectable
                              data-value={108}
                            >
                              SAUCE ORIGIN 910-CL Selvedge Jeans Raw Jeans Mens
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={33}
                            >
                              Google - Pixel 3a with 64GB Memory Cell Phone
                              (Unlocked) - Just Black - G020G
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={80}
                            >
                              HENCHIRY New Men's Winter Jean Jacket
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={81}
                            >
                              NaranjaSabor Men's Denim Jackets
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={82}
                            >
                              6XL Men jacket jeans military army soldier cotton
                              Mens Bomber jackets
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={83}
                            >
                              0 Degree Super Warm Winter Ski Jacket Men
                              Waterproof
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={84}
                            >
                              Waterproof Jacket Men Outdoor Camping Ski
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={106}
                            >
                              KSTUN Men's Jeans Classic Direct Stretch Dark Blue
                              Business Casual Denim Pants
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={107}
                            >
                              Classic Men Casual Mid-Rise Straight Slim Denim
                              Jeans Youth Long Pants
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={134}
                            >
                              NaranjaSabor Fashion Thin Men's Jackets
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={1}
                            >
                              Apple MacBook Pro 2019 Model (13-Inch, Intel Core
                              i5, 1.4Ghz, 8GB, 128GB)
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={5}
                            >
                              Huawei Kepler MateBook D 14" - AMD R5 - 8GB+256GB,
                              Mystic Silver
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={6}
                            >
                              Acer Swift 3 SF315-41G-R6MP Laptop, 15.6" Full HD
                              IPS Display, AMD Ryzen 7 2700U
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={7}
                            >
                              Apple MacBook Air (13-inch, 8GB RAM, 256GB
                              Storage, 1.6GHz Intel Core i5) - Gold
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={8}
                            >
                              ASUS ROG Zephyrus S GX502GV Gaming Laptop Intel
                              i7-9750H, 32GB RAM
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={11}
                            >
                              ASUS Mothership X Laptop (Intel i9-9980HK 8-Core,
                              64GB RAM, 2TB PCIe SSD, 17.3" Full HD
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={14}
                            >
                              iPhone 11 Pro Max 64G 6.5-inch Genuine Phone With
                              Dual Card and Full Screen
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={16}
                            >
                              Samsung Galaxy A51 (SM-A515F/DS) Dual SIM 128GB,
                              GSM Unlocked
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={17}
                            >
                              Huawei Mate 30 6.62" No Google Play TAS-AL00/DS
                              128GB 8GB RAM (GSM Only, No CDMA) Factory Unlocked
                            </div>
                            <div
                              className="option"
                              data-selectable
                              data-value={20}
                            >
                              Apple iPad Pro (11-inch, Wi-Fi, 64GB) - Silver
                              (1st Generation)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Category 2</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_2_category_id"
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_2_category_id"
                      className="form-control custom-select-black "
                      id="storefront_featured_categories_section_category_2_category_id"
                    >
                      <option value>Please Select</option>
                      <option value={181}>Electronics</option>
                      <option value={183} selected>
                        ¦–– Mobiles
                      </option>
                      <option value={192}>¦–– ¦–– Smartphones</option>
                      <option value={193}>¦–– ¦–– Android</option>
                      <option value={194}>¦–– ¦–– iPhone</option>
                      <option value={195}>¦–– ¦–– Featured</option>
                      <option value={196}>¦–– ¦–– Refurbished</option>
                      <option value={197}>¦–– ¦–– Brands</option>
                      <option value={185}>¦–– Mobile Accessories</option>
                      <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                      <option value={199}>¦–– ¦–– Cables</option>
                      <option value={200}>¦–– ¦–– Chargers</option>
                      <option value={201}>¦–– ¦–– Power Bank</option>
                      <option value={202}>¦–– ¦–– Headphones</option>
                      <option value={203}>¦–– ¦–– Screen Protectors</option>
                      <option value={184}>¦–– Hot Brands</option>
                      <option value={187}>¦–– ¦–– OnePlus</option>
                      <option value={188}>¦–– ¦–– Apple</option>
                      <option value={189}>¦–– ¦–– Samsung</option>
                      <option value={190}>¦–– ¦–– Huawei</option>
                      <option value={191}>¦–– ¦–– Sony</option>
                      <option value={182}>¦–– Laptops</option>
                      <option value={204}>¦–– ¦–– Mackbook</option>
                      <option value={205}>¦–– ¦–– Gaming</option>
                      <option value={206}>¦–– ¦–– Ultraslim</option>
                      <option value={207}>¦–– ¦–– Tablets</option>
                      <option value={212}>¦–– ¦–– All Laptops</option>
                      <option value={186}>¦–– Computer Accessories</option>
                      <option value={208}>¦–– ¦–– Monitors</option>
                      <option value={209}>¦–– ¦–– Keyboard &amp; Mouse</option>
                      <option value={210}>¦–– ¦–– Pendrive</option>
                      <option value={211}>¦–– ¦–– Speaker</option>
                      <option value={12}>Men's Fashion</option>
                      <option value={13}>¦–– Clothing</option>
                      <option value={15}>¦–– ¦–– Shirts</option>
                      <option value={14}>¦–– ¦–– All Clothing</option>
                      <option value={16}>¦–– ¦–– Sportswear</option>
                      <option value={17}>¦–– ¦–– Belts</option>
                      <option value={18}>¦–– ¦–– Pants</option>
                      <option value={26}>¦–– ¦–– Formal Shoes</option>
                      <option value={19}>¦–– Shoes</option>
                      <option value={20}>¦–– ¦–– All Shoes</option>
                      <option value={21}>¦–– ¦–– Sneakers</option>
                      <option value={22}>¦–– ¦–– Boots</option>
                      <option value={23}>¦–– ¦–– Sandals</option>
                      <option value={24}>
                        ¦–– ¦–– Slippers &amp; Flip-flops
                      </option>
                      <option value={25}>¦–– ¦–– Sports Shoes</option>
                      <option value={27}>¦–– Outerwear &amp; Jackets</option>
                      <option value={28}>¦–– ¦–– Trench</option>
                      <option value={30}>¦–– ¦–– Genuine Leather</option>
                      <option value={32}>¦–– ¦–– Down Jackets</option>
                      <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                      <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                      <option value={35}>¦–– Hot Sale</option>
                      <option value={36}>¦–– ¦–– Glasses</option>
                      <option value={37}>¦–– ¦–– Jackets</option>
                      <option value={38}>¦–– ¦–– T-Shirts</option>
                      <option value={39}>¦–– ¦–– Shirts</option>
                      <option value={40}>¦–– ¦–– Belts</option>
                      <option value={52}>¦–– Bottoms</option>
                      <option value={53}>¦–– ¦–– Casual Pants</option>
                      <option value={54}>¦–– ¦–– Sweatpants</option>
                      <option value={55}>¦–– ¦–– Cargo Pants</option>
                      <option value={56}>¦–– ¦–– Jeans</option>
                      <option value={57}>¦–– ¦–– Harem Pants</option>
                      <option value={59}>Consumer Electronics</option>
                      <option value={120}>¦–– Televisions</option>
                      <option value={7}>¦–– Gadgets</option>
                      <option value={142}>¦–– Drones</option>
                      <option value={108}>¦–– Supplies</option>
                      <option value={109}>¦–– Camera &amp; Photo</option>
                      <option value={110}>¦–– Car &amp; Vehicle</option>
                      <option value={111}>¦–– Cell Phones</option>
                      <option value={112}>¦–– Computer</option>
                      <option value={113}>¦–– GPS &amp; Navigation</option>
                      <option value={114}>¦–– Headphones</option>
                      <option value={115}>¦–– Home Audio</option>
                      <option value={116}>¦–– Office Electronics</option>
                      <option value={117}>¦–– Audio &amp; Video</option>
                      <option value={118}>¦–– Security</option>
                      <option value={119}>¦–– Service Plans</option>
                      <option value={121}>¦–– Video Game</option>
                      <option value={122}>¦–– Video Projectors</option>
                      <option value={123}>¦–– Wearable Technology</option>
                      <option value={124}>¦–– eBook Readers</option>
                      <option value={60}>¦–– Office Supplies</option>
                      <option value={61}>¦–– All Computers</option>
                      <option value={63}>¦–– Desktops &amp; Monitors</option>
                      <option value={64}>¦–– Drives &amp; Storage</option>
                      <option value={65}>¦–– Networking</option>
                      <option value={66}>¦–– Keyboards &amp; Mice</option>
                      <option value={67}>¦–– PC Gaming</option>
                      <option value={68}>¦–– Computer Accessories</option>
                      <option value={69}>¦–– Printers &amp; Ink</option>
                      <option value={70}>¦–– Office Supplies</option>
                      <option value={82}>Watches</option>
                      <option value={83}>¦–– Men's Watches</option>
                      <option value={84}>¦–– ¦–– Analog Watches</option>
                      <option value={85}>¦–– ¦–– Sports Watches</option>
                      <option value={86}>¦–– ¦–– Mechanical Watches</option>
                      <option value={87}>¦–– ¦–– Digital Watches</option>
                      <option value={88}>¦–– Women's Watches</option>
                      <option value={89}>¦–– Children's Watches</option>
                      <option value={90}>¦–– Pocket Watches</option>
                      <option value={91}>¦–– Watch Accessories</option>
                      <option value={92}>¦–– Women's Bracelets</option>
                      <option value={156}>Home Appliances</option>
                      <option value={157}>¦–– Bedding</option>
                      <option value={158}>¦–– Furniture</option>
                      <option value={159}>¦–– Decor</option>
                      <option value={160}>¦–– Curtains</option>
                      <option value={161}>¦–– Kitchen Utensils</option>
                      <option value={162}>¦–– Cooking &amp; Baking</option>
                      <option value={163}>¦–– Gas &amp; Stove</option>
                      <option value={164}>¦–– Plastics &amp; Melamine</option>
                      <option value={165}>¦–– Ceramics &amp; Dinnerware</option>
                      <option value={166}>
                        ¦–– Storage &amp; Organisation
                      </option>
                      <option value={167}>¦–– Home Care</option>
                      <option value={168}>¦–– Cleaning Tools</option>
                      <option value={169}>¦–– Laundry</option>
                      <option value={170}>¦–– Towel</option>
                      <option value={171}>¦–– Travel Accessories</option>
                      <option value={172}>¦–– Pest Control</option>
                      <option value={98}>Backpacks</option>
                      <option value={99}>¦–– Men's Bags</option>
                      <option value={100}>¦–– Women's Bags</option>
                      <option value={102}>¦–– Wallets</option>
                      <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                      <option value={104}>¦–– Travel Bags</option>
                      <option value={105}>¦–– Functional Bags</option>
                      <option value={106}>¦–– Coin Purses</option>
                      <option value={107}>¦–– Bag Parts</option>
                      <option value={126}>Women's Fashion</option>
                      <option value={127}>¦–– All Beauty</option>
                      <option value={128}>¦–– Make-up</option>
                      <option value={129}>¦–– Luxury Beauty</option>
                      <option value={130}>¦–– Watches</option>
                      <option value={213}>¦–– Necklace</option>
                      <option value={133}>¦–– Rings</option>
                      <option value={131}>¦–– Glasses</option>
                      <option value={132}>¦–– All Perfumes</option>
                      <option value={134}>¦–– Women Perfumes</option>
                      <option value={135}>¦–– Gift Sets</option>
                      <option value={136}>¦–– All Health</option>
                      <option value={137}>¦–– Personal Care</option>
                      <option value={138}>¦–– Hair Care &amp; Styling</option>
                      <option value={139}>¦–– Bath &amp; Body</option>
                      <option value={140}>¦–– Dental Care</option>
                      <option value={141}>¦–– Diet &amp; Nutrition</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_2_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_2_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_featured_categories_section_category_2_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_2_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_featured_categories_section_category_2_products_limit"
                        className="form-control "
                        id="storefront_featured_categories_section_category_2_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_2_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_featured_categories_section_category_2_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_featured_categories_section_category_2_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_featured_categories_section_category_2_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Category 3</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_3_category_id"
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_3_category_id"
                      className="form-control custom-select-black "
                      id="storefront_featured_categories_section_category_3_category_id"
                    >
                      <option value>Please Select</option>
                      <option value={181}>Electronics</option>
                      <option value={183}>¦–– Mobiles</option>
                      <option value={192}>¦–– ¦–– Smartphones</option>
                      <option value={193}>¦–– ¦–– Android</option>
                      <option value={194}>¦–– ¦–– iPhone</option>
                      <option value={195}>¦–– ¦–– Featured</option>
                      <option value={196}>¦–– ¦–– Refurbished</option>
                      <option value={197}>¦–– ¦–– Brands</option>
                      <option value={185}>¦–– Mobile Accessories</option>
                      <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                      <option value={199}>¦–– ¦–– Cables</option>
                      <option value={200}>¦–– ¦–– Chargers</option>
                      <option value={201}>¦–– ¦–– Power Bank</option>
                      <option value={202}>¦–– ¦–– Headphones</option>
                      <option value={203}>¦–– ¦–– Screen Protectors</option>
                      <option value={184}>¦–– Hot Brands</option>
                      <option value={187}>¦–– ¦–– OnePlus</option>
                      <option value={188}>¦–– ¦–– Apple</option>
                      <option value={189}>¦–– ¦–– Samsung</option>
                      <option value={190}>¦–– ¦–– Huawei</option>
                      <option value={191}>¦–– ¦–– Sony</option>
                      <option value={182}>¦–– Laptops</option>
                      <option value={204}>¦–– ¦–– Mackbook</option>
                      <option value={205}>¦–– ¦–– Gaming</option>
                      <option value={206}>¦–– ¦–– Ultraslim</option>
                      <option value={207} selected>
                        ¦–– ¦–– Tablets
                      </option>
                      <option value={212}>¦–– ¦–– All Laptops</option>
                      <option value={186}>¦–– Computer Accessories</option>
                      <option value={208}>¦–– ¦–– Monitors</option>
                      <option value={209}>¦–– ¦–– Keyboard &amp; Mouse</option>
                      <option value={210}>¦–– ¦–– Pendrive</option>
                      <option value={211}>¦–– ¦–– Speaker</option>
                      <option value={12}>Men's Fashion</option>
                      <option value={13}>¦–– Clothing</option>
                      <option value={15}>¦–– ¦–– Shirts</option>
                      <option value={14}>¦–– ¦–– All Clothing</option>
                      <option value={16}>¦–– ¦–– Sportswear</option>
                      <option value={17}>¦–– ¦–– Belts</option>
                      <option value={18}>¦–– ¦–– Pants</option>
                      <option value={26}>¦–– ¦–– Formal Shoes</option>
                      <option value={19}>¦–– Shoes</option>
                      <option value={20}>¦–– ¦–– All Shoes</option>
                      <option value={21}>¦–– ¦–– Sneakers</option>
                      <option value={22}>¦–– ¦–– Boots</option>
                      <option value={23}>¦–– ¦–– Sandals</option>
                      <option value={24}>
                        ¦–– ¦–– Slippers &amp; Flip-flops
                      </option>
                      <option value={25}>¦–– ¦–– Sports Shoes</option>
                      <option value={27}>¦–– Outerwear &amp; Jackets</option>
                      <option value={28}>¦–– ¦–– Trench</option>
                      <option value={30}>¦–– ¦–– Genuine Leather</option>
                      <option value={32}>¦–– ¦–– Down Jackets</option>
                      <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                      <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                      <option value={35}>¦–– Hot Sale</option>
                      <option value={36}>¦–– ¦–– Glasses</option>
                      <option value={37}>¦–– ¦–– Jackets</option>
                      <option value={38}>¦–– ¦–– T-Shirts</option>
                      <option value={39}>¦–– ¦–– Shirts</option>
                      <option value={40}>¦–– ¦–– Belts</option>
                      <option value={52}>¦–– Bottoms</option>
                      <option value={53}>¦–– ¦–– Casual Pants</option>
                      <option value={54}>¦–– ¦–– Sweatpants</option>
                      <option value={55}>¦–– ¦–– Cargo Pants</option>
                      <option value={56}>¦–– ¦–– Jeans</option>
                      <option value={57}>¦–– ¦–– Harem Pants</option>
                      <option value={59}>Consumer Electronics</option>
                      <option value={120}>¦–– Televisions</option>
                      <option value={7}>¦–– Gadgets</option>
                      <option value={142}>¦–– Drones</option>
                      <option value={108}>¦–– Supplies</option>
                      <option value={109}>¦–– Camera &amp; Photo</option>
                      <option value={110}>¦–– Car &amp; Vehicle</option>
                      <option value={111}>¦–– Cell Phones</option>
                      <option value={112}>¦–– Computer</option>
                      <option value={113}>¦–– GPS &amp; Navigation</option>
                      <option value={114}>¦–– Headphones</option>
                      <option value={115}>¦–– Home Audio</option>
                      <option value={116}>¦–– Office Electronics</option>
                      <option value={117}>¦–– Audio &amp; Video</option>
                      <option value={118}>¦–– Security</option>
                      <option value={119}>¦–– Service Plans</option>
                      <option value={121}>¦–– Video Game</option>
                      <option value={122}>¦–– Video Projectors</option>
                      <option value={123}>¦–– Wearable Technology</option>
                      <option value={124}>¦–– eBook Readers</option>
                      <option value={60}>¦–– Office Supplies</option>
                      <option value={61}>¦–– All Computers</option>
                      <option value={63}>¦–– Desktops &amp; Monitors</option>
                      <option value={64}>¦–– Drives &amp; Storage</option>
                      <option value={65}>¦–– Networking</option>
                      <option value={66}>¦–– Keyboards &amp; Mice</option>
                      <option value={67}>¦–– PC Gaming</option>
                      <option value={68}>¦–– Computer Accessories</option>
                      <option value={69}>¦–– Printers &amp; Ink</option>
                      <option value={70}>¦–– Office Supplies</option>
                      <option value={82}>Watches</option>
                      <option value={83}>¦–– Men's Watches</option>
                      <option value={84}>¦–– ¦–– Analog Watches</option>
                      <option value={85}>¦–– ¦–– Sports Watches</option>
                      <option value={86}>¦–– ¦–– Mechanical Watches</option>
                      <option value={87}>¦–– ¦–– Digital Watches</option>
                      <option value={88}>¦–– Women's Watches</option>
                      <option value={89}>¦–– Children's Watches</option>
                      <option value={90}>¦–– Pocket Watches</option>
                      <option value={91}>¦–– Watch Accessories</option>
                      <option value={92}>¦–– Women's Bracelets</option>
                      <option value={156}>Home Appliances</option>
                      <option value={157}>¦–– Bedding</option>
                      <option value={158}>¦–– Furniture</option>
                      <option value={159}>¦–– Decor</option>
                      <option value={160}>¦–– Curtains</option>
                      <option value={161}>¦–– Kitchen Utensils</option>
                      <option value={162}>¦–– Cooking &amp; Baking</option>
                      <option value={163}>¦–– Gas &amp; Stove</option>
                      <option value={164}>¦–– Plastics &amp; Melamine</option>
                      <option value={165}>¦–– Ceramics &amp; Dinnerware</option>
                      <option value={166}>
                        ¦–– Storage &amp; Organisation
                      </option>
                      <option value={167}>¦–– Home Care</option>
                      <option value={168}>¦–– Cleaning Tools</option>
                      <option value={169}>¦–– Laundry</option>
                      <option value={170}>¦–– Towel</option>
                      <option value={171}>¦–– Travel Accessories</option>
                      <option value={172}>¦–– Pest Control</option>
                      <option value={98}>Backpacks</option>
                      <option value={99}>¦–– Men's Bags</option>
                      <option value={100}>¦–– Women's Bags</option>
                      <option value={102}>¦–– Wallets</option>
                      <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                      <option value={104}>¦–– Travel Bags</option>
                      <option value={105}>¦–– Functional Bags</option>
                      <option value={106}>¦–– Coin Purses</option>
                      <option value={107}>¦–– Bag Parts</option>
                      <option value={126}>Women's Fashion</option>
                      <option value={127}>¦–– All Beauty</option>
                      <option value={128}>¦–– Make-up</option>
                      <option value={129}>¦–– Luxury Beauty</option>
                      <option value={130}>¦–– Watches</option>
                      <option value={213}>¦–– Necklace</option>
                      <option value={133}>¦–– Rings</option>
                      <option value={131}>¦–– Glasses</option>
                      <option value={132}>¦–– All Perfumes</option>
                      <option value={134}>¦–– Women Perfumes</option>
                      <option value={135}>¦–– Gift Sets</option>
                      <option value={136}>¦–– All Health</option>
                      <option value={137}>¦–– Personal Care</option>
                      <option value={138}>¦–– Hair Care &amp; Styling</option>
                      <option value={139}>¦–– Bath &amp; Body</option>
                      <option value={140}>¦–– Dental Care</option>
                      <option value={141}>¦–– Diet &amp; Nutrition</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_3_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_3_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_featured_categories_section_category_3_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_3_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_featured_categories_section_category_3_products_limit"
                        className="form-control "
                        id="storefront_featured_categories_section_category_3_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_3_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_featured_categories_section_category_3_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_featured_categories_section_category_3_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_featured_categories_section_category_3_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Category 4</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_4_category_id"
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_4_category_id"
                      className="form-control custom-select-black "
                      id="storefront_featured_categories_section_category_4_category_id"
                    >
                      <option value>Please Select</option>
                      <option value={181}>Electronics</option>
                      <option value={183}>¦–– Mobiles</option>
                      <option value={192}>¦–– ¦–– Smartphones</option>
                      <option value={193}>¦–– ¦–– Android</option>
                      <option value={194}>¦–– ¦–– iPhone</option>
                      <option value={195}>¦–– ¦–– Featured</option>
                      <option value={196}>¦–– ¦–– Refurbished</option>
                      <option value={197}>¦–– ¦–– Brands</option>
                      <option value={185}>¦–– Mobile Accessories</option>
                      <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                      <option value={199}>¦–– ¦–– Cables</option>
                      <option value={200}>¦–– ¦–– Chargers</option>
                      <option value={201}>¦–– ¦–– Power Bank</option>
                      <option value={202}>¦–– ¦–– Headphones</option>
                      <option value={203}>¦–– ¦–– Screen Protectors</option>
                      <option value={184}>¦–– Hot Brands</option>
                      <option value={187}>¦–– ¦–– OnePlus</option>
                      <option value={188}>¦–– ¦–– Apple</option>
                      <option value={189}>¦–– ¦–– Samsung</option>
                      <option value={190}>¦–– ¦–– Huawei</option>
                      <option value={191}>¦–– ¦–– Sony</option>
                      <option value={182}>¦–– Laptops</option>
                      <option value={204}>¦–– ¦–– Mackbook</option>
                      <option value={205}>¦–– ¦–– Gaming</option>
                      <option value={206}>¦–– ¦–– Ultraslim</option>
                      <option value={207}>¦–– ¦–– Tablets</option>
                      <option value={212}>¦–– ¦–– All Laptops</option>
                      <option value={186}>¦–– Computer Accessories</option>
                      <option value={208}>¦–– ¦–– Monitors</option>
                      <option value={209}>¦–– ¦–– Keyboard &amp; Mouse</option>
                      <option value={210}>¦–– ¦–– Pendrive</option>
                      <option value={211}>¦–– ¦–– Speaker</option>
                      <option value={12}>Men's Fashion</option>
                      <option value={13}>¦–– Clothing</option>
                      <option value={15}>¦–– ¦–– Shirts</option>
                      <option value={14}>¦–– ¦–– All Clothing</option>
                      <option value={16}>¦–– ¦–– Sportswear</option>
                      <option value={17}>¦–– ¦–– Belts</option>
                      <option value={18}>¦–– ¦–– Pants</option>
                      <option value={26}>¦–– ¦–– Formal Shoes</option>
                      <option value={19}>¦–– Shoes</option>
                      <option value={20}>¦–– ¦–– All Shoes</option>
                      <option value={21}>¦–– ¦–– Sneakers</option>
                      <option value={22}>¦–– ¦–– Boots</option>
                      <option value={23}>¦–– ¦–– Sandals</option>
                      <option value={24}>
                        ¦–– ¦–– Slippers &amp; Flip-flops
                      </option>
                      <option value={25}>¦–– ¦–– Sports Shoes</option>
                      <option value={27}>¦–– Outerwear &amp; Jackets</option>
                      <option value={28}>¦–– ¦–– Trench</option>
                      <option value={30}>¦–– ¦–– Genuine Leather</option>
                      <option value={32}>¦–– ¦–– Down Jackets</option>
                      <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                      <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                      <option value={35}>¦–– Hot Sale</option>
                      <option value={36}>¦–– ¦–– Glasses</option>
                      <option value={37}>¦–– ¦–– Jackets</option>
                      <option value={38}>¦–– ¦–– T-Shirts</option>
                      <option value={39}>¦–– ¦–– Shirts</option>
                      <option value={40}>¦–– ¦–– Belts</option>
                      <option value={52}>¦–– Bottoms</option>
                      <option value={53}>¦–– ¦–– Casual Pants</option>
                      <option value={54}>¦–– ¦–– Sweatpants</option>
                      <option value={55}>¦–– ¦–– Cargo Pants</option>
                      <option value={56}>¦–– ¦–– Jeans</option>
                      <option value={57}>¦–– ¦–– Harem Pants</option>
                      <option value={59}>Consumer Electronics</option>
                      <option value={120}>¦–– Televisions</option>
                      <option value={7}>¦–– Gadgets</option>
                      <option value={142}>¦–– Drones</option>
                      <option value={108}>¦–– Supplies</option>
                      <option value={109}>¦–– Camera &amp; Photo</option>
                      <option value={110}>¦–– Car &amp; Vehicle</option>
                      <option value={111}>¦–– Cell Phones</option>
                      <option value={112}>¦–– Computer</option>
                      <option value={113}>¦–– GPS &amp; Navigation</option>
                      <option value={114}>¦–– Headphones</option>
                      <option value={115}>¦–– Home Audio</option>
                      <option value={116}>¦–– Office Electronics</option>
                      <option value={117}>¦–– Audio &amp; Video</option>
                      <option value={118}>¦–– Security</option>
                      <option value={119}>¦–– Service Plans</option>
                      <option value={121}>¦–– Video Game</option>
                      <option value={122}>¦–– Video Projectors</option>
                      <option value={123}>¦–– Wearable Technology</option>
                      <option value={124}>¦–– eBook Readers</option>
                      <option value={60}>¦–– Office Supplies</option>
                      <option value={61}>¦–– All Computers</option>
                      <option value={63}>¦–– Desktops &amp; Monitors</option>
                      <option value={64}>¦–– Drives &amp; Storage</option>
                      <option value={65}>¦–– Networking</option>
                      <option value={66}>¦–– Keyboards &amp; Mice</option>
                      <option value={67}>¦–– PC Gaming</option>
                      <option value={68}>¦–– Computer Accessories</option>
                      <option value={69}>¦–– Printers &amp; Ink</option>
                      <option value={70}>¦–– Office Supplies</option>
                      <option value={82} selected>
                        Watches
                      </option>
                      <option value={83}>¦–– Men's Watches</option>
                      <option value={84}>¦–– ¦–– Analog Watches</option>
                      <option value={85}>¦–– ¦–– Sports Watches</option>
                      <option value={86}>¦–– ¦–– Mechanical Watches</option>
                      <option value={87}>¦–– ¦–– Digital Watches</option>
                      <option value={88}>¦–– Women's Watches</option>
                      <option value={89}>¦–– Children's Watches</option>
                      <option value={90}>¦–– Pocket Watches</option>
                      <option value={91}>¦–– Watch Accessories</option>
                      <option value={92}>¦–– Women's Bracelets</option>
                      <option value={156}>Home Appliances</option>
                      <option value={157}>¦–– Bedding</option>
                      <option value={158}>¦–– Furniture</option>
                      <option value={159}>¦–– Decor</option>
                      <option value={160}>¦–– Curtains</option>
                      <option value={161}>¦–– Kitchen Utensils</option>
                      <option value={162}>¦–– Cooking &amp; Baking</option>
                      <option value={163}>¦–– Gas &amp; Stove</option>
                      <option value={164}>¦–– Plastics &amp; Melamine</option>
                      <option value={165}>¦–– Ceramics &amp; Dinnerware</option>
                      <option value={166}>
                        ¦–– Storage &amp; Organisation
                      </option>
                      <option value={167}>¦–– Home Care</option>
                      <option value={168}>¦–– Cleaning Tools</option>
                      <option value={169}>¦–– Laundry</option>
                      <option value={170}>¦–– Towel</option>
                      <option value={171}>¦–– Travel Accessories</option>
                      <option value={172}>¦–– Pest Control</option>
                      <option value={98}>Backpacks</option>
                      <option value={99}>¦–– Men's Bags</option>
                      <option value={100}>¦–– Women's Bags</option>
                      <option value={102}>¦–– Wallets</option>
                      <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                      <option value={104}>¦–– Travel Bags</option>
                      <option value={105}>¦–– Functional Bags</option>
                      <option value={106}>¦–– Coin Purses</option>
                      <option value={107}>¦–– Bag Parts</option>
                      <option value={126}>Women's Fashion</option>
                      <option value={127}>¦–– All Beauty</option>
                      <option value={128}>¦–– Make-up</option>
                      <option value={129}>¦–– Luxury Beauty</option>
                      <option value={130}>¦–– Watches</option>
                      <option value={213}>¦–– Necklace</option>
                      <option value={133}>¦–– Rings</option>
                      <option value={131}>¦–– Glasses</option>
                      <option value={132}>¦–– All Perfumes</option>
                      <option value={134}>¦–– Women Perfumes</option>
                      <option value={135}>¦–– Gift Sets</option>
                      <option value={136}>¦–– All Health</option>
                      <option value={137}>¦–– Personal Care</option>
                      <option value={138}>¦–– Hair Care &amp; Styling</option>
                      <option value={139}>¦–– Bath &amp; Body</option>
                      <option value={140}>¦–– Dental Care</option>
                      <option value={141}>¦–– Diet &amp; Nutrition</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_4_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_4_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_featured_categories_section_category_4_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_4_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_featured_categories_section_category_4_products_limit"
                        className="form-control "
                        id="storefront_featured_categories_section_category_4_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_4_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_featured_categories_section_category_4_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_featured_categories_section_category_4_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_featured_categories_section_category_4_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Category 5</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_5_category_id"
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_5_category_id"
                      className="form-control custom-select-black "
                      id="storefront_featured_categories_section_category_5_category_id"
                    >
                      <option value>Please Select</option>
                      <option value={181}>Electronics</option>
                      <option value={183}>¦–– Mobiles</option>
                      <option value={192}>¦–– ¦–– Smartphones</option>
                      <option value={193}>¦–– ¦–– Android</option>
                      <option value={194}>¦–– ¦–– iPhone</option>
                      <option value={195}>¦–– ¦–– Featured</option>
                      <option value={196}>¦–– ¦–– Refurbished</option>
                      <option value={197}>¦–– ¦–– Brands</option>
                      <option value={185}>¦–– Mobile Accessories</option>
                      <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                      <option value={199}>¦–– ¦–– Cables</option>
                      <option value={200}>¦–– ¦–– Chargers</option>
                      <option value={201}>¦–– ¦–– Power Bank</option>
                      <option value={202}>¦–– ¦–– Headphones</option>
                      <option value={203}>¦–– ¦–– Screen Protectors</option>
                      <option value={184}>¦–– Hot Brands</option>
                      <option value={187}>¦–– ¦–– OnePlus</option>
                      <option value={188}>¦–– ¦–– Apple</option>
                      <option value={189}>¦–– ¦–– Samsung</option>
                      <option value={190}>¦–– ¦–– Huawei</option>
                      <option value={191}>¦–– ¦–– Sony</option>
                      <option value={182}>¦–– Laptops</option>
                      <option value={204}>¦–– ¦–– Mackbook</option>
                      <option value={205}>¦–– ¦–– Gaming</option>
                      <option value={206}>¦–– ¦–– Ultraslim</option>
                      <option value={207}>¦–– ¦–– Tablets</option>
                      <option value={212}>¦–– ¦–– All Laptops</option>
                      <option value={186}>¦–– Computer Accessories</option>
                      <option value={208}>¦–– ¦–– Monitors</option>
                      <option value={209}>¦–– ¦–– Keyboard &amp; Mouse</option>
                      <option value={210}>¦–– ¦–– Pendrive</option>
                      <option value={211}>¦–– ¦–– Speaker</option>
                      <option value={12} selected>
                        Men's Fashion
                      </option>
                      <option value={13}>¦–– Clothing</option>
                      <option value={15}>¦–– ¦–– Shirts</option>
                      <option value={14}>¦–– ¦–– All Clothing</option>
                      <option value={16}>¦–– ¦–– Sportswear</option>
                      <option value={17}>¦–– ¦–– Belts</option>
                      <option value={18}>¦–– ¦–– Pants</option>
                      <option value={26}>¦–– ¦–– Formal Shoes</option>
                      <option value={19}>¦–– Shoes</option>
                      <option value={20}>¦–– ¦–– All Shoes</option>
                      <option value={21}>¦–– ¦–– Sneakers</option>
                      <option value={22}>¦–– ¦–– Boots</option>
                      <option value={23}>¦–– ¦–– Sandals</option>
                      <option value={24}>
                        ¦–– ¦–– Slippers &amp; Flip-flops
                      </option>
                      <option value={25}>¦–– ¦–– Sports Shoes</option>
                      <option value={27}>¦–– Outerwear &amp; Jackets</option>
                      <option value={28}>¦–– ¦–– Trench</option>
                      <option value={30}>¦–– ¦–– Genuine Leather</option>
                      <option value={32}>¦–– ¦–– Down Jackets</option>
                      <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                      <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                      <option value={35}>¦–– Hot Sale</option>
                      <option value={36}>¦–– ¦–– Glasses</option>
                      <option value={37}>¦–– ¦–– Jackets</option>
                      <option value={38}>¦–– ¦–– T-Shirts</option>
                      <option value={39}>¦–– ¦–– Shirts</option>
                      <option value={40}>¦–– ¦–– Belts</option>
                      <option value={52}>¦–– Bottoms</option>
                      <option value={53}>¦–– ¦–– Casual Pants</option>
                      <option value={54}>¦–– ¦–– Sweatpants</option>
                      <option value={55}>¦–– ¦–– Cargo Pants</option>
                      <option value={56}>¦–– ¦–– Jeans</option>
                      <option value={57}>¦–– ¦–– Harem Pants</option>
                      <option value={59}>Consumer Electronics</option>
                      <option value={120}>¦–– Televisions</option>
                      <option value={7}>¦–– Gadgets</option>
                      <option value={142}>¦–– Drones</option>
                      <option value={108}>¦–– Supplies</option>
                      <option value={109}>¦–– Camera &amp; Photo</option>
                      <option value={110}>¦–– Car &amp; Vehicle</option>
                      <option value={111}>¦–– Cell Phones</option>
                      <option value={112}>¦–– Computer</option>
                      <option value={113}>¦–– GPS &amp; Navigation</option>
                      <option value={114}>¦–– Headphones</option>
                      <option value={115}>¦–– Home Audio</option>
                      <option value={116}>¦–– Office Electronics</option>
                      <option value={117}>¦–– Audio &amp; Video</option>
                      <option value={118}>¦–– Security</option>
                      <option value={119}>¦–– Service Plans</option>
                      <option value={121}>¦–– Video Game</option>
                      <option value={122}>¦–– Video Projectors</option>
                      <option value={123}>¦–– Wearable Technology</option>
                      <option value={124}>¦–– eBook Readers</option>
                      <option value={60}>¦–– Office Supplies</option>
                      <option value={61}>¦–– All Computers</option>
                      <option value={63}>¦–– Desktops &amp; Monitors</option>
                      <option value={64}>¦–– Drives &amp; Storage</option>
                      <option value={65}>¦–– Networking</option>
                      <option value={66}>¦–– Keyboards &amp; Mice</option>
                      <option value={67}>¦–– PC Gaming</option>
                      <option value={68}>¦–– Computer Accessories</option>
                      <option value={69}>¦–– Printers &amp; Ink</option>
                      <option value={70}>¦–– Office Supplies</option>
                      <option value={82}>Watches</option>
                      <option value={83}>¦–– Men's Watches</option>
                      <option value={84}>¦–– ¦–– Analog Watches</option>
                      <option value={85}>¦–– ¦–– Sports Watches</option>
                      <option value={86}>¦–– ¦–– Mechanical Watches</option>
                      <option value={87}>¦–– ¦–– Digital Watches</option>
                      <option value={88}>¦–– Women's Watches</option>
                      <option value={89}>¦–– Children's Watches</option>
                      <option value={90}>¦–– Pocket Watches</option>
                      <option value={91}>¦–– Watch Accessories</option>
                      <option value={92}>¦–– Women's Bracelets</option>
                      <option value={156}>Home Appliances</option>
                      <option value={157}>¦–– Bedding</option>
                      <option value={158}>¦–– Furniture</option>
                      <option value={159}>¦–– Decor</option>
                      <option value={160}>¦–– Curtains</option>
                      <option value={161}>¦–– Kitchen Utensils</option>
                      <option value={162}>¦–– Cooking &amp; Baking</option>
                      <option value={163}>¦–– Gas &amp; Stove</option>
                      <option value={164}>¦–– Plastics &amp; Melamine</option>
                      <option value={165}>¦–– Ceramics &amp; Dinnerware</option>
                      <option value={166}>
                        ¦–– Storage &amp; Organisation
                      </option>
                      <option value={167}>¦–– Home Care</option>
                      <option value={168}>¦–– Cleaning Tools</option>
                      <option value={169}>¦–– Laundry</option>
                      <option value={170}>¦–– Towel</option>
                      <option value={171}>¦–– Travel Accessories</option>
                      <option value={172}>¦–– Pest Control</option>
                      <option value={98}>Backpacks</option>
                      <option value={99}>¦–– Men's Bags</option>
                      <option value={100}>¦–– Women's Bags</option>
                      <option value={102}>¦–– Wallets</option>
                      <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                      <option value={104}>¦–– Travel Bags</option>
                      <option value={105}>¦–– Functional Bags</option>
                      <option value={106}>¦–– Coin Purses</option>
                      <option value={107}>¦–– Bag Parts</option>
                      <option value={126}>Women's Fashion</option>
                      <option value={127}>¦–– All Beauty</option>
                      <option value={128}>¦–– Make-up</option>
                      <option value={129}>¦–– Luxury Beauty</option>
                      <option value={130}>¦–– Watches</option>
                      <option value={213}>¦–– Necklace</option>
                      <option value={133}>¦–– Rings</option>
                      <option value={131}>¦–– Glasses</option>
                      <option value={132}>¦–– All Perfumes</option>
                      <option value={134}>¦–– Women Perfumes</option>
                      <option value={135}>¦–– Gift Sets</option>
                      <option value={136}>¦–– All Health</option>
                      <option value={137}>¦–– Personal Care</option>
                      <option value={138}>¦–– Hair Care &amp; Styling</option>
                      <option value={139}>¦–– Bath &amp; Body</option>
                      <option value={140}>¦–– Dental Care</option>
                      <option value={141}>¦–– Diet &amp; Nutrition</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_5_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_5_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_featured_categories_section_category_5_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_5_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_featured_categories_section_category_5_products_limit"
                        className="form-control "
                        id="storefront_featured_categories_section_category_5_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_5_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_featured_categories_section_category_5_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_featured_categories_section_category_5_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_featured_categories_section_category_5_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Category 6</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_6_category_id"
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_6_category_id"
                      className="form-control custom-select-black "
                      id="storefront_featured_categories_section_category_6_category_id"
                    >
                      <option value>Please Select</option>
                      <option value={181}>Electronics</option>
                      <option value={183}>¦–– Mobiles</option>
                      <option value={192}>¦–– ¦–– Smartphones</option>
                      <option value={193}>¦–– ¦–– Android</option>
                      <option value={194}>¦–– ¦–– iPhone</option>
                      <option value={195}>¦–– ¦–– Featured</option>
                      <option value={196}>¦–– ¦–– Refurbished</option>
                      <option value={197}>¦–– ¦–– Brands</option>
                      <option value={185}>¦–– Mobile Accessories</option>
                      <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                      <option value={199}>¦–– ¦–– Cables</option>
                      <option value={200}>¦–– ¦–– Chargers</option>
                      <option value={201}>¦–– ¦–– Power Bank</option>
                      <option value={202}>¦–– ¦–– Headphones</option>
                      <option value={203}>¦–– ¦–– Screen Protectors</option>
                      <option value={184}>¦–– Hot Brands</option>
                      <option value={187}>¦–– ¦–– OnePlus</option>
                      <option value={188}>¦–– ¦–– Apple</option>
                      <option value={189}>¦–– ¦–– Samsung</option>
                      <option value={190}>¦–– ¦–– Huawei</option>
                      <option value={191}>¦–– ¦–– Sony</option>
                      <option value={182}>¦–– Laptops</option>
                      <option value={204}>¦–– ¦–– Mackbook</option>
                      <option value={205}>¦–– ¦–– Gaming</option>
                      <option value={206}>¦–– ¦–– Ultraslim</option>
                      <option value={207}>¦–– ¦–– Tablets</option>
                      <option value={212}>¦–– ¦–– All Laptops</option>
                      <option value={186}>¦–– Computer Accessories</option>
                      <option value={208}>¦–– ¦–– Monitors</option>
                      <option value={209}>¦–– ¦–– Keyboard &amp; Mouse</option>
                      <option value={210}>¦–– ¦–– Pendrive</option>
                      <option value={211}>¦–– ¦–– Speaker</option>
                      <option value={12}>Men's Fashion</option>
                      <option value={13}>¦–– Clothing</option>
                      <option value={15}>¦–– ¦–– Shirts</option>
                      <option value={14}>¦–– ¦–– All Clothing</option>
                      <option value={16}>¦–– ¦–– Sportswear</option>
                      <option value={17}>¦–– ¦–– Belts</option>
                      <option value={18}>¦–– ¦–– Pants</option>
                      <option value={26}>¦–– ¦–– Formal Shoes</option>
                      <option value={19}>¦–– Shoes</option>
                      <option value={20}>¦–– ¦–– All Shoes</option>
                      <option value={21}>¦–– ¦–– Sneakers</option>
                      <option value={22}>¦–– ¦–– Boots</option>
                      <option value={23}>¦–– ¦–– Sandals</option>
                      <option value={24}>
                        ¦–– ¦–– Slippers &amp; Flip-flops
                      </option>
                      <option value={25}>¦–– ¦–– Sports Shoes</option>
                      <option value={27}>¦–– Outerwear &amp; Jackets</option>
                      <option value={28}>¦–– ¦–– Trench</option>
                      <option value={30}>¦–– ¦–– Genuine Leather</option>
                      <option value={32}>¦–– ¦–– Down Jackets</option>
                      <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                      <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                      <option value={35}>¦–– Hot Sale</option>
                      <option value={36}>¦–– ¦–– Glasses</option>
                      <option value={37}>¦–– ¦–– Jackets</option>
                      <option value={38}>¦–– ¦–– T-Shirts</option>
                      <option value={39}>¦–– ¦–– Shirts</option>
                      <option value={40}>¦–– ¦–– Belts</option>
                      <option value={52}>¦–– Bottoms</option>
                      <option value={53}>¦–– ¦–– Casual Pants</option>
                      <option value={54}>¦–– ¦–– Sweatpants</option>
                      <option value={55}>¦–– ¦–– Cargo Pants</option>
                      <option value={56}>¦–– ¦–– Jeans</option>
                      <option value={57}>¦–– ¦–– Harem Pants</option>
                      <option value={59}>Consumer Electronics</option>
                      <option value={120} selected>
                        ¦–– Televisions
                      </option>
                      <option value={7}>¦–– Gadgets</option>
                      <option value={142}>¦–– Drones</option>
                      <option value={108}>¦–– Supplies</option>
                      <option value={109}>¦–– Camera &amp; Photo</option>
                      <option value={110}>¦–– Car &amp; Vehicle</option>
                      <option value={111}>¦–– Cell Phones</option>
                      <option value={112}>¦–– Computer</option>
                      <option value={113}>¦–– GPS &amp; Navigation</option>
                      <option value={114}>¦–– Headphones</option>
                      <option value={115}>¦–– Home Audio</option>
                      <option value={116}>¦–– Office Electronics</option>
                      <option value={117}>¦–– Audio &amp; Video</option>
                      <option value={118}>¦–– Security</option>
                      <option value={119}>¦–– Service Plans</option>
                      <option value={121}>¦–– Video Game</option>
                      <option value={122}>¦–– Video Projectors</option>
                      <option value={123}>¦–– Wearable Technology</option>
                      <option value={124}>¦–– eBook Readers</option>
                      <option value={60}>¦–– Office Supplies</option>
                      <option value={61}>¦–– All Computers</option>
                      <option value={63}>¦–– Desktops &amp; Monitors</option>
                      <option value={64}>¦–– Drives &amp; Storage</option>
                      <option value={65}>¦–– Networking</option>
                      <option value={66}>¦–– Keyboards &amp; Mice</option>
                      <option value={67}>¦–– PC Gaming</option>
                      <option value={68}>¦–– Computer Accessories</option>
                      <option value={69}>¦–– Printers &amp; Ink</option>
                      <option value={70}>¦–– Office Supplies</option>
                      <option value={82}>Watches</option>
                      <option value={83}>¦–– Men's Watches</option>
                      <option value={84}>¦–– ¦–– Analog Watches</option>
                      <option value={85}>¦–– ¦–– Sports Watches</option>
                      <option value={86}>¦–– ¦–– Mechanical Watches</option>
                      <option value={87}>¦–– ¦–– Digital Watches</option>
                      <option value={88}>¦–– Women's Watches</option>
                      <option value={89}>¦–– Children's Watches</option>
                      <option value={90}>¦–– Pocket Watches</option>
                      <option value={91}>¦–– Watch Accessories</option>
                      <option value={92}>¦–– Women's Bracelets</option>
                      <option value={156}>Home Appliances</option>
                      <option value={157}>¦–– Bedding</option>
                      <option value={158}>¦–– Furniture</option>
                      <option value={159}>¦–– Decor</option>
                      <option value={160}>¦–– Curtains</option>
                      <option value={161}>¦–– Kitchen Utensils</option>
                      <option value={162}>¦–– Cooking &amp; Baking</option>
                      <option value={163}>¦–– Gas &amp; Stove</option>
                      <option value={164}>¦–– Plastics &amp; Melamine</option>
                      <option value={165}>¦–– Ceramics &amp; Dinnerware</option>
                      <option value={166}>
                        ¦–– Storage &amp; Organisation
                      </option>
                      <option value={167}>¦–– Home Care</option>
                      <option value={168}>¦–– Cleaning Tools</option>
                      <option value={169}>¦–– Laundry</option>
                      <option value={170}>¦–– Towel</option>
                      <option value={171}>¦–– Travel Accessories</option>
                      <option value={172}>¦–– Pest Control</option>
                      <option value={98}>Backpacks</option>
                      <option value={99}>¦–– Men's Bags</option>
                      <option value={100}>¦–– Women's Bags</option>
                      <option value={102}>¦–– Wallets</option>
                      <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                      <option value={104}>¦–– Travel Bags</option>
                      <option value={105}>¦–– Functional Bags</option>
                      <option value={106}>¦–– Coin Purses</option>
                      <option value={107}>¦–– Bag Parts</option>
                      <option value={126}>Women's Fashion</option>
                      <option value={127}>¦–– All Beauty</option>
                      <option value={128}>¦–– Make-up</option>
                      <option value={129}>¦–– Luxury Beauty</option>
                      <option value={130}>¦–– Watches</option>
                      <option value={213}>¦–– Necklace</option>
                      <option value={133}>¦–– Rings</option>
                      <option value={131}>¦–– Glasses</option>
                      <option value={132}>¦–– All Perfumes</option>
                      <option value={134}>¦–– Women Perfumes</option>
                      <option value={135}>¦–– Gift Sets</option>
                      <option value={136}>¦–– All Health</option>
                      <option value={137}>¦–– Personal Care</option>
                      <option value={138}>¦–– Hair Care &amp; Styling</option>
                      <option value={139}>¦–– Bath &amp; Body</option>
                      <option value={140}>¦–– Dental Care</option>
                      <option value={141}>¦–– Diet &amp; Nutrition</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_6_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_featured_categories_section_category_6_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_featured_categories_section_category_6_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_6_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_featured_categories_section_category_6_products_limit"
                        className="form-control "
                        id="storefront_featured_categories_section_category_6_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_6_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_featured_categories_section_category_6_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_featured_categories_section_category_6_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_featured_categories_section_category_6_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "producttabs1") {
      return (
        <div className="tab-pane fade active in" id="product_tabs_one">
          <h3 className="tab-content-title">Product Tabs One</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="storefront_product_tabs_1_section_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="storefront_product_tabs_1_section_enabled"
                    />
                    <input
                      type="checkbox"
                      name="storefront_product_tabs_1_section_enabled"
                      className
                      id="storefront_product_tabs_1_section_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="storefront_product_tabs_1_section_enabled">
                      Enable product tabs one section
                    </label>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 1</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_1_section_tab_1_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_1_section_tab_1_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_1_section_tab_1_title]"
                      defaultValue="Featured"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_1_section_tab_1_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_1_section_tab_1_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_1_section_tab_1_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_1_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_1_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_1_section_tab_1_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15} selected>
                          ¦–– ¦–– Shirts
                        </option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_1_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_1_section_tab_1_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_1_section_tab_1_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_1_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_1_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_1_section_tab_1_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_1_section_tab_1_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 2</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_1_section_tab_2_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_1_section_tab_2_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_1_section_tab_2_title]"
                      defaultValue="Special"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_1_section_tab_2_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_1_section_tab_2_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_1_section_tab_2_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_2_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_2_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_1_section_tab_2_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7} selected>
                          ¦–– Gadgets
                        </option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_2_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_1_section_tab_2_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_1_section_tab_2_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_2_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_2_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_1_section_tab_2_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_1_section_tab_2_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 3</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_1_section_tab_3_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_1_section_tab_3_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_1_section_tab_3_title]"
                      defaultValue="New Arrival"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_1_section_tab_3_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_1_section_tab_3_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_1_section_tab_3_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_3_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_3_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_1_section_tab_3_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19} selected>
                          ¦–– Shoes
                        </option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_3_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_1_section_tab_3_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_1_section_tab_3_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_3_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_3_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_1_section_tab_3_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_1_section_tab_3_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 4</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_1_section_tab_4_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_1_section_tab_4_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_1_section_tab_4_title]"
                      defaultValue="Latest"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_1_section_tab_4_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_1_section_tab_4_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_1_section_tab_4_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_4_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_4_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_1_section_tab_4_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98} selected>
                          Backpacks
                        </option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_4_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_1_section_tab_4_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_1_section_tab_4_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_1_section_tab_4_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_1_section_tab_4_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_1_section_tab_4_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_1_section_tab_4_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "topbrands") {
      return (
        <div className="tab-pane fade active in" id="top_brands">
          <h3 className="tab-content-title">Top Brands</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="storefront_top_brands_section_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="storefront_top_brands_section_enabled"
                    />
                    <input
                      type="checkbox"
                      name="storefront_top_brands_section_enabled"
                      className
                      id="storefront_top_brands_section_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="storefront_top_brands_section_enabled">
                      Enable brands section
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="storefront_top_brands[]-selectized"
                  className="col-md-3 control-label text-left"
                >
                  Top Brands
                </label>
                <div className="col-md-9">
                  <select
                    name="storefront_top_brands[]"
                    className="selectize prevent-creation selectized"
                    id="storefront_top_brands[]"
                    multiple="multiple"
                    tabIndex={-1}
                    style={{ display: "none" }}
                  >
                    <option value={8} selected="selected">
                      ASUS
                    </option>
                    <option value={7} selected="selected">
                      Acer
                    </option>
                    <option value={16} selected="selected">
                      Adidas
                    </option>
                    <option value={1} selected="selected">
                      Apple
                    </option>
                    <option value={15} selected="selected">
                      Beats
                    </option>
                    <option value={6} selected="selected">
                      Dell
                    </option>
                    <option value={5} selected="selected">
                      HP
                    </option>
                    <option value={3} selected="selected">
                      Huawei
                    </option>
                    <option value={14} selected="selected">
                      LG
                    </option>
                    <option value={12} selected="selected">
                      MSI
                    </option>
                    <option value={18} selected="selected">
                      SONY
                    </option>
                    <option value={2} selected="selected">
                      Samsung
                    </option>
                  </select>
                  <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                    <div className="selectize-input items not-full has-options has-items">
                      <div className="item" data-value={8}>
                        ASUS
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={7}>
                        Acer
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={16}>
                        Adidas
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={1}>
                        Apple
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={15}>
                        Beats
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={6}>
                        Dell
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={5}>
                        HP
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={3}>
                        Huawei
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={14}>
                        LG
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={12}>
                        MSI
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={18}>
                        SONY
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <div className="item" data-value={2}>
                        Samsung
                        <a
                          href="javascript:void(0)"
                          className="remove"
                          tabIndex={-1}
                        >
                          ×
                        </a>
                      </div>
                      <input
                        type="select-multiple"
                        autoComplete="off"
                        tabIndex
                        id="storefront_top_brands[]-selectized"
                        style={{ width: 4 }}
                      />
                    </div>
                    <div
                      className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                      style={{ display: "none" }}
                    >
                      <div className="selectize-dropdown-content" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "flashsale") {
      return (
        <div
          className="tab-pane fade active in"
          id="flashSaleAndVerticalProducts"
        >
          <h3 className="tab-content-title">
            Flash Sale &amp; Vertical Products
          </h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="storefront_flash_sale_and_vertical_products_section_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="storefront_flash_sale_and_vertical_products_section_enabled"
                    />
                    <input
                      type="checkbox"
                      name="storefront_flash_sale_and_vertical_products_section_enabled"
                      className
                      id="storefront_flash_sale_and_vertical_products_section_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="storefront_flash_sale_and_vertical_products_section_enabled">
                      Enable flash sale &amp; vertical products section
                    </label>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Flash Sale</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_flash_sale_title"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="storefront_flash_sale_title"
                      className="form-control "
                      id="storefront_flash_sale_title"
                      defaultValue="Best <b>Deals</b>"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_active_flash_sale_campaign"
                    className="col-md-3 control-label text-left"
                  >
                    Active Campaign
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_active_flash_sale_campaign"
                      className="form-control custom-select-black "
                      id="storefront_active_flash_sale_campaign"
                    >
                      <option value>Please Select</option>
                      <option value={1} selected>
                        Flash Sale
                      </option>
                      <option value={2}>Winter Sale</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Vertical Products 1</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_vertical_products_1_title"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="storefront_vertical_products_1_title"
                      className="form-control "
                      id="storefront_vertical_products_1_title"
                      defaultValue="Watches"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_vertical_products_1_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_vertical_products_1_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_vertical_products_1_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_1_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_vertical_products_1_category_id"
                        className="form-control custom-select-black "
                        id="storefront_vertical_products_1_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82} selected>
                          Watches
                        </option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_1_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_vertical_products_1_products_limit"
                        className="form-control "
                        id="storefront_vertical_products_1_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_1_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_vertical_products_1_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_vertical_products_1_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_vertical_products_1_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Vertical Products 2</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_vertical_products_2_title"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="storefront_vertical_products_2_title"
                      className="form-control "
                      id="storefront_vertical_products_2_title"
                      defaultValue="Backpacks"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_vertical_products_2_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_vertical_products_2_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_vertical_products_2_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_2_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_vertical_products_2_category_id"
                        className="form-control custom-select-black "
                        id="storefront_vertical_products_2_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98} selected>
                          Backpacks
                        </option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_2_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_vertical_products_2_products_limit"
                        className="form-control "
                        id="storefront_vertical_products_2_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_2_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_vertical_products_2_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_vertical_products_2_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_vertical_products_2_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Vertical Products 3</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_vertical_products_3_title"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="storefront_vertical_products_3_title"
                      className="form-control "
                      id="storefront_vertical_products_3_title"
                      defaultValue="Shirts"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_vertical_products_3_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_vertical_products_3_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_vertical_products_3_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_3_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_vertical_products_3_category_id"
                        className="form-control custom-select-black "
                        id="storefront_vertical_products_3_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15} selected>
                          ¦–– ¦–– Shirts
                        </option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_3_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_vertical_products_3_products_limit"
                        className="form-control "
                        id="storefront_vertical_products_3_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_vertical_products_3_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_vertical_products_3_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_vertical_products_3_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_vertical_products_3_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "twocolbanners") {
      return (
        <div className="tab-pane fade active in" id="two_column_banners">
          <h3 className="tab-content-title">Two column banners</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    htmlFor="storefront_two_column_banners_enabled"
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="storefront_two_column_banners_enabled"
                      />
                      <input
                        type="checkbox"
                        name="storefront_two_column_banners_enabled"
                        className
                        id="storefront_two_column_banners_enabled"
                        defaultValue={1}
                        defaultChecked
                      />
                      <label htmlFor="storefront_two_column_banners_enabled">
                        Enable two column banners section
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content clearfix">
              <div className="panel-wrap">
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 1</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/kSSkGodUfAKYy1UVZ8CicO8oay5PKO4L3DdEE9Tw.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_two_column_banners_1_file_id]"
                        defaultValue={1339}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_two_column_banners_1-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_two_column_banners_1_call_to_action_url"
                              defaultValue="/categories/ultraslim/products"
                              className="form-control"
                              id="storefront_two_column_banners_1-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_two_column_banners_1_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_two_column_banners_1_open_in_new_window"
                              defaultValue={1}
                              id="storefront_two_column_banners_1-open-in-new-window"
                            />
                            <label htmlFor="storefront_two_column_banners_1-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 2</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/VVyvSfw4dAZI57qelPofORurzNNc7rDlsxVbTO5m.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_two_column_banners_2_file_id]"
                        defaultValue={1338}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_two_column_banners_2-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_two_column_banners_2_call_to_action_url"
                              defaultValue="/categories/watches/products"
                              className="form-control"
                              id="storefront_two_column_banners_2-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_two_column_banners_2_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_two_column_banners_2_open_in_new_window"
                              defaultValue={1}
                              id="storefront_two_column_banners_2-open-in-new-window"
                            />
                            <label htmlFor="storefront_two_column_banners_2-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "productgrid") {
      return (
        <div className="tab-pane fade active in" id="product_grid">
          <h3 className="tab-content-title">Product Grid</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="storefront_product_grid_section_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="storefront_product_grid_section_enabled"
                    />
                    <input
                      type="checkbox"
                      name="storefront_product_grid_section_enabled"
                      className
                      id="storefront_product_grid_section_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="storefront_product_grid_section_enabled">
                      Enable product grid section
                    </label>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 1</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_grid_section_tab_1_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_grid_section_tab_1_title]"
                      className="form-control "
                      id="translatable[storefront_product_grid_section_tab_1_title]"
                      defaultValue="Mobiles"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_grid_section_tab_1_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_grid_section_tab_1_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_grid_section_tab_1_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_1_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_1_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_grid_section_tab_1_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183} selected>
                          ¦–– Mobiles
                        </option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_1_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_grid_section_tab_1_products_limit"
                        className="form-control "
                        id="storefront_product_grid_section_tab_1_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_1_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_1_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_grid_section_tab_1_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_grid_section_tab_1_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 2</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_grid_section_tab_2_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_grid_section_tab_2_title]"
                      className="form-control "
                      id="translatable[storefront_product_grid_section_tab_2_title]"
                      defaultValue="Fashion"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_grid_section_tab_2_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_grid_section_tab_2_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_grid_section_tab_2_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_2_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_2_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_grid_section_tab_2_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12} selected>
                          Men's Fashion
                        </option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_2_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_grid_section_tab_2_products_limit"
                        className="form-control "
                        id="storefront_product_grid_section_tab_2_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_2_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_2_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_grid_section_tab_2_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_grid_section_tab_2_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 3</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_grid_section_tab_3_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_grid_section_tab_3_title]"
                      className="form-control "
                      id="translatable[storefront_product_grid_section_tab_3_title]"
                      defaultValue="Laptops"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_grid_section_tab_3_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_grid_section_tab_3_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_grid_section_tab_3_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_3_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_3_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_grid_section_tab_3_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182} selected>
                          ¦–– Laptops
                        </option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_3_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_grid_section_tab_3_products_limit"
                        className="form-control "
                        id="storefront_product_grid_section_tab_3_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_3_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_3_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_grid_section_tab_3_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_grid_section_tab_3_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 4</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_grid_section_tab_4_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_grid_section_tab_4_title]"
                      className="form-control "
                      id="translatable[storefront_product_grid_section_tab_4_title]"
                      defaultValue="Tablets"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_grid_section_tab_4_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_grid_section_tab_4_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_grid_section_tab_4_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_4_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_4_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_grid_section_tab_4_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207} selected>
                          ¦–– ¦–– Tablets
                        </option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_4_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_grid_section_tab_4_products_limit"
                        className="form-control "
                        id="storefront_product_grid_section_tab_4_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_grid_section_tab_4_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_grid_section_tab_4_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_grid_section_tab_4_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_grid_section_tab_4_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "threecolbanners") {
      return (
        <div className="tab-pane fade active in" id="three_column_banners">
          <h3 className="tab-content-title">Three Column Banners</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    htmlFor="storefront_three_column_banners_enabled"
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="storefront_three_column_banners_enabled"
                      />
                      <input
                        type="checkbox"
                        name="storefront_three_column_banners_enabled"
                        className
                        id="storefront_three_column_banners_enabled"
                        defaultValue={1}
                        defaultChecked
                      />
                      <label htmlFor="storefront_three_column_banners_enabled">
                        Enable three column banners section
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content clearfix">
              <div className="panel-wrap">
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 1</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/QXeAdEOGLNAIj5Ntx7prAuuHRJmqNebRckNhV5WS.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_three_column_banners_1_file_id]"
                        defaultValue={787}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_three_column_banners_1-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_three_column_banners_1_call_to_action_url"
                              defaultValue="/categories/home-appliances/products"
                              className="form-control"
                              id="storefront_three_column_banners_1-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_three_column_banners_1_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_three_column_banners_1_open_in_new_window"
                              defaultValue={1}
                              id="storefront_three_column_banners_1-open-in-new-window"
                            />
                            <label htmlFor="storefront_three_column_banners_1-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 2</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/tUZc6W65OryxcoIDT1umT0irIynod8t904Q7bRbG.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_three_column_banners_2_file_id]"
                        defaultValue={785}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_three_column_banners_2-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_three_column_banners_2_call_to_action_url"
                              defaultValue="/categories/mobile-accessories/products"
                              className="form-control"
                              id="storefront_three_column_banners_2-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_three_column_banners_2_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_three_column_banners_2_open_in_new_window"
                              defaultValue={1}
                              id="storefront_three_column_banners_2-open-in-new-window"
                            />
                            <label htmlFor="storefront_three_column_banners_2-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner 3</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/32Z48wigiMEXJZLDUN20Ea0f7NTMKZHf93qHFtLg.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_three_column_banners_3_file_id]"
                        defaultValue={786}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_three_column_banners_3-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_three_column_banners_3_call_to_action_url"
                              defaultValue="/categories/gadgets/products"
                              className="form-control"
                              id="storefront_three_column_banners_3-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_three_column_banners_3_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_three_column_banners_3_open_in_new_window"
                              defaultValue={1}
                              id="storefront_three_column_banners_3-open-in-new-window"
                            />
                            <label htmlFor="storefront_three_column_banners_3-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "producttabs2") {
      return (
        <div className="tab-pane fade active in" id="product_tabs_two">
          <h3 className="tab-content-title">Product Tabs Two</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="storefront_product_tabs_2_section_enabled"
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="hidden"
                      defaultValue={0}
                      name="storefront_product_tabs_2_section_enabled"
                    />
                    <input
                      type="checkbox"
                      name="storefront_product_tabs_2_section_enabled"
                      className
                      id="storefront_product_tabs_2_section_enabled"
                      defaultValue={1}
                      defaultChecked
                    />
                    <label htmlFor="storefront_product_tabs_2_section_enabled">
                      Enable product tabs two section
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="translatable[storefront_product_tabs_2_section_title]"
                  className="col-md-3 control-label text-left"
                >
                  Title
                </label>
                <div className="col-md-9">
                  <input
                    name="translatable[storefront_product_tabs_2_section_title]"
                    className="form-control "
                    id="translatable[storefront_product_tabs_2_section_title]"
                    defaultValue="Hot Best Sellers"
                    type="text"
                  />
                </div>
              </div>
              <div className="clearfix" />
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 1</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_2_section_tab_1_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_2_section_tab_1_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_2_section_tab_1_title]"
                      defaultValue="Latest Products"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_2_section_tab_1_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_2_section_tab_1_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_2_section_tab_1_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products">
                        Category Products
                      </option>
                      <option value="latest_products" selected>
                        Latest Products
                      </option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_1_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_1_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_2_section_tab_1_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181} selected>
                          Electronics
                        </option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_1_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_2_section_tab_1_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_2_section_tab_1_products_limit"
                        defaultValue={10}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_1_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_1_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_2_section_tab_1_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_2_section_tab_1_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 2</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_2_section_tab_2_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_2_section_tab_2_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_2_section_tab_2_title]"
                      defaultValue="Recently Viewed"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_2_section_tab_2_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_2_section_tab_2_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_2_section_tab_2_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products">
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products" selected>
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_2_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_2_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_2_section_tab_2_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181} selected>
                          Electronics
                        </option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_2_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_2_section_tab_2_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_2_section_tab_2_products_limit"
                        defaultValue={10}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_2_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_2_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_2_section_tab_2_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_2_section_tab_2_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 3</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_2_section_tab_3_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_2_section_tab_3_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_2_section_tab_3_title]"
                      defaultValue="On Sale"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_2_section_tab_3_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_2_section_tab_3_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_2_section_tab_3_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_3_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_3_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_2_section_tab_3_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35}>¦–– Hot Sale</option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126} selected>
                          Women's Fashion
                        </option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_3_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_2_section_tab_3_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_2_section_tab_3_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_3_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_3_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_2_section_tab_3_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_2_section_tab_3_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content clearfix">
                <h4 className="section-title">Tab 4</h4>
                <div className="form-group">
                  <label
                    htmlFor="translatable[storefront_product_tabs_2_section_tab_4_title]"
                    className="col-md-3 control-label text-left"
                  >
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      name="translatable[storefront_product_tabs_2_section_tab_4_title]"
                      className="form-control "
                      id="translatable[storefront_product_tabs_2_section_tab_4_title]"
                      defaultValue="Top Selling"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="storefront_product_tabs_2_section_tab_4_product_type"
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="storefront_product_tabs_2_section_tab_4_product_type"
                      className="form-control custom-select-black product-type"
                      id="storefront_product_tabs_2_section_tab_4_product_type"
                    >
                      <option value>Please Select</option>
                      <option value="category_products" selected>
                        Category Products
                      </option>
                      <option value="latest_products">Latest Products</option>
                      <option value="recently_viewed_products">
                        Recently Viewed Products
                      </option>
                      <option value="custom_products">Custom Products</option>
                    </select>
                  </div>
                </div>
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_4_category_id"
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_4_category_id"
                        className="form-control custom-select-black "
                        id="storefront_product_tabs_2_section_tab_4_category_id"
                      >
                        <option value>Please Select</option>
                        <option value={181}>Electronics</option>
                        <option value={183}>¦–– Mobiles</option>
                        <option value={192}>¦–– ¦–– Smartphones</option>
                        <option value={193}>¦–– ¦–– Android</option>
                        <option value={194}>¦–– ¦–– iPhone</option>
                        <option value={195}>¦–– ¦–– Featured</option>
                        <option value={196}>¦–– ¦–– Refurbished</option>
                        <option value={197}>¦–– ¦–– Brands</option>
                        <option value={185}>¦–– Mobile Accessories</option>
                        <option value={198}>¦–– ¦–– Cases &amp; Covers</option>
                        <option value={199}>¦–– ¦–– Cables</option>
                        <option value={200}>¦–– ¦–– Chargers</option>
                        <option value={201}>¦–– ¦–– Power Bank</option>
                        <option value={202}>¦–– ¦–– Headphones</option>
                        <option value={203}>¦–– ¦–– Screen Protectors</option>
                        <option value={184}>¦–– Hot Brands</option>
                        <option value={187}>¦–– ¦–– OnePlus</option>
                        <option value={188}>¦–– ¦–– Apple</option>
                        <option value={189}>¦–– ¦–– Samsung</option>
                        <option value={190}>¦–– ¦–– Huawei</option>
                        <option value={191}>¦–– ¦–– Sony</option>
                        <option value={182}>¦–– Laptops</option>
                        <option value={204}>¦–– ¦–– Mackbook</option>
                        <option value={205}>¦–– ¦–– Gaming</option>
                        <option value={206}>¦–– ¦–– Ultraslim</option>
                        <option value={207}>¦–– ¦–– Tablets</option>
                        <option value={212}>¦–– ¦–– All Laptops</option>
                        <option value={186}>¦–– Computer Accessories</option>
                        <option value={208}>¦–– ¦–– Monitors</option>
                        <option value={209}>
                          ¦–– ¦–– Keyboard &amp; Mouse
                        </option>
                        <option value={210}>¦–– ¦–– Pendrive</option>
                        <option value={211}>¦–– ¦–– Speaker</option>
                        <option value={12}>Men's Fashion</option>
                        <option value={13}>¦–– Clothing</option>
                        <option value={15}>¦–– ¦–– Shirts</option>
                        <option value={14}>¦–– ¦–– All Clothing</option>
                        <option value={16}>¦–– ¦–– Sportswear</option>
                        <option value={17}>¦–– ¦–– Belts</option>
                        <option value={18}>¦–– ¦–– Pants</option>
                        <option value={26}>¦–– ¦–– Formal Shoes</option>
                        <option value={19}>¦–– Shoes</option>
                        <option value={20}>¦–– ¦–– All Shoes</option>
                        <option value={21}>¦–– ¦–– Sneakers</option>
                        <option value={22}>¦–– ¦–– Boots</option>
                        <option value={23}>¦–– ¦–– Sandals</option>
                        <option value={24}>
                          ¦–– ¦–– Slippers &amp; Flip-flops
                        </option>
                        <option value={25}>¦–– ¦–– Sports Shoes</option>
                        <option value={27}>¦–– Outerwear &amp; Jackets</option>
                        <option value={28}>¦–– ¦–– Trench</option>
                        <option value={30}>¦–– ¦–– Genuine Leather</option>
                        <option value={32}>¦–– ¦–– Down Jackets</option>
                        <option value={33}>¦–– ¦–– Wool &amp; Blends</option>
                        <option value={34}>¦–– ¦–– Suits &amp; Blazer</option>
                        <option value={35} selected>
                          ¦–– Hot Sale
                        </option>
                        <option value={36}>¦–– ¦–– Glasses</option>
                        <option value={37}>¦–– ¦–– Jackets</option>
                        <option value={38}>¦–– ¦–– T-Shirts</option>
                        <option value={39}>¦–– ¦–– Shirts</option>
                        <option value={40}>¦–– ¦–– Belts</option>
                        <option value={52}>¦–– Bottoms</option>
                        <option value={53}>¦–– ¦–– Casual Pants</option>
                        <option value={54}>¦–– ¦–– Sweatpants</option>
                        <option value={55}>¦–– ¦–– Cargo Pants</option>
                        <option value={56}>¦–– ¦–– Jeans</option>
                        <option value={57}>¦–– ¦–– Harem Pants</option>
                        <option value={59}>Consumer Electronics</option>
                        <option value={120}>¦–– Televisions</option>
                        <option value={7}>¦–– Gadgets</option>
                        <option value={142}>¦–– Drones</option>
                        <option value={108}>¦–– Supplies</option>
                        <option value={109}>¦–– Camera &amp; Photo</option>
                        <option value={110}>¦–– Car &amp; Vehicle</option>
                        <option value={111}>¦–– Cell Phones</option>
                        <option value={112}>¦–– Computer</option>
                        <option value={113}>¦–– GPS &amp; Navigation</option>
                        <option value={114}>¦–– Headphones</option>
                        <option value={115}>¦–– Home Audio</option>
                        <option value={116}>¦–– Office Electronics</option>
                        <option value={117}>¦–– Audio &amp; Video</option>
                        <option value={118}>¦–– Security</option>
                        <option value={119}>¦–– Service Plans</option>
                        <option value={121}>¦–– Video Game</option>
                        <option value={122}>¦–– Video Projectors</option>
                        <option value={123}>¦–– Wearable Technology</option>
                        <option value={124}>¦–– eBook Readers</option>
                        <option value={60}>¦–– Office Supplies</option>
                        <option value={61}>¦–– All Computers</option>
                        <option value={63}>¦–– Desktops &amp; Monitors</option>
                        <option value={64}>¦–– Drives &amp; Storage</option>
                        <option value={65}>¦–– Networking</option>
                        <option value={66}>¦–– Keyboards &amp; Mice</option>
                        <option value={67}>¦–– PC Gaming</option>
                        <option value={68}>¦–– Computer Accessories</option>
                        <option value={69}>¦–– Printers &amp; Ink</option>
                        <option value={70}>¦–– Office Supplies</option>
                        <option value={82}>Watches</option>
                        <option value={83}>¦–– Men's Watches</option>
                        <option value={84}>¦–– ¦–– Analog Watches</option>
                        <option value={85}>¦–– ¦–– Sports Watches</option>
                        <option value={86}>¦–– ¦–– Mechanical Watches</option>
                        <option value={87}>¦–– ¦–– Digital Watches</option>
                        <option value={88}>¦–– Women's Watches</option>
                        <option value={89}>¦–– Children's Watches</option>
                        <option value={90}>¦–– Pocket Watches</option>
                        <option value={91}>¦–– Watch Accessories</option>
                        <option value={92}>¦–– Women's Bracelets</option>
                        <option value={156}>Home Appliances</option>
                        <option value={157}>¦–– Bedding</option>
                        <option value={158}>¦–– Furniture</option>
                        <option value={159}>¦–– Decor</option>
                        <option value={160}>¦–– Curtains</option>
                        <option value={161}>¦–– Kitchen Utensils</option>
                        <option value={162}>¦–– Cooking &amp; Baking</option>
                        <option value={163}>¦–– Gas &amp; Stove</option>
                        <option value={164}>¦–– Plastics &amp; Melamine</option>
                        <option value={165}>
                          ¦–– Ceramics &amp; Dinnerware
                        </option>
                        <option value={166}>
                          ¦–– Storage &amp; Organisation
                        </option>
                        <option value={167}>¦–– Home Care</option>
                        <option value={168}>¦–– Cleaning Tools</option>
                        <option value={169}>¦–– Laundry</option>
                        <option value={170}>¦–– Towel</option>
                        <option value={171}>¦–– Travel Accessories</option>
                        <option value={172}>¦–– Pest Control</option>
                        <option value={98}>Backpacks</option>
                        <option value={99}>¦–– Men's Bags</option>
                        <option value={100}>¦–– Women's Bags</option>
                        <option value={102}>¦–– Wallets</option>
                        <option value={103}>¦–– Kids &amp; Baby's Bags</option>
                        <option value={104}>¦–– Travel Bags</option>
                        <option value={105}>¦–– Functional Bags</option>
                        <option value={106}>¦–– Coin Purses</option>
                        <option value={107}>¦–– Bag Parts</option>
                        <option value={126}>Women's Fashion</option>
                        <option value={127}>¦–– All Beauty</option>
                        <option value={128}>¦–– Make-up</option>
                        <option value={129}>¦–– Luxury Beauty</option>
                        <option value={130}>¦–– Watches</option>
                        <option value={213}>¦–– Necklace</option>
                        <option value={133}>¦–– Rings</option>
                        <option value={131}>¦–– Glasses</option>
                        <option value={132}>¦–– All Perfumes</option>
                        <option value={134}>¦–– Women Perfumes</option>
                        <option value={135}>¦–– Gift Sets</option>
                        <option value={136}>¦–– All Health</option>
                        <option value={137}>¦–– Personal Care</option>
                        <option value={138}>¦–– Hair Care &amp; Styling</option>
                        <option value={139}>¦–– Bath &amp; Body</option>
                        <option value={140}>¦–– Dental Care</option>
                        <option value={141}>¦–– Diet &amp; Nutrition</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="products-limit hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_4_products_limit"
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="storefront_product_tabs_2_section_tab_4_products_limit"
                        className="form-control "
                        id="storefront_product_tabs_2_section_tab_4_products_limit"
                        defaultValue
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="custom-products hide">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_product_tabs_2_section_tab_4_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                      <select
                        name="storefront_product_tabs_2_section_tab_4_products[]"
                        className="selectize prevent-creation selectized"
                        id="storefront_product_tabs_2_section_tab_4_products[]"
                        data-url="https://fleetcart.envaysoft.com/en/admin/products"
                        multiple="multiple"
                        tabIndex={-1}
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control selectize prevent-creation multi plugin-remove_button">
                        <div className="selectize-input items not-full">
                          <input
                            type="select-multiple"
                            autoComplete="off"
                            tabIndex
                            id="storefront_product_tabs_2_section_tab_4_products[]-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi selectize prevent-creation plugin-remove_button"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "onecolbanner") {
      return (
        <div className="tab-pane fade active in" id="one_column_banner">
          <h3 className="tab-content-title">One Column Banner</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    htmlFor="storefront_one_column_banner_enabled"
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="hidden"
                        defaultValue={0}
                        name="storefront_one_column_banner_enabled"
                      />
                      <input
                        type="checkbox"
                        name="storefront_one_column_banner_enabled"
                        className
                        id="storefront_one_column_banner_enabled"
                        defaultValue={1}
                        defaultChecked
                      />
                      <label htmlFor="storefront_one_column_banner_enabled">
                        Enable One column banner section
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content clearfix">
              <div className="panel-wrap">
                <div className="panel">
                  <div className="panel-header">
                    <h5>Banner</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image">
                      <img
                        src="https://fleetcart.envaysoft.com/storage/media/kRb5N2mGVnso21KKTsxenE4GuH3fjej5r2m8vY8V.png"
                        alt="Banner"
                      />
                      <input
                        type="hidden"
                        name="translatable[storefront_one_column_banner_file_id]"
                        defaultValue={1102}
                        className="banner-file-id"
                      />
                    </div>
                    <div className="panel-content clearfix">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 clearfix">
                          <div className="form-group">
                            <label htmlFor="storefront_one_column_banner-call-to-action-url">
                              Call to Action URL
                            </label>
                            <input
                              type="text"
                              name="storefront_one_column_banner_call_to_action_url"
                              defaultValue="/categories/home-appliances/products"
                              className="form-control"
                              id="storefront_one_column_banner-call-to-action-url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="checkbox">
                            <input
                              type="hidden"
                              name="storefront_one_column_banner_open_in_new_window"
                              defaultValue={0}
                            />
                            <input
                              type="checkbox"
                              name="storefront_one_column_banner_open_in_new_window"
                              defaultValue={1}
                              id="storefront_one_column_banner-open-in-new-window"
                              defaultChecked
                            />
                            <label htmlFor="storefront_one_column_banner-open-in-new-window">
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
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
            <h3>Storefront</h3>
            <ol className="breadcrumb">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="active">Storefront</li>
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
                            <a
                              className={
                                this.state.activeTab == "generalsettings"
                                  ? ""
                                  : "collapsed"
                              }
                              data-toggle="collapse"
                              onClick={() => {
                                if (this.state.activeTab == "generalsettings") {
                                  this.setState({ activeTab: "none" });
                                } else {
                                  this.setState({
                                    activeTab: "generalsettings",
                                  });
                                }
                              }}
                            >
                              General Settings
                            </a>
                          </h4>
                        </div>
                        <div
                          className={
                            this.state.activeTab == "generalsettings"
                              ? "panel-collapse collapse in"
                              : "panel-collapse collapse"
                          }
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
                                  this.state.activePanel == "logo"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "logo" });
                                }}
                              >
                                <a data-toggle="tab">Logo</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "menus"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "menus" });
                                }}
                              >
                                <a data-toggle="tab">Menus</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "footer"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "footer" });
                                }}
                              >
                                <a data-toggle="tab">Footer</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "newsletter"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "newsletter" });
                                }}
                              >
                                <a data-toggle="tab">Newsletter</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "features"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "features" });
                                }}
                              >
                                <a data-toggle="tab">Features</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "productpage"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "productpage" });
                                }}
                              >
                                <a data-toggle="tab">Product Page</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "sociallinks"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "sociallinks" });
                                }}
                              >
                                <a data-toggle="tab">Social Links</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              className={
                                this.state.activeTab == "homepagesections"
                                  ? ""
                                  : "collapsed"
                              }
                              data-toggle="collapse"
                              onClick={() => {
                                if (
                                  this.state.activeTab == "homepagesections"
                                ) {
                                  this.setState({ activeTab: "none" });
                                } else {
                                  this.setState({
                                    activeTab: "homepagesections",
                                  });
                                }
                              }}
                            >
                              Home Page Sections
                            </a>
                          </h4>
                        </div>
                        <div
                          className={
                            this.state.activeTab == "homepagesections"
                              ? "panel-collapse collapse in"
                              : "panel-collapse collapse"
                          }
                        >
                          <div className="panel-body">
                            <ul className="accordion-tab nav nav-tabs">
                              <li
                                className={
                                  this.state.activePanel == "sliderbanners"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "sliderbanners",
                                  });
                                }}
                              >
                                <a data-toggle="tab">Slider Banners</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "threecolfullwidth"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "threecolfullwidth",
                                  });
                                }}
                              >
                                <a data-toggle="tab">
                                  Three Column Full Width Banners
                                </a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "featuredcategories"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "featuredcategories",
                                  });
                                }}
                              >
                                <a data-toggle="tab">Featured Categories</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "producttabs1"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "producttabs1",
                                  });
                                }}
                              >
                                <a data-toggle="tab">Product Tabs One</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "topbrands"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "topbrands" });
                                }}
                              >
                                <a data-toggle="tab">Top Brands</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "flashsale"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "flashsale" });
                                }}
                              >
                                <a data-toggle="tab">
                                  Flash Sale &amp; Vertical Products
                                </a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "twocolbanners"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "twocolbanners",
                                  });
                                }}
                              >
                                <a data-toggle="tab">Two Column Banners</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "productgrid"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "productgrid" });
                                }}
                              >
                                <a data-toggle="tab">Product Grid</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "threecolbanners"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "threecolbanners",
                                  });
                                }}
                              >
                                <a data-toggle="tab">Three Column Banners</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "producttabs2"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "producttabs2",
                                  });
                                }}
                              >
                                <a data-toggle="tab">Product Tabs Two</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "onecolbanner"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({
                                    activePanel: "onecolbanner",
                                  });
                                }}
                              >
                                <a data-toggle="tab">One Column Banner</a>
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
                        <div className=" col-md-10" style={{ display: "flex" }}>
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
                          <Loading show={this.state.submitting} />
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

export default withRouter(StoreFront);
