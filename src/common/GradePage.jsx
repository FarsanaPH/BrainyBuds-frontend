import React, { useState } from "react";
import { motion } from "framer-motion";
import "./GradePage.css";

const GradePage = ({ role, onGradesSelected }) => {
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

  const [selectedGrades, setSelectedGrades] = useState([]);

  const handleClick = (grade) => {
    if (role === "Student") {
      setSelectedGrades([grade]); // only 1 allowed
    } else {
      // Teacher - toggle multiple
      setSelectedGrades((prev) =>
        prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
      );
    }
  };

  return (
    <div className="homepage">
      <h2 className="text-center text-2xl font-bold text-yellow-300 p-7">
        {role === "Student" ? "Select Your Grade" : "Select Grades You Teach"}
      </h2>

      <div className="mx-auto text-center">
        <div className="flex flex-wrap justify-center items-center md:gap-5 lg:flex">
          {boards.map((img, index) => {
            const gradeNum = (index + 1).toString();
            const isSelected = selectedGrades.includes(gradeNum);

            return (
              <div
                key={index}
                className={`w-1/3 lg:w-1/5 flex justify-center items-center md:mb-7 cursor-pointer ${
                  isSelected ? "ring-3 ring-yellow-300 rounded-lg" : ""
                }`}
                onClick={() => handleClick(gradeNum)}
              >
                <motion.img
                  src={img}
                  alt={`Grade ${index + 1}`}
                  className="w-full h-auto m-3  board"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, rotate: index % 2 === 0 ? -5 : 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => onGradesSelected(selectedGrades)}
          className="bg-yellow-500 font-bold text-white px-6 py-2 rounded-lg hover:bg-yellow-600 shadow-md"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default GradePage;
