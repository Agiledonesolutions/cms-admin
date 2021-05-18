import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../apis/api";
import Validate from "../../../utils/validation";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
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
    sliderOptions: [],
    tagOptions: [],
    categoryOptions: [],
    brandsOptions: [],
    productOptions: [],
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
        CustomThemeColor: "#000000",
        MailThemeColor: "",
        CustomMailThemeColor: "#000000",
        sliderId: "",
        Address: "",
        TermsConditionsPageId: "",
        PrivacyPolicyPageId: ""
      },
      Footer: {
        FooterTagsIds: [],
        FooterCopyrightText: "",
        AcceptedPaymentMethodsImageId: "",
        image: ""
      },
      "Slider Banners": {
        Name: "Slider Banners",
        Banners: [
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          },
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          }
        ]
      },
      "Three Column Full Width Banners": {
        Name: "Three Column Full Width Banners",
        SectionStatus: false,
        BackgroundId: "",
        BackgroundIdImage: "",
        Banners: [
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          },
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          },
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          }
        ]
      },
      "Two column banners": {
        Name: "Two column banners",
        SectionStatus: false,
        Banners: [
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          },
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          }
        ]
      },
      "Three Column Banners": {
        Name: "Three Column Banners",
        SectionStatus: false,
        Banners: [
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          },
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          },
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          }
        ]
      },
      "One Column Banner": {
        Name: "One Column Banner",
        SectionStatus: false,
        Banners: [
          {
            CalltoActionURL: "",
            OpenInNewWindow: false,
            ImageId: "",
            image: ""
          }
        ]
      },
      FeaturedCategories: {
        SectionStatus: true,
        SectionTitle: "",
        SectionSubtitle: "",
        Categories: [
          {
            CategoryId: "",
            Type: "",
            ProductIds: []
          },
          {
            CategoryId: "",
            Type: "",
            ProductIds: []
          },
          {
            CategoryId: "",
            Type: "",
            ProductIds: []
          },
          {
            CategoryId: "",
            Type: "",
            ProductIds: []
          },
          {
            CategoryId: "",
            Type: "",
            ProductIds: []
          },
          {
            CategoryId: "",
            Type: "",
            ProductIds: []
          },
        ]
      },
      TopBrands: {
        TopBrandsIds: [],
        SectionStatus: false
      },
      "Product Tabs One": {
        Name: "Product Tabs One",
        SectionStatus: false,
        Tabs: [
          {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        }
      ]
      },
      "Product Tabs Two":{
        Name: "Product Tabs Two",
        SectionStatus: false,
        Tabs: [
          {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        }
      ]
      },
      "Product Grid":{
        Name: "Product Grid",
        SectionStatus: false,
        Tabs: [
          {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        },
        {
          Title: "",
          Type: "",
          CategoryId: "",
          ProductsLimit: "",
          ProductIds: []
        }
      ]
      }
    },
    errors: [],
  };
  componentDidMount() {
  
    api.get('page/get').then(res=>{
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
    api.get('/slides/get').then(res=>{
      const {sliderOptions} = this.state
      res.data.data.forEach(val=>{
        let tmp = {
          label: val.Name,
          value: val._id
        }
        sliderOptions.push(tmp)
      })
      this.setState({sliderOptions})
    }).catch(err=>{
      console.log("error fetching sliders")
    })
    api.get('/tag/get').then(res=>{
      const {tagOptions} = this.state
      res.data.data.forEach(val=>{
        let tmp = {
          label: val.name,
          value: val._id
        }
        tagOptions.push(tmp)
      })
      this.setState({tagOptions})
    }).catch(err=>{
      console.log("error fetching tags")
    })
    const {categoryOptions} = this.state
    const addToCategories = (x, sub) =>{
      let tmp = {}
      let name = ""
      for(var i = 0; i < sub.length; i++){
        name+="|-- "
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

    api.post('/brand/get/').then(res=>{
      const {brandsOptions} = this.state
      res.data.data.forEach(val=>{
        let tmp = {
          label: val.name,
          value: val._id
        }
        brandsOptions.push(tmp)
      })
      this.setState({brandsOptions})
    }).catch(err=>{
      console.log("error fetching pages")
    })
    api.get('/product/get').then(res=>{
      const {productOptions} = this.state
      res.data.data.map(val => {
        let tmp ={}
        tmp.value = val._id
        tmp.label = val.name
        productOptions.push(tmp)
      });
      this.setState({productOptions})
    }).catch(err=>{
      console.log("error fetching products")
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
    else if(this.state.activePanel == "footer"){
      data.Footer[imageFor] = id
      data.Footer.image = image
    }
    else if(this.state.activePanel == "sliderbanners"){
      data["Slider Banners"].Banners[imageFor].imageId = id
      data["Slider Banners"].Banners[imageFor].image = image
    }
    else if(this.state.activePanel == "threecolfullwidth"){
      if(imageFor == "BackgroundId"){
        data["Three Column Full Width Banners"].BackgroundId = id
        data["Three Column Full Width Banners"].BackgroundIdImage = image
      }else{
        data["Three Column Full Width Banners"].Banners[imageFor].imageId = id
        data["Three Column Full Width Banners"].Banners[imageFor].image = image
      }
    }
    else if(this.state.activePanel == "twocolbanners"){
      data["Two column banners"].Banners[imageFor].imageId = id
      data["Two column banners"].Banners[imageFor].image = image
    }
    else if(this.state.activePanel == "threecolbanners"){
      data["Three Column Banners"].Banners[imageFor].imageId = id
      data["Three Column Banners"].Banners[imageFor].image = image
    }
    else if(this.state.activePanel == "onecolbanner"){
      data["One Column Banner"].Banners[imageFor].imageId = id
      data["One Column Banner"].Banners[imageFor].image = image
    }
    this.setState({data})
  };

  handleSubmit = () => {
    console.log(this.state.data);
    const { errors } = this.state;
    const { data } = this.state;

    //add custom colours
    //add banners to arr
    //add product tabs and grids to arr

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
                  className="col-md-3 control-label text-left"
                >
                  Theme Color
                </label>
                <div className="col-md-9">
                  <select
                    name="ThemeColor"
                    className="form-control custom-select-black "
                    value={this.state.data.General.ThemeColor}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "General", e.target.name)
                    }}
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
                    <option value={"custom color"}>Custom Color</option>
                  </select>
                </div>
              </div>
              <div className={this.state.data.General.ThemeColor == "custom color"?"": "hide"} >
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Custom Theme Color
                  </label>
                  <div className="col-md-9">
                    <input
                      name="CustomThemeColor"
                      className="form-control "
                      type="color"
                      value={this.state.data.General.CustomThemeColor}
                      onChange={(e)=>{
                        this.setVal(e.target.value, "General", e.target.name)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Mail Theme Color
                </label>
                <div className="col-md-9">
                  <select
                    name="MailThemeColor"
                    className="form-control custom-select-black "
                    value={this.state.data.General.MailThemeColor}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "General", e.target.name)
                    }}
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
                    <option value={"custom color"}>Custom Color</option>
                  </select>
                </div>
              </div>
              <div className={this.state.data.General.MailThemeColor == "custom color"? "": "hide"}>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Custom Mail Theme Color
                  </label>
                  <div className="col-md-9">
                    <input
                      name="CustomMailThemeColor"
                      className="form-control "
                      type="color"
                      value={this.state.data.General.CustomMailThemeColor}
                      value={this.state.data.General.ThemeColor}
                      onChange={(e)=>{
                        this.setVal(e.target.value, "General", e.target.name)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Slider
                </label>
                <div className="col-md-9">
                  <select
                    name="sliderId"
                    className="form-control custom-select-black "
                    value={this.state.data.General.sliderId}
                      onChange={(e)=>{
                        this.setVal(e.target.value, "General", e.target.name)
                      }}
                  >
                    <option value="">Please Select</option>
                      {this.state.sliderOptions.map((val,idx)=>(
                        <option key={idx} value={val.value}>{val.label}</option>
                      ))}
                    
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Terms &amp; Conditions Page
                </label>
                <div className="col-md-9">
                  <select
                    name="TermsConditionsPageId"
                    className="form-control custom-select-black "
                    value={this.state.data.General.TermsConditionsPageId}
                      onChange={(e)=>{
                        this.setVal(e.target.value, "General", e.target.name)
                      }}
                  >
                    <option value="">Please Select</option>
                    {this.state.pagesOptions.map((val,idx)=>(
                      <option key={idx} value={val.value}>{val.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Privacy Policy Page
                </label>
                <div className="col-md-9">
                  <select
                    name="PrivacyPolicyPageId"
                    className="form-control custom-select-black "
                    value={this.state.data.General.PrivacyPolicyPageId}
                      onChange={(e)=>{
                        this.setVal(e.target.value, "General", e.target.name)
                      }}
                  >
                    <option value>Please Select</option>
                    {this.state.pagesOptions.map((val,idx)=>(
                      <option key={idx} value={val.value}>{val.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Address
                </label>
                <div className="col-md-9">
                  <input
                    name="Address"
                    className="form-control "
                    type="text"
                    value={this.state.data.General.Address}
                      onChange={(e)=>{
                        this.setVal(e.target.value, "General", e.target.name)
                      }}
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
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Footer</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="box-content clearfix">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Footer Tags
                  </label>
                  <div className="col-md-9">
                  <MultiSelect
                    onChange={(val)=>{
                      const {data} = this.state
                      data.Footer.FooterTagsIds = val.split(",")
                      this.setState({data})
                    }}
                    options={this.state.tagOptions}
                    defaultValue={
                      this.state.data.Footer.FooterTagsIds.toString()
                    }
                  />
                    </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Footer Copyright Text
                  </label>
                  <div className="col-md-9">
                    <input
                      name="FooterCopyrightText"
                      className="form-control "
                      type="text"
                      value={this.state.data.Footer.FooterCopyrightText}
                      onChange={(e)=>{
                        this.setVal(e.target.value, "Footer", e.target.name)
                      }}
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
                    onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: "AcceptedPaymentMethodsImageId"})
                    }}
                  >
                    <i className="fa fa-folder-open m-r-5" />
                    Browse
                  </button>
                  <div className="clearfix" />
                  <div className="single-image image-holder-wrapper clearfix">
                  {this.state.data.Footer.image? <div className="image-holder">
                <img src={"https://big-cms.herokuapp.com/"+this.state.data.Footer.image} height={120} width={120}/>
                <button
                  type="button"
                  className="btn remove-image"
                  onClick={()=>{
                    this.setState({imageFor: "AcceptedPaymentMethodsImageId"}, ()=>{
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
              <div className="box-content" key={idx}>
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
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Slider Banners</h3>
          <div className="accordion-box-content">
            <div className="tab-content clearfix">
              <div className="panel-wrap">
                {this.state.data["Slider Banners"].Banners.map((val,idx)=>(
                <div className="panel" key={idx}>
                  <div className="panel-header">
                    <h5>Banner {idx+1}</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image" onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: idx})
                    }}>
                       {this.state.data["Slider Banners"].Banners[idx].image?  
                <img src={"https://big-cms.herokuapp.com/"+this.state.data["Slider Banners"].Banners[idx].image} />
                
                
                : <div className="placeholder">
                <i className="fa fa-picture-o" />
              </div>}
                      
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
                              name="CalltoActionURL"
                              className="form-control"
                              value={this.state.data["Slider Banners"].Banners[idx].CalltoActionURL}
                              onChange={(e)=>{
                                this.setArr(e.target.value, "Slider Banners", "Banners", idx, e.target.name)
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
                              id={"storefront_slider_banner-open-in-new-window"+idx}
                              checked={this.state.data["Slider Banners"].Banners[idx].OpenInNewWindow}
                              onChange={(e)=>{
                                this.setArr(!this.state.data["Slider Banners"].Banners[idx].OpenInNewWindow, "Slider Banners", "Banners", idx, e.target.name)
                              }}
                            />
                            <label htmlFor={"storefront_slider_banner-open-in-new-window"+idx}>
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "threecolfullwidth") {
      return (
        <div
          className="tab-pane fade active in"
        >
          <h3 className="tab-content-title">Three Column Full Width Banners</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="SectionStatus"
                        id="storefront_three_column_full_width_banners_enabled"
                        checked={this.state.data["Three Column Full Width Banners"].SectionStatus}
                        onChange={(e)=>{
                          this.setVal(!this.state.data["Three Column Full Width Banners"].SectionStatus, "Three Column Full Width Banners", e.target.name)
                        }}
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
                    onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: "BackgroundId"})
                    }}
                  >
                    <i className="fa fa-folder-open m-r-5" />
                    Browse
                  </button>
                  <div className="clearfix" />
                  <div className="single-image image-holder-wrapper clearfix">
                  {this.state.data["Three Column Full Width Banners"].BackgroundIdImage? <div className="image-holder">
                <img src={"https://big-cms.herokuapp.com/"+this.state.data["Three Column Full Width Banners"].BackgroundIdImage} height={120} width={120}/>
                <button
                  type="button"
                  className="btn remove-image"
                  onClick={()=>{
                    this.setState({imageFor: "BackgroundId"}, ()=>{
                      this.setImageId("", false, "")
                    })
                  }}
                />
                </div>: <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>}
                  </div>
                </div>
                {this.state.data["Three Column Full Width Banners"].Banners.map((val,idx)=>(
                <div className="panel" key={idx}>
                  <div className="panel-header">
                    <h5>Banner {idx+1}</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image" onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: idx})
                    }}>
                       {this.state.data["Three Column Full Width Banners"].Banners[idx].image?  
                <img src={"https://big-cms.herokuapp.com/"+this.state.data["Three Column Full Width Banners"].Banners[idx].image} />
                
                
                : <div className="placeholder">
                <i className="fa fa-picture-o" />
              </div>}
                      
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
                              name="CalltoActionURL"
                              className="form-control"
                              value={this.state.data["Three Column Full Width Banners"].Banners[idx].CalltoActionURL}
                              onChange={(e)=>{
                                this.setArr(e.target.value, "Three Column Full Width Banners", "Banners", idx, e.target.name)
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
                              id={"three_slider_banner-open-in-new-window"+idx}
                              checked={this.state.data["Three Column Full Width Banners"].Banners[idx].OpenInNewWindow}
                              onChange={(e)=>{
                                this.setArr(!this.state.data["Three Column Full Width Banners"].Banners[idx].OpenInNewWindow, "Three Column Full Width Banners", "Banners", idx, e.target.name)
                              }}
                            />
                            <label htmlFor={"three_slider_banner-open-in-new-window"+idx}>
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "featuredcategories") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Featured Categories</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="SectionStatus"
                      id="storefront_featured_categories_section_enabled"
                      checked={this.state.data.FeaturedCategories.SectionStatus}
                      onChange={(e)=>{
                        this.setVal(!this.state.data.FeaturedCategories.SectionStatus, "FeaturedCategories", e.target.name)
                      }}
                      
                    />
                    <label htmlFor="storefront_featured_categories_section_enabled">
                      Enable featured categories section
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Section Title
                </label>
                <div className="col-md-9">
                  <input
                    name="SectionTitle"
                    className="form-control "
                    type="text"
                    value={this.state.data.FeaturedCategories.SectionTitle}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "FeaturedCategories", e.target.name)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Section Subtitle
                </label>
                <div className="col-md-9">
                  <input
                    name="SectionSubtitle"
                    className="form-control "
                    type="text"
                    value={this.state.data.FeaturedCategories.SectionSubtitle}
                    onChange={(e)=>{
                      this.setVal(e.target.value, "FeaturedCategories", e.target.name)
                    }}
                  />
                </div>
              </div>
              {this.state.data.FeaturedCategories.Categories.map((val, idx)=>(
              <div className="box-content clearfix" key={idx}>
                <h4 className="section-title">Category {idx+1}</h4>
                <div className="form-group">
                  <label
                    htmlFor="storefront_featured_categories_section_category_1_category_id"
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                  
                      <MultiSelect
                    onChange={(val) => {
                      this.setArr(val, "FeaturedCategories", "Categories", idx,  "CategoryId")
                    }}
                    singleSelect={true}
                    largeData={true}
                    options={this.state.categoryOptions}
                    defaultValue={this.state.data.FeaturedCategories.Categories[idx].CategoryId}
                  />
                 </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="Type"
                      className="form-control custom-select-black product-type"
                      value={this.state.data.FeaturedCategories.Categories[idx].Type}
                      onChange={(e)=>{
                        this.setArr([], "FeaturedCategories", "Categories", idx,  "ProductIds")
                        this.setArr(e.target.value, "FeaturedCategories", "Categories", idx,  "Type")
                      }}
                    >
                      <option value="">Please Select</option>
                      <option value={"Category Products"} >
                        Category Products
                      </option>
                      <option value={"Custom Products"}>Custom Products</option>
                    </select>
                  </div>
                </div>
                {this.state.data.FeaturedCategories.Categories[idx].Type == "Custom Products"? 
                <div className="custom-products">
                  <div className="form-group">
                    <label
                      htmlFor="storefront_featured_categories_section_category_1_products[]-selectized"
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                    <MultiSelect
                    onChange={(val) => {
                      this.setArr(val.split(), "FeaturedCategories", "Categories", idx,  "ProductIds")
                    }}
                    largeData={true}
                    options={this.state.productOptions}
                    defaultValue={this.state.data.FeaturedCategories.Categories[idx].ProductIds.toString()}
                  />
                    </div>
                  </div>
                </div>
                :""}
              </div>
              ))}
           </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "producttabs1") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Product Tabs One</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    
                    <input
                      type="checkbox"
                      name="SectionStatus"
                      id="storefront_product_tabs_1_section_enabled"
                      checked={this.state.data["Product Tabs One"].SectionStatus}
                      onChange={(e)=>{
                        this.setVal(!this.state.data["Product Tabs One"].SectionStatus, "Product Tabs One", e.target.name)
                      }}
                    />
                    <label htmlFor="storefront_product_tabs_1_section_enabled">
                      Enable product tabs one section
                    </label>
                  </div>
                </div>
              </div>
              {this.state.data["Product Tabs One"].Tabs.map((val,idx)=>(
              <div className="box-content clearfix" key={idx}>
                <h4 className="section-title">Tab {idx+1}</h4>
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
                      value={this.state.data["Product Tabs One"].Tabs[idx].Title}
                      onChange={(e)=>{
                        this.setArr(e.target.value, "Product Tabs One", "Tabs",idx, e.target.name)
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Type
                  </label>
                  <div className="col-md-9">
                    <select
                      name="Type"
                      className="form-control custom-select-black product-type"
                      value={this.state.data["Product Tabs One"].Tabs[idx].Type}
                      onChange={(e)=>{
                        this.setArr("", "Product Tabs One", "Tabs", idx, "CategoryId")
                        this.setArr("", "Product Tabs One", "Tabs", idx, "ProductsLimit")
                        this.setArr([], "Product Tabs One", "Tabs", idx, "ProductIds")
                        this.setArr(e.target.value, "Product Tabs One", "Tabs", idx,e.target.name)
                      }}
                    >
                      <option value="">Please Select</option>
                      <option value={"Category Products"} >
                        Category Products
                      </option>
                      <option value={"Latest Products"}>Latest Products</option>
                      <option value={"Recently Viewed Products"}>
                        Recently Viewed Products
                      </option>
                      <option value={"Custom Products"}>Custom Products</option>
                    </select>
                  </div>
                </div>
                {this.state.data["Product Tabs One"].Tabs[idx].Type == "Category Products"? 
                <div className="category-products ">
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label text-left"
                    >
                      Category
                    </label>
                    <div className="col-md-9">
                    <MultiSelect
                    onChange={(val) => {
                      this.setArr(val, "Product Tabs One", "Tabs", idx,  "CategoryId")
                    }}
                    singleSelect={true}
                    largeData={true}
                    options={this.state.categoryOptions}
                    defaultValue={this.state.data["Product Tabs One"].Tabs[idx].CategoryId}
                  />
                    </div>
                  </div>
                </div>
                :""}
                {this.state.data["Product Tabs One"].Tabs[idx].Type == "Latest Products" || this.state.data["Product Tabs One"].Tabs[idx].Type == "Recently Viewed Products"? 
                <div className="products-limit">
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label text-left"
                    >
                      Products Limit
                    </label>
                    <div className="col-md-9">
                      <input
                        name="ProductsLimit"
                        className="form-control "
                        type="number"
                        value={this.state.data["Product Tabs One"].Tabs[idx].ProductsLimit}
                      onChange={(e)=>{
                        this.setArr(e.target.value, "Product Tabs One", "Tabs",idx ,e.target.name)
                      }}
                      />
                    </div>
                  </div>
                </div>
                :""}
                {this.state.data["Product Tabs One"].Tabs[idx].Type == "Custom Products"?
                <div className="custom-products ">
                  <div className="form-group">
                    <label
                      className="col-md-3 control-label text-left"
                    >
                      Products
                    </label>
                    <div className="col-md-9">
                    <MultiSelect
                    onChange={(val) => {
                      this.setArr(val.split(), "Product Tabs One", "Tabs", idx,  "ProductIds")
                    }}
                    largeData={true}
                    options={this.state.productOptions}
                    defaultValue={this.state.data["Product Tabs One"].Tabs[idx].ProductIds.toString()}
                  />
                    </div>
                  </div>
                </div>
                :""}
              </div>
              ))}
           </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "topbrands") {
      return (
        <div className="tab-pane fade active in">
          <h3 className="tab-content-title">Top Brands</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Section Status
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="SectionStatus"
                      id="storefront_top_brands_section_enabled"
                      checked={this.state.data.TopBrands.SectionStatus}
                      onChange={(e)=>{
                        this.setVal(!this.state.data.TopBrands.SectionStatus, "TopBrands", e.target.name)
                      }}
                    />
                    <label htmlFor="storefront_top_brands_section_enabled">
                      Enable brands section
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Top Brands
                </label>
                <div className="col-md-9">
                <MultiSelect
                    onChange={(val)=>{
                      const {data} = this.state
                      data.TopBrands.TopBrandsIds = val.split(",")
                      this.setState({data})
                    }}
                    options={this.state.brandsOptions}
                    defaultValue={
                      this.state.data.TopBrands.TopBrandsIds.toString()
                    } />
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
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Two column banners</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">  
                      <input
                        type="checkbox"
                        name="SectionStatus"
                        id="storefront_two_column_banners_enabled"
                        checked={this.state.data["Two column banners"].SectionStatus}
                        onChange={(e)=>{
                          this.setVal(!this.state.data["Two column banners"].SectionStatus, "Two column banners", e.target.name)
                        }}
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
              {this.state.data["Two column banners"].Banners.map((val,idx)=>(
                <div className="panel" key={idx}>
                  <div className="panel-header">
                    <h5>Banner {idx+1}</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image" onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: idx})
                    }}>
                       {this.state.data["Two column banners"].Banners[idx].image?  
                <img src={"https://big-cms.herokuapp.com/"+this.state.data["Two column banners"].Banners[idx].image} />
                
                
                : <div className="placeholder">
                <i className="fa fa-picture-o" />
              </div>}
                      
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
                              name="CalltoActionURL"
                              className="form-control"
                              value={this.state.data["Two column banners"].Banners[idx].CalltoActionURL}
                              onChange={(e)=>{
                                this.setArr(e.target.value, "Two column banners", "Banners", idx, e.target.name)
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
                              id={"Twocolumnbanners-open-in-new-window"+idx}
                              checked={this.state.data["Two column banners"].Banners[idx].OpenInNewWindow}
                              onChange={(e)=>{
                                this.setArr(!this.state.data["Two column banners"].Banners[idx].OpenInNewWindow, "Two column banners", "Banners", idx, e.target.name)
                              }}
                            />
                            <label htmlFor={"Twocolumnbanners-open-in-new-window"+idx}>
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "productgrid") {
      return (
        <div className="tab-pane fade active in" >
        <h3 className="tab-content-title">Product Grid</h3>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label
                className="col-md-3 control-label text-left"
              >
                Section Status
              </label>
              <div className="col-md-9">
                <div className="checkbox">
                  
                  <input
                    type="checkbox"
                    name="SectionStatus"
                    id="storefront_product_tabs_1_section_enabled"
                    checked={this.state.data["Product Grid"].SectionStatus}
                    onChange={(e)=>{
                      this.setVal(!this.state.data["Product Grid"].SectionStatus, "Product Grid", e.target.name)
                    }}
                  />
                  <label htmlFor="storefront_product_tabs_1_section_enabled">
                    Enable Product Grid section
                  </label>
                </div>
              </div>
            </div>
            {this.state.data["Product Grid"].Tabs.map((val,idx)=>(
            <div className="box-content clearfix" key={idx}>
              <h4 className="section-title">Tab {idx+1}</h4>
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
                    value={this.state.data["Product Grid"].Tabs[idx].Title}
                    onChange={(e)=>{
                      this.setArr(e.target.value, "Product Grid", "Tabs",idx, e.target.name)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Type
                </label>
                <div className="col-md-9">
                  <select
                    name="Type"
                    className="form-control custom-select-black product-type"
                    value={this.state.data["Product Grid"].Tabs[idx].Type}
                    onChange={(e)=>{
                      this.setArr("", "Product Grid", "Tabs", idx, "CategoryId")
                      this.setArr("", "Product Grid", "Tabs", idx, "ProductsLimit")
                      this.setArr([], "Product Grid", "Tabs", idx, "ProductIds")
                      this.setArr(e.target.value, "Product Grid", "Tabs", idx,e.target.name)
                    }}
                  >
                    <option value="">Please Select</option>
                    <option value={"Category Products"} >
                      Category Products
                    </option>
                    <option value={"Latest Products"}>Latest Products</option>
                    <option value={"Recently Viewed Products"}>
                      Recently Viewed Products
                    </option>
                    <option value={"Custom Products"}>Custom Products</option>
                  </select>
                </div>
              </div>
              {this.state.data["Product Grid"].Tabs[idx].Type == "Category Products"? 
              <div className="category-products ">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                  <MultiSelect
                  onChange={(val) => {
                    this.setArr(val, "Product Grid", "Tabs", idx,  "CategoryId")
                  }}
                  singleSelect={true}
                  largeData={true}
                  options={this.state.categoryOptions}
                  defaultValue={this.state.data["Product Grid"].Tabs[idx].CategoryId}
                />
                  </div>
                </div>
              </div>
              :""}
              {this.state.data["Product Grid"].Tabs[idx].Type == "Latest Products" || this.state.data["Product Grid"].Tabs[idx].Type == "Recently Viewed Products"? 
              <div className="products-limit">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Products Limit
                  </label>
                  <div className="col-md-9">
                    <input
                      name="ProductsLimit"
                      className="form-control "
                      type="number"
                      value={this.state.data["Product Grid"].Tabs[idx].ProductsLimit}
                    onChange={(e)=>{
                      this.setArr(e.target.value, "Product Grid", "Tabs",idx ,e.target.name)
                    }}
                    />
                  </div>
                </div>
              </div>
              :""}
              {this.state.data["Product Grid"].Tabs[idx].Type == "Custom Products"?
              <div className="custom-products ">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Products
                  </label>
                  <div className="col-md-9">
                  <MultiSelect
                  onChange={(val) => {
                    this.setArr(val.split(), "Product Grid", "Tabs", idx,  "ProductIds")
                  }}
                  largeData={true}
                  options={this.state.productOptions}
                  defaultValue={this.state.data["Product Grid"].Tabs[idx].ProductIds.toString()}
                />
                  </div>
                </div>
              </div>
              :""}
            </div>
            ))}
         </div>
        </div>
      </div>
   
     );
    } else if (this.state.activePanel == "threecolbanners") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">Three Column Banners</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                     
                      <input
                        type="checkbox"
                        name="SectionStatus"
                        checked={this.state.data["Three Column Banners"].SectionStatus}
                        onChange={(e)=>{
                          this.setVal(!this.state.data["Three Column Banners"].SectionStatus, "Three Column Banners", e.target.name)
                        }}
                        id="storefront_three_column_banners_enabled"
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
              {this.state.data["Three Column Banners"].Banners.map((val,idx)=>(
                <div className="panel" key={idx}>
                  <div className="panel-header">
                    <h5>Banner {idx+1}</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image" onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: idx})
                    }}>
                       {this.state.data["Three Column Banners"].Banners[idx].image?  
                <img src={"https://big-cms.herokuapp.com/"+this.state.data["Three Column Banners"].Banners[idx].image} />
                
                
                : <div className="placeholder">
                <i className="fa fa-picture-o" />
              </div>}
                      
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
                              name="CalltoActionURL"
                              className="form-control"
                              value={this.state.data["Three Column Banners"].Banners[idx].CalltoActionURL}
                              onChange={(e)=>{
                                this.setArr(e.target.value, "Three Column Banners", "Banners", idx, e.target.name)
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
                              id={"three_col_banner-open-in-new-window"+idx}
                              checked={this.state.data["Three Column Banners"].Banners[idx].OpenInNewWindow}
                              onChange={(e)=>{
                                this.setArr(!this.state.data["Three Column Banners"].Banners[idx].OpenInNewWindow, "Three Column Banners", "Banners", idx, e.target.name)
                              }}
                            />
                            <label htmlFor={"three_col_banner-open-in-new-window"+idx}>
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "producttabs2") {
      return (
        <div className="tab-pane fade active in" >
        <h3 className="tab-content-title">Product Tabs Two</h3>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label
                className="col-md-3 control-label text-left"
              >
                Section Status
              </label>
              <div className="col-md-9">
                <div className="checkbox">
                  
                  <input
                    type="checkbox"
                    name="SectionStatus"
                    id="storefront_product_tabs_1_section_enabled"
                    checked={this.state.data["Product Tabs Two"].SectionStatus}
                    onChange={(e)=>{
                      this.setVal(!this.state.data["Product Tabs Two"].SectionStatus, "Product Tabs Two", e.target.name)
                    }}
                  />
                  <label htmlFor="storefront_product_tabs_1_section_enabled">
                    Enable Product Tabs Two section
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
            {this.state.data["Product Tabs Two"].Tabs.map((val,idx)=>(
            <div className="box-content clearfix" key={idx}>
              <h4 className="section-title">Tab {idx+1}</h4>
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
                    value={this.state.data["Product Tabs Two"].Tabs[idx].Title}
                    onChange={(e)=>{
                      this.setArr(e.target.value, "Product Tabs Two", "Tabs",idx, e.target.name)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Type
                </label>
                <div className="col-md-9">
                  <select
                    name="Type"
                    className="form-control custom-select-black product-type"
                    value={this.state.data["Product Tabs Two"].Tabs[idx].Type}
                    onChange={(e)=>{
                      this.setArr("", "Product Tabs Two", "Tabs", idx, "CategoryId")
                      this.setArr("", "Product Tabs Two", "Tabs", idx, "ProductsLimit")
                      this.setArr([], "Product Tabs Two", "Tabs", idx, "ProductIds")
                      this.setArr(e.target.value, "Product Tabs Two", "Tabs", idx,e.target.name)
                    }}
                  >
                    <option value="">Please Select</option>
                    <option value={"Category Products"} >
                      Category Products
                    </option>
                    <option value={"Latest Products"}>Latest Products</option>
                    <option value={"Recently Viewed Products"}>
                      Recently Viewed Products
                    </option>
                    <option value={"Custom Products"}>Custom Products</option>
                  </select>
                </div>
              </div>
              {this.state.data["Product Tabs Two"].Tabs[idx].Type == "Category Products"? 
              <div className="category-products ">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Category
                  </label>
                  <div className="col-md-9">
                  <MultiSelect
                  onChange={(val) => {
                    this.setArr(val, "Product Tabs Two", "Tabs", idx,  "CategoryId")
                  }}
                  singleSelect={true}
                  largeData={true}
                  options={this.state.categoryOptions}
                  defaultValue={this.state.data["Product Tabs Two"].Tabs[idx].CategoryId}
                />
                  </div>
                </div>
              </div>
              :""}
              {this.state.data["Product Tabs Two"].Tabs[idx].Type == "Latest Products" || this.state.data["Product Tabs Two"].Tabs[idx].Type == "Recently Viewed Products"? 
              <div className="products-limit">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Products Limit
                  </label>
                  <div className="col-md-9">
                    <input
                      name="ProductsLimit"
                      className="form-control "
                      type="number"
                      value={this.state.data["Product Tabs Two"].Tabs[idx].ProductsLimit}
                    onChange={(e)=>{
                      this.setArr(e.target.value, "Product Tabs Two", "Tabs",idx ,e.target.name)
                    }}
                    />
                  </div>
                </div>
              </div>
              :""}
              {this.state.data["Product Tabs Two"].Tabs[idx].Type == "Custom Products"?
              <div className="custom-products ">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Products
                  </label>
                  <div className="col-md-9">
                  <MultiSelect
                  onChange={(val) => {
                    this.setArr(val.split(), "Product Tabs Two", "Tabs", idx,  "ProductIds")
                  }}
                  largeData={true}
                  options={this.state.productOptions}
                  defaultValue={this.state.data["Product Tabs Two"].Tabs[idx].ProductIds.toString()}
                />
                  </div>
                </div>
              </div>
              :""}
            </div>
            ))}
         </div>
        </div>
      </div>
   
     
     );
    } else if (this.state.activePanel == "onecolbanner") {
      return (
        <div className="tab-pane fade active in" >
          <h3 className="tab-content-title">One Column Banner</h3>
          <div className="accordion-box-content">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label
                    className="col-md-3 control-label text-left"
                  >
                    Section Status
                  </label>
                  <div className="col-md-9">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="SectionStatus"
                        checked={this.state.data["One Column Banner"].SectionStatus}
                        onChange={(e)=>{
                          this.setVal(!this.state.data["One Column Banner"].SectionStatus, "One Column Banner", e.target.name)
                        }}
                        id="storefront_one_column_banner_enabled"
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
              {this.state.data["One Column Banner"].Banners.map((val,idx)=>(
                <div className="panel" key={idx}>
                  <div className="panel-header">
                    <h5>Banner {idx+1}</h5>
                  </div>
                  <div className="panel-body">
                    <div className="panel-image" onClick={()=>{
                      this.setState({showModal: true, multiple: false, imageFor: idx})
                    }}>
                       {this.state.data["One Column Banner"].Banners[idx].image?  
                <img src={"https://big-cms.herokuapp.com/"+this.state.data["One Column Banner"].Banners[idx].image} />
                
                
                : <div className="placeholder">
                <i className="fa fa-picture-o" />
              </div>}
                      
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
                              name="CalltoActionURL"
                              className="form-control"
                              value={this.state.data["One Column Banner"].Banners[idx].CalltoActionURL}
                              onChange={(e)=>{
                                this.setArr(e.target.value, "One Column Banner", "Banners", idx, e.target.name)
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
                              id={"one_slider_banner-open-in-new-window"+idx}
                              checked={this.state.data["One Column Banner"].Banners[idx].OpenInNewWindow}
                              onChange={(e)=>{
                                this.setArr(!this.state.data["One Column Banner"].Banners[idx].OpenInNewWindow, "One Column Banner", "Banners", idx, e.target.name)
                              }}
                            />
                            <label htmlFor={"one_slider_banner-open-in-new-window"+idx}>
                              Open in new window
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
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
