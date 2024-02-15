import React from 'react';
import {navItemArray} from "../../utils/constants";
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul className={"navigator-list"}>
                    {navItemArray.map((item,index) =>
                        <li className={"navigator-item"} key={index}>
                            <NavLink to={item.route}>
                                {item.title}
                            </NavLink>
                        </li>)}
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;