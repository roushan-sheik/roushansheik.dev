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
          <h2 className="capitalize primary_black">{firstName} </h2>
          <h2 className="capitalize text-[#8a817c]">{lastName}</h2>
        </div>
        <h4 className="secondary_black ">{position}</h4>
        <h4 className="secondary_black">{summary}</h4>
        <h4 className="secondary_black">{location?.name}</h4>
        {/* button box container  */}
        <div className="flex gap-4">
          {tags.map((tag) => {
            return (
              <button className="p-1 text-[.875rem] bg-gray-200 rounded">
                {tag.name}
              </button>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
