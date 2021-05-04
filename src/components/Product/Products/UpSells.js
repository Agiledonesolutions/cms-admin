import React from "react";
import "./products.css";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { format } from "timeago.js";
import api from'../../../apis/api'



class UpSells extends React.Component{

    render(){
        return(
            <div className="tab-pane fade in active">
          <h3 className="tab-content-title">Up-Sells</h3>
          <div className="table-responsive">
          <div className="box box-primary">
            <div className="box-body index-table">
              <div className="table-delete-button">
                {/* <button
                  type="button"
                  className="btn btn-default btn-delete"
                  onClick={this.deleteSelectedItems}
                >
                  Delete
                </button> */}
              </div>
              <DataTableExtensions {...this.props.tableData}>
                <DataTable
                  noHeader
                  defaultSortField="id"
                  defaultSortAsc={true}
                  sortIcon={<SortIcon />}
                  selectableRowsComponent={Checkbox}
                  filterPlaceholder="Search"
                  export={false}
                  print={false}
                  selectableRowSelected={row=>row.upsells}
                  onSelectedRowsChange={(selected) => {
                    selected["selectedRows"].forEach((row) => {
                    });
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
           </div>
        </div>
        )
    }
}
export default UpSells;