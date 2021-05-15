import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "./UserData";
import api from "../../apis/api";
import { getToken } from "../../utils/session";
import { format } from 'timeago.js';


class Users extends React.Component {
  state={
    selectedRows: [],
    tableData: {
      columns,
      data: [],
    },
    requiredPermission: "Delete Users"
  }

  componentDidMount() {
    const token = getToken();
    const datalist = [];
    var i = 0;
    api
      .get("/users/get")
      .then((res) => {
        // console.log(res.data.data)
        res.data.data.map((val) => {
          i++;
          var tmp = {
            id: i,
            firstName: val["First Name"],
            lastName: val["Last Name"],
            email: val["Email"],
            lastLogin: format(val["LastLogin"]),
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
 
  deleteSelectedItems = () =>{
    const {selectedRows} = this.state
    const {requiredPermission} = this.state
    const data = {id: selectedRows, requiredPermission}
    api.delete('/users', {data}).then(res=>{
      console.log(res)
      this.componentDidMount()
    }).catch(err=>{
      console.log("delete error")
    })
  }
  render() {
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Users</h3>
          <ol className="breadcrumb">
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li className="active">Users</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="btn-group pull-right">
              <Link
                to="/users/create"
                className="btn btn-primary btn-actions btn-create"
              >
                Create User
              </Link>
            </div>
          </div>
          <div className="box box-primary">
            <div className="box-body index-table" id="users-table">
              <div className="table-delete-button">

                <button type="button" className="btn btn-default btn-delete" onClick={this.deleteSelectedItems}>Delete</button>
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
                  onSelectedRowsChange={(selected)=> {
                    const arr = []
                    selected['selectedRows'].forEach(row=>{
                      arr.push(row._id)
                    })
                    this.setState({selectedRows : arr})
                  }}
                  responsive
                  pagination
                  selectableRows
                />
              </DataTableExtensions>
            </div>
          </div>
        </section>
        <div id="notification-toast" />
        <div
          className="modal fade"
          id="keyboard-shortcuts-modal"
          // tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  ×
                </a>
                <h4 className="modal-title">
                  Available keyboard shortcuts on this page
                </h4>
              </div>
              <div className="modal-body">
                <dl className="dl-horizontal">
                  <dt>
                    <code>?</code>
                  </dt>
                  <dd>This Menu</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>
                    <code>c</code>
                  </dt>
                  <dd>Create User</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>
                    <code>Del</code>
                  </dt>
                  <dd>Delete User</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Users;
