import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addParentNoteAPI } from "../service/allApi";
import { IoIosSend } from "react-icons/io";

function ForParentsPage() {
  const teacher = useSelector((s) => s.teacher.currentTeacher);

  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [grade, setGrade] = useState("all");

  const handleSave = async () => {
    if (!note || !date || !grade) return toast.error("Fill all fields!");

    const payload = {
      note,
      date,
      grade,
      teacherID: teacher.teacherID,
      teacherName: teacher.name,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await addParentNoteAPI(payload);
      if (res?.status >= 200 && res.status < 300) {
        toast.success("Note posted for parents!");
        setNote("");
        setDate("");
        setGrade("all");
      } else {
        toast.error("Error posting note!");
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">News and Announcements</h2>

      <textarea
        className="w-full p-3 rounded shadow bg-white text-gray-500 mb-3"
        rows={4}
        placeholder="Write your note for parents..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <div className="flex gap-3 mb-3">
        <input
          type="date"
          className="p-2 rounded shadow bg-white text-gray-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="p-2 rounded shadow bg-white text-gray-500"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="all">All Grades</option>
          {["1","2","3","4","5","6","7","8"].map((g) => (
            <option key={g} value={g}>
              Grade {g}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleSave}
        className="flex items-center gap-1 bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
      >
        Send Note<IoIosSend className="text-xl" />
      </button>
    </div>
  );
}

export default ForParentsPage;
