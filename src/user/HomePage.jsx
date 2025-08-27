import React from "react";
import "./animals.css";

export default function KidsHomePage() {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: "url('/assets/grade2.png')",
        backgroundSize: "100% 100%",   // stretches both width + height
        backgroundPosition: "center",
        paddingTop:"120px",
        paddingBottom:"370px",
        backgroundRepeat: "no-repeat",
      }}
    >


      {/* Animals */}
      <img
        src="/assets/lion.png"
        alt="Lion"
        className="absolute"
        id="lion"
      />
      <img
        src="/assets/giraffe.png"
        alt="Giraffe"
        className="absolute"
        id="Giraffe"
      />
      <img
        src="/assets/elephant.png"
        alt="Elephant"
        className="absolute"
        id="Elephant"
      />

      {/* Wooden Boards */}
      <img
        src="/assets/grade.png"
        alt="Wooden Stick Board"
        className="absolute"
        id="WoodenBoard"
      />
      <img
        src="/assets/day board.png"
        alt="Board"
        className="absolute"
        id="Board1"
      />
      <img
        src="/assets/day board.png"
        alt="Board"
        className="absolute"
        id="Board2"
      />
      <img
        src="/assets/day board.png"
        alt="Board"
        className="absolute"
        id="Board3"
      />
      <img
        src="/assets/day board.png"
        alt="Board"
        className="absolute"
        id="Board4"
      />
      <img
        src="/assets/day board.png"
        alt="Board"
        className="absolute"
        id="Board5"
      />
      <img
        src="/assets/day board.png"
        alt="Board"
        className="absolute"
        id="Board6"
      />
      <img
        src="/assets/day board.png"
        alt="Board"
        className="absolute"
        id="Board7"
      />
      {/* Leaves */}
      <img
        src="/assets/leaves effect.png"
        alt="Leaves"
        id="Leaves"
        className="absolute"
      />
    </div>
  );
}
