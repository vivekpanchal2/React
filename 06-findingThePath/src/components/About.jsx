import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about">
        Hello we are the FoodEx-World's most Fastest dilivery app we diliverd
        food in less than 1 minutes
        <Link to="/about/profile">Go to profile</Link>
        <Outlet />
      </div>
    </>
  );
};

export default About;
