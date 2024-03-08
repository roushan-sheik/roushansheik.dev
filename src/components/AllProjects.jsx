import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

const AllProjects = () => {
  return (
    <div className="project_container">
      <div className="relative">
        <h2 className="text-3xl relative inline-block font-bold uppercase select-none py-8">
          Projects{" "}
          <span className="absolute text-base bg-gray-200 px-4 py-2 font-semibold  rounded-full top-2 -right-11">
            {projects.length}
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
        {projects.map((project) => (
          <Project project={project} id={project.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
