import React, { useState } from 'react'
import { IoPersonCircle } from 'react-icons/io5';
import { findStudentByIDAPI, findTeacherByIDAPI, loginStudentAPI, loginTeacherAPI, registerStudentAPI, registerTeacherAPI } from '../service/allApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStudent } from '../redux/slices/studentSlice';
import { setTeacher } from '../redux/slices/teacherSlice';
import { toast } from 'react-toastify';

function AuthPage() {
  const [role, setRole] = useState("");
  const [isRegister, setIsRegister] = useState(true);
  const [studentData, setStudentData] = useState({ name: "", studentID: "", password: "", });
  const [teacherData, setTeacherData] = useState({ name: "", teacherID: "", subject: "", password: "" });
  const handleStudentChange = (e) => setStudentData({ ...studentData, [e.target.name]: e.target.value });
  const handleTeacherChange = (e) => setTeacherData({ ...teacherData, [e.target.name]: e.target.value });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (role === "Student") {
        // Register
        if (isRegister) {
          // Optional: prevent duplicate studentID
          const existing = await findStudentByIDAPI(studentData.studentID);
          if (existing?.status === 200 && Array.isArray(existing.data) && existing.data.length > 0) {
            toast.error("Already registered student. Please LOGIN.");
            setIsRegister(false);
            return;
          }

          const res = await registerStudentAPI(studentData);
          if (res?.status >= 200 && res.status < 300) {
            toast.success("Student registration successful! Please LOGIN.");
            setIsRegister(false);
          } else {
            toast.error("Registration failed!");
          }
        } else {  //login
          const res = await loginStudentAPI({ studentID: studentData.studentID, password: studentData.password });
          if (res?.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
            console.log("Login success:", res.data[0]); // <---shows logged-in student details
            const student = res.data[0];
            dispatch(setStudent(student));
            toast.success(`Login successful! Welcome ${student.name}.`);
            navigate("/kids-homepage");
          } else {
            // console.log("Login failed");
            toast.error("Please login with valid student credentials!");
          }
        }

      } else {  //teacher
        // Register
        if (isRegister) {
          // Optional: prevent duplicate teacherID
          const existing = await findTeacherByIDAPI(teacherData.teacherID);
          if (existing?.status === 200 && Array.isArray(existing.data) && existing.data.length > 0) {
            toast.error("Already registered teacher. Please LOGIN.");
            setIsRegister(false);
            return;
          }

          const res = await registerTeacherAPI(teacherData);
          if (res?.status >= 200 && res.status < 300) {
            toast.success("Teacher registration successful! Please LOGIN.");
            setIsRegister(false);
          } else {
            toast.error("Registration failed!");
          }
        } else {  //login
          const res = await loginTeacherAPI({ teacherID: teacherData.teacherID, password: teacherData.password });
          if (res?.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
            console.log("Login success:", res.data[0]); // <---shows logged-in student details
            const teacher = res.data[0];
            dispatch(setTeacher(teacher));
            toast.success(`Login successful! Welcome ${teacher.name}.`);
            navigate("/teachers-homepage");
          } else {
            // console.log("Login failed");
            toast.error("Please login with valid teacher credentials!");
          }
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div
        className={`h-screen bg-cover flex justify-center items-center`}
        style={{
          backgroundImage: !role
            ? "url('/assets/jungle2.jpg')"  // Jungle for role selection
            : "url('/assets/authpage.png')"   // New background when role selected
        }}
      >

        <div className="flex w-[710px] h-130 shadow-lg md:mx-0 mx-4 ">

          {/* STEP 1: Role Selection */}
          {!role ? (
            <div className="w-full text-white p-8 flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold text-yellow-300 mb-6">Choose your Role</h2>
              <div className="flex justify-center gap-6">
                <button
                  onClick={() => setRole("Student")}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 shadow-md"
                >
                  Student
                </button>
                <button
                  onClick={() => setRole("Teacher")}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 shadow-md"
                >
                  Teacher
                </button>
              </div>
            </div>
          ) : (
            /* STEP 2: Auth Form */
            <div className="w-[500px] bg-transparent shadow-lg rounded-2xl p-8 mx-auto">
              <div className="flex justify-center text-7xl text-yellow-500 mb-4">
                <IoPersonCircle />
              </div>
              <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
                {isRegister ? `${role.toUpperCase()} REGISTRATION` : `${role.toUpperCase()} LOGIN`}
              </h2>


              <form onSubmit={handleSubmit} className="space-y-4">
                {isRegister && (
                  <input
                    type="text"
                    name="name"
                    placeholder={`Enter ${role} Name`}
                    className="w-full p-3 bg-white/90 text-gray-700 rounded"
                    onChange={role === "Student" ? handleStudentChange : handleTeacherChange}
                    required
                  />
                )}
                <input
                  type="text"
                  name={role === "Student" ? "studentID" : "teacherID"}
                  placeholder={`Enter ${role} ID`}
                  className="w-full p-3 bg-white/90 text-gray-700 rounded"
                  onChange={role === "Student" ? handleStudentChange : handleTeacherChange}
                  required
                />
                {isRegister && role === "Teacher" && (
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter Subject"
                    className="w-full p-3 bg-white/90 text-gray-700 rounded"
                    onChange={role === "Student" ? handleStudentChange : handleTeacherChange}
                    required
                  />
                )}
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full p-3 bg-white/90 text-gray-700 rounded"
                  onChange={role === "Student" ? handleStudentChange : handleTeacherChange}
                  required
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 shadow-md"
                  >
                    {isRegister ? "REGISTER" : "LOGIN"}
                  </button>
                </div>
                <p className="flex mt-2 justify-center">
                  {isRegister ? "Already Registered?" : "New here?"}
                  <span
                    onClick={() => setIsRegister(!isRegister)}
                    className="text-yellow-900 ml-1 underline cursor-pointer"
                  >
                    {isRegister ? "Login" : "Register"}
                  </span>
                </p>
                <p className="flex mt-2 justify-center">
                  <span
                    onClick={() => { setRole(""); setIsRegister(true); }}
                    className="text-red-700 underline cursor-pointer"
                  >
                    Back to Role Selection
                  </span>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>


    </>
  )
}

export default AuthPage