import React from "react";
import "./animals.css";

export default function KidsHomePage() {
  return (
    <div
      className="relative w-full h-screen" id="bg"
      style={{
        // backgroundImage: "url('/assets/grade2.png')",
        backgroundSize: "100% 100%",   // stretches both width + height
        backgroundPosition: "center",
        paddingTop:"20vh",
        paddingBottom:"65vh",
        backgroundRepeat: "no-repeat",
      }}
    >


      {/* Animals */}
      <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/assets/lion.png"
        alt="Lion"
        className=""
        id="lion"
      />
      <img
        src="/assets/lion2.png"
        alt="Lion"
        className=""
        id="lion2"
      />
      <img
        src="/assets/giraffe.png"
        alt="Giraffe"
        className=""
        id="Giraffe"
      />
      <img
        src="/assets/elephant.png"
        alt="Elephant"
        className=""
        id="Elephant"
      />
      

      {/* Wooden Boards */}
      
      <img
        src="/assets/grade.png"
        alt="Wooden Stick Board"
        className="absolute"
        id="WoodenBoard"
      />
      <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4">
      <img
        src="/assets/Monday.png"
        alt="Board"
        className="absolute"
        id="Board1"
      />
      <img
        src="/assets/Tuesday.png"
        alt="Board"
        className="absolute"
        id="Board2"
      />
      <img
        src="/assets/Wednesday.png"
        alt="Board"
        className="absolute"
        id="Board3"
      />
      <img
        src="/assets/Thursday.png"
        alt="Board"
        className="absolute"
        id="Board4"
      />
      <img
        src="/assets/Friday.png"
        alt="Board"
        className="absolute"
        id="Board5"
      />
      <img
        src="/assets/Saturday.png"
        alt="Board"
        className="absolute"
        id="Board6"
      />
      <img
        src="/assets/Sunday.png"
        alt="Board"
        className="absolute"
        id="Board7"
      />
      </div>
      </div>
      {/* Leaves */}
      <img
        src="/assets/leaves effect.png"
        alt="Leaves"
        id="Leaves"
        className="absolute"
      />
    </div>
    </div>
  );
}
