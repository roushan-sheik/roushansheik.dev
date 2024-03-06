import React from "react";
import { profile } from "../data/profile";

const Banner = () => {
  const {
    firsName,
    lastName,
    position,
    summary,
    avatar,
    location,
    tags,
    socialLinks,
  } = profile;
  return (
    <div>
      {/* image box  */}
      <div>
        <img
          src={avatar.srcPath}
          alt="Roushan Sheikh"
        />
      </div>
      {/* Content box  */}
      <div>
        {/* inner content  */}
        <div>
          <h1>{firsName}</h1>
          <p>Web Developer</p>
          <p>Javascript and Python Problem Solver</p>
          {/* location  */}
          <div>
            <p>Khulna Bangladesh</p>
          </div>
          {/* button box  */}
          <div>
            <span>FullStack</span> <span>JavaScript</span>
          </div>
          {/* social links  */}
          <div>
            {/* linkedIn  */}
            <a href=""></a>
            {/* Github  */}
            <a href=""></a>
            {/* .DEV  */}
            <a href=""></a>
            {/* Medeiom  */}
            <a href=""></a>
            {/* toggle Button  */}
            <button>+show</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
