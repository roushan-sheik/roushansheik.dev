import React, { useState } from "react";
import { profile } from "../data/profile";

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
        <div>
          <img
            className="rounded-full w-[260px] h-[260px]"
            src={avatar.srcPath}
            alt=""
          />
        </div>
        {/* content box parent */}
        <div>
          {/* title box */}
          <div className="flex text-3xl font-bold gap-2">
            <h2 className="capitalize primary_black">{firstName} </h2>
            <h2 className="capitalize text-[#8a817c]">{lastName}</h2>
          </div>
          <h4 className="secondary_black py-2 ">{position}</h4>
          <h4 className="secondary_black py-2">{summary}</h4>
          <h4 className="secondary_black py-2">{location?.name}</h4>
          {/* button box container  */}
          <div className="flex py-2 gap-4">
            {tags.map((tag) => {
              return (
                <button className="p-1 text-[.875rem] bg-gray-200 rounded">
                  {tag.name}
                </button>
              );
            })}
          </div>
          {/* Social links  */}
          <div className="flex py-2 gap-2">
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                return (
                  <a
                    title={social.caption}
                    className="text-red text-[24px]"
                    href={social.url}
                  >
                    {<social.name />}
                  </a>
                );
              })}
            </div>
            <button onClick={() => setShowSocial(!showSocial)}>
              {showSocial ? "-less" : "+more"}
            </button>
          </div>
        </div>
      </div>
      {/* bottom Para graph container  */}
      <div>
        <p className="secondary_black text-base my-8">
          Hi There, I'm Roushan Sheik, a skilled JavaScript programmer with
          three years of hands-on experience. I specialize in developing
          efficient code, with expertise in frameworks like React.js, Next.js,
          and Express.js for dynamic web applications. Currently, I'm dedicated
          to backend development, architecting and maintaining server-side
          components. My passion for web development and commitment to staying
          updated with the latest technologies make me a valuable asset to any
          project or team.
        </p>
      </div>
    </div>
  );
};

export default Banner;
