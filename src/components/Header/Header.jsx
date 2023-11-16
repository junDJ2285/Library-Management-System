import React from "react";
import "./Header.css"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { logOut } from "../../store/libraryreducer";

const Header= ()=>{
    const user  = useSelector((s)=>s.user);
    const dispatch= useDispatch();
    return (
    <header className="navbar">
        <h1 className="nav-heading">LIBRARY MANAGEMENT</h1>
        {/* <Navbar/> */}
        <div className="header-btn">
            {user ? (
                <Button
                type="primary" className="button" onClick={()=>{
                    dispatch(logOut())
                }}
                >
                    Logout
                </Button>
            ): (
                <>
                <Link to="/sigin">
                    <Button type="primary" className="button">Signup</Button>
                    </Link> 
                <Link to="/">
                    <Button type="primary" className="button">Login</Button>
                    </Link> 
                </>
            )}
        </div>
    </header>
)
}

export default Header;