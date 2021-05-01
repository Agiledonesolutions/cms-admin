import React from "react";
import { Link } from "react-router-dom";
import BraftEditor from "braft-editor";
import table from "braft-extensions/dist/table";

import "braft-editor/dist/index.css";
import "braft-extensions/dist/table.css";

const options = {
  defaultColumns: 3, 
  defaultRows: 2, 
  withDropdown: false, 
  columnResizable: true, 
  exportAttrString: "" 
};
BraftEditor.use(
  table(options)
);

class CreateProduct extends React.Component {
 
  state = {
    activePanel: "general",
    activeTab: "basic",
    editorState: BraftEditor.createEditorState()
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  mergeState = () => {
    const { editorState } = this.state;
    var str = "new state";
    var newState = BraftEditor.createEditorState(str);
    this.setState({
      editorState: editorState.push(newState)
    });
  };
  tabContentToggle = () => {
    if (this.state.activePanel == "general") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">General</h3>
          <div className="form-group">
            <label htmlFor="name" className="col-md-2 control-label text-left">
              Name<span className="m-l-5 text-red">*</span>
            </label>
            <div className="col-md-10">
              <input
                name="name"
                className="form-control "
                id="name"
                defaultValue
                labelcol={2}
                type="text"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="description"
              className="col-md-2 control-label text-left"
            >
              Description<span className="m-l-5 text-red">*</span>
            </label>
            <div className="col-md-10">
            <BraftEditor language="en" onChange={this.onChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="brand_id"
                  className="col-md-3 control-label text-left"
                >
                  Brand
                </label>
                <div className="col-md-9">
                  <select
                    name="brand_id"
                    className="form-control custom-select-black "
                    id="brand_id"
                  >
                    <option value>Please Select</option>
                    <option value={8}>ASUS</option>
                    <option value={7}>Acer</option>
                    <option value={16}>Adidas</option>
                    <option value={1}>Apple</option>
                    <option value={15}>Beats</option>
                    <option value={6}>Dell</option>
                    <option value={5}>HP</option>
                    <option value={3}>Huawei</option>
                    <option value={14}>LG</option>
                    <option value={10}>Lenovo</option>
                    <option value={12}>MSI</option>
                    <option value={9}>Microsoft</option>
                    <option value={17}>NIKE</option>
                    <option value={19}>NOKIA</option>
                    <option value={4}>OnePlus</option>
                    <option value={11}>Reebok</option>
                    <option value={18}>SONY</option>
                    <option value={2}>Samsung</option>
                  </select>
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
                  <select
                    name="categories[]"
                    className="form-control custom-select-black selectize prevent-creation"
                    id="categories[]"
                    multiple={1}
                  >
                    <option value={181}>Electronics</option>
                    <option value={183}>¦–– Mobiles</option>
                    <option value={192}>¦–– ¦–– Smartphones</option>
       
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="tax_class_id"
                  className="col-md-3 control-label text-left"
                >
                  Tax Class
                </label>
                <div className="col-md-9">
                  <select
                    name="tax_class_id"
                    className="form-control custom-select-black "
                    id="tax_class_id"
                  >
                    <option value>Please Select</option>
                    <option value={1}>BD Dhaka Tax</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="tags[]"
                  className="col-md-3 control-label text-left"
                >
                  Tags
                </label>
                <div className="col-md-9">
                  <select
                    name="tags[]"
                    className="form-control custom-select-black selectize prevent-creation"
                    id="tags[]"
                    multiple={1}
                  >
                    <option value={33}>Accessories</option>
                    <option value={24}>Aviators</option>
                    <option value={16}>Casual</option>
                    <option value={32}>Cellphone</option>
                    <option value={30}>Denim</option>
                    <option value={22}>Dustproof</option>
                    <option value={4}>Electronics</option>
                    <option value={9}>Entertainment</option>
                    <option value={3}>Fashion</option>
                    <option value={17}>Formal</option>
                    <option value={6}>Gadgets</option>
                    <option value={34}>Gear</option>
                    <option value={42}>HD TV</option>
                    <option value={8}>Hot deals</option>
                    <option value={37}>Intel</option>
                    <option value={27}>Jeans</option>
                    <option value={40}>Jewelry design</option>
                    <option value={31}>Lifestyle</option>
                    <option value={5}>Luxury Watch</option>
                    <option value={18}>Minimal</option>
                    <option value={39}>Necklace</option>
                    <option value={35}>Networking</option>
                    <option value={12}>New Arrivals</option>
                    <option value={36}>Notebook</option>
                    <option value={28}>Outfit</option>
                    <option value={38}>Pendant</option>
                    <option value={23}>Sapphire Glass</option>
                    <option value={19}>Ski Jacket</option>
                    <option value={10}>Slim Laptop</option>
                    <option value={14}>Smart TV</option>
                    <option value={41}>Smart TV</option>
                    <option value={7}>Smartphone</option>
                    <option value={13}>Smartwatch</option>
                    <option value={25}>Sports Eye-wear</option>
                    <option value={29}>Streetwear</option>
                    <option value={11}>Trendy</option>
                    <option value={21}>Waterproof</option>
                    <option value={26}>Wayfarers</option>
                    <option value={15}>WiFi TV</option>
                    <option value={20}>Winter Jacket</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="virtual"
                  className="col-md-3 control-label text-left"
                >
                  Virtual
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input type="hidden" defaultValue={0} name="virtual" />
                    <input
                      type="checkbox"
                      name="virtual"
                      id="virtual"
                      defaultValue={1}
                    />
                    <label htmlFor="virtual">
                      The product won't be shipped
                    </label>
                  </div>
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
                      id="is_active"
                      defaultChecked={1}
                      defaultValue={1}
                    />
                    <label htmlFor="is_active">Enable the product</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "price") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Price</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="price"
                  className="col-md-3 control-label text-left"
                >
                  Price<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="price"
                    className="form-control "
                    id="price"
                    defaultValue
                    min={0}
                    type="number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="special_price"
                  className="col-md-3 control-label text-left"
                >
                  Special Price
                </label>
                <div className="col-md-9">
                  <input
                    name="special_price"
                    className="form-control "
                    id="special_price"
                    defaultValue
                    min={0}
                    type="number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="special_price_type"
                  className="col-md-3 control-label text-left"
                >
                  Special Price Type
                </label>
                <div className="col-md-9">
                  <select
                    name="special_price_type"
                    className="form-control custom-select-black "
                    id="special_price_type"
                  >
                    <option value="fixed">Fixed</option>
                    <option value="percent">Percent</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="special_price_start"
                  className="col-md-3 control-label text-left"
                >
                  Special Price Start
                </label>
                <div className="col-md-9">
                  <input
                    name="special_price_start"
                    className="form-control datetime-picker"
                    id="special_price_start"
                    defaultValue
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="special_price_end"
                  className="col-md-3 control-label text-left"
                >
                  Special Price End
                </label>
                <div className="col-md-9">
                  <input
                    name="special_price_end"
                    className="form-control datetime-picker"
                    id="special_price_end"
                    defaultValue
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "inventory") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Inventory</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="sku"
                  className="col-md-3 control-label text-left"
                >
                  SKU
                </label>
                <div className="col-md-9">
                  <input
                    name="sku"
                    className="form-control "
                    id="sku"
                    defaultValue
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="manage_stock"
                  className="col-md-3 control-label text-left"
                >
                  Inventory Management
                </label>
                <div className="col-md-9">
                  <select
                    name="manage_stock"
                    className="form-control custom-select-black "
                    id="manage_stock"
                  >
                    <option value={0}>Don't Track Inventory</option>
                    <option value={1}>Track Inventory</option>
                  </select>
                </div>
              </div>
              <div className="hide" id="qty-field">
                <div className="form-group">
                  <label
                    htmlFor="qty"
                    className="col-md-3 control-label text-left"
                  >
                    Qty<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="qty"
                      className="form-control "
                      id="qty"
                      defaultValue
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="in_stock"
                  className="col-md-3 control-label text-left"
                >
                  Stock Availability
                </label>
                <div className="col-md-9">
                  <select
                    name="in_stock"
                    className="form-control custom-select-black "
                    id="in_stock"
                  >
                    <option value={1}>In Stock</option>
                    <option value={0}>Out of Stock</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "images") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Images</h3>
          <div className="single-image-wrapper">
            <h4>Base Image</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              data-input-name="files[base_image]"
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
          <div className="multiple-images-wrapper">
            <h4>Additional Images</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              data-input-name="files[additional_images][]"
              data-multiple
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="multiple-images">
              <div className="col-md-12">
                <div className="row">
                  <div className="image-list image-holder-wrapper clearfix">
                    <div className="image-holder placeholder cursor-auto">
                      <i className="fa fa-picture-o" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "seo") {
      return (
        <div className="tab-pane fade in active">
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
                    defaultValue
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
    } else if (this.state.activePanel == "attributes") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Attributes</h3>
          <div id="product-attributes-wrapper">
            <div className="table-responsive">
              <table className="options table table-bordered">
                <thead className="hidden-xs">
                  <tr>
                    <th />
                    <th>Attribute</th>
                    <th>Values</th>
                    <th />
                  </tr>
                </thead>
                <tbody id="product-attributes"></tbody>
              </table>
            </div>
            <button
              type="button"
              className="btn btn-default"
              id="add-new-attribute"
            >
              Add New Attribute
            </button>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "options") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Options</h3>
          <div id="options-group"></div>
          <div className="box-footer no-border p-t-0">
            <div className="form-group pull-left">
              <div className="col-md-10">
                <button
                  type="button"
                  className="btn btn-default m-r-10"
                  id="add-new-option"
                >
                  Add New Option
                </button>
              </div>
            </div>
            <div className="add-global-option clearfix pull-right">
              <div className="form-group pull-left">
                <select
                  className="form-control custom-select-black"
                  id="global-option"
                >
                  <option value>Select Global Option</option>
                  <option value={1}>Laptop Color</option>
                  <option value={3}>Jacket Size</option>
                  <option value={4}>Laptop Ram</option>
                  <option value={5}>Laptop Storage</option>
                  <option value={6}>Mobile Ram</option>
                  <option value={7}>Mobile Color</option>
                  <option value={8}>Pant/Shirt Size</option>
                  <option value={9}>Shoe Sizes</option>
                  <option value={10}>Waist</option>
                  <option value={12}>Watch Straps</option>
                  <option value={13}>Warranty</option>
                  <option value={23}>Dress Color</option>
                  <option value={28}>Lens Options</option>
                </select>
              </div>
              <button
                type="button"
                className="btn btn-default"
                id="add-global-option"
                data-loading
              >
                Add Global Option
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "relatedProducts") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Related Products</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        className="select-all"
                        id="related_products-select-all"
                      />
                      <label htmlFor="related_products-select-all" />
                    </div>
                  </th>
                  <th>ID</th>
                  <th>Thumbnail</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th data-sort>Created</th>
                </tr>
              </thead>
              <tbody />
            </table>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "upSells") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Up-Sells</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        className="select-all"
                        id="up_sells-select-all"
                      />
                      <label htmlFor="up_sells-select-all" />
                    </div>
                  </th>
                  <th>ID</th>
                  <th>Thumbnail</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th data-sort>Created</th>
                </tr>
              </thead>
              <tbody />
            </table>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "crossSells") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Cross-Sells</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        className="select-all"
                        id="cross_sells-select-all"
                      />
                      <label htmlFor="cross_sells-select-all" />
                    </div>
                  </th>
                  <th>ID</th>
                  <th>Thumbnail</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th data-sort>Created</th>
                </tr>
              </thead>
              <tbody />
            </table>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "additional") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Additional</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label
                  htmlFor="short_description"
                  className="col-md-3 control-label text-left"
                >
                  Short Description
                </label>
                <div className="col-md-9">
                  <textarea
                    name="short_description"
                    className="form-control "
                    id="short_description"
                    rows={10}
                    cols={10}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="new_from"
                  className="col-md-3 control-label text-left"
                >
                  Product New From
                </label>
                <div className="col-md-9">
                  <input
                    name="new_from"
                    className="form-control datetime-picker"
                    id="new_from"
                    defaultValue
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="new_to"
                  className="col-md-3 control-label text-left"
                >
                  Product New To
                </label>
                <div className="col-md-9">
                  <input
                    name="new_to"
                    className="form-control datetime-picker"
                    id="new_to"
                    defaultValue
                    type="text"
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
          <h3>Create Product</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li className="active">Create Product</li>
          </ol>
        </section>
        <section className="content">
          <form
            className="form-horizontal"
            
          >
            <input type="hidden" name="_token" defaultValue="" />
            <div className="accordion-content clearfix">
              <div className="col-lg-3 col-md-4">
                <div className="accordion-box">
                  <div className="panel-group" id="ProductTabs">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            className={
                              this.state.activeTab == "basic" ? "" : "collapsed"
                            }
                            data-toggle="collapse"
                            data-parent="#ProductTabs"
                            onClick={() => {
                              if (this.state.activeTab == "basic") {
                                this.setState({ activeTab: "none" });
                              } else {
                                this.setState({ activeTab: "basic" });
                              }
                            }}
                          >
                            Basic Information
                          </a>
                        </h4>
                      </div>
                      <div
                        id="basic_information"
                        className={
                          this.state.activeTab == "basic"
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
                                this.state.activePanel == "price"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "price" });
                              }}
                            >
                              <a data-toggle="tab">Price</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "inventory"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "inventory" });
                              }}
                            >
                              <a data-toggle="tab">Inventory</a>
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
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            className={
                              this.state.activeTab == "advance"
                                ? ""
                                : "collapsed"
                            }
                            data-toggle="collapse"
                            data-parent="#ProductTabs"
                            onClick={() => {
                              if (this.state.activeTab == "advance") {
                                this.setState({ activeTab: "none" });
                              } else {
                                this.setState({ activeTab: "advance" });
                              }
                            }}
                          >
                            Advanced Information
                          </a>
                        </h4>
                      </div>
                      <div
                        id="advanced_information"
                        className={
                          this.state.activeTab == "advance"
                            ? "panel-collapse collapse in"
                            : "panel-collapse collapse"
                        }
                      >
                        <div className="panel-body">
                          <ul className="accordion-tab nav nav-tabs">
                            <li
                              className={
                                this.state.activePanel == "attributes"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "attributes" });
                              }}
                            >
                              <a data-toggle="tab">Attributes</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "options"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "options" });
                              }}
                            >
                              <a data-toggle="tab">Options</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "relatedProducts"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({
                                  activePanel: "relatedProducts",
                                });
                              }}
                            >
                              <a data-toggle="tab">Related Products</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "upSells"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "upSells" });
                              }}
                            >
                              <a data-toggle="tab">Up-Sells</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "crossSells"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "crossSells" });
                              }}
                            >
                              <a data-toggle="tab">Cross-Sells</a>
                            </li>
                            <li
                              className={
                                this.state.activePanel == "additional"
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                this.setState({ activePanel: "additional" });
                              }}
                            >
                              <a data-toggle="tab">Additional</a>
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

export default CreateProduct;
