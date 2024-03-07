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
      {/* content box parent */}
      <div>
        {/* title box */}
        <div className="flex text-2xl font-bold gap-2">
          <h2 className="capitalize">{firstName} </h2>
          <h2 className="capitalize">{lastName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
