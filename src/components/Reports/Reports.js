import React from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../../apis/api";
import Loading from "../Loading";
import "./report.css";

class Reports extends React.Component {
  state = {
    selectedReport: "coupons_report",
    tableHeads: [],
    tableTitle: "",
    tableData: [],
    searchWord: "",
    sku: "",
    startDate: "",
    EndDate: "",
    orderStatus: "",
    GroupBy: "",
    searchTitle: "",
    dates: false
  };

  componentDidMount() {
    this.setTable();
  }

  getDate = (date) =>{
    let newDate = new Date(date)
    let month = newDate.toLocaleString('en-us', {month: 'short'})
    let year = date.substr(0,4)
    let day = date.substr(5,2)
    return (month+" "+day+", "+year).toString()
  }

  setTable = () => {
    const url = "/report/" + this.state.selectedReport;
    const tableData = [];
    if (this.state.selectedReport == "tagged_products") {
      api
        .post(url, { searchWord: this.state.searchWord })
        .then((res) => {
          res.data.data.forEach((val) => {
            let temp = [];
            temp.push(val.name, val.totalProducts);
            tableData.push(temp);
          });
          this.setState({ tableData });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
      this.setState({
        tableTitle: "Tagged Products Report",
        tableHeads: ["Tag", "Products Count"],
        searchTitle: "Tag",
      });
    } else if (this.state.selectedReport == "branded_products") {
      // api.post(url, {searchWord: this.state.searchWord}).then(res=>{
      //   console.log(res)
      //   res.data.data.forEach(val=>{
      //     let temp = []
      //     temp.push(val.name, val.totalProducts)
      //     tableData.push(temp)
      //   })
      //   this.setState({tableData})
      // }).catch(err=>{
      //   console.log(err.response.data)
      // })
      this.setState({
        tableTitle: "Branded Products Report",
        tableHeads: ["Brand", "Products Count"],
        searchTitle: "Brand",
      });
    } else if (this.state.selectedReport == "categorized_products") {
      api
        .post(url, { searchWord: this.state.searchWord })
        .then((res) => {
          res.data.data.forEach((val) => {
            let temp = [];
            temp.push(val.name, val.totalProducts);
            tableData.push(temp);
          });
          this.setState({ tableData });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
      this.setState({
        tableTitle: "Categorized Products Report",
        tableHeads: ["Category", "Products Count"],
        searchTitle: "Category",
      });
    } else if (this.state.selectedReport == "products_purchase") {
      api
        .post(url, {
          searchWord: this.state.searchWord,
          SKU: this.state.sku,
          StartDate: this.state.startDate,
          EndDate: this.state.EndDate,
          status: this.state.orderStatus,
          groupby: this.state.GroupBy,
        })
        .then((res) => {
          res.data.data.forEach((val) => {
            let temp = [];
            var start = this.getDate(val.startDate)
            var end = this.getDate(val.endDate)
            temp.push(start + "-" + end, val.product.name, val.totalQty, val.total);
            tableData.push(temp);
          });
          this.setState({ tableData });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
      this.setState({
        tableTitle: "Products Purchase Report",
        tableHeads: ["Date", "Product", "Qty", "Total  "],
        searchTitle: "Product",
        dates: true
      });
    } else if (this.state.selectedReport == "customer_order") {
      this.setState({
        tableTitle: "Customers Order Report",
        tableHeads: [
          "Date",
          "Customer Name",
          "Customer Email",
          "Customer Group",
          "Orders",
          "Products",
          "Total",
        ],
      });
    } else if (this.state.selectedReport == "coupons_report") {
      this.setState({
        tableTitle: "Coupons Report",
        tableHeads: ["Date", "Coupon Name", "Coupon Code", "Orders", "Total"],
      });
    } else if (this.state.selectedReport == "products_stock") {
      this.setState({
        tableTitle: "Products Stock Report",
        tableHeads: ["Product", "Qty", "Stock Availability"],
      });
    } else if (this.state.selectedReport == "products_view") {
      this.setState({
        tableTitle: "Products View Report",
        tableHeads: ["Product", "Views"],
      });
    } else if (this.state.selectedReport == "taxed_products") {
      this.setState({
        tableTitle: "Taxed Products Report",
        tableHeads: ["Tax Class", "Products Count"],
      });
    } else if (this.state.selectedReport == "sales_report") {
      this.setState({
        tableTitle: "Sales Report",
        tableHeads: [
          "Date",
          "Orders",
          "Products",
          "Subtotal",
          "Shipping",
          "Discount",
          "Tax",
          "Total",
        ],
      });
    } else if (this.state.selectedReport == "search_report") {
      this.setState({
        tableTitle: "Search Report",
        tableHeads: ["Keyword", "Results", "Hits"],
      });
    } else if (this.state.selectedReport == "shipping_report") {
      this.setState({
        tableTitle: "Shipping Report",
        tableHeads: ["Date", "Shipping Method", "Orders", "Total"],
      });
    } else if (this.state.selectedReport == "tax_report") {
      this.setState({
        tableTitle: "Tax Report",
        tableHeads: ["Date", "Tax Name", "Orders", "Total"],
      });
    }
  };

  toggleTableContent = () => {
    return (
      <div className="report-result">
        <h3 className="tab-content-title">{this.state.tableTitle}</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {this.state.tableHeads.map((val, index) => (
                  <th key={index}>{val}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((val, index) => (
                <tr key={index}>
                  {val.map((data, key) => (
                    <td key={key}>{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {this.state.tableData.length == 0 ? (
            <div style={{ textAlign: "center", padding: "0.5em" }}>
              No Data Available
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Reports</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Reports</li>
          </ol>
        </section>
        <section className="content">
          <div className="box box-primary report-wrapper">
            <div className="box-body">
              <div className="row">
                <div className="col-lg-9 col-md-8">
                  {this.toggleTableContent()}
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="filter-report clearfix">
                    <h3 className="tab-content-title">Filter</h3>
                    <form>
                      <div className="form-group">
                        <label htmlFor="report-type">Report Type</label>
                        <select
                          name="type"
                          className="custom-select-black"
                          value={this.state.selectedReport}
                          onChange={(e) => {
                            this.setState(
                              {
                                selectedReport: e.target.value,
                                searchWord: "",
                              },
                              () => {
                                this.setTable();
                              }
                            );
                          }}
                        >
                          <option value="coupons_report">Coupons Report</option>
                          <option value="customer_order">
                            Customers Order Report
                          </option>
                          <option value="products_purchase">
                            Products Purchase Report
                          </option>
                          <option value="products_stock">
                            Products Stock Report
                          </option>
                          <option value="products_view">
                            Products View Report
                          </option>
                          <option value="branded_products">
                            Branded Products Report
                          </option>
                          <option value="categorized_products">
                            Categorized Products Report
                          </option>
                          <option value="taxed_products">
                            Taxed Products Report
                          </option>
                          <option value="tagged_products">
                            Tagged Products Report
                          </option>
                          <option value="sales_report">Sales Report</option>
                          <option value="search_report">Search Report</option>
                          <option value="shipping_report">
                            Shipping Report
                          </option>
                          <option value="tax_report">Tax Report</option>
                        </select>
                      </div>
                      {this.state.dates? <React.Fragment>
                      <div className="form-group">
                        <label htmlFor="from">Date Start</label>
                        <input
                          type="date"
                          name="from"
                          className="form-control datetime-picker"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="to">Date End</label>
                        <input
                          type="date"
                          name="to"
                          className="form-control datetime-picker"
                        />
                      </div>
                      </React.Fragment>
                      :""}
                      {this.state.selectedReport == "products_purchase"? 
                      <div className="form-group">
                        <label htmlFor="status">Order Status</label>
                        <select name="status" className="custom-select-black">
                          <option value="">Please Select</option>
                          <option value="Canceled">Canceled</option>
                          <option value="Completed">Completed</option>
                          <option value={"On Hold"}>On Hold</option>
                          <option value="Pending">Pending</option>
                          <option value={"Pending Payment"}>
                            Pending Payment
                          </option>
                          <option value="Processing">Processing</option>
                          <option value="Refunded">Refunded</option>
                        </select>
                      </div>
                      :""}
                      {this.state.selectedReport == "products_purchase"? 
                      <div className="form-group">
                        <label htmlFor="group">Group By</label>
                        <select
                          name="group"
                          id="group"
                          className="custom-select-black"
                        >
                          <option value="">Please Select</option>
                          <option value="days">Days</option>
                          <option value="weeks">Weeks</option>
                          <option value="months">Months</option>
                          <option value="years">Years</option>
                        </select>
                      </div>
                      :""}
                      {/* <div className="form-group">
                        <label htmlFor="coupon-code">Coupon Code</label>
                        <input
                          type="text"
                          name="coupon_code"
                          className="form-control"
                        />
                      </div> */}
                      <div className="form-group">
                        <label>{this.state.searchTitle}</label>
                        <input
                          type="text"
                          name="search"
                          className="form-control"
                          value={this.state.searchWord}
                          onChange={(e) => {
                            this.setState({ searchWord: e.target.value });
                          }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-default"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setTable();
                        }}
                      >
                        Filter
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Reports;
