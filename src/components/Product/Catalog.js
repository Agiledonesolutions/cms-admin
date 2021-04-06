import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./Data.js";

const Catalog = () => {
  const tableData = {
    columns,
    data,
  };
  return (
    <div>
      <section className="content-header clearfix">
        <h3>Products</h3>
        <ol className="breadcrumb">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="active">Products</li>
        </ol>
      </section>
      <section className="content">
        <div className="row">
          <div className="btn-group pull-right">
            <Link to='/products/create' className="btn btn-primary btn-actions btn-create">
              Create Product
            </Link>
          </div>
        </div>
        <div className="box box-primary">
          <div className="box-body index-table" id="attributes-table">
            
            <DataTableExtensions {...tableData}>
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
    </div>
  );
};
export default Catalog;
