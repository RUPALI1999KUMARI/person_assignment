import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar_cover">
                <nav className="navbar">
                    <NavLink to="/">
                        <div className="logo">Person</div>
                    </NavLink>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/person-list">
                                Person List&nbsp;
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-person">
                                + Add Person&nbsp;
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
