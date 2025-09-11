import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getQuizzesByDateAndGradeAPI, getAttemptsByStudentAPI } from "../service/allApi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineDownloadDone, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoChevronBackCircle } from "react-icons/io5";
import { TbCalendarSmile } from "react-icons/tb";

function DayWorksPage() {
  const { dateISO } = useParams();
  const navigate = useNavigate();
  const student = useSelector((s) => s.student.currentStudent);

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuizzes = useCallback(async () => {
    if (!student?.grade) return;
    setLoading(true);
    try {
      const quizRes = await getQuizzesByDateAndGradeAPI(dateISO, student.grade.toString());
      const attemptRes = await getAttemptsByStudentAPI(student.studentID);
      const attempts = attemptRes?.status === 200 ? attemptRes.data : [];

      const merged =
        quizRes?.status === 200
          ? quizRes.data.map((q) => {
            const att = attempts.find((a) => a.quizID === q.id);
            return att ? { ...q, attempted: true, score: att.score, total: att.total } : q;
          })
          : [];

      setQuizzes(merged);
    } catch (err) {
      console.error(err);
      setQuizzes([]);
    } finally {
      setLoading(false);
    }
  }, [student, dateISO]);

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  // Format date same style as you want
  const dayDisplay = new Date(dateISO).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const weekday = new Date(dateISO).toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl flex font-bold text-gray-800">
          <TbCalendarSmile className="text-3xl text-yellow-600 mr-1" />
          {weekday} -{dayDisplay}
        </h2>
        <button
          onClick={() => navigate("/kids-homepage")}
          className="flex items-center text-3xl text-green-600 cursor-pointer font-extrabold"
        >
          <IoChevronBackCircle className="text-5xl text-green-700 rounded-full" />
          Back to Home
        </button>
      </div>

      {/* Work */}
      <div className="px-40">
        <div className="w-full mx-auto bg-white rounded shadow p-6 mt-9">
          {/* heading date */}
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-5">
           {weekday} -{dayDisplay}
        </h2> */}
          {loading ? (
            <p>Loading…</p>
          ) : quizzes.length === 0 ? (
            <p>No homework for this day.</p>
          ) : (
            quizzes.map((q) => (
              <div key={q.id} className="border border-gray-300 bg-gray-50 shadow p-4 mb-4 rounded ">

                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold">{q.title}</h4>
                  <p className="flex items-center gap-1 text-sm text-gray-600">
                    <FaChalkboardTeacher /> {q.teacherName}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mb-2">{q.subject}</p>

                {q.attempted ? (
                  <div className="mt-2 bg-green-50 p-2 rounded border border-green-300">
                    <div className="flex justify-between items-center">
                      <p className="flex items-center gap-1 text-green-700 font-medium">
                        Attempted <MdOutlineDownloadDone />
                      </p>
                      <button
                        onClick={() => navigate(`/review/${q.id}`)}
                        className="flex items-center gap-1 text-gray-900"
                      >
                        Review <MdOutlineRemoveRedEye className="text-xl mt-1" />
                      </button>
                    </div>
                    <p className="text-gray-600 mt-1">
                      Score: <span className="font-semibold">{q.score} out of {q.total}</span>
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => navigate(`/attempt/${q.id}`)}
                    className="bg-green-600 text-white px-3 py-1 rounded mt-2"
                  >
                    Attempt
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DayWorksPage;
