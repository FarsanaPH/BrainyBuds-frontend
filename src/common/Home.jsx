import React from "react";

const HomePage = () => {
    return (
        <div
            className="bg-cover bg-center mt-1"
            style={{
                backgroundImage: "url('/assets/Page 1.png')",
                height: "800px",   // adjust this value
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="container text-center">

                <div className="row g-1">
                    {[...Array(4)].map((_, index) => (
                        <div className="col-3 d-flex justify-content-center mb-4" key={index}>
                            <img
                                src="/assets/class board.png"
                                alt="Board"
                                style={{ width: "200px", height: "150px", objectFit: "contain", marginTop: "120px" }}
                            />
                        </div>
                    ))}
                </div>


                <div className="row g-1">
                    {[...Array(4)].map((_, index) => (
                        <div className="col-3 d-flex justify-content-center mb-4" key={index}>
                            <img
                                src="/assets/class board.png"
                                alt="Board"
                                style={{ width: "200px", height: "150px", objectFit: "contain" ,marginTop: "-20px" }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HomePage;
