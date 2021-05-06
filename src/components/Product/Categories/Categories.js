import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-file-explorer";
import "react-sortable-tree/style.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import treeData from "./treeData";
import FileManager from '../../Media/FileManager'
import Validate from '../../../utils/validation'
import api from '../../../apis/api'

const alertNodeInfo = ({ node, path, treeIndex }) => {
  const objectString = Object.keys(node)
    .map((k) => (k === "children" ? "children: Array" : `${k}: '${node[k]}'`))
    .join(",\n   ");

  global.alert(
    "Info passed to the button generator:\n\n" +
      `node: {\n   ${objectString}\n},\n` +
      `path: [${path.join(", ")}],\n` +
      `treeIndex: ${treeIndex}`
  );
};

class Categories extends React.Component {
  state = {
    showModal: false,
    multiple: false,
    logoImage: "",
    bannerImage: "",
    imageType: "",
    activePanel: "general",
    selectedCategory: "none",
    data: {
      name: "",
      searchable: false,
      status: false
    },
    logoId: "",
    bannerId: "",
    parentId: "",
    errors: [],
    treeData,
  };

  handleTreeOnChange = (treeData) => {
    this.setState({ treeData });
  };

  toggleNodeExpansion = (expanded) => {
    this.setState((prevState) => ({
      treeData: toggleExpandedForAll({
        treeData: prevState.treeData,
        expanded,
      }),
    }));
  };
  setImageId = (id, multiple, image) =>{
    if(this.state.imageType == "logo"){
      this.setState({logoId: id, logoImage: image})
    }else if(this.state.imageType == "banner"){
      this.setState({bannerId: id, bannerImage: image})
    }
  }
  setVal =(key, val) =>{
    const {data} = this.state
    data[key] = val
    this.setState({data})
  }
  handleSubmit =() =>{
    const {data, errors} = this.state
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
    if(this.state.parentId == ""){
      api.post('/category/root', {data: data, logoId: this.state.logoId, bannerId: this.state.bannerId, requiredPermission: "Create Categories"}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log("error adding root category")
      })
    }
  }
  }
  ToggleActivePanel = () => {
    if (this.state.activePanel == "general") {
      return (
        <div className="tab-pane fade in active">
          <div className="row">
            <div className="col-md-8">
              {this.state.selectedCategory != "none"? 
              <div id="id-field">
                <div className="form-group">
                  <label
                    htmlFor="id"
                    className="col-md-3 control-label text-left"
                  >
                    ID
                  </label>
                  <div className="col-md-9">
                    <input
                      name="id"
                      className="form-control "
                      id="id"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              :""}
              <div className="form-group">
                <label
                  className="col-md-3 control-label text-left"
                >
                  Name<span className="m-l-5 text-red">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    name="name"
                    className="form-control "
                    type="text"
                    value={this.state.data.name}
                    onChange={(e)=>{
                      this.setVal(e.target.name, e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="is_searchable"
                  className="col-md-3 control-label text-left"
                >
                  Searchable
                </label>
                <div className="col-md-9">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="searchable"
                      id="is_searchable"
                      checked={this.state.data.searchable}
                      onChange={(e)=>{
                        this.setVal(e.target.name, !this.state.data.searchable)
                      }}
                    />
                    <label htmlFor="is_searchable">
                      Show this category in search box category list
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
                      onChange={(e)=>{
                        this.setVal(e.target.name, !this.state.data.status)
                      }}
                    />
                    <label htmlFor="is_active">Enable the category</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "image") {
      return (
        <div className="tab-pane fade in active">
          <div className="logo">
            <div className="single-image-wrapper">
              <h4>Logo</h4>
              <button
                type="button"
                className="image-picker btn btn-default"
                onClick={() =>
                  this.setState({ multiple: false, showModal: true, imageType: "logo" })
                }
              >
                <i className="fa fa-folder-open m-r-5" />
                Browse
              </button>
              <div className="clearfix" />
              <div className="single-image image-holder-wrapper clearfix">
              {this.state.logoImage? <div className="image-holder"><img src={"https://big-cms.herokuapp.com/"+this.state.logoImage} height={120} width={120}/></div>: <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>}
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="single-image-wrapper">
              <h4>Banner</h4>
              <button
                type="button"
                className="image-picker btn btn-default"
                onClick={() =>
                  this.setState({ multiple: false, showModal: true, imageType: "banner" })
                }
              >
                <i className="fa fa-folder-open m-r-5" />
                Browse
              </button>
              <div className="clearfix" />
              <div className="single-image image-holder-wrapper clearfix">
              {this.state.bannerImage? <div className="image-holder"><img src={"https://big-cms.herokuapp.com/"+this.state.bannerImage} height={120} width={120}/></div>: <div className="image-holder placeholder">
                <i className="fa fa-picture-o" />
              </div>}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activePanel == "seo") {
      return (
        <div id="seo" className="tab-pane fade in active">
          <div className="row">
            <div className="col-md-8">
              <div id="slug-field">
                <div className="form-group">
                  <label
                    htmlFor="slug"
                    className="col-md-3 control-label text-left"
                  >
                    URL
                  </label>
                  <div className="col-md-9">
                    <input
                      name="slug"
                      className="form-control "
                      id="slug"
                      type="text"
                    />
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
            setMediaId={this.setImageId}
            close={() => {
              document.querySelector("html").style.overflowY = "auto";

              this.setState({ showModal: false });
            }}
          />
        </Modal>
        <section className="content-header clearfix">
          <h3>Categories</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Categories</li>
          </ol>
        </section>
        <section className="content">
          <div className="box box-default">
            <div className="box-body clearfix">
              <div className="col-lg-2 col-md-3">
                <div className="row">
                  <button
                    className="btn btn-default add-root-category "
                    style={{ marginBottom: "5px" }}
                    onClick={() => {
                      this.setState({ selectedCategory: "none" });
                    }}
                  >
                    Add Root Category
                  </button>
                  <button
                    className="btn btn-default add-sub-category disabled"
                    className={
                      this.state.selectedCategory == "none"
                        ? "btn btn-default add-sub-category disabled"
                        : "btn btn-default add-sub-category "
                    }
                    style={{ marginBottom: "5px" }}
                    onClick={() => {
                      this.setState({ selectedCategory: "someid" });
                    }}
                  >
                    Add Subcategory
                  </button>
                  <div className="m-b-10">
                    <a
                      className="collapse-all"
                      onClick={this.toggleNodeExpansion.bind(this, false)}
                    >
                      Collapse All
                    </a>
                    <span style={{ paddingLeft: "3px", paddingRight: "3px" }}>
                      |
                    </span>
                    <a
                      className="expand-all"
                      onClick={this.toggleNodeExpansion.bind(this, true)}
                    >
                      Expand All
                    </a>
                  </div>
                  <div className="category-tree">
                    <div className="tree-wrapper">
                      <SortableTree
                        treeData={this.state.treeData}
                        onChange={this.handleTreeOnChange}
                        onMoveNode={({ node, treeIndex, path }) =>
                          global.console.debug(
                            "node:",
                            node,
                            "treeIndex:",
                            treeIndex,
                            "path:",
                            path
                          )
                        }
                        theme={FileExplorerTheme}
                        canDrag={({ node }) => !node.noDragging}
                        canDrop={({ nextParent }) =>
                          !nextParent || !nextParent.noChildren
                        }
                        isVirtualized={false}
                        generateNodeProps={rowInfo => ({
                            icons: !rowInfo.node.noChildren
                              ? [
                                  <div
                                    style={{
                                      borderLeft: 'solid 8px gray',
                                      borderBottom: 'solid 10px gray',
                                      marginRight: 10,
                                      boxSizing: 'border-box',
                                      width: 16,
                                      height: 12,
                                      filter: rowInfo.node.expanded
                                        ? 'drop-shadow(1px 0 0 gray) drop-shadow(0 1px 0 gray) drop-shadow(0 -1px 0 gray) drop-shadow(-1px 0 0 gray)'
                                        : 'none',
                                      borderColor: rowInfo.node.expanded ? 'white' : 'gray',
                                    }}
                                  />,
                                ]
                              : [
                                  <div
                                    style={{
                                      border: 'solid 1px black',
                                      fontSize: 8,
                                      textAlign: 'center',
                                      marginRight: 10,
                                      width: 12,
                                      height: 16,
                                    }}
                                  >
                                    F
                                  </div>,
                                ],
                          
                          })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-9">
                <div className="tab-wrapper category-details-tab">
                  <ul className="nav nav-tabs">
                    <li
                      className={
                        this.state.activePanel == "general"
                          ? "general-information-tab active"
                          : "general-information-tab"
                      }
                      onClick={(e) => {
                        this.setState({ activePanel: "general" });
                      }}
                    >
                      <a>General</a>
                    </li>
                    <li
                      className={
                        this.state.activePanel == "image"
                          ? "image-tab active"
                          : "image-tab"
                      }
                      onClick={(e) => {
                        this.setState({ activePanel: "image" });
                      }}
                    >
                      <a>Image</a>
                    </li>
                    {this.state.selectedCategory != "none" ? (
                      <li
                        className={
                          this.state.activePanel == "seo"
                            ? "seo-tab active"
                            : "seo-tab"
                        }
                        onClick={(e) => {
                          this.setState({ activePanel: "seo" });
                        }}
                      >
                        <a>SEO</a>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                  <form className="form-horizontal">
                    <div className="tab-content">
                      {this.ToggleActivePanel()}
                    </div>
                    <div className="form-group" style={{ marginTop: "10px" }}>
                      <div className="col-md-10">
                        <button type="submit" className="btn btn-primary" onClick={(e)=>{
                          e.preventDefault()
                          this.handleSubmit()
                        }}>
                          Save
                        </button>
                        {this.state.selectedCategory != "none"? 
                        <button
                          type="button"
                          className="btn btn-link text-red btn-delete p-l-0 "
                        >
                          Delete
                        </button>
                        :""}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="overlay loader hide">
              <i className="fa fa-refresh fa-spin" />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Categories;
