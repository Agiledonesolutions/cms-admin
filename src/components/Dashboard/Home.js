import React from "react";

const Home = () => {
  return (
    <div>
      <section className="content-header clearfix">
        <h2 className="pull-left">Dashboard</h2>
      </section>
      <section className="content">
        <div className="grid clearfix">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-grid total-sales">
                <h4>Total Sales</h4>
                <i className="fa fa-money pull-left" aria-hidden="true" />
                <span className="pull-right">₹0.00</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-grid total-orders">
                <h4>Total Orders</h4>
                <i
                  className="fa fa-shopping-cart pull-left"
                  aria-hidden="true"
                />
                <span className="pull-right">0</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-grid total-products">
                <h4>Total Products</h4>
                <i className="fa fa-cubes" aria-hidden="true" />
                <span className="pull-right">34</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-grid total-customers">
                <h4>Total Customers</h4>
                <i className="fa fa-users pull-left" aria-hidden="true" />
                <span className="pull-right">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="sales-analytics">
              <div className="grid-header clearfix">
                <h4>
                  <i className="fa fa-bar-chart" aria-hidden="true" />
                  Sales Analystics
                </h4>
              </div>
              <div className="canvas">
                <canvas className="chart" width={400} height={250} />
              </div>
            </div>
            <div className="dashboard-panel">
              <div className="grid-header">
                <h4>
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                  Latest Orders
                </h4>
              </div>
              <div className="clearfix" />
              <div className="table-responsive anchor-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="empty" colSpan={5}>
                        No data available!
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="dashboard-panel">
              <div className="grid-header">
                <h4>
                  <i className="fa fa-search" aria-hidden="true" />
                  Latest Search Terms
                </h4>
              </div>
              <div className="clearfix" />
              <div className="table-responsive search-terms">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Keyword</th>
                      <th>Results</th>
                      <th>Hits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>knsjnvsdv</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>footwear\</td>
                      <td>0</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>footwear</td>
                      <td>0</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dashboard-panel">
              <div className="grid-header">
                <h4>
                  <i className="fa fa-comments-o" aria-hidden="true" />
                  Latest Reviews
                </h4>
              </div>
              <div className="clearfix" />
              <div className="table-responsive anchor-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Customer</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="empty" colSpan={5}>
                        No data available!
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
