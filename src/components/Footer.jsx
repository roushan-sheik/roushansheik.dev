import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer>
      {/* footer parent div  */}
      <div className="flex lg:flex-row flex-col py-8 ">
        {/* left box  */}
        <div className="flex  gap-4 items-center">
          <div className="">
            <a href="#" className="flex  gap-2 items-center cursor-pointer">
              <GoMail />
              <p className="text-base black-secondary">Subscribe</p>
            </a>
          </div>
          <div>
            <a href="#" className="flex  gap-2 items-center cursor-pointer">
              <FaRegHeart />
              <p className="text-base black-secondary">Support</p>
            </a>
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
