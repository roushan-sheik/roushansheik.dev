import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../constants/routes";

const Header = () => {
  const { home, about, projects, blog } = routes;
  return (
    <div className="flex  items-center space-x-8 py-4 ">
      <div>
        <h3 className="cursor-pointer font-bold">ROUSHANSHEIK</h3>
      </div>
      {/* nav bar  */}
      <nav>
        <ul className="flex space-x-4 text-[.80rem] ">
          <li className="uppercase">
            <NavLink to={home.path}>{home.name}</NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={about.path}>{about.name}</NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={projects.path}>{projects.name}</NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={blog.path}>{blog.name}</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
