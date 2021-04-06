import React from "react";
import { Link } from "react-router-dom";

class Users extends React.Component{
    render(){
        return(
            <React.Fragment>
  <section className="content-header clearfix">
    <h3>Users</h3>
    <ol className="breadcrumb">
      <li><a href="http://ecommerce.coddedbrain.com/admin">Dashboard</a></li>
      <li className="active">Users</li>
    </ol>
  </section>
  <section className="content">
    <div className="row">
      <div className="btn-group pull-right">
        <Link to='/users/create' className="btn btn-primary btn-actions btn-create">
          Create User
        </Link>
      </div>
    </div>
    <div className="box box-primary">
      <div className="box-body index-table" id="users-table">
        <div className="table-responsive">
          <table className="table table-striped table-hover " id>
            <thead><tr>
                <th>
                  <div className="checkbox">
                    <input type="checkbox" className="select-all" id="-select-all" />
                    <label htmlFor="-select-all" />
                  </div>
                </th>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Last Login</th>
                <th data-sort>Created</th>
              </tr></thead>
            <tbody />
          </table>
        </div>
      </div>
    </div>
  </section>
  <div id="notification-toast" />
  <div className="modal fade" id="keyboard-shortcuts-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <a type="button" className="close" data-dismiss="modal" aria-label="Close">×</a>
          <h4 className="modal-title">Available keyboard shortcuts on this page</h4>
        </div>
        <div className="modal-body">
          <dl className="dl-horizontal">
            <dt><code>?</code></dt>
            <dd>This Menu</dd>
          </dl>
          <dl className="dl-horizontal">
            <dt><code>c</code></dt>
            <dd>Create User</dd>
          </dl>
          <dl className="dl-horizontal">
            <dt><code>Del</code></dt>
            <dd>Delete User</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

            </React.Fragment>
        )
    }
}
export default Users;