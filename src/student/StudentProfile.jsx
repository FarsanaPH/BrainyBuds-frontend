import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStudent } from "../redux/slices/studentSlice";
import { updateStudentProfileAPI } from "../service/allApi";

function StudentProfile() {
  const student = useSelector((state) => state.student.currentStudent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passion, setPassion] = useState(""); // student’s chosen passion
  const [gender, setGender] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Load existing profile passion and gender
  useEffect(() => {
    if (student && student.passion && student.gender) {
      setPassion(student.passion);
      setGender(student.gender);
      setSubmitted(true);
    }
  }, [student]);

  // Avatar for form preview — only when user selects passion+gender in current session
  const previewAvatar = passion && gender ? `/assets/${gender}/${passion}.png` : null;

  // Avatar for final profile view
  const finalAvatar = student?.avatar;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      ...student,
      avatar: previewAvatar,
      gender,
      passion, // store the passion separately
    };

    try {
      await updateStudentProfileAPI(student.id, profileData);
      dispatch(setStudent(profileData));
      localStorage.setItem("studentProfile", JSON.stringify(profileData));

      setSubmitted(true);
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  };

  const selectStyle = {
    width: "75%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    color: "#004d00",
    backgroundColor: "#ffffff", // white background for inputs & dropdowns
  };

  const buttonStyle = {
    width: "75%",
    padding: "10px",
    backgroundColor: "rgba(253, 245, 0, 0.85)",
    color: "#004d00",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
  };

  if (!student) {
    return <p className="text-center mt-10">Please login first.</p>;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: submitted
            ? "url('/assets/landing3.png')"
            : "url('/assets/jungle2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "20vh",
        }}
      >
        {/* --- FORM --- */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            style={{
              position: "relative",
              minWidth: "450px",
              minHeight: "400px",
              margin: "0 auto",
              marginTop: "80px",
              background: "rgba(14, 109, 21, 0.85)",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "rgba(253, 245, 0, 0.85)",
                fontSize: "20px",
              }}
            >
              <b>Complete Your Profile</b>
            </h1>

            {/* Name (readonly) */}
            <input
              type="text"
              value={student.name}
              readOnly
              style={{
                ...selectStyle,
                backgroundColor: "#ffffff",
              }}
            />

            {/* Grade (readonly) */}
            <input
              type="text"
              value={student.grade}
              readOnly
              style={{
                ...selectStyle,
                backgroundColor: "#ffffff",
              }}
            />

            {/* Gender dropdown */}
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              style={selectStyle}
            >
              <option value="">Select Gender</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>

            {/* Passion dropdown */}
            <select
              value={passion}
              onChange={(e) => setPassion(e.target.value)}
              required
              style={selectStyle}
            >
              <option value="">Select your passion</option>
              <option value="Actor">Actor</option>
              <option value="CabinCrew">Cabin Crew</option>
              <option value="Astronaut">Astronaut</option>
              <option value="Athlete">Athlete</option>
              <option value="Cameraman">Cameraman</option>
              <option value="Chef">Chef</option>
              <option value="Doctor">Doctor</option>
              <option value="Firefighter">Firefighter</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Musician">Musician</option>
              <option value="Police">Police</option>
              <option value="Scientist">Scientist</option>
              <option value="Streamer">Streamer</option>
              <option value="Teacher">Teacher</option>
            </select>

            {/* Avatar preview */}
            {previewAvatar && (
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <img
                  src={previewAvatar}
                  alt={passion}
                  style={{
                    width: "75%",
                    height: "120px",
                    borderRadius: "10px",
                    objectFit: "contain",
                  }}
                />
                <p
                  style={{
                    color: "white",
                    marginTop: "8px",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {passion}
                </p>
              </div>
            )}

            <button type="submit" style={buttonStyle}>
              Save Profile
            </button>
            <img
              src="/assets/bee.png"
              alt="Bee"
              style={{
                position: "absolute",
                top: "3vh",
                right: "60vh",
                width: "80px",
              }}
            />
            <img
              src="/assets/lion.png"
              alt="Lion"
              style={{
                position: "absolute",
                bottom: "2vh",
                right: "1vh",
                width: "90px",
              }}
            />
          </form>
        )}


        {/* --- SUBMITTED VIEW --- */}
        {submitted && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              maxWidth: "800px",
              background: "#f7d264",
              borderRadius: "12px",
              color: "black",
              marginRight: "30px",
              padding: "20px",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "22px", marginBottom: "10px", paddingTop:"60px" }}>
              Hi <span style={{ color: "green", fontWeight:"bold" }}>{student.name}</span>, the
              future <span style={{ color: "white",  fontWeight:"bold" }}>{passion}!</span>
            </h1>
            <h2 style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
              You're currently in <b>Grade {student.grade}</b>. At{" "}
              <b>Brainy Buds</b>, we believe every passion is possible. Keep
              learning, keep exploring, and let us walk with you towards a
              brighter future. 🚀
            </h2>

            {finalAvatar && (
              <img
                src={finalAvatar}
                alt={passion}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
            )}

            <button
              onClick={() => navigate("/kids-homepage")} // navigate to homepage
              style={{
                padding: "10px 20px",
                backgroundColor: "rgba(6, 146, 52, 0.85)",
                color: "#ffffff",
                border: "none",
                borderRadius: "60px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Go Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentProfile;
