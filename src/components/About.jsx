import React from "react";
import img from "../assets/img/ctaImg.png.svg";
import img1 from "../assets/img/bg_img.png";

function About() {
  return (
    <>
      <div className="mt-24 flex flex-col items-center gap-10 px-6 md:px-20 md:flex-row md:min-h-screen md:justify-evenly">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          {/* Profile Info */}
          <div className="flex font-Garamond flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* <img
              className="w-24 h-24 rounded-full"
              src={img1}
              alt="profile photo"
            /> */}
            <div>
              <p>
                <b>Profile:</b> Web Developer
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-6 w-full">
            <h4 className="font-Garamond font-medium text-2xl mb-4 text-center">
              Skills
            </h4>
            <h4 className="font-Garamond font-normal text-2xl mb-4 rounded-md px-2 py-1 outline border-black border-[0px] inline-block  ">
              Language Skill
            </h4>

            {["JavaScript", "C/C++", "SQL", "Python basic"].map((skill) => (
              <div className="my-3" key={skill}>
                <p className="mb-1">{skill}</p>
                <div className="relative h-2 bg-slate-300 rounded-lg">
                  <div className="absolute top-0 left-0 h-2 bg-yellow-500 rounded-lg w-[98%]"></div>
                </div>
              </div>
            ))}

            <h4 className="font-Garamond font-normal text-2xl mb-4 rounded-md px-2 py-1 outline border-black border-[0px] inline-block ">
              FrameWork
            </h4>

            {["Reactjs ", "Nextjs"].map((skill) => (
              <div className="my-3" key={skill}>
                <p className="mb-1">{skill}</p>
                <div className="relative h-2 bg-slate-300 rounded-lg">
                  <div className="absolute top-0 left-0 h-2 bg-yellow-500 rounded-lg w-[98%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <h1 className="font-Garamond font-extrabold text-3xl mb-4">About</h1>
          <p className="text-justify font-Reddit">
            As a passionate and results-driven web developer, I specialize in
            creating dynamic, user-centric websites and applications. With a
            strong foundation in HTML, CSS, JavaScript, and modern web
            frameworks, I focus on writing clean, efficient code that provides
            seamless user experiences. My expertise extends to both web
            development and programming languages, allowing me to build fully
            integrated, scalable web solutions. Driven by a commitment to
            continuous learning and staying up-to-date with emerging
            technologies, I thrive on solving complex problems and turning
            innovative ideas into functional, aesthetically pleasing digital
            experiences.
          </p>
          <div className="flex font-Garamond flex-col gap-3 mt-6 mb-3">
            <p>
              <b>Profile:</b> Front-End Developer
            </p>
            <p>
              <b>Domain:</b> Web Development
            </p>
            <p>
              <b>Education:</b> Bachelor of Computer Applications
            </p>
            <p>
              <b>Language:</b> English, Hindi
            </p>
            <p>
              <b>Other Skills:</b> Problem-Solving, Technical Proficiency,
              Creativity, Time Management, Adaptability & Attention to detail,
              Observational skills, Knowledge of Web Fundamentals
            </p>
            <p>
              <b>Hobby:</b> Travelling, Coding, Web Designing , Web development,
              Gaming
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
