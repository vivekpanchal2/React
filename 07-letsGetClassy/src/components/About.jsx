import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

const AboutFunctional = () => {
  return (
    <>
      <div className="about">
        Hello we are the FoodEx-World's most Fastest dilivery app we diliverd
        food in less than 1 minutes
        <ProfileClass name={"Vivek"} />
        <ProfileFunctionalComponent name={"Panchal"} />
        {/* <Outlet /> */}
      </div>
    </>
  );
};

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          Hello we are the FoodEx-World's most Fastest dilivery app we diliverd
          food in less than 1 minutes
          <ProfileClass name={"First"} />
          <ProfileClass name={"Second"} />
          {/* <Outlet /> */}
        </div>
      </>
    );
  }
}

export default About;

// Constructor for First
// render for First
// Constructor for Second
// render for Second
// API call for First
// API call for Second
