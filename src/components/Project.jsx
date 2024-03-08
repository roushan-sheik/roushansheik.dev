import React from "react";

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
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md">
      {/* image-box  */}
      <div className="h-[250px]  ">
        <a href={liveURL?.url}>
          <img className="h-full object-cover" src={cover.srcPath} alt="Img" />
        </a>
      </div>
      {/* content-box  */}
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Project;
