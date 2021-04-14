import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "./Data";
import api from '../../../apis/api'
import {getToken} from '../../../utils/session'

class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        columns,
        data: []
      },
    };
  }
  componentDidMount(){
    const token = getToken();
    const datalist = []
    var i=0
    api.get('/roles/get', {token: token}).then(res=>{
        // console.log(res.data.data)
        res.data.data.map(val=>{
            i++;
            var tmp = {
                id: i,
                name: val['Name'],
                created: val['Created']
            }
            datalist.push(tmp)
        })
        const {tableData} = this.state
        tableData['data'] = datalist
        this.setState({tableData})
      }).catch((err)=>{
        console.log(err)
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Roles</h3>
          <ol className="breadcrumb">
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li className="active">Roles</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="btn-group pull-right">
              <Link
                to="/roles/create"
                className="btn btn-primary btn-actions btn-create"
              >
                Create Role
              </Link>
            </div>
          </div>
          <div className="box box-primary">
            <div className="box-body index-table" id="roles-table">
              <DataTableExtensions {...this.state.tableData}>
                <DataTable
                  noHeader
                  defaultSortField="id"
                  defaultSortAsc={false}
                  sortIcon={<SortIcon />}
                  selectableRowsComponent={Checkbox}
                  filterPlaceholder="Search"
                  export={false}
                  print={false}
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
        //   tabIndex={-1}
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
export default Roles;
