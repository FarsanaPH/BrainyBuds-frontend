import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function ReviewPage() {
  const { quizId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get studentID from query param
  const query = new URLSearchParams(location.search);
  const studentID = query.get("student");

  const [submission, setSubmission] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [studentName, setStudentName] = useState("");

  // Fetch submission
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1️⃣ Fetch submission
        const subRes = await fetch(`http://localhost:3000/submissions?quizID=${quizId}&studentID=${studentID}`);
        const subData = await subRes.json();
        if (subData.length > 0) {
          setSubmission(subData[0]);
        }

        // 2️⃣ Fetch quiz details
        const quizRes = await fetch(`http://localhost:3000/quizzes/${quizId}`);
        const quizData = await quizRes.json();
        setQuiz(quizData);

        // 3️⃣ Fetch student name
        const stuRes = await fetch(`http://localhost:3000/students?studentID=${studentID}`);
        const stuData = await stuRes.json();
        if (stuData.length > 0) setStudentName(stuData[0].name);
      } catch (err) {
        console.error("Error fetching review data:", err);
      }
    };

    if (studentID) fetchData();
  }, [quizId, studentID]);

  if (!submission || !quiz) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-600">
          Review: {quiz.title}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-lg gap-1 text-black"
        >
          Back
        </button>
      </div>

      <div className="mb-4">
        <p>
          <strong>Student:</strong> {studentName}
        </p>
        <p>
          <strong>Score:</strong> {submission.score} / {submission.total}
        </p>
      </div>

      {/* Questions & Answers */}
      <div className="bg-white shadow rounded p-4">
        {quiz.questions.map((q, idx) => {
          const studentAnswer = submission.answers[idx];
          const isCorrect = studentAnswer === q.answer;
          return (
            <div
              key={q.id}
              className="mb-4 p-3 border rounded bg-gray-50"
            >
              <p className="font-semibold">
                Q{idx + 1}: {q.question}
              </p>
              <p>
                <strong>Student Answer:</strong>{" "}
                <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                  {studentAnswer || "Not Answered"}
                </span>
              </p>
              {!isCorrect && (
                <p>
                  <strong>Correct Answer:</strong> {q.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewPage;
