import React from "react";
import { motion } from "framer-motion";
import "./GradePage.css"

const GradePage = () => {
  const boards = [
    "/assets/GRADE1.png",
    "/assets/grade2.png",
    "/assets/GRADE3.png",
    "/assets/GRADE4.png",
    "/assets/GRADE5.png",
    "/assets/GRADE6.png",
    "/assets/GRADE7.png",
    "/assets/GRADE8.png",
  ];

  return (
    <div className="homepage">
      <div className="mx-auto text-center">
        <div className="flex flex-wrap justify-center md:gap-1 lg:flex">
          {boards.map((img, index) => (
            <div
              key={index}
              className="w-1/3 lg:w-1/5 flex justify-center mb-4"
            >
              <motion.img
                src={img}
                alt={`Board ${index + 1}`}
                className="w-full h-auto board"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: index % 2 === 0 ? -5 : 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradePage;
