import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            toast.error("Please fill out all fields before submitting!");
            return;
        }

        toast.success("Feedback sent successfully!");

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative"
                style={{
                    backgroundImage:
                        "url('https://i.postimg.cc/R0ffQ1C0/forset-HD-v.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Toast Container */}
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    newestOnTop={true}
                    closeOnClick
                    pauseOnHover
                    draggable
                    style={{ zIndex: 99999 }}
                />

                {/* Back to Home */}
                <span
                    onClick={() => {
                        navigate("/")
                    }}
                    className="hidden absolute top-6 right-6 md:flex items-center text-3xl text-yellow-200  cursor-pointer font-extrabold "
                >
                    <IoChevronBackCircle className="text-5xl mr-2 text-yellow-300 bg-white/98  rounded-full" />
                    Back to Home
                </span>

                <div className="max-w-6xl w-full">
                    <h1 className="text-5xl md:pt-10 font-bold text-center text-green-100 drop-shadow-xl mb-4 flex items-center justify-center gap-3">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5906/5906405.png"
                            alt="Tree Icon"
                            className="w-12 h-12 "
                        />
                        Brainy Contact Hub
                        <img
                            className="w-12 h-12"
                            src="https://cdn-icons-png.flaticon.com/512/5906/5906405.png"
                            alt="Tree Icon"
                        />
                    </h1>

                    <p className="text-center text-green-200 mb-16 text-lg tracking-wide">
                        Speak to us through the totems of the wild
                    </p>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {[
                            {
                                icon: <FaPhoneAlt className="text-2xl" />,
                                title: "Call Us",
                                info: "+91 98765 43210",
                                border: "border-green-800",
                                bg: "bg-green-200",
                                text: "text-green-900",
                            },
                            {
                                icon: <FaEnvelope className="text-2xl" />,
                                title: "Email Us",
                                info: "info@brainybuds.com",
                                border: "border-yellow-700",
                                bg: "bg-yellow-100",
                                text: "text-yellow-900",
                            },
                            {
                                icon: <FaMapMarkerAlt className="text-2xl" />,
                                title: "Find Us",
                                info: "Brainy Buds, Kids City",
                                border: "border-red-700",
                                bg: "bg-red-100",
                                text: "text-red-900",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center text-white rounded-2xl shadow-lg p-5"
                                style={{
                                    backgroundImage:
                                        "url('https://i.postimg.cc/zBxnVzXw/current-wood.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    border: "4px solid #2f3e2f",
                                }}
                            >
                                <div
                                    className={`w-14 h-14 flex items-center justify-center rounded-full border-2 ${item.border} ${item.bg} ${item.text} mb-4 shadow-md`}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                <p className="text-xs">{item.info}</p>
                            </div>
                        ))}
                    </div>

                    {/* Feedback Form */}
                    <div className="relative max-w-3xl mx-auto">
                        <div
                            className="absolute inset-0 rounded-3xl shadow-xl"
                            style={{
                                backgroundImage:
                                    "url('https://i.postimg.cc/zBxnVzXw/current-wood.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "1.5rem",
                            }}
                        />
                        <div className="relative z-10 bg-yellow-50/80 border-4 border-yellow-900/60 rounded-2xl shadow-2xl p-10 mx-6 my-6">
                            <h2 className="text-3xl font-extrabold mb-6 text-center text-green-900 tracking-wider">
                                📝Send Your Feedbacks
                            </h2>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-lg border-2 border-green-700 bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg border-2 border-green-700 bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full p-3 rounded-lg border-2 border-green-700 bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 h-28"
                                />
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-green-700 hover:bg-green-900 text-white font-bold py-3 rounded-lg shadow-lg transition transform hover:scale-95"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ContactPage;
