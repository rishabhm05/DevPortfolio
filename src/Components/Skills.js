import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full bg-[#14182c] mx-auto flex justify-start items-center py-10"
    >
      <div className="max-w-[1000px] w-[70%] mx-auto ">
        <h1 className="text-white font-bold text-3xl underline">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3  gap-10 my-10  items-center">
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/js.png "
              className="w-20 bg-center ml-auto mr-auto "
              alt="js"
            ></img>
            <p className="text-center text-white my-4 mr-2">JAVASCRIPT</p>
          </div>
         
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/react.png "
              className="w-20 bg-cover mx-auto"
              alt="react"
            ></img>
            <p className="text-center text-white my-4">React JS</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/java.png "
              className="w-20 bg-cover mx-auto"
              alt="java"
            ></img>
            <p className="text-center text-white my-4 ">JAVA</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/database.png "
              className="w-20 bg-cover mx-auto"
              alt="sql"
            ></img>
            <p className="text-center text-white my-4">SQL</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/html-5.png "
              className="w-20 bg-cover mx-auto"
              alt="html"
            ></img>
            <p className="text-center text-white my-4">HTML 5</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/css-3.png "
              className="w-20 bg-cover mx-auto"
              alt="css"
            ></img>
            <p className="text-center text-white my-4">CSS</p>
          </div>
          {/* <img src="/java.png " className="w-10"></img> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
