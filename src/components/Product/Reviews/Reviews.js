import React from "react";
import { Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../../apis/api";
import { format } from "timeago.js";
import Loading from '../../Loading'

class Reviews extends React.Component {
  state = {
    submitting: false,
    selectedRows: [],
    tableData: {
      columns: [
        {
          name: "Id",
          selector: "id",
          sortable: true,
          width: "60px"
        },
        {
          name: "Product",
          selector: "product",
          sortable: true,
        },
        {
          name: "Reviewer Name",
          selector: "reviewername",
          sortable: true,
        },
        {
          name: "Rating",
          selector: "rating",
          sortable: true,
        },
        {
          name: "Approved",
          selector: "approved",
          sortable: true,
          cell: row=><span className={row.approved? "dot green": "dot red"}></span>
        },
        {
          name: "Date",
          selector: "date",
          sortable: true,
        },
      ],
      
    },
    requiredPermission: "Delete Tag",
    edit: "",
  };

  componentDidMount() {
    const datalist = [];
    var i = 0;
    api
      .get("/review/get")
      .then((res) => {
        res.data.data.map((val) => {
          i++;
          console.log(res.data.data)
          var tmp = {
            id: i,
            // product: val["product"]["name"],
            reviewername: val["reviewerName"],
            rating: val.rating,
            approved: val.status,
            date: format(val["createdAt"]),
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
    this.setState({submitting: true})
    const { selectedRows } = this.state;
    const { requiredPermission } = this.state;
    const data = { id: selectedRows, requiredPermission };
    api
      .delete("/review", { data })
      .then((res) => {
        console.log(res);
        this.setState({submitting: false})

        this.componentDidMount();
      })
      .catch((err) => {
        console.log("delete error");
        this.setState({submitting: false})

      });
  };

  render() {
    if (this.state.edit != "") {
      return <Redirect to={"/reviews/" + this.state.edit + "/edit"} />;
    }
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Reviews</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Reviews</li>
          </ol>
        </section>
        <section className="content">
          <Loading show={this.state.submitting} />
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
export default Reviews;
