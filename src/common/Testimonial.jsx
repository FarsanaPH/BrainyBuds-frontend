import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Brainy Buds has made learning so much more fun for my child. The daily quizzes keep her engaged, and I love how easy it is to track her progress. It feels great to be a part of her learning journey",
      author: "— Anita, Parent",
    },
    {
      quote: "I like Brainy Buds because the quizzes are fun and I can play with colors on weekends. It doesn’t feel like homework, it feels like a game!",
      author: "— Aarav, Student (Age 9)"
    }
  ];

  return (
    <section className="py-15 bg-gradient-to-br from-lime-300 to-green-200">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt--2 mb-12 text-green-600">Loved by Parents & Kids</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-lime-50 p-8 rounded-xl shadow-md">
              <p className="text-green-600 italic mb-6 text-lg">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       
    </section>
  );
};

export default Testimonial;