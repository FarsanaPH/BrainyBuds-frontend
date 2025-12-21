import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getQuizByIdAPI, updateQuizAPI } from "../service/allApi";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";
import { IoChevronBack } from "react-icons/io5";

function EditQuizPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const teacher = useSelector((s) => s.teacher.currentTeacher);

  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [questions, setQuestions] = useState([]);

  // Fetch quiz on mount
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await getQuizByIdAPI(quizId);
        if (res?.status === 200) {
          const q = res.data;
          setTitle(q.title);
          setGrade(q.grade);
          setSubject(q.subject);
          setScheduledDate(q.scheduledDate);
          setQuestions(q.questions || []);
        } else {
          toast.error("Failed to load quiz");
          navigate("/manage-quizzes");
        }
      } catch (err) {
        toast.error("Server error while loading quiz");
        navigate("/manage-quizzes");
      }
    };
    fetchQuiz();
  }, [quizId, navigate]);

  const addQuestion = () =>
    setQuestions((qs) => [
      ...qs,
      { id: Date.now(), question: "", options: ["", "", "", ""], answer: "" },
    ]);

  const updateQuestion = (idx, field, value) => {
    setQuestions((qs) =>
      qs.map((q, i) => (i === idx ? { ...q, [field]: value } : q))
    );
  };

  const updateOption = (qidx, optIdx, value) => {
    setQuestions((qs) =>
      qs.map((q, i) =>
        i === qidx
          ? { ...q, options: q.options.map((o, oi) => (oi === optIdx ? value : o)) }
          : q
      )
    );
  };

  const handleUpdate = async () => {
    if (!title || !grade || !subject || !scheduledDate)
      return toast.error("Fill title, grade, subject and date");

    for (const q of questions) {
      if (!q.question || q.options.some((o) => !o) || !q.answer)
        return toast.error("Complete all questions and mark answers");
    }

    const payload = {
      title,
      grade,
      subject,
      scheduledDate,
      questions,
      teacherID: teacher.teacherID,
      teacherName: teacher.name,
      updatedAt: new Date().toISOString(),
    };

    try {
      const res = await updateQuizAPI(quizId, payload);
      if (res?.status >= 200 && res.status < 300) {
        toast.success("Quiz updated successfully!");
        navigate("/manage-quiz");
      } else {
        toast.error("Error while updating quiz!");
      }
    } catch (err) {
      toast.error("Server error while updating quiz!");
    }
  };

  return (
    <div className="md:p-6  pb-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="px-12 py-2.5 md:px-0 md:py-0 text-2xl font-bold text-green-600">Edit Quiz</h2>
        <button
          onClick={() => navigate("/manage-quiz")}
          className="hidden md:flex items-center text-lg gap-1 text-black"
        >
          <IoChevronBack size={22} /> Back
        </button>
      </div>

      <div className="space-y-3 px-4 md:px-0">
        <input
          className="p-2 w-full rounded shadow bg-white text-gray-500"
          placeholder="Enter Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="p-2 rounded shadow bg-white text-gray-500"
          >
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((g) => (
              <option key={g} value={g}>
                Grade {g}
              </option>
            ))}
          </select>

          <input
            className="p-2 rounded shadow bg-white text-gray-500"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <input
            type="date"
            className="p-2 rounded shadow bg-white text-gray-500"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
          />
        </div>

        <div >
          <h3 className="font-semibold text-lg mt-8 text-gray-500">Questions</h3>
          {questions.map((q, idx) => (
            <div key={q.id} className=" bg-white p-5 rounded-lg shadow my-3">
              <div
                onClick={() =>
                  setQuestions((qs) => qs.filter((_, i) => i !== idx))
                }
                className="flex justify-end mb-1 text-3xl text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                <TiDelete />
              </div>

              <input
                className="w-full p-2 border mb-2 rounded bg-gray-50 "
                placeholder={`Q${idx + 1}`}
                value={q.question}
                onChange={(e) => updateQuestion(idx, "question", e.target.value)}
              />

              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, oi) => (
                  <input
                    key={oi}
                    className="p-2 border rounded bg-gray-50"
                    placeholder={`Option ${oi + 1}`}
                    value={opt}
                    onChange={(e) => updateOption(idx, oi, e.target.value)}
                  />
                ))}
              </div>

              <select
                className="mt-2 p-2 border bg-gray-50 rounded w-full text-gray-500"
                value={q.answer}
                onChange={(e) => updateQuestion(idx, "answer", e.target.value)}
              >
                <option value="">Select correct answer</option>
                {q.options.map((opt, oi) => (
                  <option key={oi} value={opt}>
                    {opt || `Option ${oi + 1}`}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div className="flex gap-3 mt-6 mb-23 md:mb-0">
            <button
              type="button"
              onClick={addQuestion}
              className="bg-amber-400/90 text-white px-4 py-2 rounded shadow hover:bg-amber-500/85"
            >
              + Add Question
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
            >
              Update Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditQuizPage;
