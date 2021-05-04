import React from "react";
import { Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/SortRounded";
import Checkbox from "@material-ui/core/Checkbox";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from "../../apis/api";
import { format } from "timeago.js";
import DropzoneComponent from "react-dropzone-component";
import "react-dropzone-component/styles/filepicker.css";
import "dropzone/dist/min/dropzone.min.css";
import imageCompression from "browser-image-compression";
class Media extends React.Component {
  constructor(props) {
    super(props);

    this.djsConfig = {
      addRemoveLinks: true,
      autoProcessQueue: false,
    };

    this.componentConfig = {
      postUrl: "#",
    };

  }
  state = {
    files: [],
    selectedRows: [],
    tableData: {
      columns: [
        {
          name: "Id",
          selector: "id",
          sortable: true,
          width: "65px",
        },
        {
          name: "Thumbnail",
          selector: "thumbnail",
          sortable: true,
          cell: (row) => (
            <img
              src={"https://big-cms.herokuapp.com/" + row.thumbnail}
              height={60}
              width={60}
            />
          ),
          width: "110px",
        },
        {
          name: "Filename",
          selector: "filename",
          sortable: true,
        },
        {
          name: "Created",
          selector: "created",
          sortable: true,
        },
      ],
    },
    requiredPermission: "Delete Media",
  };

  componentDidMount() {
    const datalist = [];
    var i = 0;
    api
      .get("/media/get")
      .then((res) => {
        res.data.data.map((val) => {
          i++;
          var tmp = {
            id: i,
            thumbnail: val.image,
            filename: val.fileName,
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
        console.log(err);
      });
  }

  deleteSelectedItems = () => {
    const { selectedRows } = this.state;
    const { requiredPermission } = this.state;
    const data = { id: selectedRows, requiredPermission };
    api
      .delete("/media", { data })
      .then((res) => {
        console.log(res);
        this.componentDidMount();
      })
      .catch((err) => {
        console.log("delete error");
      });
  };
  handleFileAdded = (file) => {
    const { files } = this.state;
    files.push(file);
    this.setState({ files });
  };
  handleRemoveFile = (file) => {
    const { files } = this.state;
    files.splice(file, 1);
    this.setState({ files });
  };

  handlePost = async (file) => {
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(file, options);
    var formData = new FormData();
    await formData.append("image", compressedFile);
    api
      .post("/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleImagePost = () => {
      this.state.files.map( (file) => {
         this.handlePost(file);
     });
    
      console.log("here")
    
     
  };

  render() {
    const eventHandlers = {
      addedfile: (file) => this.handleFileAdded(file),
      removedfile: (file) => this.handleRemoveFile(file),
    };
    return (
      <div>
        <section className="content-header clearfix">
          <h3>Media</h3>
          <ol className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="active">Media</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <DropzoneComponent
                config={this.componentConfig}
                djsConfig={this.djsConfig}
                eventHandlers={eventHandlers}
                action="#"
              />
              <button
                className="btn image-upload"
                onClick={() => {
                   this.handleImagePost();
                }}
              >
                Click to Save
              </button>
            </div>
          </div>
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
export default Media;
