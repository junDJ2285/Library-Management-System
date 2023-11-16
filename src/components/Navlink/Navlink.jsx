import { Link, NavLink } from "react-router-dom";
import React from "react";
import Authors from "../../pages/author/Authors";
import "./navlink.css"
const NavLinkHeader = () => {
    return (
        <div className="nav-link-wraper">
            <NavLink to={"/"}
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                }>
                BOOKS
            </NavLink>
            <NavLink to={"/shelves"}
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                }>
                SHELVES
            </NavLink>
            <NavLink to={"/Authors"}
                className={({ isActive }) =>

                    `nav-link ${isActive ? "active-link" : ""}`
                }>
                AUTHORS
            </NavLink>
        </div>
    )
}

export default NavLinkHeader