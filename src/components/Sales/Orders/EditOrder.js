import React from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../apis/api";
import "./order.css";

class EditOrder extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Show Order</h3>
          <ol className="breadcrumb">
            <li>
              <Link to='/orders'>Dashboard</Link>
            </li>
            <li>
              <Link to='/orders'>
                Orders
              </Link>
            </li>
            <li className="active">Show Order</li>
          </ol>
        </section>
        <section className="content">
          <div className="order-wrapper">
            <div className="order-information-wrapper">
              <div className="order-information-buttons">
                <a
                  href="https://fleetcart.envaysoft.com/en/admin/orders/1/print"
                  className="btn btn-default"
                  target="_blank"
                  data-toggle="tooltip"
                  title="Print"
                >
                  <i className="fa fa-print" aria-hidden="true" />
                </a>
                <form
                  method="POST"
                  action="https://fleetcart.envaysoft.com/en/admin/orders/1/email"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="QXl1DHJFGI25NJWzajsJcex5CuPRkdyA1ayQx3ts"
                  />
                  <button
                    type="submit"
                    className="btn btn-default"
                    data-toggle="tooltip"
                    title="Send Email"
                    data-loading
                  >
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </button>
                </form>
              </div>
              <h3 className="section-title">Order &amp; Account Information</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="order clearfix">
                    <h4>Order Information</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Order Date</td>
                            <td>May 2, 2020</td>
                          </tr>
                          <tr>
                            <td>Order Status</td>
                            <td>
                              <div className="row">
                                <div className="col-lg-9 col-md-10 col-sm-10">
                                  <select
                                    id="order-status"
                                    className="form-control custom-select-black"
                                    data-id={1}
                                  >
                                    <option value="canceled">Canceled</option>
                                    <option value="completed" selected>
                                      Completed
                                    </option>
                                    <option value="on_hold">On Hold</option>
                                    <option value="pending">Pending</option>
                                    <option value="pending_payment">
                                      Pending Payment
                                    </option>
                                    <option value="processing">
                                      Processing
                                    </option>
                                    <option value="refunded">Refunded</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Shipping Method</td>
                            <td>Flat Rate</td>
                          </tr>
                          <tr>
                            <td>Payment Method</td>
                            <td>Cash On Delivery</td>
                          </tr>
                          <tr>
                            <td>Currency</td>
                            <td>USD</td>
                          </tr>
                          <tr>
                            <td>Currency Rate</td>
                            <td>1.0000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="account-information">
                    <h4>Account Information</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Customer Name</td>
                            <td>Mehedi Hasan</td>
                          </tr>
                          <tr>
                            <td>Customer Email</td>
                            <td>admin@email.com</td>
                          </tr>
                          <tr>
                            <td>Customer Phone</td>
                            <td>0123456789</td>
                          </tr>
                          <tr>
                            <td>Customer Group</td>
                            <td>Registered</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="address-information-wrapper">
              <h3 className="section-title">Address Information</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="billing-address">
                    <h4 className="pull-left">Billing Address</h4>
                    <span>
                      Mehedi Hasan
                      <br />
                      Palli Bidyut, Savar
                      <br />
                      Dhaka, Dhaka 1344
                      <br />
                      Bangladesh
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shipping-address">
                    <h4 className="pull-left">Shipping Address</h4>
                    <span>
                      Mehedi Hasan
                      <br />
                      Palli Bidyut, Savar
                      <br />
                      Dhaka, Dhaka 1344
                      <br />
                      Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-ordered-wrapper">
              <h3 className="section-title">Items Ordered</h3>
              <div className="row">
                <div className="col-md-12">
                  <div className="items-ordered">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Line Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="https://fleetcart.envaysoft.com/en/admin/products/63/edit">
                                SAMSUNG QN32Q50RAFXZA Flat 32" QLED
                              </a>
                            </td>
                            <td>$999.00</td>
                            <td>2</td>
                            <td>$1,998.00</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://fleetcart.envaysoft.com/en/admin/products/56/edit">
                                Michael Kors Access Gen 3 Sofie Touchscreen
                                Smartwatch
                              </a>
                            </td>
                            <td>$299.00</td>
                            <td>2</td>
                            <td>$598.00</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="https://fleetcart.envaysoft.com/en/admin/products/1/edit">
                                Apple MacBook Pro 2019 Model (13-Inch, Intel
                                Core i5, 1.4Ghz, 8GB, 128GB)
                              </a>
                            </td>
                            <td>$999.00</td>
                            <td>10</td>
                            <td>$9,990.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-totals-wrapper">
              <div className="row">
                <div className="order-totals pull-right">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td className="text-right">$12,586.00</td>
                        </tr>
                        <tr>
                          <td>Flat Rate</td>
                          <td className="text-right">$25.00</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td className="text-right">$12,611.00</td>
                        </tr>
                      </tbody>
                    </table>
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

export default withRouter(EditOrder);
