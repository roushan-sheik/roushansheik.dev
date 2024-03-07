import React from "react";
import { FaRegHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* footer parent div  */}
      <div className="flex lg:flex-row flex-col ">
        {/* left box  */}
        <div>
          <div>
            <FaRegHeart />
            <p>Support</p>
          </div>
          <div>
            <FaRegHeart />
            <p>Support</p>
          </div>
        </div>
        {/* center box  */}
        <div></div>
        {/* right box  */}
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
