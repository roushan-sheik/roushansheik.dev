import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
const Project = ({ project }) => {
  const {
    id,
    name,
    srcURL,
    liveURL,
    cover,
    startDate,
    summary,
    tags,
    gitHubRepo,
    achievements,
  } = project;

  return (
    <div className="bg-white p-4 rounded-lg border overflow-hidden border-gray-200 shadow-md">
      {/* image-box  */}
      <div className="h-[250px] overflow-hidden border  shadow-inner  rounded-lg">
        <a className="z-10" href={liveURL?.url}>
          <img
            className="h-full hover:scale-110 duration-300 ease-in object-cover rounded-lg"
            src={cover?.srcPath}
            alt="Img"
          />
        </a>
      </div>
      {/* content-box  */}
      <div className="p-4">
        <a href={liveURL?.url}>
          <h2 className="text-2xl primary_black hover:primary_yellow cursor-pointer">
            {name}
          </h2>
        </a>
        <div className="flex my-3 items-center gap-2 secondary_black text-[14px]">
          <CiCalendar />
          <p>{startDate}</p>
        </div>
        <p className="secondary_black">{summary}</p>
        {/* tags btn  */}
        <div className=" flex my-3 gap-2">
          {tags?.map((tag) => {
            return (
              <button
                key={tag}
                className="px-2 py-1 text-[14px] bg-gray-100 rounded-md"
              >
                {tag.name}
              </button>
            );
          })}
        </div>
        {/* repo source code  */}
        <div className="mt-6">
          <a href={gitHubRepo?.repo}>
            <button className="button">
              <FaGithubSquare className="text-3xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
