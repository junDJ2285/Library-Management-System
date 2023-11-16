import { Link } from "react-router-dom";
import { Button } from "antd";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-heading">
        <h2>Library Management System</h2>
      </div>
      <div className="nav-buttons">
      <Button  danger type="text"  size="large" gap="large" className="button">
            Add Books
          </Button>
        <Link to="/sigin">
          <Button type="primary" size="large" gap="large" className="button">
            Sign In
          </Button>
        </Link>
        <Link to="/login">
          <Button type="primary" size="large" gap="large" className="button">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
