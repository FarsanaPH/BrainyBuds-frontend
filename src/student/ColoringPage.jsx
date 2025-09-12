import React, { useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ColoringPage() {
    const [selectedColor, setSelectedColor] = useState("#ff0000"); // default red
    const colors = ["#ff00b3ff", "#3b77f7ff", "#6bfa2dff", "#ff4133ff", "#fffd69ff", "#000000"];

    const navigate = useNavigate();

    //Only update fill of clicked shape
    const handleColorChange = (e) => {
        e.target.setAttribute("fill", selectedColor);
    };

    return (
        <>
            <span
                onClick={() => {
                    navigate("/kids-homepage")
                }}
                className="absolute top-4 right-6 flex items-center text-3xl text-pink-600  cursor-pointer font-extrabold "
            >
                <IoChevronBackCircle className="text-5xl mr-1 text-pink-600 bg-white/98  rounded-full" />
                BACK
            </span>
            <div className="flex flex-col items-center p-6 bg-yellow-50 min-h-screen">
                <h1 className="text-3xl font-bold mb-3 text-black mt-6">🎨 Kids Coloring Gallery</h1>
                <p className="mb-1 text-gray-600">Click a part of the picture to fill it with the selected color.</p>
                {/* Color Palette */}
                <div className="flex gap-3 mb-8">
                    {colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            style={{ backgroundColor: color }}
                            className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? "border-black scale-110" : "border-gray-400"
                                }`}
                        />
                    ))}
                </div>
                

                {/* SVG Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* 1. Star */}
                    <svg width="250" height="250" viewBox="-100 -100 200 200" className="border-4 border-gray-300 rounded-xl bg-white shadow-md">
                        <g transform="translate(0 5)">
                            <g onClick={handleColorChange}>
                                <polygon points="0,0 36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                                <polygon points="0,0 -36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                            </g>
                            <g transform="rotate(72)" onClick={handleColorChange}>
                                <polygon points="0,0 36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                                <polygon points="0,0 -36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                            </g>
                            <g transform="rotate(-72)" onClick={handleColorChange}>
                                <polygon points="0,0 36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                                <polygon points="0,0 -36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                            </g>
                            <g transform="rotate(144)" onClick={handleColorChange}>
                                <polygon points="0,0 36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                                <polygon points="0,0 -36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                            </g>
                            <g transform="rotate(-144)" onClick={handleColorChange}>
                                <polygon points="0,0 36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                                <polygon points="0,0 -36,-50 0,-100" stroke="black" strokeWidth="2" fill="white" />
                            </g>
                        </g>
                    </svg>

                    {/* 2. Flower */}
                    <svg
                        width="250"
                        height="250"
                        viewBox="0 0 250 250"
                        className="border-4 border-gray-300 rounded-xl bg-white shadow-md"
                    >
                        {/* Center circle */}
                        <circle
                            cx="125"
                            cy="125"
                            r="40"
                            stroke="black"
                            strokeWidth="2"
                            fill="white"
                            onClick={handleColorChange}
                        />

                        {/* Petals (closer, so they merge into flower) */}
                        <circle cx="125" cy="70" r="35" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="175" cy="100" r="35" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="175" cy="150" r="35" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="125" cy="180" r="35" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="75" cy="150" r="35" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="75" cy="100" r="35" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                    </svg>



                    {/* 3. House */}
                    <svg width="250" height="250" viewBox="0 0 200 200" className="border-4 border-gray-300 rounded-xl bg-white shadow-md">
                        <rect x="50" y="80" width="100" height="80" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <polygon points="50,80 150,80 100,40" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <rect x="90" y="120" width="20" height="40" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                    </svg>

                    {/* 4. Fish */}
                    <svg width="250" height="250" viewBox="0 0 200 200" className="border-4 border-gray-300 rounded-xl bg-white shadow-md">
                        <ellipse cx="100" cy="100" rx="60" ry="30" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <polygon points="160,100 190,80 190,120" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="70" cy="95" r="5" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                    </svg>

                    {/* 5. Tree */}
                    <svg width="250" height="250" viewBox="0 0 200 200" className="border-4 border-gray-300 rounded-xl bg-white shadow-md">
                        <rect x="90" y="120" width="20" height="50" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="100" cy="100" r="30" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="80" cy="120" r="25" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="120" cy="120" r="25" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                    </svg>

                    {/* 6. Solar System */}
                    <svg width="250" height="250" viewBox="0 0 200 200" className="border-4 border-gray-300 rounded-xl bg-white shadow-md">
                        {/* Orbits (not colorable) */}
                        <circle cx="100" cy="100" r="40" stroke="black" strokeWidth="1" fill="none" />
                        <circle cx="100" cy="100" r="60" stroke="black" strokeWidth="1" fill="none" />
                        <circle cx="100" cy="100" r="80" stroke="black" strokeWidth="1" fill="none" />

                        {/* Sun */}
                        <circle cx="100" cy="100" r="20" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        {/* Planets */}
                        <circle cx="100" cy="60" r="6" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="100" cy="40" r="8" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                        <circle cx="160" cy="100" r="10" stroke="black" strokeWidth="2" fill="white" onClick={handleColorChange} />
                    </svg>
                </div>

                
            </div>
        </>
    );
}