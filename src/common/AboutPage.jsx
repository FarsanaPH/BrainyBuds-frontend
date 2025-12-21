import React, { useState } from 'react'
import Footer from './components/Footer';
import { IoChevronBackCircle } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

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
      <div className=" min-h-screen bg-[url('https://i.postimg.cc/R0ffQ1C0/forset-HD-v.png')] bg-no-repeat bg-center bg-cover ">

        {/* Back to Home */}
        <span
          onClick={() => {
            navigate("/")
          }}
          className="hidden absolute top-6 right-6 md:flex items-center text-3xl text-yellow-200  cursor-pointer font-extrabold "
        >
          <IoChevronBackCircle className="text-5xl mr-2 text-yellow-300 bg-white/98  rounded-full" />
          Back to Home
        </span>

        <div className="pt-9 pb-2 flex flex-col items-center">
          <div className="text-center text-green-100 drop-shadow-xl font-extrabold text-3xl ">
            LEARN MORE ABOUT
          </div>
          <div className="text-center text-yellow-100 drop-shadow-xl font-extrabold text-3xl ">
            BRAINY BUDS !
          </div>
        </div>
        <div className=' md:pb-20 w-full  flex justify-center items-center'>
          <div>
            <p className='p-4 text-white drop-shadow-xl  text-center text-lg font-semibold  max-w-4xl  '>
              We are a passionate team of educators, parents, and developers who believe that learning doesn’t stop at the classroom. Our Homework App is designed to make assignments simpler, smarter, and more enjoyable for every child.
            </p>
          </div>

        </div>
        <div className=' flex flex-col items-center md:flex-row gap-4 pb-5 p-3 md:p-0 md:justify-evenly'>
          <div class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            <img class="w-full h-40 object-cover" src="https://static.vecteezy.com/system/resources/previews/000/381/905/non_2x/kids-learning-math-in-classroom-vector.jpg" alt="Card image" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-900 mb-2">Daily Homeworks</h3>
              <p class="text-gray-700 text-sm">
                Power your imagination! Create a custom-built world through reading and language practice. Every correct answer gives students more energy to gather supplies and build up your village.
              </p>

            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            <img
              className="w-full h-40 object-cover"
              src="data:image/jpeg;base64,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"              
              alt="Work Assessments"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                Work Assessments
              </h3>
              <p className="text-gray-700 text-sm">
                Teachers carefully assess and review each student’s work to provide clear
                feedback and guidance. This helps children understand their strengths,
                improve weak areas, and stay motivated to learn better every day.
              </p>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            <img class="w-full h-40 object-fit" src='https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/8-creative-announcement-emails.png' alt="Card image" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-green-900 mb-2">Official Annuoncements</h3>
              <p class="text-gray-700 text-sm">
                Get the official school announcements instantly! Embark on a journey with officials filled with quests, meetings and rewards. Every meeting brings more connection between school authority and parents.
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


      <Footer />

    </>
  )
}

export default AboutPage