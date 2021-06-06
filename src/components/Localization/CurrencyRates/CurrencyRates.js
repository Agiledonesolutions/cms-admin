import React from "react";
import { Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../../apis/api";
import { format } from "timeago.js";

class CurrencyRates extends React.Component {
  state = {
    tableData: {
      columns: [
      
        {
          name: "Currency",
          selector: "currency",
          sortable: true,
        },
        {
          name: "Code",
          selector: "code",
          sortable: true,
          
        },
        {
          name: "Rate",
          selector: "rate",
          sortable: true,
        },
        {
            name: "Last Updated",
            selector: "lastUpdated",
            sortable: true,
        }
      ],
      data: [{
          currency: 'Indian Rupee',
          code: 'INR',
          rate: '73.15',
          lastUpdated: '4months ago'
      }]
    },
  };

  componentDidMount() {
 
  }

  render() {
    
    return (
      <React.Fragment>
        <section className="content-header clearfix">
          <h3>Currency Rates (UI ONLY)</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Currency Rates</li>
          </ol>
        </section>

        <section className="content">
        <div className="row">
            <div className="btn-group pull-right">
              <a onClick={(e)=>{

              }}
                className="btn btn-primary btn-actions btn-create"
              >
                Refresh Rates
              </a>
            </div>
          </div>
          <div className="box box-primary">
            <div className="box-body index-table" >
              
              <DataTableExtensions {...this.state.tableData}>
                <DataTable
                  noHeader
                  defaultSortField="key"
                  defaultSortAsc={true}
                  sortIcon={<SortIcon />}
                  filterPlaceholder="Search"
                  export={false}
                  print={false}
                  responsive
                  pagination
                  highlightOnHover
                />
              </DataTableExtensions>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default CurrencyRates;
