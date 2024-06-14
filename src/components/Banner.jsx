import React, { useState } from "react";
import { description, profile } from "../data/profile";

const Banner = () => {
  const [showSocial, setShowSocial] = useState(false);
  const {
    firstName,
    lastName,
    position,
    summary,
    avatar,
    location,
    tags,
    socialLinks,
  } = profile;
  return (
    <div className="main_container_box">
      <div className="flex flex-col lg:flex-row  mt-8  gap-8">
        {/* profile image box */}
        <div className="flex justify-center lg:justify-start ">
          <img
            className="rounded-full w-[260px] h-[260px]"
            src={avatar.srcPath}
            alt=""
          />
        </div>
        {/* content box parent */}
        <div>
          {/* title box */}
          <div className="flex text-3xl justify-center lg:justify-start font-bold  gap-2">
            <h2 className="capitalize primary_black  ">{firstName} </h2>
            <h2 className="capitalize primary_yellow ">{lastName}</h2>
          </div>
          <h4 className="secondary_black flex justify-center lg:justify-start  py-2 ">
            {position}
          </h4>
          <h4 className="secondary_black flex justify-center lg:justify-start py-2">
            {summary}
          </h4>
          <h4 className="secondary_black flex justify-center lg:justify-start py-2">
            {location?.name}
          </h4>
          {/* button box container  */}
          <div className="flex justify-center lg:justify-start py-3 gap-4">
            {tags.map((tag) => {
              return (
                <button className="py-1 px-2 text-[.875rem] bg-gray-200 rounded">
                  {tag.name}
                </button>
              );
            })}
          </div>
          {/* Social links  */}
          <div className="flex  justify-center lg:justify-start py-3 gap-2">
            <div className="flex lg:gap-4 gap-2">
              {socialLinks.map((social) => {
                return (
                  <a
                    title={social.caption}
                    className="hover:primary_yellow duration-300 ease-in text-red lg:text-[24px] text-[20px]"
                    href={social.url}
                  >
                    {<social.name />}
                  </a>
                );
              })}
            </div>
            <button
              className="hover:primary_yellow secondary_black font-light"
              onClick={() => setShowSocial(!showSocial)}
            >
              {showSocial ? "- less" : "+ more"}
            </button>
          </div>
          {/* my resume  */}
          <div className="my-2 flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1ZKG1i5OhGMr30aH7i-t94xThNfPNNc3Z/view?usp=drive_link"
              download
              target="_blank"
            >
              <button
                type="button"
                className="group relative lg:h-11 h-9 lg:w-[116px] w-24 overflow-hidden border-2 border-[#ff7900] rounded-lg text-base primary_black hover:text-[#ff7900] ease-in duration-300 hover:font-[500]"
              >
                <span className="bg-white ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span>
                <span className="bg-white ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* bottom Para graph container  */}
      <div>
        <p className="secondary_black text-center lg:text-left lg:text-base text-[15px]   my-8">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
