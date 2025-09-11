// src/pages/ManageQuizPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllQuizzesAPI, deleteQuizAPI } from "../service/allApi";
import { toast } from "react-toastify";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

function ManageQuizPage() {
    const [quizzes, setQuizzes] = useState([]);
    const [filteredQuizzes, setFilteredQuizzes] = useState([]);

    const [selectedGrade, setSelectedGrade] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const navigate = useNavigate();

    // Fetch all quizzes
    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async () => {
        try {
            const result = await getAllQuizzesAPI();
            if (result.status === 200) {
                setQuizzes(result.data);
                setFilteredQuizzes(result.data);
            }
        } catch (error) {
            console.error("Error fetching quizzes:", error);
            toast.error("Failed to fetch quizzes");
        }
    };

    // Filtering
    useEffect(() => {
        let filtered = quizzes;

        if (selectedGrade) {
            filtered = filtered.filter((q) => q.grade === selectedGrade);
        }
        if (selectedDate) {
            filtered = filtered.filter((q) => q.scheduledDate === selectedDate);
        }
        if (searchTerm) {
            const lower = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (q) =>
                    q.subject.toLowerCase().includes(lower) ||
                    q.title.toLowerCase().includes(lower)
            );
        }

        setFilteredQuizzes(filtered);
    }, [selectedGrade, selectedDate, searchTerm, quizzes]);

    // Delete quiz
    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const handleDelete = async () => {
        try {
            const result = await deleteQuizAPI(deleteId);
            if (result.status === 200) {
                toast.success("Quiz deleted successfully");
                setQuizzes((prev) => prev.filter((q) => q.id !== deleteId));
            } else {
                toast.error("Failed to delete quiz");
            }
        } catch (error) {
            console.error("Error deleting quiz:", error);
            toast.error("Error deleting quiz");
        } finally {
            setShowModal(false);
            setDeleteId(null);
        }
    };


    // Format date as 10 Sep 2025
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        return new Date(dateStr).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-green-500">Manage Quiz</h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
                {/* Search Filter */}
                <div className="relative w-full md:w-1/3">
                    <IoSearchOutline className="absolute left-3 top-3  text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search by title or subject"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white pl-8 py-2  shadow rounded w-full "
                    />
                </div>
                {/* grade filter */}
                <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="p-2 rounded shadow bg-white text-gray-500"
                >
                    <option value="">All Grades</option>
                    {["1", "2", "3", "4", "5", "6", "7", "8"].map((g) => (
                        <option key={g} value={g}>
                            Grade {g}
                        </option>
                    ))}
                </select>
                {/* date filter */}
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="p-2 rounded shadow bg-white text-gray-500"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-15">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-green-600 text-left text-white">
                            <th className="p-3 border-b">Title</th>
                            <th className="p-3 border-b">Subject</th>
                            <th className="p-3 border-b">Grade</th>
                            <th className="p-3 border-b">Date</th>
                            <th className="p-3 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuizzes.length > 0 ? (
                            filteredQuizzes.map((q, idx) => (
                                <tr
                                    key={q.id}
                                    className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } `}
                                >
                                    <td className="p-3 border-b border-gray-300 font-medium">{q.title}</td>
                                    <td className="p-3 border-b border-gray-300">{q.subject}</td>
                                    <td className="p-3 border-b border-gray-300">Grade {q.grade}</td>
                                    <td className="p-3 border-b border-gray-300">{formatDate(q.scheduledDate)}</td>
                                    <td className="p-3 border-b border-gray-300 text-center">
                                        <div className="flex justify-center gap-3">
                                            <button
                                                onClick={() => navigate(`/edit-quiz/${q.id}`)}
                                                className="px-3 py-1 flex items-center gap-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                            >
                                                <FiEdit /> Edit
                                            </button>
                                            <button
                                                onClick={() => confirmDelete(q.id)}
                                                className="px-3 py-1 flex items-center gap-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                            >
                                                <FiTrash2 /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center p-6 text-gray-500 italic"
                                >
                                    No quizzes found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                {/* modal */}
                {showModal && (
                    <div className="fixed top-4 left-160 bg-transparent z-50">
                        <div className="bg-white rounded-lg shadow-lg w-96 p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
                            <p className="text-gray-600 mb-6">Are you sure you want to delete this quiz? This action cannot be undone.</p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white transition"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ManageQuizPage;
