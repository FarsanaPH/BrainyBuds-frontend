import { useState } from "react";
import AvatarPicker from "./AvatarPicker";


export default function Profile() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [grade, setGrade] = useState("");
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "75%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    color: "#004d00",
    backgroundColor: "#fcf7d7" // Light yellow background
  };

  const selectStyle = {
    width: "75%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    color: "#004d00",
    backgroundColor: "#fcf7d7" // Light yellow background
  };
  
  const buttonStyle = {
    width: "75%",
    padding: "10px",
    backgroundColor: "rgba(253, 245, 0, 0.85)",
    color: "#004d00", // Dark green text
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
  };

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
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            style={{
              position: "relative",
              minWidth: "450px",
              minHeight: "400px",
              margin: "0 auto",
              marginTop:"80px",
              background: "rgba(14, 109, 21, 0.85)",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "rgba(253, 245, 0, 0.85)", fontSize: "20px" }}>
              <b>Create Your Profile</b>
            </h1>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
              style={inputStyle}
            />

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

            {gender && role && (
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <img
                  src={`/assets/${gender}/${role}.png`}
                  alt={role}
                  style={{
                    width: "75%",
                    height: "120px",
                    borderRadius: "10px",
                    objectFit: "contain",
                    color: "green"
                  }}
                />
                <p style={{ marginTop: "8px", fontWeight: "bold", fontSize: "18px" }}>
                  {role}
                </p>
              </div>
            )}

            {showPicker && (
              <AvatarPicker
                gender={gender}
                onSelect={(file) => {
                  setAvatar(file);
                  setShowPicker(false);
                }}
                onClose={() => setShowPicker(false)}
              />
            )}

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={selectStyle}
            >
              <option value="">Select your future role</option>
              <option value="Actor">Actor</option>
              <option value="Airhostess">Airhostess</option>
              <option value="Astro">Astronaut</option>
              <option value="Athlete">Athlete</option>
              <option value="Camera">Cameraman</option>
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

            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              style={selectStyle}
            >
              <option value="">Select your grade</option>
              <option value="1st">Grade I</option>
              <option value="2nd">Grade II</option>
              <option value="3rd">Grade III</option>
              <option value="4th">Grade IV</option>
              <option value="5th">Grade V</option>
              <option value="6th">Grade VI</option>
              <option value="7th">Grade VII</option>
              <option value="8th">Grade VIII</option>
            </select>

            <button
              type="submit"
              style={buttonStyle}
            >
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
              paddingLeft: "10px"
            }}
          >
            <div style={{ flex: 1, textAlign: "left" }}>
              <h1 style={{ marginTop: "15px", fontSize: "20px", textAlign: "justify", lineHeight: "1.6" }}>
                <b> Hi <span style={{ color: "green" }}>{name}</span>, the future{" "}{role}!</b>
              </h1>
              <h2 style={{ marginTop: "15px", fontSize: "18px", textAlign: "justify", lineHeight: "1.6" }}>
                You're currently in <b>{grade}</b>. At <b>Brainy Buds</b>, we believe every dream is possible with the right guidance. With curiosity, practice, and determination, you can shape your journey to become a brilliant <b>{role}</b>. 🚀 <br />
                Keep learning, keep exploring, and let us walk with you towards a brighter future.
              </h2>
            </div>
            
            {gender && role && (
              <img
                src={`/assets/${gender}/${role}.png`}
                alt={role}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>
        )}
        {submitted && (
          <button
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: "25px",
              padding: "10px 15px",
              backgroundColor: "rgba(6, 146, 52, 0.85)",
              color: "#bdfd3fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
