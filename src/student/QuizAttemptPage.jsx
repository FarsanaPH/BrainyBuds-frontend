import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getQuizByIdAPI, submitAttemptAPI } from "../service/allApi";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";

function QuizAttemptPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const student = useSelector((state) => state.student.currentStudent);

  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await getQuizByIdAPI(quizId);
        if (res?.status === 200) {
          setQuiz(res.data);
        }
      } catch (err) {
        console.error("Failed to load quiz", err);
      }
    };
    fetchQuiz();
  }, [quizId]);

  // Date formatter (dd-mm-yyyy)
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr; // fallback if invalid
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async () => {
    if (!quiz) return;

    // Check if all questions are answered
    if (Object.keys(answers).length < quiz.questions.length) {
      toast.error("Please answer all questions before submitting!");
      return;
    }

    // calculate score
    let sc = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) sc++;
    });

    const attemptPayload = {
      quizID: quiz.id,
      quizTitle: quiz.title,
      subject: quiz.subject,  
      teacherName: quiz.teacherName, 
      studentID: student.studentID,
      grade: student.grade,
      score: sc,
      answers: answers,
      total: quiz.questions.length,
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await submitAttemptAPI(attemptPayload);
      if (res?.status === 201) {
        toast.success("Quiz submitted successfully!");
        // Redirect to Review Page
        navigate(`/review/${quizId}`);
      } else {
        toast.error("Failed to save attempt!");
      }
    } catch (err) {
      console.error("Error saving attempt", err);
      toast.error("Server error while saving attempt!");
    }
  };

  if (!quiz) return <p className="p-6 text-lg">Loading quiz...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 px-5 md:px-10 py-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{quiz.title}</h2>
        <button
          onClick={() => navigate(`/day-work/${quiz.scheduledDate.slice(0, 10)}`)}
          className="hidden md:flex items-center text-3xl text-green-600 cursor-pointer font-extrabold"
        >
          <IoChevronBackCircle className="text-5xl text-green-600 rounded-full" />
          Back to Board
        </button>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <FaChalkboardTeacher className="text-xl" /> {quiz.teacherName}
      </div>
      <div className="text-sm text-gray-600 mb-10">
        {quiz.subject} • {formatDate(quiz.scheduledDate)}
      </div>

      {/* Attempt Questions */}
      <div className="md:px-16 lg:px-40">
        <div className="w-full mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
          <h1 className="text-2xl font-extrabold text-amber-300/90 text-center text-shadow-2xs">
            QUIZ TIME
          </h1>
          {quiz.questions.map((q, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-500 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-3">
                Q{idx + 1}. {q.question}
              </h3>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <label
                    key={i}
                    className={`flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-blue-50 ${answers[idx] === opt ? "border-blue-500 bg-blue-50" : ""
                      }`}
                  >
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      value={opt}
                      checked={answers[idx] === opt}
                      onChange={() => setAnswers({ ...answers, [idx]: opt })}
                      className="mr-3 accent-blue-600"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow-md"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizAttemptPage;
