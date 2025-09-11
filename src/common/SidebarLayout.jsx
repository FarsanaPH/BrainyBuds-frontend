import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdManageSearch, MdOutlineDashboardCustomize, MdGroups } from "react-icons/md";
import { HiCreditCard } from "react-icons/hi";
import { logoutStudent } from "../redux/slices/studentSlice";
import { logoutTeacher } from "../redux/slices/teacherSlice";
import { BiSolidLayer } from "react-icons/bi";

function SidebarLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const student = useSelector((state) => state.student.currentStudent);
    const teacher = useSelector((state) => state.teacher.currentTeacher);

    // If student logs in then → only student have value in useSelector - teacher is null. sameapply if for teacher logs in 
    const role = student?.role || teacher?.role || "";
    const userName = student?.name || teacher?.name || "";

    console.log("student:", student);
    console.log("teacher:", teacher);
    console.log("role:", role);
    const studentMenu = [
        { to: "/parents-dashboard", label: "Parent Dashboard", icon: MdOutlineDashboardCustomize },
        { to: "/kids-homepage", label: "Homeworks", icon: HiCreditCard },
    ];

    const teacherMenu = [
        // { to: "/teachers-homepage", label: "Manage Students", icon: MdOutlineDashboardCustomize },
        { to: "/for-parents", label: "For Parents", icon: MdGroups },
        { to: "/manage-quiz", label: "Manage Quiz", icon: BiSolidLayer },
        { to: "/create-quiz", label: "Create Quiz", icon: MdManageSearch },
    ];

    const menu = role === "Student" ? studentMenu : role === "Teacher" ? teacherMenu : [];
    const handleLogout = () => {
        role === "Student" ? dispatch(logoutStudent()) : dispatch(logoutTeacher())
        localStorage.clear(); //or  localStorage.removeItem("reduxState"); ----removing stored reduxState in localStorage
        navigate("/");
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={` fixed inset-y-0 left-0 transform bg-green-950 text-white w-56 flex flex-col transition-transform duration-300 z-50
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}>

                {/* Logo */}
                <div className="flex items-center justify-start text-2xl font-bold pt-6 px-2">
                    {/* <PiEyesFill /> */}
                    <h1 className="ml-1">BrainyBuds</h1>
                </div>
                <p className="px-3 pb-10 text-gray-200">Have a good day, {userName}! </p>

                {/* Dynamic Menu */}
                <nav className="flex-1">
                    {menu.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}

                            className={({ isActive }) =>
                                `w-full px-6 py-3 flex items-center ${isActive ? "bg-green-600" : "hover:bg-green-700"}`
                            }
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <item.icon className="mr-2 text-3xl" />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Logout */}
                <button
                    className="m-6 px-3 py-2 flex items-center justify-center bg-white text-red-700 rounded hover:bg-gray-200"
                    onClick={handleLogout}
                >
                    Logout <FiLogOut className="ml-2 " />
                </button>
            </div>

            {/* close when touch outside sidebar (mobile only) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto relative">
                {/* Toggle bar for mobile */}
                <button
                    className="absolute top-4  left-4 text-yellow-900 md:hidden"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <GiHamburgerMenu size={24} />
                </button>

                {/* Outlet without extra padding */}
                <div className="w-full h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SidebarLayout;
