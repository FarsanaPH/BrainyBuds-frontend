// src/pages/teacher/SubmissionsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { getAttemptsByQuizAPI, getStudentsByGradeAPI } from "../service/allApi";

function SubmissionsPage() {
    const { quizId } = useParams();
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // get all attempts for this quiz
                const attRes = await getAttemptsByQuizAPI(quizId);
                if (attRes?.status === 200) setAttempts(attRes.data);

                // get all students of the grade
                if (attRes?.status === 200 && attRes.data.length > 0) {
                    const grade = attRes.data[0].grade;
                    const stuRes = await getStudentsByGradeAPI(grade);
                    if (stuRes?.status === 200) setStudents(stuRes.data);
                }
            } catch (err) {
                console.error("Error fetching submissions", err);
            }
        };
        fetchData();
    }, [quizId]);

    const getStudentAttempt = (studentID) =>
        attempts.find((a) => a.studentID === studentID && a.quizID == quizId);

    return (
        <div className="md:p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="px-12 py-2.5 md:px-0 md:py-0 text-2xl font-bold text-green-600">Submissions</h2>
                <button
                    onClick={() => navigate("/manage-quiz")}
                    className="hidden md:flex items-center text-lg gap-1 text-black"
                >
                    <IoChevronBack size={22} /> Back
                </button>
            </div>

            <div className="space-y-3 px-4 md:px-0" >
                {/* Table */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-green-600 text-white text-left">
                                <th className="p-3 border-b">Sl. No</th>
                                <th className="p-3 border-b">Student ID</th>
                                <th className="p-3 border-b">Student Name</th>
                                <th className="p-3 border-b">Score</th>
                                <th className="p-3 border-b">Status</th>
                                {/* <th className="p-3 border-b">Review</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {students.length > 0 ? (
                                students.map((stu, idx) => {
                                    const attempt = getStudentAttempt(stu.studentID);
                                    return (
                                        <tr key={stu.studentID} className={` ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                            <td className="p-3 border-b">{idx + 1}</td>
                                            <td className="p-3 border-b">{stu.studentID}</td>
                                            <td className="p-3 border-b">{stu.name}</td>
                                            <td className="p-3 border-b">
                                                {attempt ? `${attempt.score}/${attempt.total}` : "-"}
                                            </td>
                                            <td className="p-3 border-b">
                                                {attempt ? (
                                                    <span className="text-green-600 font-semibold">Submitted</span>
                                                ) : (
                                                    <span className="text-red-600 font-semibold">Not Submitted</span>
                                                )}
                                            </td>
                                            {/* <td className="p-3 border-b">
                                            {attempt ? (
                                                <button
                                                    onClick={() => navigate(`/teacher-review/${quizId}?student=${stu.studentID}`)} 
                                                    className=" text-blue-600  hover:underline "
                                                >
                                                    Review
                                                </button>
                                            ) : (
                                                <span className="text-gray-400 italic">Nil</span>
                                            )}
                                        </td> */}
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center p-6 text-gray-500 italic">
                                        No students found
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SubmissionsPage;
