import React from "react";
import "./menu.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-full-node-drag";
import "react-sortable-tree/style.css";
import Loading from "../Loading";
import Validate from "../../utils/validation";
import api from "../../apis/api";

class CreateMenu extends React.Component {
  state = {
    submitting: false,
    treeData: [
      {
        title: "title",
        expanded: true,
        children: [
          {
            title: "Hello",
          },
        ],
      },
    ],
    data: {
      name: "",
      status: false,
    },
    edit: "",
    errors: [],
  };
  componentDidMount = () =>{
    if(this.props.edit == "true"){
        const url = "menu/get/" + this.props.match.params.id
        const {data} = this.state
        api.get(url).then(res=>{
            data.name = res.data.data.name
            data.status = res.data.data.status
            this.setState({data})
        }).catch(err=>{
            console.log("error fetching details")
        })
    }
  }
  handleTreeOnChange = (treeData) => {
    this.setState({ treeData }, () => console.log(this.state.treeData));
  };

  toggleNodeExpansion = (expanded) => {
    this.setState((prevState) => ({
      treeData: toggleExpandedForAll({
        treeData: prevState.treeData,
        expanded,
      }),
    }));
  };

  setVal = (name, val) => {
    const { data } = this.state;
    data[name] = val;
    this.setState({ data });
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
      this.setState({ submitting: true });
      if (this.props.edit == "true") {
          api.put('/menu', {data: this.state.data, _id: this.props.match.params.id, requiredPermission: "Edit Menus"}).then(res=>{
              console.log(res)
              this.setState({submitting: false})
          }).catch((err) => {
            console.log("error editing menu");
            this.setState({ submitting: false });
          });
      } else {
        api
          .post("/menu", {
            data: this.state.data,
            requiredPermission: "Create Menus",
          })
          .then((res) => {
            console.log(res.data.data);
            this.setState({ submitting: false, edit: res.data.data._id });
          })
          .catch((err) => {
            console.log("error adding menu");
            this.setState({ submitting: false });
          });
      }
    } else {
      console.log(errors);
    }
  };

  render() {
    if (this.state.edit != "") {
      return <Redirect to={"/menus/" + this.state.edit + "/edit"} />;
    }
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Create Menu</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/menus">Menus</Link>
            </li>
            <li className="active">Create Menu</li>
          </ol>
        </section>
        <section className="content">
          <form className="form-horizontal">
            <div className="row">
              <div className="col-md-6">
                {this.props.edit == "true" ? (
                  <React.Fragment>
                    <div className="btn-group pull-right m-b-15">
                      <Link
                        to={"/menus/"+this.props.match.params.id +"/items/create"}
                        className="btn btn-primary"
                      >
                        Create Menu Item
                      </Link>
                    </div>

                    <div className="box box-primary overflow-hidden">
                      <div className="box-body">
                        <div className="dd">
                          <ol className="dd-list">
                            ignore this now
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
                              canDrag={({ node }) => !node.noDragging}
                              canDrop={({ nextParent }) =>
                                !nextParent || !nextParent.noChildren
                              }
                              isVirtualized={false}
                              theme={FileExplorerTheme}
                              generateNodeProps={(rowInfo) => ({
                                icons: !rowInfo.node.noChildren
                                  ? [
                                      <div
                                        style={{
                                          borderLeft: "solid 8px gray",
                                          borderBottom: "solid 10px gray",
                                          marginRight: 10,
                                          boxSizing: "border-box",
                                          width: 16,
                                          height: 12,
                                          filter: rowInfo.node.expanded
                                            ? "drop-shadow(1px 0 0 gray) drop-shadow(0 1px 0 gray) drop-shadow(0 -1px 0 gray) drop-shadow(-1px 0 0 gray)"
                                            : "none",
                                          borderColor: rowInfo.node.expanded
                                            ? "white"
                                            : "gray",
                                        }}
                                      />,
                                    ]
                                  : [
                                      <div
                                        style={{
                                          border: "solid 1px black",
                                          fontSize: 8,
                                          textAlign: "center",
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
                            {/* <li className="dd-item" data-id={35}>
                          <div className="dd-handle-root">root</div>
                          <ol className="dd-list">
                            <li
                              className="dd-item"
                              data-id={38}
                              draggable={true}
                            >
                              <div
                                className="menu-item-actions btn-group"
                                role="group"
                              >
                                <a
                                  href="https://fleetcart.envaysoft.com/en/admin/menus/4/items/38/edit"
                                  className="btn edit-menu-item "
                                >
                                  <i className="fa fa-pencil" />
                                </a>
                                <button
                                  type="button"
                                  className="btn delete-menu-item"
                                  data-action="https://fleetcart.envaysoft.com/en/admin/menus/items/4?38"
                                >
                                  <i className="fa fa-times" />
                                </button>
                              </div>
                              <div className="dd-handle">New Arrivals</div>
                            </li> */}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <div className="alert alert-info">
                    Please save the menu first to add menu items.
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <div className="box box-primary">
                  <div className="box-body">
                    <div className="form-group">
                      <label className="col-md-3 control-label text-left">
                        Name<span className="m-l-5 text-red">*</span>
                      </label>
                      <div className="col-md-9">
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
                      <label className="col-md-3 control-label text-left">
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
                              this.setVal(
                                e.target.name,
                                !this.state.data.status
                              );
                            }}
                          />
                          <label htmlFor="is_active">Enable the menu</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div
                        className="col-md-offset-3 col-md-9"
                        style={{ display: "flex" }}
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
                        <Loading show={this.state.submitting} />
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

export default withRouter(CreateMenu);
