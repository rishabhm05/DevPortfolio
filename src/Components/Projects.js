import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full bg-[#14182c] mx-auto flex justify-start items-center py-10 "
    >
      <div className="max-w-[1000px] w-[70%] mx-auto ">
        <h1 className="text-white font-bold text-3xl underline">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          <div className=" shadow-md shadow-[grey] rounded-md ">
            <LazyLoadImage
              src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/028e62d2-2a59-4fc3-adaa-a0756a0512b9/IN-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              className="w-[100%] ml-auto mr-auto  "
              alt="netflixproject"
            ></LazyLoadImage>
            <div className="mt-10 mb-5 mx-2">
              <p className="text-gray-300 ">
                A ReactJS Netflix Clone built using TMDB Api and User
                Authentication using Firebase. Application allow users to save
                thier favouraite movie.
              </p>

              <div className="flex items-center gap-8">
                <a href="https://netflixclone-ee81f.web.app/" target="_blank">
                  <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                    View Live
                  </button>
                </a>
                <a
                  href="https://github.com/rishabhm05/NetflixClone"
                  target="_blank"
                >
                  <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" shadow-md shadow-[grey] rounded-md ">
            <LazyLoadImage
              src="crypto.jpg"
              className="w-[100%] ml-auto mr-auto"
              alt="cryptoproject"
            ></LazyLoadImage>
            <div className="mt-10 mb-5 mx-2">
              <p className="text-gray-300 ">
                A Webapp which give information all crypto currencies.
                Implemented search Functionality and Pagination using Material
                UI.Implemented Routing using react-router.
              </p>
              <div className="flex items-center gap-8">
                <a
                  href="https://cryptoinformation1.netlify.app/"
                  target="_blank"
                >
                  <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                    View Live
                  </button>
                </a>
                <a
                  href="https://github.com/rishabhm05/CryptoCurrencyTracker"
                  target="_blank"
                >
                  {" "}
                  <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" shadow-md shadow-[grey] rounded-md ">
            <LazyLoadImage
              src="/resume.jpg"
              className="w-[100%] ml-auto mr-auto"
              alt="resumeproject"
            ></LazyLoadImage>
            <div className="mt-10 mb-5 mx-2">
              <p className="text-gray-300 ">
                A minimalist dev Portfolio built using ReactJS and tailwind
                CSS.Implemented Smooth Scrolling.
              </p>
              <div className="flex items-center gap-8">
                <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                  View Live
                </button>
                <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div className=" shadow-md shadow-[grey] rounded-md ">
            <LazyLoadImage
              src="/shopping.jpg"
              className="w-[100%] ml-auto mr-auto "
              alt="shoppingproject"
            ></LazyLoadImage>
            <div className="mt-10 mb-5 mx-2">
              <p className="text-gray-300 ">
                A Shopping Cart built using React Hooks and Context API and Use
                Reducer to manage the state of application. Implemented Filter
                feature that allow user to filter products on various available
                categories.
              </p>
              <div className="flex items-center gap-8">
                {" "}
                <a
                  href="https://rishabhshoppingcart.netlify.app/"
                  target="_blank"
                >
                  <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                    View Live
                  </button>
                </a>
                <a
                  href="https://github.com/rishabhm05/ShoppingCart"
                  target="_blank"
                >
                  {" "}
                  <button className=" bg-[transparent] group flex items-center border-white border-2 px-4 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
