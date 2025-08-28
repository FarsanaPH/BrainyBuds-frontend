import React from "react";

function GradePage() {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: "url('/assets/Page 1.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        paddingBottom: "22vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container text-center">
        <div className="row g-1">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="col-6 col-md-3 d-flex justify-content-center mb-4"
            >
              <img
                src="/assets/class board.png"
                alt="Board"
                className="img-fluid"
                style={{
                  marginTop: "10vw",
                  width: "25vw", // default size
                  maxWidth: "120px", // keeps it from being too large
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradePage;
