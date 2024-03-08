import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../constants/routes";

const Header = () => {
  const { home, about, projects, blog } = routes;
  return (
    <div className="flex  items-center justify-between lg:justify-start space-x-8 py-6 ">
      <div>
        <h3 className="cursor-pointer font-bold primary_black text-[18px]">
          ROUSHAN<span className="secondary_black">S</span>HEIK
        </h3>
      </div>
      {/* nav bar  */}
      <nav>
        <ul className="flex lg:space-x-4 space-x-4 lg:text-[.875rem] text-[12px] ">
          <li className="uppercase primary_black">
            <NavLink to={about.path}>{about.name}</NavLink>
          </li>
          <li className="uppercase primary_black">
            <NavLink to={projects.path}>{projects.name}</NavLink>
          </li>
          <li className="uppercase primary_black">
            <NavLink to={blog.path}>{blog.name}</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
