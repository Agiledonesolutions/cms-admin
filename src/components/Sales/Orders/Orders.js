import React from "react";
import { Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../../apis/api";
import { format } from "timeago.js";

class Orders extends React.Component {
  state = {
    selectedRows: [],
    tableData: {
      columns: [
        {
          name: "Id",
          selector: "id",
          sortable: true,
          width: "65px"
        },
        {
          name: "Customer Name",
          selector: "customername",
          sortable: true,
        },
        {
          name: "Customer Email",
          selector: "customeremail",
          sortable: true,
        },
        {
          name: "Status",
          selector: "status",
          sortable: true,
        },
        {
          name: "Total",
          selector: "total",
          sortable: true,
        },
        {
          name: "Created",
          selector: "created",
          sortable: true,
        },
      ],
    },
    edit: "",
  };

  componentDidMount() {
    const datalist = [];
    api.post('/order/get', {requiredPermission: "Show Order"}).then(res=>{
      res.data.data.map((val) => {
              var tmp = {
                id: val.ID? val.ID: "-",
                customername: val.User["First Name"]+" "+val.User["Last Name"],
                customeremail: val.User.Email,
                status: val.Status,
                total: val.Total,
                created: format(val["createdAt"]),
                _id: val["_id"],
              };
              datalist.push(tmp);
            });
            const { tableData } = this.state;
            tableData["data"] = datalist;
            this.setState({ tableData });
      
    }).catch(err=>{
      console.log("error fetching orders")
    })
  }

  render() {
    if (this.state.edit != "") {
      return <Redirect to={"/orders/" + this.state.edit} />;
    }
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Orders</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Orders</li>
          </ol>
        </section>
        <section className="content">
          <div className="box box-primary">
            <div className="box-body index-table" id="attributes-table">
              <DataTableExtensions {...this.state.tableData}>
                <DataTable
                  noHeader
                  defaultSortField="created"
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
export default Orders;
