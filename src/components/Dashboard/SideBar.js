import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    

    const NavToggle = () =>{
      if(window.innerWidth <= 991){
        document.body.classList.toggle('sidebar-open')
      }else{
        document.body.classList.toggle('sidebar-collapse')
      }
    }

    const NavLinkToggle = (e) =>{
      e.currentTarget.classList.toggle('selected')
      e.currentTarget.querySelector('.treeview-menu').classList.toggle('display-block')
    }

      return (
        <aside className="main-sidebar">
          <header className="main-header clearfix">
            <Link className="logo" to="/dashboard">
              <span className="logo-lg">FleetCart</span>
            </Link>
            <a
              onClick={NavToggle}
              className="sidebar-toggle"
              data-toggle="offcanvas"
              role="button"
            >
              <i aria-hidden="true" className="fa fa-bars" />
            </a>
          </header>
          <section className="sidebar">
            <ul className="sidebar-menu">
              <li className="active">
                <Link to='/dashboard'  >
                  <i className="fa fa-dashboard" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="treeview" onClick={NavLinkToggle}>
                <a >
                  <i className="fa fa-cube" />
                  <span>Products</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu" >
                  <li
                    className=""
                  >
                    <Link to='/products' >
                      <i className="fa fa-angle-double-right" />
                      <span>Catalog</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Categories</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Brands</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Attributes</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Attribute Sets</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Options</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-tag" />
                      <span>Tags</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                     
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Reviews</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview" onClick={NavLinkToggle}>
                <a
                  
                >
                  <i className="fa fa-dollar" />
                  <span>Sales</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Orders</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Transactions</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className=""
              >
                <a
                  
                >
                  <i className="fa fa-bolt" />
                  <span>Flash Sales</span>
                </a>
              </li>
              <li
                className=""
              >
                <a
                  
                >
                  <i className="fa fa-tags" />
                  <span>Coupons</span>
                </a>
              </li>
              <li
                className=""
              >
                <a
                  
                >
                  <i className="fa fa-file" />
                  <span>Pages</span>
                </a>
              </li>
              <li
                className=""
              >
                <a
                  
                >
                  <i className="fa fa-camera" />
                  <span>Media</span>
                </a>
              </li>
              <li
                className=""
              >
                <a
                  
                >
                  <i className="fa fa-bars" />
                  <span>Menus</span>
                </a>
              </li>
              <li className="header">System</li>
              <li className="treeview" onClick={NavLinkToggle}>
                <a
                  
                >
                  <i className="fa fa-users" />
                  <span>Users</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li
                    className=""
                  >
                    <Link to='/users'
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Users</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to="/roles"
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Roles</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="treeview" onClick={NavLinkToggle}>
                <a
                  
                >
                  <i className="fa fa-globe" />
                  <span>Localization</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Translations</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Currency Rates</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Taxes</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview" onClick={NavLinkToggle}>
                <a
                  
                >
                  <i className="fa fa-paint-brush" />
                  <span>Appearance</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Sliders</span>
                    </a>
                  </li>
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Storefront</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview" onClick={NavLinkToggle}>
                <a
                  
                >
                  <i className="fa fa-wrench"  />
                  <span>Tools</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li
                    className=""
                  >
                    <a
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Importer</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className=""
              >
                <a
                  
                >
                  <i className="fa fa-bar-chart" />
                  <span>Reports</span>
                </a>
              </li>
              <li className="">
                <a
                  
                >
                  <i className="fa fa-cogs" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
      );
    
  }
  export default SideBar;
  