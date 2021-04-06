import React from "react";
import Home from "./Home";
import SideBar from "./SideBar";
import Wrapper from "./Wrapper";

const Dashboard = (props) => {

  return (
    <React.Fragment>
      <div className="left-side" />
      <SideBar />
      <Wrapper>
       {props.abc}
      </Wrapper>
    </React.Fragment>
  );
};
export default Dashboard;
