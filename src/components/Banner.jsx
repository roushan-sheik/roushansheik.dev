import React from "react";
import { profile } from "../data/profile";

const Banner = () => {
  const { firstName, lastName, position, summary, avatar, location, tags } =
    profile;
  return (
    <div className="flex flex-col lg:flex-row ">
      {/* profile image box */}
      <div>
        <img
          className="rounded-full w-[300px] h-[300px]"
          src={avatar.srcPath}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
