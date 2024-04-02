import React from "react";
import { navProductArray } from "../../utils/constants";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <nav>
        <ul className={"navigator-list nav-sublist"}>
          {navProductArray.map((item, index) => (
            <li className={"navigator-item"} key={index}>
              <NavLink to={item.route}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
