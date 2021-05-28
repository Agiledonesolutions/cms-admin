import React from "react";
import { Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../apis/api";
import { format } from "timeago.js";
import Loading from "../Loading";
import "./report.css";

class Reports extends React.Component {
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
                  <div className="report-result">
                    <h3 className="tab-content-title">Coupons Report</h3>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Coupon Name</th>
                            <th>Coupon Code</th>
                            <th>Orders</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Feb 2, 2021 - Mar 15, 2021</td>
                            <td>Anniversary</td>
                            <td>HAPPY2020</td>
                            <td>6</td>
                            <td>$50.00</td>
                          </tr>
                          <tr>
                            <td>May 16, 2020 - May 21, 2021</td>
                            <td>Percent Discount</td>
                            <td>10PERCENT</td>
                            <td>11</td>
                            <td>$60.00</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="pull-right"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="filter-report clearfix">
                    <h3 className="tab-content-title">Filter</h3>
                    <form
                      method="GET"
                      action="https://fleetcart.envaysoft.com/en/admin/reports"
                    >
                      <div className="form-group">
                        <label htmlFor="report-type">Report Type</label>
                        <select
                          name="type"
                          id="report-type"
                          className="custom-select-black"
                        >
                          <option value="coupons_report" selected>
                            Coupons Report
                          </option>
                          <option value="customers_order_report">
                            Customers Order Report
                          </option>
                          <option value="products_purchase_report">
                            Products Purchase Report
                          </option>
                          <option value="products_stock_report">
                            Products Stock Report
                          </option>
                          <option value="products_view_report">
                            Products View Report
                          </option>
                          <option value="branded_products_report">
                            Branded Products Report
                          </option>
                          <option value="categorized_products_report">
                            Categorized Products Report
                          </option>
                          <option value="taxed_products_report">
                            Taxed Products Report
                          </option>
                          <option value="tagged_products_report">
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
                          type="text"
                          name="from"
                          className="form-control datetime-picker"
                          id="from"
                          data-default-date
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="to">Date End</label>
                        <input
                          type="text"
                          name="to"
                          className="form-control datetime-picker"
                          id="to"
                          data-default-date
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="status">Order Status</label>
                        <select
                          name="status"
                          id="status"
                          className="custom-select-black"
                        >
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
                          id="coupon-code"
                          defaultValue
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-default"
                        data-loading
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
