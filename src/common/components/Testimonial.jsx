import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
  quote: "Brainy Buds has transformed the way my child approaches learning. The interactive activities make her excited to learn every day!",
  author: "— Rhea, Parent"
},
{
  quote: "I love Brainy Buds! The quizzes are super fun and I get to learn new things while playing every single day. It never feels boring. I enjoy it the most!",
  author: "— Vihaan, Student (Age 8)"
},
{
  quote: "The progress reports are amazing! I can clearly see what my child is improving on and where she needs help. Highly recommend Brainy Buds!",
  author: "— Sunita, Parent"
},
{
  quote: "Brainy Buds makes learning feel like an adventure. I enjoy the colorful games and challenges every single weekend, it’s always exciting!",
  author: "— Kabir, Student (Age 10)"
}

  ];

  return (
    <section className="py-15 bg-gradient-to-br from-lime-300 to-green-200">
      <div className="container mx-auto px-15">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt--2 mb-12 text-green-600">Loved by Parents & Kids</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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