import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  return (
    <footer>
      {/* footer parent div  */}
      <div className="flex lg:flex-row gap-8 mt-20 mb-12 lg:gap-0 justify-between items-center flex-col  ">
        {/* left box  */}
        <div className="flex lg:flex-1 gap-4 items-center">
          <div className="">
            <a
              href="#"
              className="flex hover:primary_yellow duration-300 ease-in gap-2 items-center cursor-pointer"
            >
              <GoMail />
              <p className="text-base black-secondary">Subscribe</p>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex hover:primary_yellow duration-300 ease-in gap-2 items-center cursor-pointer"
            >
              <FaRegHeart />
              <p className="text-base black-secondary">Support</p>
            </a>
          </div>
        </div>
        {/* center box  */}
        <div className="flex  lg:flex-1 justify-center gap-4 items-center">
          {socialLinks.map((social) => {
            if (!social.secondary) {
              return (
                <a
                  className="text-[24px] hover:primary_yellow duration-300 ease-in"
                  href={social.url}
                >
                  {" "}
                  {<social.name />}
                </a>
              );
            }
          })}
        </div>
        {/* right box  */}
        <div className=" flex-1 hidden lg:block"></div>
      </div>
    </footer>
  );
};

export default Footer;
