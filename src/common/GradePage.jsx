import React from "react";
import "./GradePage.css";

<<<<<<< HEAD:src/common/Home.jsx
const HomePage = () => {
    const boards = [...Array(8)];

    return (
        <div className="homepage">
            <div className="container text-center">

                <div className="d-none d-md-block d-lg-none">
                    <div className="row justify-content-center mb-4">
                        {boards.slice(0, 3).map((_, index) => (
                            <div key={index} className="col-4 d-flex justify-content-center">
                                <img src="/assets/class board.png" alt="Board" className="img-fluid board" />
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center mb-4">
                        {boards.slice(3, 5).map((_, index) => (
                            <div key={index + 3} className="col-4 d-flex justify-content-center">
                                <img src="/assets/class board.png" alt="Board" className="img-fluid board" />
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center">
                        {boards.slice(5, 8).map((_, index) => (
                            <div key={index + 5} className="col-4 d-flex justify-content-center">
                                <img src="/assets/class board.png" alt="Board" className="img-fluid board" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row g-1 d-md-none d-lg-flex">
                    {boards.map((_, index) => (
                        <div
                            key={index}
                            className="col-6 col-md-3 d-flex justify-content-center mb-4"
                        >
                            <img
                                src="/assets/class board.png"
                                alt="Board"
                                className="img-fluid board"
                            />
                        </div>
                    ))}
                </div>
=======
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
>>>>>>> e559200857c9cce3b8acbf54892737051b708338:src/common/GradePage.jsx
            </div>
        </div>
    );
};

export default GradePage;
