import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "./products.css";
import { format } from "timeago.js";
import BraftEditor from "braft-editor";
import table from "braft-extensions/dist/table";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/table.css";
import api from "../../../apis/api";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FileManager from "../../Media/FileManager";
import imageCompression from "browser-image-compression";
import Related from "./Related";
import UpSells from "./UpSells";
import CrossSells from "./CrossSells";

const options = {
  defaultColumns: 3,
  defaultRows: 2,
  withDropdown: false,
  columnResizable: true,
  exportAttrString: "",
};

BraftEditor.use(table(options));

class CreateProduct extends React.Component {
  state = {
    tableData: {
      columns: [
        {
          name: "Id",
          selector: "id",
          sortable: true,
          width: "60px",
        },
        {
          name: "Thumbnail",
          selector: "thumbnail",
          sortable: true,
          cell: (row) => (
            <img
              src={"https://big-cms.herokuapp.com/" + row.thumbnail}
              height={60}
              width={60}
            />
          ),
          width: "110px",
        },
        {
          name: "Name",
          selector: "name",
          sortable: true,
        },
        {
          name: "Price",
          selector: "price",
          sortable: true,
        },
        {
          name: "Status",
          selector: "status",
          sortable: true,
          cell: (row) => (
            <span className={row.status ? "dot green" : "dot red"}></span>
          ),
        },
        {
          name: "Created",
          selector: "created",
          sortable: true,
        },
      ],
      data: [],
    },
    showModal: false,
    multiple: false,
    categoryOptions: [],
    tagOptions: [],
    tagArray: [],
    categoryArray: [],
    brands: [],
    taxes: [],
    baseImage: "",
    additionalImages: [],
    downloadFilenames: [],
    attributesOptions: {},
    attributeOptionsValues: [],
    activePanel: "general",
    activeTab: "basic",
    data: {
      name: "",
      taxClass: "",
      virtual: false,
      status: false,
      description: "",
      price: "",
      speacialPrice: "",
      specialPriceType: "Fixed",
      speacialPriceStart: "",
      specialPriceEnd: "",
      inventoryManagement: "Do Not Track Inventory",
      Qty: "",
      SKU: "",
      stockAvailability: "In Stock",
      metaTitle: "",
      metaDescription: "",
      shortDescription: "",
      productNewFrom: "",
      productNewTo: "",
    },
    brandId: "",
    categoryIds: [],
    tagIds: [],
    baseImageId: "",
    additionalImageIds: [],
    relatedProductIds: [],
    upSellsIds: [],
    crossSellsIds: [],
    downloadsIds: [" "],
    attributes: [
      {
        attribute: "",
        value: [],
      },
    ],
    options: [],
    edit: "",
    editorState: BraftEditor.createEditorState(),
  };

  componentDidMount() {
    const { brands } = this.state;
    api
      .get("/brand/get")
      .then((res) => {
        res.data.data.map((val) => {
          let tmp = {};
          tmp = {
            name: val.name,
            id: val._id,
          };
          brands.push(tmp);
        });
        this.setState({ brands });
      })
      .catch((err) => {
        console.log("error fetching brands");
      });
    const { taxes } = this.state;
    api
      .get("/tax/get")
      .then((res) => {
        res.data.data.map((val) => {
          let tmp = {};
          tmp = {
            name: val.taxClass,
            id: val._id,
          };
          taxes.push(tmp);
        });
        this.setState({ taxes });
      })
      .catch((err) => {
        console.log("error fetching brands");
      });
    const { categoryOptions } = this.state;
    const { tagOptions } = this.state;
    const addToCategories = (x, sub) => {
      let tmp = {};
      let name = "";
      for (var i = 0; i < sub.length; i++) {
        name += "| - - ";
      }
      tmp["label"] = name + x.name;
      tmp["value"] = x._id;
      categoryOptions.push(tmp);
      if (x.childrenCategory.length > 0) {
        sub.push("sub");
        x.childrenCategory.forEach((y) => {
          addToCategories(y, sub);
        });
      } else {
        return;
      }
    };

    api
      .get("/category/get")
      .then((res) => {
        res.data.data.forEach((val) => {
          addToCategories(val, []);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ categoryOptions });

    api
      .get("/tag/get")
      .then((res) => {
        res.data.data.forEach((val) => {
          let tmp = {};
          tmp = {
            label: val.name,
            value: val._id,
          };
          tagOptions.push(tmp);
        });
      })
      .catch((err) => {
        console.log("Error fetching tags");
      });
    this.setState({ tagOptions });
    const datalist = [];
    var i = 0;
    api
      .get("/product/get")
      .then((res) => {
        res.data.data.map((val) => {
          i++;
          var tmp = {
            id: i,
            thumbnail: "uploads/images/1620124610162-blob",
            name: val["name"],
            price: val["price"],
            status: val.status,
            created: format(val["createdAt"]),
            upsells: this.state.upSellsIds.includes(val._id) ? true : false,
            crosssells: this.state.crossSellsIds.includes(val._id)
              ? true
              : false,
            _id: val["_id"],
          };
          datalist.push(tmp);
        });
        const { tableData } = this.state;
        tableData["data"] = datalist;
        this.setState({ tableData });
      })
      .catch((err) => {
        console.log(err);
      });

      api.get('/attribute/get').then((res)=>{
        const {attributesOptions} = this.state
        res.data.data.map(val=>{
          let tmp = {
            attribute: val.name,
            values: val.value,
            id: val._id
          }
          if(!(val.attributeSet.name in attributesOptions)){
            attributesOptions[val.attributeSet.name] = []
          }
            
            attributesOptions[val.attributeSet.name].push(tmp)
          
        })
        this.setState({attributesOptions})
        
      }).catch(err=>{
        console.log(err)
        console.log("cannot fetch attribute")
      })
  }
  setCategoryArray = (val) => {
    const { categoryArray } = this.state;
    categoryArray.push(val);
    var n = categoryArray.length;
    var { categoryIds } = this.state;
    categoryIds = categoryArray[n - 1].split(",");
    this.setState({ categoryArray });
    this.setState({ categoryIds });
  };
  setTagArray = (val) => {
    const { tagArray } = this.state;
    tagArray.push(val);
    var n = tagArray.length;
    var { tagIds } = this.state;
    tagIds = tagArray[n - 1].split(",");
    this.setState({ tagArray });
    this.setState({ tagIds });
  };
  setVal = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };
  setImageId = (id, multiple, image) => {
    if (multiple) {
      const { additionalImageIds } = this.state;
      const { additionalImages } = this.state;
      additionalImageIds.push(id);
      additionalImages.push(image);
      this.setState({ additionalImageIds, additionalImages });
    } else {
      this.setState({ baseImageId: id, baseImage: image });
    }
  };
  setDownloadId = (id, multiple, image, filename) => {
    const { downloadsIds, downloadFilenames } = this.state;
    downloadsIds[downloadsIds.length - 1] = id;
    downloadFilenames.push(filename);
    this.setState({ downloadsIds });
  };
  onChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.setVal("description", this.state.editorState.toHTML());
  };
  handleSubmit = () => {
    console.log(this.state);
  };
  uploadImageEditor = async (param) => {
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(param.file, options);
    var formData = new FormData();
    await formData.append("image", compressedFile);
    api
      .post("/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        param.success({
          url: "https://big-cms.herokuapp.com/" + res.data.data.image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleAddRowDownload = () => {
    const { downloadsIds } = this.state;
    downloadsIds.push("");
    this.setState({ downloadsIds });
  };
  handleRemoveSpecificRowDownload = (idx) => {
    const { downloadsIds, downloadFilenames } = this.state;
    downloadsIds.splice(idx, 1);
    downloadFilenames.splice(idx, 1);
    this.setState({ downloadsIds, downloadFilenames });
  };
  handleAddRowAttribute = () =>{
    const {attributes} = this.state
    attributes.push({
      attribute: "",
      value: ""
    })
    this.setState({attributes})
  }
  handleRemoveSpecificRowAttribute = (idx) =>{
    const {attributes, attributeOptionsValues} = this.state
    attributes.splice(idx,1)
    attributeOptionsValues.splice(idx,1)
    this.setState({attributes, attributeOptionsValues})
  }
  tabContentToggle = () => {
    if (this.state.activePanel == "general") {
      const {editorState} = this.state
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
                type="text"
                value={this.state.data.name}
                onChange={(e) => {
                  this.setVal(e.target.name, e.target.value);
                }}
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
              <BraftEditor
                language="en"
                value={editorState}
                media={{ uploadFn: (param) => this.uploadImageEditor(param) }}
                onChange={(editorState) => this.onChange(editorState)}
              />
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
                    name="brandId"
                    className="form-control custom-select-black "
                    value={this.state.brandId}
                    onChange={(e) => {
                      this.setState({ brandId: e.target.value });
                    }}
                  >
                    <option value="">Please Select</option>
                    {this.state.brands.map((val, key) => {
                      return (
                        <option key={key} value={val.id}>
                          {val.name}
                        </option>
                      );
                    })}
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
                  <MultiSelect
                    onChange={this.setCategoryArray}
                    options={this.state.categoryOptions}
                    defaultValue={
                      this.state.categoryArray[
                        this.state.categoryArray.length - 1
                      ]
                    }
                  />
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
                    name="taxClass"
                    className="form-control custom-select-black "
                    value={this.state.data.taxClass}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  >
                    <option value="">Please Select</option>
                    {this.state.taxes.map((val, key) => {
                      return (
                        <option key={key} value={val.id}>
                          {val.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Tags
                </label>
                <div className="col-md-9">
                  <MultiSelect
                    onChange={this.setTagArray}
                    options={this.state.tagOptions}
                    defaultValue={
                      this.state.tagArray[this.state.tagArray.length - 1]
                    }
                  />
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
                    <input
                      type="checkbox"
                      name="virtual"
                      id="virtual"
                      checked={this.state.data.virtual}
                      onChange={(e) => {
                        const { data } = this.state;
                        data.virtual = !this.state.data.virtual;
                        this.setState({ data });
                      }}
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
                    <input
                      type="checkbox"
                      name="status"
                      id="is_active"
                      checked={this.state.data.status}
                      onChange={(e) => {
                        const { data } = this.state;
                        data.status = !this.state.data.status;
                        this.setState({ data });
                      }}
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
                    min={0}
                    type="number"
                    value={this.state.data.price}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Special Price
                </label>
                <div className="col-md-9">
                  <input
                    name="specialPrice"
                    className="form-control "
                    min={0}
                    type="number"
                    value={this.state.data.specialPrice}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
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
                    name="specialPriceType"
                    className="form-control custom-select-black "
                    value={this.state.data.specialPriceType}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  >
                    <option value="Fixed">Fixed</option>
                    <option value="Percent">Percent</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Special Price Start
                </label>
                <div className="col-md-9">
                  <input
                    name="specialPriceStart"
                    className="form-control datetime-picker"
                    type="date"
                    value={this.state.data.specialPriceStart}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Special Price End
                </label>
                <div className="col-md-9">
                  <input
                    name="specialPriceEnd"
                    className="form-control datetime-picker"
                    type="date"
                    value={this.state.data.specialPriceEnd}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
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
                <label className="col-md-3 control-label text-left">SKU</label>
                <div className="col-md-9">
                  <input
                    name="SKU"
                    className="form-control "
                    type="text"
                    value={this.state.data.SKU}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Inventory Management
                </label>
                <div className="col-md-9">
                  <select
                    name="inventoryManagement"
                    className="form-control custom-select-black "
                    value={this.state.data.inventoryManagement}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  >
                    <option value="Do Not Track Inventory">
                      Don't Track Inventory
                    </option>
                    <option value="Track Inventory">Track Inventory</option>
                  </select>
                </div>
              </div>
              <div
                className={
                  this.state.data.inventoryManagement == "Track Inventory"
                    ? ""
                    : "hide"
                }
              >
                <div className="form-group">
                  <label
                    htmlFor="qty"
                    className="col-md-3 control-label text-left"
                  >
                    Qty<span className="m-l-5 text-red">*</span>
                  </label>
                  <div className="col-md-9">
                    <input
                      name="Qty"
                      className="form-control "
                      type="number"
                      min={0}
                      value={this.state.data.Qty}
                      onChange={(e) => {
                        this.setVal(e.target.name, e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Stock Availability
                </label>
                <div className="col-md-9">
                  <select
                    name="stockAvailability"
                    className="form-control custom-select-black "
                    value={this.state.data.stockAvailability}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
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
              onClick={() =>
                this.setState({ multiple: false, showModal: true })
              }
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="clearfix" />
            <div className="single-image image-holder-wrapper clearfix">
              {this.state.baseImage ? (
                <div className="image-holder">
                  <img
                    src={
                      "https://big-cms.herokuapp.com/" + this.state.baseImage
                    }
                    height={120}
                    width={120}
                  />
                </div>
              ) : (
                <div className="image-holder placeholder">
                  <i className="fa fa-picture-o" />
                </div>
              )}
            </div>
          </div>
          <div className="media-picker-divider" />
          <div className="multiple-images-wrapper">
            <h4>Additional Images</h4>
            <button
              type="button"
              className="image-picker btn btn-default"
              onClick={() => this.setState({ multiple: true, showModal: true })}
            >
              <i className="fa fa-folder-open m-r-5" />
              Browse
            </button>
            <div className="multiple-images">
              <div className="col-md-12">
                <div className="row">
                  <div className="image-list image-holder-wrapper clearfix">
                    {this.state.additionalImages.length > 0 ? (
                      this.state.additionalImages.map((image, key) => {
                        return (
                          <div className="image-holder" key={key}>
                            <img
                              src={"https://big-cms.herokuapp.com/" + image}
                              height={120}
                              width={120}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="image-holder placeholder cursor-auto">
                        <i className="fa fa-picture-o" />
                      </div>
                    )}
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
                <label className="col-md-3 control-label text-left">
                  Meta Title
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="metaTitle"
                    className="form-control"
                    value={this.state.data.metaTitle}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
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
                    name="metaDescription"
                    className="form-control"
                    rows={10}
                    cols={10}
                    value={this.state.data.metaDescription}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "attributes") {
      return (
        <div className="tab-pane fade in active" >
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
                <tbody id="product-attributes">
                  {this.state.attributes.map((val, idx) => (
                    <tr key={idx}>
                      <td className="text-center">
                        <span className="drag-icon">
                          <i className="fa"></i>
                          <i className="fa"></i>
                        </span>
                      </td>
                      <td>
                        <div className="form-group">
                          <label className="visible-xs">Attribute</label>
                          <select
                            name="attribute"
                            className="form-control attribute custom-select-black"
                            id="product-attribute-select"
                            value={this.state.attributes[idx].attribute}
                            onChange={(e)=>{
                              const {attributes, attributeOptionsValues} = this.state
                              const arr = e.target.options[e.target.selectedIndex].dataset.values.split(",")
                              
                              attributes[idx].attribute = e.target.value
                              this.setState({attributes})
                              let tmparr = []
                              arr.map(val=>{
                                let tmp ={
                                  label: val,
                                  value: val
                                }
                                tmparr.push(tmp)
                              })
                              attributeOptionsValues[idx] = tmparr
                              this.setState({attributeOptionsValues})
                            }}
                          >
                            <option value="">Please Select</option>
                            {Object.entries(this.state.attributesOptions).map(([key,val],idx2)=>(
                              <optgroup label={key} key={idx2}>
                                {val.map((option, idx3)=>(
                                  <option value={option.id} key={idx3} data-values={option.values}>{option.attribute}</option>
                                  
                                ))}
                             
                            </optgroup>
                            ))}
                            
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          
                         <MultiSelect 
                         options={this.state.attributeOptionsValues[idx]}
                         onChange={(val)=>{
                           const {attributes} = this.state
                           attributes[idx].value = val.split(",")
                           this.setState({attributes})
                         }}
                         defaultValue={this.state.attributes[idx].value.toString()}
                         />
                        </div>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-default delete-row"
                          data-toggle="tooltip"
                          onClick={(e)=>{
                            this.handleRemoveSpecificRowAttribute(idx)
                          }}
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
              id="add-new-attribute"
              onClick={(e)=>{
                this.handleAddRowAttribute()
              }}
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
        <Related
          tableData={this.state.tableData}
          setEdit={(id) => this.setState({ edit: id })}
          setIds={(ids)=>{this.setState({relatedProductIds: ids})}}
          getIds={this.state.relatedProductIds}
        />
      );
    } else if (this.state.activePanel == "upSells") {
      return <UpSells tableData={this.state.tableData} setEdit={(id) => this.setState({ edit: id })} setIds={(ids)=>{this.setState({upSellsIds: ids})}} getIds={this.state.upSellsIds}/>;
    } else if (this.state.activePanel == "crossSells") {
      return <CrossSells tableData={this.state.tableData} setEdit={(id) => this.setState({ edit: id })} setIds={(ids)=>{this.setState({crossSellsIds: ids})}} getIds={this.state.crossSellsIds}/>;
    } else if (this.state.activePanel == "additional") {
      return (
        <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Additional</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Short Description
                </label>
                <div className="col-md-9">
                  <textarea
                    name="shortDescription"
                    className="form-control "
                    rows={10}
                    cols={10}
                    value={this.state.data.shortDescription}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Product New From
                </label>
                <div className="col-md-9">
                  <input
                    name="productNewFrom"
                    className="form-control datetime-picker"
                    type="date"
                    value={this.state.data.productNewFrom}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label text-left">
                  Product New To
                </label>
                <div className="col-md-9">
                  <input
                    name="productNewTo"
                    className="form-control datetime-picker"
                    type="date"
                    value={this.state.data.productNewTo}
                    onChange={(e) => {
                      this.setVal(e.target.name, e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "downloads") {
      return (
        <div className="tab-pane fade in active" id="downloads">
          <h3 className="tab-content-title">Downloads</h3>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .slide {\n        border: 1px solid #e9e9e9;\n        border-radius: 3px;\n        margin-bottom: 15px;\n    }\n\n    .slide .slide-header {\n        padding: 15px;\n        background: #f6f6f7;\n        border-bottom: 1px solid #e9e9e9;\n    }\n\n    .slide .slide-header span {\n        font-size: 16px;\n    }\n\n    .slide .slide-body {\n        position: relative;\n        padding: 15px;\n    }\n\n    .product-downloads-wrapper .slide {\n        margin-bottom: 20px;\n    }\n\n    .product-downloads-wrapper .table > tbody > tr > td {\n        vertical-align: middle;\n    }\n\n    .product-downloads-wrapper .options .drag-icon {\n        margin-top: 3px;\n    }\n\n    .product-downloads-wrapper .choose-file-group {\n        display: flex;\n    }\n\n    .product-downloads-wrapper .download-name {\n        flex-grow: 1;\n    }\n\n    .product-downloads-wrapper .btn-choose-file {\n        margin-left: 8px;\n    }\n\n    @media  screen and (max-width: 767px) {\n        .product-downloads-wrapper .table > tbody > tr {\n            border-top: 1px solid #e9e9e9;\n        }\n\n        .product-downloads-wrapper .table > tbody > tr > td:nth-child(2),\n        .product-downloads-wrapper .table > tbody > tr > td:nth-child(3) {\n            display: block;\n            border: none;\n            width: auto;\n            padding-left: 15px;\n            padding-right: 15px;\n            text-align: left;\n            vertical-align: initial;\n        }\n\n        .product-downloads-wrapper .table > tbody > tr > td:nth-child(3) {\n            padding-bottom: 15px;\n        }\n\n        .product-downloads-wrapper .options .drag-icon {\n            margin-top: 0;\n        }\n    }\n",
            }}
          />
          <div
            id="product-downloads-wrapper"
            className="product-downloads-wrapper clearfix"
          >
            <div className="slide">
              <div className="slide-header clearfix">
                <span className="pull-left">Downloadable Files</span>
              </div>
              <div className="slide-body">
                <div className="table-responsive">
                  <table className="options table table-bordered">
                    <thead className="hidden-xs">
                      <tr>
                        <th />
                        <th>File</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.downloadsIds.map((val, idx) => (
                        <tr key={idx}>
                          <td className="text-center">
                            <span className="drag-icon">
                              <i className="fa"></i>
                              <i className="fa"></i>
                            </span>
                          </td>
                          <td>
                            <div className="form-group">
                              <label className="visible-xs">File</label>
                              <div className="choose-file-group">
                                <input
                                  type="text"
                                  value={this.state.downloadFilenames[idx]}
                                  className="form-control download-name"
                                  readOnly={true}
                                />
                                <span
                                  className="btn btn-default btn-choose-file"
                                  onClick={() =>
                                    this.setState({
                                      multiple: false,
                                      showModal: true,
                                    })
                                  }
                                >
                                  Choose
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-default delete-row"
                              data-toggle="tooltip"
                              data-title="Delete File"
                              onClick={() => this.handleRemoveSpecificRowDownload(idx)}
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
                  onClick={() => {
                    this.handleAddRowDownload();
                  }}
                >
                  Add New File
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    if (this.state.edit != "") {
      return <Redirect to={"/products/" + this.state.edit + "/edit"} />;
    }
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
              <h3>Edit Product</h3>
            ) : (
              <h3>Create Product</h3>
            )}
            <ol className="breadcrumb">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              {this.props.edit == "true" ? (
                <li className="active">Edit Product</li>
              ) : (
                <li className="active">Create Product</li>
              )}
            </ol>
          </section>
          <section className="content">
            <form className="form-horizontal">
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
                                this.state.activeTab == "basic"
                                  ? ""
                                  : "collapsed"
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
                                  this.state.activePanel == "downloads"
                                    ? "active"
                                    : ""
                                }
                                onClick={(e) => {
                                  this.setState({ activePanel: "downloads" });
                                }}
                              >
                                <a data-toggle="tab">Downloads</a>
                              </li>
                              <li
                                className={
                                  this.state.activePanel == "seo"
                                    ? "active"
                                    : ""
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
                        <div
                          className=" col-md-10"
                          style={{ marginTop: "10px" }}
                        >
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

export default withRouter(CreateProduct);
