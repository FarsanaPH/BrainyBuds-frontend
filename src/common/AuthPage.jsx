import React, { useEffect, useState } from "react";
import { IoArrowBackCircleSharp, IoChevronBackCircle, IoPersonCircle } from "react-icons/io5";
import { findStudentByIDAPI, findTeacherByIDAPI, loginStudentAPI, loginTeacherAPI, registerStudentAPI, registerTeacherAPI, } from "../service/allApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutStudent, setStudent } from "../redux/slices/studentSlice";
import { logoutTeacher, setTeacher } from "../redux/slices/teacherSlice";
import { toast } from "react-toastify";
import GradePage from "./GradePage";

function AuthPage() {
  const [step, setStep] = useState(1); // 1 = Role, 2 = GradePage, 3 = AuthForm
  const [role, setRole] = useState("");
  const [grades, setGrades] = useState([]); // selected grade(s)

  const [isRegister, setIsRegister] = useState(true);
  const [studentData, setStudentData] = useState({ name: "", studentID: "", password: "", });
<<<<<<< HEAD
  const [teacherData, setTeacherData] = useState({ name: "", teacherID: "", password: "", });
=======
<<<<<<< HEAD
  const [teacherData, setTeacherData] = useState({ name: "", teacherID: "", subject: "", password: "" });
  const handleStudentChange = (e) => setStudentData({ ...studentData, [e.target.name]: e.target.value });
  const handleTeacherChange = (e) => setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
=======
  const [teacherData, setTeacherData] = useState({ name: "", teacherID: "", password: "", });
>>>>>>> main
>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Clear redux/localstorage if user didn’t logout properly to remove persistence of previous user if not logged out
  useEffect(() => {
    dispatch(logoutStudent());
    dispatch(logoutTeacher());
    localStorage.clear();
  }, [dispatch]);

  // handle grade selection from GradePage
  const handleGradesSelected = (selected) => {
    setGrades(selected);
    setStep(3); // go to Auth form after grade selection
  };

  // RESET helper
  const resetAll = () => {
    setGrades([]);
    setStudentData({ name: "", studentID: "", password: "" });
    setTeacherData({ name: "", teacherID: "", password: "" });
    setIsRegister(true);
  };

  // STEP 1: Role selection
  if (step === 1) {
    return (
      <div className="min-h-screen bg-[url('/assets/jungle2.jpg')] bg-cover flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold pl-3 mb-6 text-yellow-300">Choose your Role</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => { setRole("Student"); setStep(2); }}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 shadow-md"
            >
              Student
            </button>
            <button
              onClick={() => { setRole("Teacher"); setStep(2); }}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 shadow-md"
            >
              Teacher
            </button>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: GradePage
  if (step === 2) {
    return <GradePage role={role} onGradesSelected={handleGradesSelected} />;
  }

  // STEP 3: Auth Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validation
      if (role === "Student" && grades.length === 0) {
        return toast.error("Please select a grade!");
      }
      if (role === "Teacher" && grades.length === 0) {
        return toast.error("Please select at least one grade!");
      }

      if (role === "Student") {
        if (isRegister) {
          // check duplicate studentID
          const existing = await findStudentByIDAPI(studentData.studentID);
          if (existing?.status === 200 && Array.isArray(existing.data) && existing.data.length > 0) {
            toast.error("Already registered student. Please LOGIN.");
            setIsRegister(false);
            return;
          }

          // register
          const payload = { ...studentData, grade: grades[0], role: "Student" };
          const res = await registerStudentAPI(payload);
          if (res?.status >= 200 && res.status < 300) {
            toast.success("Student registration successful! Please LOGIN.");
            setIsRegister(false);
          }
        } else { //login
          const res = await loginStudentAPI({ studentID: studentData.studentID, password: studentData.password });
          if (res?.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
            const student = res.data[0];
            dispatch(setStudent(student));
            toast.success(`Login successful! Welcome ${student.name}.`);
            navigate("/kids-homepage");
          } else {
            toast.error("Please login with valid student credentials!");
          }
        }
      } else { //teacher
        if (isRegister) {
          // check duplicate teacherID
          const existing = await findTeacherByIDAPI(teacherData.teacherID);
          if (existing?.status === 200 && Array.isArray(existing.data) && existing.data.length > 0) {
            toast.error("Already registered teacher. Please LOGIN.");
            setIsRegister(false);
            return;
          }

          // register
          const payload = { ...teacherData, grades, role: "Teacher" };
          const res = await registerTeacherAPI(payload);
          if (res?.status >= 200 && res.status < 300) {
            toast.success("Teacher registration successful! Please LOGIN.");
            setIsRegister(false);
          }
        } else { //login
          const res = await loginTeacherAPI({ teacherID: teacherData.teacherID, password: teacherData.password, });
          if (res?.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
            const teacher = res.data[0];
            dispatch(setTeacher(teacher));
            toast.success(`Login successful! Welcome ${teacher.name}.`);
            navigate("/teachers-homepage");
          } else {
            toast.error("Please login with valid teacher credentials!");
          }
        }
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen  bg-[url('/assets/jungle2.jpg')] bg-cover text-white flex items-center justify-center">
      {/* Back to Role Selection */}
      <span
        onClick={() => {
          resetAll();
          setStep(1);
        }}
        className="absolute top-6 right-6 flex items-center text-3xl text-yellow-300  cursor-pointer font-extrabold "
      >
        <IoChevronBackCircle className="text-5xl mr-2 text-yellow-300 bg-white/98  rounded-full" />
        Back to Role
      </span>
      {/* login and register form */}
      <div className="flex w-[710px] h-125 shadow-lg md:mx-0 mx-4 items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full p-8 bg-white/90 bg-[url('/assets/woodenboard.png')] bg-cover shadow-lg rounded-lg space-y-4"
        >
          <div className="flex justify-center text-7xl  mb-4">
            <IoPersonCircle className="text-yellow-300" />
          </div>

          <h2 className={`text-xl font-bold ${isRegister ? "pt-0" : "pt-5 pb-1"}`}>
            {isRegister ? `${role.toUpperCase()} REGISTRATION` : `${role.toUpperCase()} LOGIN`}
          </h2>

=======
<<<<<<< HEAD
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
=======
    <div className="min-h-screen  bg-[url('/assets/jungle2.jpg')] bg-cover text-white flex items-center justify-center">
      {/* Back to Role Selection */}
      <span
        onClick={() => {
          resetAll();
          setStep(1);
        }}
        className="absolute top-6 right-6 flex items-center text-3xl text-yellow-300  cursor-pointer font-extrabold "
      >
        <IoChevronBackCircle className="text-5xl mr-2 text-yellow-300 bg-white/98  rounded-full" />
        Back to Role
      </span>
      {/* login and register form */}
      <div className="flex w-[710px] h-125 shadow-lg md:mx-0 mx-4 items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full p-8 bg-white/90 bg-[url('/assets/woodenboard.png')] bg-cover shadow-lg rounded-lg space-y-4"
        >
          <div className="flex justify-center text-7xl  mb-4">
            <IoPersonCircle className="text-yellow-300" />
          </div>

          <h2 className={`text-xl font-bold ${isRegister ? "pt-0" : "pt-5 pb-1"}`}>
            {isRegister ? `${role.toUpperCase()} REGISTRATION` : `${role.toUpperCase()} LOGIN`}
          </h2>

>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder={`Enter ${role} Name`}
              className="w-full p-3 bg-white/90 text-gray-700 rounded"
              onChange={(e) =>
                role === "Student" ? setStudentData({ ...studentData, [e.target.name]: e.target.value }) :
                  setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
              }
              required
            />
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc
          )}

          <input
            type="text"
            name={role === "Student" ? "studentID" : "teacherID"}
            placeholder={`Enter ${role} ID`}
            className="w-full p-3 bg-white/90 text-gray-700 rounded"
            onChange={(e) =>
              role === "Student"
                ? setStudentData({ ...studentData, [e.target.name]: e.target.value })
                : setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
            }
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full p-3 bg-white/90 text-gray-700 rounded"
            onChange={(e) =>
              role === "Student"
                ? setStudentData({ ...studentData, [e.target.name]: e.target.value })
                : setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
            }
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-2 mt-5 rounded-lg shadow-md"
            >
              {isRegister ? "REGISTER" : "LOGIN"}
            </button>
          </div>


          <p className="flex justify-center">
            {isRegister ? "Already Registered?" : "New here?"}
            <span
              onClick={() => setIsRegister(!isRegister)}
              className="cursor-pointer text-yellow-800 underline ml-1"
            >
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
