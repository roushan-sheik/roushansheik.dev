import React from "react";

const Banner = () => {
  return (
    <div>
      {/* image box  */}
      <div>
        <img
          src="../images/profile/profile-500into500.png"
          alt="Roushan Sheikh"
        />
      </div>
      {/* Content box  */}
      <div>
        {/* inner content  */}
        <div>
          <h1>Roushan Sheik</h1>
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
