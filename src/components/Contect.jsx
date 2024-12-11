import React from "react";
import img from "../assets/img/Address.png";
import img1 from "../assets/img/contact.png";
import img2 from "../assets/img/emailaddress.svg";
import img3 from "../assets/img/download.png";
import { MapPin } from "lucide-react";

function Contect() {
  return (
    <>
      <div className="mt-24  h-screen  flex flex-col mb-9  ">
        <div className=" text-center ">
          <h1 className=" font-extrabold text-5xl mb-5 font-Reddit ">
            Contact Me
          </h1>
          <p className="font-Arapey">
            Below are the details to reach out to me!
          </p>
        </div>

        <div className="flex flex-col  items-center m-auto justify-cente md:flex-row md:justify-around gap-y-5 md:mt-12 mb-4">
          <div className="text-center  flex  flex-col items-center md:ml-8 md:mr-8">
            <MapPin
              size="100"
              className="bg-gradient-to-t from-blue-500 to-teal-400"
            />
            <p className="font-Arapey text-2xl">Address</p>
            <p className="font-Titillium">Akbarpur Amberdkar nagar</p>
          </div>
          <div className="text-center flex  flex-col items-center md:ml-8 md:mr-8">
            <img src={img1} alt="Contact" width="100" height="100" />
            <p className="font-Arapey text-2xl">Contact</p>
            <p className="font-Titillium">9580221174</p>
          </div>
          <div className="text-center flex  flex-col items-center md:ml-8 md:mr-8">
            <img src={img2} alt="Email" width="100" height="100" />
            <p className="font-Arapey text-2xl">Email</p>
            <p className="font-Titillium">Sandeepmodanwal479@gmail.com</p>
          </div>
          <div className=" flex  flex-col items-center md:ml-8 md:mr-8">
            <img src={img3} alt="Dowanload" width="100" height="100" />
            <p className="font-Arapey text-2xl">DOWNLOAD RESUME</p>
            <p className="font-Titillium hover:text-blue-600 hover:underline">
              resume link
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
