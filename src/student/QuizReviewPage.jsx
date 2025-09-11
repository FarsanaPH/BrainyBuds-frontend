import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizByIdAPI, getAttemptsByStudentAPI } from "../service/allApi";
import { useSelector } from "react-redux";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";

function QuizReviewPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const student = useSelector((s) => s.student.currentStudent);

  const [quiz, setQuiz] = useState(null);
  const [attempt, setAttempt] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizRes = await getQuizByIdAPI(quizId);
        if (quizRes?.status === 200) setQuiz(quizRes.data);

        const attRes = await getAttemptsByStudentAPI(student.studentID);
        if (attRes?.status === 200) {
          const att = attRes.data.find((a) => a.quizID === Number(quizId));
          if (att) setAttempt(att);
        }
      } catch (err) {
        console.error("Failed to fetch review data", err);
      }
    };
    fetchData();
  }, [quizId, student]);

  if (!quiz || !attempt) return <p className="p-6">Loading review…</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 px-10 py-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{quiz.title}</h2>
        <button
          onClick={() => navigate(`/day-work/${quiz.scheduledDate.slice(0, 10)}`)}
          className="flex items-center text-3xl text-green-600 font-extrabold"
        >
          <IoChevronBackCircle className="text-5xl text-green-700 rounded-full" />
          Back to Board
        </button>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <FaChalkboardTeacher className="text-xl" /> {quiz.teacherName}
      </div>
      <div className="text-sm text-gray-600 mb-10">
        {quiz.subject} • {quiz.scheduledDate}
      </div>

      {/* Result Section*/}
      <div className="text-center space-y-4 mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex justify-center">Hurray! Your Result  🎉</h3> 
        <p className="text-lg">
          You scored{" "}
          <span className="font-semibold text-green-600">{attempt.score}</span>{" "}
          out of <span className="font-semibold">{attempt.total}</span>
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-green-500 h-4 rounded-full transition-all"
            style={{
              width: `${(attempt.score / attempt.total) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Review Section */}
      <div className="px-40">
      <div className="w-full mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h3 className="text-xl font-bold text-gray-800">Review Your Answers</h3>

        {quiz.questions.map((q, idx) => {
          const userAns = attempt.answers?.[idx];
          const isCorrect = userAns === q.answer;

          return (
            <div
              key={idx}
              className="p-4 border rounded-xl shadow-sm bg-gray-50"
            >
              <h4 className="font-semibold text-lg mb-3">
                Q{idx + 1}. {q.question}
              </h4>
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  let optionClass = "border-gray-300";
                  if (userAns === opt && isCorrect) {
                    optionClass =
                      "border-green-500 bg-green-100 text-green-800 accent-green-600";
                  } else if (userAns === opt && !isCorrect) {
                    optionClass =
                      "border-red-500 bg-red-100 text-red-800 accent-red-600";
                  } else if (q.answer === opt) {
                    optionClass =
                      "border-green-500 bg-green-50 text-green-700 accent-green-600";
                  }

                  return (
                    <label
                      key={i}
                      className={`flex items-center p-2 border rounded cursor-not-allowed ${optionClass}`}
                    >
                      <input
                        type="radio"
                        readOnly
                        checked={userAns === opt}
                        className="mr-3 bg-green-600"
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>

              {!isCorrect && (
                <p className="mt-2 text-sm text-green-700">
                  ✅ Correct Answer: <b>{q.answer}</b>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center m-6">
        <button
          onClick={() => navigate(`/day-work/${quiz.scheduledDate.slice(0, 10)}`)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md"
        >
          Back to Board
        </button>
      </div>
      </div>
    </div>
  );
}

export default QuizReviewPage;
