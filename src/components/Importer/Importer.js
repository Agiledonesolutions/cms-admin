import React from "react";
import { Link, withRouter } from "react-router-dom";

class Importer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Importer</h3>
          <ol className="breadcrumb">
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li className="active">Importer</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="btn-group pull-right">
              <a href="#" className="btn btn-primary btn-actions">
                Download CSV
              </a>
            </div>
          </div>
          <form
           className="form-horizontal"
          >
            
            <div className="accordion-content">
              <div className="accordion-box-content clearfix">
                <div className="col-md-12">
                  <div className="accordion-box-content">
                    <div className="tab-content clearfix">
                      <div className="tab-pane fade in active">
                        <h3 className="tab-content-title">Import</h3>
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <label
                                htmlFor="csv_file"
                                className="col-md-3 control-label text-left"
                              >
                                CSV File
                                <span className="m-l-5 text-red">*</span>
                              </label>
                              <div className="col-md-9">
                                <input
                                  name="csv_file"
                                  className="form-control "
                                  id="csv_file"
                                  type="file"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="import_type"
                                className="col-md-3 control-label text-left"
                              >
                                Import Type
                                <span className="m-l-5 text-red">*</span>
                              </label>
                              <div className="col-md-9">
                                <select
                                  name="import_type"
                                  className="form-control custom-select-black "
                                  id="import_type"
                                >
                                  <option value="product">Product</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="col-md-offset-3 col-md-10">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  data-loading
                                >
                                  Run
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(Importer);