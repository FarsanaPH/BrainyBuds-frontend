import React from "react";
import "./HomePage.css";

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
            </div>
        </div>
    );
};

export default HomePage;
