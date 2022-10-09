import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
const About = () => {
  return (
    <div
      id="about"
      className="w-full h-[50vh] bg-[#14182c] mx-auto flex justify-start items-center"
    >
      <div className="max-w-[1000px] w-[70%] mx-auto ">
        <h1 className="text-white font-bold text-3xl underline">About</h1>
        <p className="text-gray-300 my-8  text-xl ">
          A Highly motivated individual with passion to make use of technology
          to solve real world problems.Ready to learn new technology as per
          organization need and to deliver a bug free great user experience
          products.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/rishabh-mehta-7b395618b/"
            target="_blank"
          >
            <AiFillLinkedin className="text-white  text-4xl hover:text-[blue]  "></AiFillLinkedin>
          </a>
          <a href="https://github.com/rishabhm05" target="_blank">
            <AiFillGithub className="text-white  text-4xl hover:text-[blue]"></AiFillGithub>
          </a>
          <a href="mailto:mehtarishabh60@gmail.com" target="_blank">
            <AiOutlineMail className="text-white  text-4xl hover:text-[blue]"></AiOutlineMail>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
