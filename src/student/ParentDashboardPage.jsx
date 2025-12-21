import React, { useEffect, useState } from "react";
import { getParentNotesAPI } from "../service/allApi";
import { useSelector } from "react-redux";
import { div } from "framer-motion/client";

function ParentDashboardPage() {
  const student = useSelector((s) => s.student.currentStudent);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await getParentNotesAPI();
      if (res?.status === 200) {
        const allNotes = res.data;

        // Filter notes for grade or "all"
        const filtered = allNotes.filter(
          (n) => n.grade === "all" || n.grade === student.grade
        );

        // Sort by date descending (latest first)
        filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setNotes(filtered);
      }
    };
    fetchNotes();
  }, [student.grade]);

  // Helper to format date
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="md:p-6">
      <h2 className="px-12 py-3 md:px-0 md:py-0 text-xl font-bold text-green-600 mb-4">Get Daily Updates</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500 px-4 md:px-0">No updates yet.</p>
      ) : (
        <ul className="space-y-3 px-4 md:px-0">
          {notes.map((n, i) => (
            <li key={i} className="bg-white shadow p-3 rounded">
              <p className="text-sm text-gray-500">
                Date: {formatDate(n.date)}
                <br />
                  From: {n.teacherName}
              </p>
              <p className="font-semibold text-gray-700 mt-2">{n.note}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default ParentDashboardPage;
