import React from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../../apis/api";
import Loading from "../Loading";
import "./report.css";

class Reports extends React.Component {
  state = {
    selectedReport: "tagged_products",
    tableHeads: [],
    tableTitle: "",
    tableData: [],
  }

  componentDidMount(){
    this.setTable()
  }

  setTable = () =>{
    if(this.state.selectedReport == "tagged_products"){
      this.setState({tableTitle: "Tagged Products Report", tableHeads: ["Tag",  "Products Count"]})
    }else if(this.state.selectedReport == "branded_products"){
      this.setState({tableTitle: "Branded Products Report", tableHeads: ["Brand",  "Products Count"]})
    }
  }

  onSelectedReportChange = () =>{
    var url = "/report/"+this.state.selectedReport
    api.post(url, {searchWord: ""}).then(res=>{
      console.log(res.data.data)
      this.setTable()
    }).catch(err=>{
      console.log(err)
    })
  }
  toggleTableContent = () => {
    return (
      <div className="report-result">
        <h3 className="tab-content-title">{this.state.tableTitle}</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {this.state.tableHeads.map((val)=>(
                  <th>{val}</th>
                ))} 
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Feb 2, 2021 - Mar 15, 2021</td>
                <td>Anniversary</td>
              </tr>
            </tbody>
          </table>
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
                        <select name="type" className="custom-select-black" value={this.state.selectedReport} onChange={(e=>{
                          this.setState({selectedReport: e.target.value},()=>{
                            this.onSelectedReportChange()
                          })
                        })}>
                          <option value="coupons_report">Coupons Report</option>
                          <option value="customer_order">
                            Customers Order Report
                          </option>
                          <option value="products_purchase">
                            Products Purchase Report
                          </option>
                          <option value="products_stock_report">
                            Products Stock Report
                          </option>
                          <option value="products_view_report">
                            Products View Report
                          </option>
                          <option value="branded_products">
                            Branded Products Report
                          </option>
                          <option value="categorized_products">
                            Categorized Products Report
                          </option>
                          <option value="taxed_products_report">
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
                      <div className="form-group">
                        <label htmlFor="status">Order Status</label>
                        <select name="status" className="custom-select-black">
                          <option value>Please Select</option>
                          <option value="canceled">Canceled</option>
                          <option value="completed">Completed</option>
                          <option value="on_hold">On Hold</option>
                          <option value="pending">Pending</option>
                          <option value="pending_payment">
                            Pending Payment
                          </option>
                          <option value="processing">Processing</option>
                          <option value="refunded">Refunded</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="group">Group By</label>
                        <select
                          name="group"
                          id="group"
                          className="custom-select-black"
                        >
                          <option value>Please Select</option>
                          <option value="days">Days</option>
                          <option value="weeks">Weeks</option>
                          <option value="months">Months</option>
                          <option value="years">Years</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="coupon-code">Coupon Code</label>
                        <input
                          type="text"
                          name="coupon_code"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="coupon-code">Tag</label>
                        <input
                          type="text"
                          name="coupon_code"
                          className="form-control"
                        />
                      </div>
                      <button type="button" className="btn btn-default">
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
