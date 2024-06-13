import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-primary  py-6">
      <div className=" container mx-auto  flex justify-between items-center">
        <span className="text-white text-3xl font-bold tracking-tight">
          <Link to="/">forgetechsoftware@gmail.com</Link>
        </span>
        <span className=" flex space-x-2 text-primary bg-white p-2 rounded">
          <Link to={"/login"} className=" flex items-center font-bold px-3">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
