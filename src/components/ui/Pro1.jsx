import React from "react";
import GitButton from "./GitButton";

const Pro1 = () => {
  return (
    <div
      className="font-montserrat w-[340px] h-[420px] sm:w-[450px] sm:h-[420px] bg-pink-400 border-4 border-black shadow-[12px_12px_0_0_black] overflow-hidden transition-all duration-300 ease-in-out"

      style={{ transform: "translate(-6px, -6px)" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(0, 0)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translate(-6px, -6px)")}
    >
      <div className="text-black bg-white border-b-4 border-black font-extrabold text-sm h-8 flex items-center px-3">
        ConvoSphere
      </div>
      <div className="px-3 pt-2 text-black font-semibold text-sm">
        Connecting people, sharing moments — your new favorite social hub.
        <br />
        <GitButton linkTo="https://github.com/Sudhanshutiwari-cs/Convosphere" />
      </div>
      <div className="flex flex-col">
        <img
          src="/images/convo.png"
          alt="ConvoSphere"
          className="w-full h-[170px] object-fill mt-2 rounded-lg"
        />
        <div className="flex flex-wrap justify-around items-center m-2 rounded-md border-2 border-black p-2 bg-white shadow-[3px_3px_0_0_black]">
          <img
            src="/images/react.svg"
            alt="React"
            className=" h-[45px] object-cover mt-2"
          />
          <img
            src="/images/node.svg"
            alt="Node JS"
            className=" h-[45px] object-cover mt-2"
          />
          <img
            src="/images/mongo.svg"
            alt="MongoDB"
            className=" h-[45px] object-cover mt-2"
          />
          <img
            src="/images/express.svg"
            alt="Express JS"
            className=" h-[45px] object-cover mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Pro1;
