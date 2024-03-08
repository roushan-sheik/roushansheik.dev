import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

const AllProjects = () => {
  return (
    <div className="project_container">
      <div className="relative">
        <h2 className="lg:text-3xl text-2xl relative inline-block font-bold uppercase select-none py-8">
          Projects{" "}
          <span className="absolute text-base bg-gray-200 px-2 font-normal secondary_black rounded-full top-4 -right-6">
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
