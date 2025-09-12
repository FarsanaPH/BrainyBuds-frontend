import React, { useState } from 'react'
import Footer from './components/Footer';

function AboutPage() {
  const [showAll, setShowAll] = useState(false);
    
  const reviews = [
  {
    id: 1,
    title: "A Game Changer!",
    text:
      "Brainy Buds has completely changed how my son does his homework. He’s excited to log in every day, and I love how easy it is for me to track his progress. Homework time is no longer a struggle!",
    name: "Neha S.",
    role: "Parent",
  },
  {
    id: 2,
    title: "Learning Made Fun",
    text:
      "My daughter used to get bored with assignments, but Brainy Buds makes learning feel like a game. She’s earning badges, finishing tasks quickly, and actually enjoying the process.",
    name: "Ravi K.",
    role: "Parent",
  },
  {
    id: 3,
    title: "Keeps Us Connected",
    text:
      "As a parent, I appreciate how Brainy Buds keeps me in the loop. I can see exactly what my child is working on, how they’re performing, and where they need help. It’s like having a teacher at home.",
    name: "Priya M.",
    role: "Parent",
  },
  {
    id: 4,
    title: "Safe & Easy to Use",
    text:
      "The design is simple and kid-friendly. I don’t have to worry about distractions — the app keeps my child focused on learning in a safe environment.",
    name: "Amit R.",
    role: "Parent",
  },
  {
    id: 5,
    title: "Big Improvement in Confidence",
    text:
      "Since using Brainy Buds, my child has become much more confident with math and reading. The instant feedback helps them learn from mistakes right away.",
    name: "Sonal P.",
    role: "Parent",
  },
];
const visibleReviews = showAll ? reviews : reviews.slice(0, 3);
  return (
    <>
    <div className=" min-h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/001/952/839/original/jungle-cartoon-background-free-vector.jpg')] bg-no-repeat bg-center bg-cover ">
        <div className='flex justify-center p-2'>
    <div className='text-center p-4 text-green-700 font-extrabold text-2xl w-80 font-serif   '>LEARN MORE ABOUT <span className='text-orange-900'> BRAINY BUDS !</span></div>
   
    </div>
    <div className=' w-full p-5 flex justify-center items-center'>
      <div>
      <p className='p-5 text-orange-800  text-center max-w-2xl '>
        We are a passionate team of educators, parents, and developers who believe that learning doesn’t stop at the classroom. Our Homework App is designed to make assignments simpler, smarter, and more enjoyable for every child.
      </p>
      </div>
         
      </div>
       <div className=' flex flex-col items-center md:flex-row gap-4 pb-5 md:justify-evenly'>
      <div class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
  <img class="w-full h-40 object-cover" src="https://img.remediosdigitales.com/455bdc/istock-861749996/1366_2000.jpg" alt="Card image" />
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">  English</h3>
    <p class="text-gray-700 text-sm">
    Power your imagination! Create a custom-built world through reading and language practice. Every correct answer gives students more energy to gather supplies and build up your village.
    </p>
   
  </div>
  </div>
  <div class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
  <img class="w-full h-40 object-cover" src="https://static.vecteezy.com/system/resources/previews/000/381/905/non_2x/kids-learning-math-in-classroom-vector.jpg" alt="Card image" />
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-900 mb-2"> Maths</h3>
    <p class="text-gray-700 text-sm">
      Discover the magic of math! Players embark on a journey filled with quests, battles, spells and rewards. Every battle brings more skill-building math questions for students to solve.
    </p>
   
  </div>
</div>


      

    </div>

   </div>
   <div>
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-green-800">Parents Love Brainy Buds</h2>
          <p className="mt-2 text-sm text-green-700/80 max-w-2xl mx-auto">
            Real feedback from families using our app — fast progress, less stress, and more smiles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((r) => (
            <div>
              <header className="flex items-center gap-4 mb-4">
              
                <div className="h-12 w-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                  {r.name.split(" ")[0][0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">{r.title}</h3>
                  <p className="text-xs text-green-800/80">{r.name} • {r.role}</p>
                </div>
              </header>

              <p className="text-sm text-green-900/95 leading-relaxed">{r.text}</p>

              <footer className="mt-4">
                <div className="inline-flex items-center gap-2 text-xs text-green-700">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5 7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>Verified parent</span>
                </div>
              </footer>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-green-800 text-white px-5 py-2 rounded-full shadow-sm hover:bg-green-900 transition" onClick={() => setShowAll(!showAll)}>
            Read more reviews
          </button>
        </div>
      </div>
    </section>
    
    </div>
    <section class="bg-green-50 py-16">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-green-900 mb-6">
      Meet Our Dedicated Team of Teachers
    </h2>
    <p class="text-green-800/80 max-w-2xl mx-auto mb-12">
      At Brainy Buds, our strength lies in our passionate educators. 
      Each teacher brings years of classroom experience and a love for making 
      learning fun, personalized, and effective for every child.
    </p>

    
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <img
          class="w-24 h-24 mx-auto rounded-full border-4 border-green-200 object-cover"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Teacher"
        />
        <h3 class="mt-4 text-lg font-bold text-green-900">Ms. Anjali</h3>
        <p class="text-sm text-green-700">Math Specialist</p>
        <p class="mt-2 text-xs text-gray-600">
          8+ years of teaching math with interactive methods.
        </p>
      </div>

  
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <img
          class="w-24 h-24 mx-auto rounded-full border-4 border-green-200 object-cover"
          src="https://randomuser.me/api/portraits/men/46.jpg"
          alt="Teacher"
        />
        <h3 class="mt-4 text-lg font-bold text-green-900">Mr. Ravi</h3>
        <p class="text-sm text-green-700">Science Mentor</p>
        <p class="mt-2 text-xs text-gray-600">
          Brings experiments to life with fun activities.
        </p>
      </div>

      
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <img
          class="w-24 h-24 mx-auto rounded-full border-4 border-green-200 object-cover"
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Teacher"
        />
        <h3 class="mt-4 text-lg font-bold text-green-900">Ms. Fatima</h3>
        <p class="text-sm text-green-700">English Guide</p>
        <p class="mt-2 text-xs text-gray-600">
          Focused on reading, writing, and storytelling skills.
        </p>
      </div>

    
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <img
          class="w-24 h-24 mx-auto rounded-full border-4 border-green-200 object-cover"
          src="https://randomuser.me/api/portraits/men/22.jpg"
          alt="Teacher"
        />
        <h3 class="mt-4 text-lg font-bold text-green-900">Mr. Arjun</h3>
        <p class="text-sm text-green-700">Creative Arts Coach</p>
        <p class="mt-2 text-xs text-gray-600">
          Helps kids explore imagination through drawing and music.
        </p>
      </div>
    </div>
  </div>
</section>


<Footer/>

    </>
  )
}

export default AboutPage