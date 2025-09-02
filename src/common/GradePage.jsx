import React from "react";
import { motion } from "framer-motion"; 
import "./GradePage.css";

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
      <div className="container text-center">
        {/* Medium devices (md) only */}
        <div className="d-none d-md-block d-lg-none">
          <div className="row justify-content-center mb-4">
            {boards.slice(0, 3).map((img, index) => (
              <div key={index} className="col-4 d-flex justify-content-center">
                {/* Framer Motion image */}
                <motion.img
                  src={img}
                  alt={`Board ${index + 1}`}
                  className="img-fluid board"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9, rotate: -5 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            ))}
          </div>

          <div className="row justify-content-center mb-4">
            {boards.slice(3, 5).map((img, index) => (
              <div key={index + 3} className="col-4 d-flex justify-content-center">
                <motion.img
                  src={img}
                  alt={`Board ${index + 4}`}
                  className="img-fluid board"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            {boards.slice(5, 8).map((img, index) => (
              <div key={index + 5} className="col-4 d-flex justify-content-center">
                <motion.img
                  src={img}
                  alt={`Board ${index + 6}`}
                  className="img-fluid board"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Small & large screens */}
        <div className="row g-1 d-md-none d-lg-flex">
          {boards.map((img, index) => (
            <div
              key={index}
              className="col-6 col-md-3 d-flex justify-content-center mb-4"
            >
              <motion.img
                src={img}
                alt={`Board ${index + 1}`}
                className="img-fluid board"
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
