// import { Layout } from "antd";
import Header from "../Header/Header";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavLinkHeader from "../Navlink/Navlink";
import "./layout.css"

const Layout = () => {
    const user = useSelector((s) => s.user)
    return (<div>

        <Header />
        <div className="main-wraper">
            {/* <div className="main-container">
            </div> */}
            {user ? <NavLinkHeader /> : null}
            <Outlet />
        </div>
    </div>

    )
}

export default Layout;