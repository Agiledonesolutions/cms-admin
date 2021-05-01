import React from "react";
import SideBar from "./SideBar";
import Wrapper from "./Wrapper";

class Dashboard extends React.Component {
 
  render() {
    return (
      <React.Fragment>
        <div className="left-side" />
        <SideBar />
        <Wrapper>
          {this.props.abc}
        </Wrapper>
      </React.Fragment>
    );
  }
}
export default Dashboard;
