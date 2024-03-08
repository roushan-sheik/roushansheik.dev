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
    <div className="bg-white p-4 rounded-lg border overflow-hidden border-gray-200 shadow-md">
      {/* image-box  */}
      <div id="img_shadow_container" className="h-[250px] relative rounded-lg">
        <a className="z-10" href={liveURL?.url}>
          <img
            className="h-full object-cover rounded-lg"
            src={cover.srcPath}
            alt="Img"
          />
        </a>
        {/* Hover effect div  */}
        <div className="img_shadow absolute w-full   h-[250px]  flex  top-0  left-0 rounded-lg  justify-center items-center bg-stone-200 ">
          <h2 className="text-base text-semibold">Visit</h2>
        </div>
      </div>
      {/* content-box  */}
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Project;
