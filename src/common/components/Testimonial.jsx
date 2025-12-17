import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
  quote: "Brainy Buds has transformed the way my child approaches learning. The interactive activities make her excited to learn every day!",
  author: "— Rhea, Parent"
},
{
  quote: "I love Brainy Buds! The quizzes are super fun and I get to learn new things while playing every single day. It never feels boring. I enjoy it the most!",
  author: "— Vihaan, Student (Grade III)"
},
{
  quote: "Brainy Buds makes learning feel like an adventure. I enjoy the colorful games and challenges every single weekend, it’s always exciting!",
  author: "— Kabir, Student (Grade II)"
}

  ];

  return (
  <section className="py-12 pt-5 md:pt-10 md:pb-30 bg-gradient-to-br from-lime-300 to-green-200">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 className="text-2xl md:pb-10 sm:text-3xl md:text-4xl font-bold text-center mb-10 text-green-700">
      Loved by Parents & Kids 💚
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow 
                 hover:shadow-lg transition-all duration-200"
    >
      <p className="text-green-700 italic mb-6 text-base sm:text-lg leading-relaxed">
        “{testimonial.quote}”
      </p>

      <div>
        <p className="font-semibold text-gray-800">
          {testimonial.author}
        </p>
        <p className="text-gray-500 text-sm">
          {testimonial.location}
        </p>
      </div>
    </div>
  ))}
</div>


  </div>
</section>

  );
};

export default Testimonial;