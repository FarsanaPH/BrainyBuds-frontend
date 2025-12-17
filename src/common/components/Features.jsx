import React from 'react';
import './Features.css'
import { useNavigate } from 'react-router-dom';

const Features = () => {

  const navigate = useNavigate();

  const Features = [
    {
      title: "Daily Quizzes",
      description: "Learning becomes exciting with our daily quiz challenges. Each quiz is designed to help students practice what they’ve learned, sharpen their thinking skills, and build confidence step by step. With fun and interactive questions, kids stay motivated while enjoying the process of learning every day or all age groups.",
      image: "/assets/quiz.png"
    },
    {
      title: "Creative Coloring Space",
      description: " Weekends and off-days are for creativity! Our online coloring space allows children to relax, play with colors, and express their imagination in a safe digital environment. It’s a fun break from academics that helps spark creativity, improve focus, and develop artistic skills while keeping kids engaged.",
      image: "/assets/cartoon.png"
    },
    {
      title: "Parent Progress Review",
      description: "Parents play an important role in a child’s learning journey, and our platform makes it easy for them to stay connected. After each quiz, parents can review their child’s scores, track progress over time, and get valuable insights into areas of strength and improvement. This ensures that learning continues both in and out of the classroom.",
      image: "/assets/review.png"
    }
  ];

  return (
    <section className="py-5 bg-gradient-to-br from-green-200 to-lime-300">

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-5 md:py-16">

        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-20">
          <div className="mb-2"> 
            <img
              src="/assets/name.png"
              alt="landing"
              className="w-3/4 object-contain"
            />
          </div>

          <p className="text-xl text-gray-700 font-bold leading-relaxed">
            "Where every child learns, plays, and grows with joy."
          </p><br />
          <p className=" text-base text-gray-700 font-semibold leading-relaxed">Brainy Buds makes learning fun and interactive with daily quizzes, creative coloring activities, and progress tracking for parents — helping kids learn, play, and grow every day.</p>

          <button onClick={() => navigate("/about")}
            className="bg-gradient-to-r from-pink-300 to-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-6"
          >
            Know About Us
          </button>
        </div>


        {/* Side Image */}
        <div className="md:w-1/2 relative h-80 md:h-96 rounded">
          <img
            src="/assets/Logo.png"
            alt="landing"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 pb-10 md:pb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-16 text-green-500">
          Discover the Brainy Buds Experience
        </h2>

        {Features.map((item, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-5 md:mb-18`}>
            {/* Text Content */}
            <div className="md:w-1/2 p-6 pb-5 md:pb-0 ">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 italic  md:mb-3">
                {item.title}
              </h3>
              <p className="text-green-800 text-lg">
                {item.description}
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 md:p-6 px-6 flex justify-center">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="landing-page-container">
        {/* Second Background Section */}
        <div className="background-section second-section">
          {/* img placed in feature.css */}
        </div>
      </div>
    </section>

  );
};

export default Features;