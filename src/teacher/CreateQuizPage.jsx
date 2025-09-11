import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuizAPI } from "../service/allApi";
import { addQuiz } from "../redux/slices/quizSlice";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";

function CreateQuizPage() {
  const teacher = useSelector((s) => s.teacher.currentTeacher);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(teacher?.grades?.[0] || "1");
  const [subject, setSubject] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [questions, setQuestions] = useState([
    { id: 1, question: "", options: ["", "", "", ""], answer: "" },
  ]);

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

  const handleCreate = async () => {
    if (!title || !grade || !subject || !scheduledDate)
      return toast.error("Fill title, grade, subject and date");

    // validate questions
    for (const q of questions) {
      if (!q.question || q.options.some((o) => !o) || !q.answer)
        return toast.error("Complete all questions and mark answers");
    }

    const payload = {
      title,
      grade,
      teacherID: teacher.teacherID,
      teacherName: teacher.name,
      subject,
      scheduledDate,
      questions,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await addQuizAPI(payload);
      if (res?.status >= 200 && res.status < 300) {
        dispatch(addQuiz(res.data)); // update redux
        toast.success("Quiz created successfully!");

        // reset form
        setTitle("");
        setSubject("");
        setScheduledDate("");
        setQuestions([
          { id: 1, question: "", options: ["", "", "", ""], answer: "" },
        ]);
      } else {
        toast.error("Error while saving quiz!");
      }
    } catch (err) {
      toast.error("Server error while creating quiz!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 font-bold text-green-500">Create Quiz</h2>
      <div className="space-y-3">
        <input
          className="p-2 w-full rounded shadow bg-white text-gray-500"
          placeholder="Enter Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex gap-2">
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

        <div>
          <h3 className="font-semibold text-lg mt-8 text-gray-500">Questions</h3>
          {/* each question card */}
          {questions.map((q, idx) => (
            <div key={q.id} className=" bg-white p-4 rounded-lg shadow my-3">
              {/* Delete Icon */}
              <div
                type="button"
                onClick={() =>
                  setQuestions((qs) => qs.filter((_, i) => i !== idx))
                }
                className="flex justify-end mb-1 text-3xl text-gray-500 hover:text-gray-900"
              >
                <TiDelete />
              </div>

              <input
                className="w-full p-2 border mb-2"
                placeholder={`Q${idx + 1}`}
                value={q.question}
                onChange={(e) => updateQuestion(idx, "question", e.target.value)}
              />

              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, oi) => (
                  <input
                    key={oi}
                    className="p-2 border"
                    placeholder={`Option ${oi + 1}`}
                    value={opt}
                    onChange={(e) => updateOption(idx, oi, e.target.value)}
                  />
                ))}
              </div>

              <select
                className="mt-2 p-2 border w-full text-gray-500"
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


          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={addQuestion}
              className="bg-amber-400/90 text-white px-4 py-2 rounded shadow hover:bg-amber-500/85"
            >
              + Add Question
            </button>
            <button
              type="button"
              onClick={handleCreate}
              className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
            >
              Save Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuizPage;
