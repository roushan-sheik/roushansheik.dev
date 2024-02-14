import React from "react";

const Header = () => {
  return (
    <div className="flex  items-center space-x-8 py-4 ">
      <div>
        <h3 className="cursor-pointer font-bold">ROUSHANSHEIK</h3>
      </div>
      <div>
        <ul className="flex space-x-4 text-[.80rem] ">
          <li>
            <a href="#" className="uppercase">
              About
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
