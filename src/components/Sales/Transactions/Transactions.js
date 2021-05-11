import React from "react";
import { Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../../apis/api";
import { format } from "timeago.js";

class Transactions extends React.Component {
  state = {
    selectedRows: [],
    tableData: {
      columns: [
        {
          name: "Order Id",
          selector: "orderid",
          sortable: true,
          width: "120px",
          cell: row=><Link to={'/orders/'+row.orderid}>{row.orderid}</Link>
        },
        {
          name: "Transaction Id",
          selector: "transactionid",
          sortable: true,
        },
        {
          name: "Payment Method",
          selector: "paymentmethod",
          sortable: true,
        },
        {
          name: "Created",
          selector: "created",
          sortable: true,
        },
      ],
    },
  };

  componentDidMount() {
    const datalist = [];
    var i = 0;
    api
      .get("/transaction/get")
      .then((res) => {
        console.log(res.data.data)
        res.data.data.map((val) => {
          i++;
          var tmp = {
            orderid: i,
            transactionid: "",
            paymentMethod: val.PaymentMethod,
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
        console.log("error fetching transaction");
      });
  }

  render() {
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Transactions</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Transactions</li>
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
export default Transactions;
