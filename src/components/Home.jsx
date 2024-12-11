import React, { useState } from "react";
import img from "../assets/img/feature-section1-dottedrows.png";
import img1 from "../assets/img/ctaImg.png.svg";
import { Link } from "react-router-dom";

function Home() {
  const HandleLinkedinUrl = () => {
    window.open("www.linkedin.com/in/sandeep-modanwal-a8695b209", "_blank");
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row justify-evenly items-center min-h-screen rounded-sm border border-black bg-gren-500 bg-transparent mt-24 m-3 ">
        <div className="flex flex-col gap-4 ml-3">
          <p className="font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-Reddit text-xl mt-6 ">
            Hello !!
          </p>
          <div className=" font-Reddit text-5xl">
            I'm{" "}
            <span className="text-yellow-500 font-Pacifico text-5xl ml-5">
              Sandeep <br />
              Modanwal
            </span>
          </div>

          <div>
            <div className="w-max ">
              <h1
                className="animate-typin overflow-hidden whitespace-nowrap border-r-4
                   border-r-white font-serif font-extrabold text-3xl text-green-700  "
              >
                Web Developer
              </h1>
            </div>
          </div>

          <div className=" font-Reddit ">
            <p>
              I’m dedicated to turning your ideas into functional, and efficient
              web solutions. Whether you’re
              <br /> looking for a sleek, responsive website, a complex web
              application, or anything in between, I <br />
              can bring your vision to life with clean, optimized code and an
              eye for design. <br />
              <span className="font-bold">
                Continue to my website to know about my journey as
                a web developer.
              </span>
            </p>
          </div>

          <div className=" my-6">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/sandeep-modanwal-a8695b209/"
            >
              <button className="bg-transparent hover:bg-blue-500  font-semibold text-blue-500 hover:text-white py-1 px-1 border-2 border-blue-500 hover:border-transparent rounded">
                LinkedIn Profile
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-5 mr-5 mb-5">
          <img src={img1} alt="hero image" />
        </div>
      </div>
    </>
  );
}

export default Home;
