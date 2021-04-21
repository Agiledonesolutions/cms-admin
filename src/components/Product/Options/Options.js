import React from "react";
import { Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../../apis/api";
import { format } from "timeago.js";

class Options extends React.Component {
  state = {
    selectedRows: [],
    tableData: {
      columns: [
        {
          name: "Id",
          selector: "id",
          sortable: true,
        },
        {
          name: "Name",
          selector: "name",
          sortable: true,
        },
        {
          name: "Attribute Set",
          selector: "attributeset",
          sortable: true,
        },
        {
          name: "Filterable",
          selector: "filterable",
          sortable: true,
        },
        {
          name: "Created",
          selector: "created",
          sortable: true,
        },
      ],
      data: [],
    },
    requiredPermission: "Delete Tag",
    edit: "",
  };

  componentDidMount() {
    const datalist = [];
    var i = 0;
    api
      .get("/attribute/get")
      .then((res) => {
        res.data.data.map((val) => {
          i++;
          var tmp = {
            id: i,
            name: val["name"],
            attributeset: val["attributeSet"]["name"],
            filterable: val.filterable ? "Yes" : "No",
            created: format(val["createdAt"]),
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
  }

  deleteSelectedItems = () => {
    const { selectedRows } = this.state;
    const { requiredPermission } = this.state;
    const data = { id: selectedRows, requiredPermission };
    api
      .delete("/attribute", { data })
      .then((res) => {
        console.log(res);
        this.componentDidMount();
      })
      .catch((err) => {
        console.log("delete error");
      });
  };

  render() {
    if (this.state.edit != "") {
      return <Redirect to={"/products/" + this.state.edit + "/edit"} />;
    }
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Options</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Options</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="btn-group pull-right">
              <Link
                to="/options/create"
                className="btn btn-primary btn-actions btn-create"
              >
                Create Option
              </Link>
            </div>
          </div>
          <div className="box box-primary">
            <div className="box-body index-table" id="attributes-table">
              <div className="table-delete-button">
                <button
                  type="button"
                  className="btn btn-default btn-delete"
                  onClick={this.deleteSelectedItems}
                >
                  Delete
                </button>
              </div>
              <DataTableExtensions {...this.state.tableData}>
                <DataTable
                  noHeader
                  defaultSortField="id"
                  defaultSortAsc={true}
                  sortIcon={<SortIcon />}
                  selectableRowsComponent={Checkbox}
                  filterPlaceholder="Search"
                  export={false}
                  print={false}
                  onSelectedRowsChange={(selected) => {
                    const arr = [];
                    selected["selectedRows"].forEach((row) => {
                      arr.push(row._id);
                    });
                    console.log(arr);
                    this.setState({ selectedRows: arr });
                  }}
                  responsive
                  pagination
                  selectableRows
                  onRowClicked={(index) => {
                    this.setState({ edit: index._id });
                  }}
                  pointerOnHover
                  highlightOnHover
                />
              </DataTableExtensions>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Options;