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
      e.currentTarget.classList.toggle('active')
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
              <li className="">
                <Link to='/dashboard'  >
                  <i className="fa fa-dashboard" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="treeview " onClick={NavLinkToggle}>
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
                    <Link to='/categories'>
                      <i className="fa fa-angle-double-right" />
                      <span>Categories</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/brands'
                      
                    >
                      <i className="fa fa-angle-double-right" />
                      <span>Brands</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/attributes'>
                      <i className="fa fa-angle-double-right" />
                      <span>Attributes</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/attribute-sets'>
                      <i className="fa fa-angle-double-right" />
                      <span>Attribute Sets</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/options'>
                      <i className="fa fa-angle-double-right" />
                      <span>Options</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/tags'>
                      <i className="fa fa-tag" />
                      <span>Tags</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to ='/reviews'>
                      <i className="fa fa-angle-double-right" />
                      <span>Reviews</span>
                    </Link>
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
                    <Link to='/orders'>
                      <i className="fa fa-angle-double-right" />
                      <span>Orders</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/transactions'>
                      <i className="fa fa-angle-double-right" />
                      <span>Transactions</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className=""
              >
                <Link to='/flashsales'>
                  <i className="fa fa-bolt" />
                  <span>Flash Sales</span>
                </Link>
              </li>
              <li
                className=""
              >
                <Link to='/coupons'>
                  <i className="fa fa-tags" />
                  <span>Coupons</span>
                </Link>
              </li>
              <li
                className=""
              >
                <Link to='/pages'>
                  <i className="fa fa-file" />
                  <span>Pages</span>
                </Link>
              </li>
              <li
                className=""
              >
                <Link to='/media'>
                  <i className="fa fa-camera" />
                  <span>Media</span>
                </Link>
              </li>
              <li
                className=""
              >
                <Link to='/menus'>
                  <i className="fa fa-bars" />
                  <span>Menus</span>
                </Link>
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
                    <Link to='/translations' >
                      <i className="fa fa-angle-double-right" />
                      <span>Translations</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/currency-rates'>
                      <i className="fa fa-angle-double-right" />
                      <span>Currency Rates</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/taxes'>
                      <i className="fa fa-angle-double-right" />
                      <span>Taxes</span>
                    </Link>
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
                    <Link to='/sliders'>
                      <i className="fa fa-angle-double-right" />
                      <span>Sliders</span>
                    </Link>
                  </li>
                  <li
                    className=""
                  >
                    <Link to='/storefront'>
                      <i className="fa fa-angle-double-right" />
                      <span>Storefront</span>
                    </Link>
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
                    <Link to='/importer'>
                      <i className="fa fa-angle-double-right" />
                      <span>Importer</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className=""
              >
                <Link to='/reports'>
                  <i className="fa fa-bar-chart" />
                  <span>Reports</span>
                </Link>
              </li>
              <li className="">
                <Link to='/settings'>
                  <i className="fa fa-cogs" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </section>
        </aside>
      );
    
  }
  export default SideBar;
  