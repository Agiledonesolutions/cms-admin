import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../../apis/api";
import { getToken } from "../../../utils/session";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            name: "Created",
            selector: "created",
            sortable: true
          }
        ],
        data: [],
      },
      requiredPermission: "Delete User",
    };
  }
  componentDidMount() {
    const token = getToken();
    const datalist = [];
    var i = 0;
    api
      .get("/users/get", { token: token })
      .then((res) => {
        // console.log(res.data.data)
        res.data.data.map((val) => {
          i++;
          var tmp = {
            id: i,
            name: val["First Name"],
            created: val["Last Name"],
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
  deleteSelectedItems = () => {};
  render() {
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Tags</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Brands</li>
          </ol>
        </section>
        <section className="content">
        <div className="row">
                  <div className="btn-group pull-right">
                    <Link to='/tags/create' className="btn btn-primary btn-actions btn-create">
                      Create Tag
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
                />
              </DataTableExtensions>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Tags;
