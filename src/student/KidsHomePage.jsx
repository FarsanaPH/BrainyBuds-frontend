import React from "react";
import { motion } from "framer-motion";
import "./animals.css";

function KidsHomePage() {
  return (
    <div
      id="bg"
      style={{
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        paddingTop: "20vh",
        paddingBottom: "65vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animals */}
      <div>
        <motion.img
          src="/assets/lion.png"
          alt="Zebra"
          id="zebra"
          animate={{  rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/assets/lion2.png"
          alt="Lion"
          id="lion"
          animate={{rotate: [0, 5, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/assets/giraffe.png"
          alt="Giraffe"
          id="Giraffe"
          animate={{ y: [0, -9, 0], rotate: [0, 2, -0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" ,delay:0.5}}
        />
        <motion.img
          src="/assets/elephant.png"
          alt="Elephant"
          id="Elephant"
          animate={{x: [0, -30, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay:0.5 }}
        />

        {/* Wooden Main Board */}
        <motion.img
          src="/assets/grade.png"
          alt="Wooden Stick Board"
          className="absolute"
          id="WoodenBoard"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          whileTap={{ scale: 0.91, rotate: -1, transition: { duration: 0.15, ease: "easeInOut" }, }}
        />

        {/* Day Boards */}
        <div>
          <div >
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day, i) => (
              <motion.img
                key={i}
                src={`/assets/${day}.png`}
                alt={day}
                className="absolute"
                id={`Board${i + 1}`}
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                whileHover={{ scale: 1.065, transition: { duration: 0.15, ease: "easeOut" }, }}
                whileTap={{ scale: 0.9, rotate: i % 2 === 0 ? 5 : -5, transition: { duration: 0.15, ease: "easeInOut" }, }}
              />
            ))}
          </div>
        </div>

        {/* Single Falling Leaf */}
        <motion.img
          src="/assets/leaves effect.png"
          alt="Leaf"
          id="Leaf"
          className="pointer-events-none"
          style={{
            position: "fixed",
            // top: 0,
            left: "5%",
            transform: "translateX(-50%)",
            width: "120px",
            zIndex: 10
          }}
          initial={{ y: "5vh", rotate: 0 }}
          animate={{
            y: "120vh",          // falls down
            x: [0, -30, 30, -20, 20, 0],  // left-right sway
            rotate: [0, 15, -15, 10, -10, 0], // tilt while falling
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default KidsHomePage
