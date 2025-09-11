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

  return (
    <div>
      {/* First Background Section - FORM */}
      <div
        style={{
          backgroundImage: "url('/assets/landing1.png')",
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
              maxWidth: "400px",
              minHeight: "400px",
              margin: "0 auto",
              background: "rgba(74, 113, 2, 0.85)",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "rgba(253, 245, 0, 0.85)" }}>
              Create Your Profile
            </h2>

            {/* Name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "70%",
                marginLeft: "10%",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "green"
              }}
              placeholder="Enter your name"
            />

            {/* Gender */}
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              style={{
                width: "75%",
                marginLeft: "10%",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "green"
              }}
            >
              <option value="">Select Gender</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>

            {/* Show Avatar + Role when role is chosen */}
            {gender && role && (
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <img
                  src={`/assets/${gender}/${role}.png`}
                  alt={role}
                  style={{
                    width: "95%",
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


            {/* Avatar Picker Modal */}
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

            {/* Profession */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={{
                width: "75%",
                marginLeft: "10%",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "green"
              }}
            >
              <option value="">Select your future role</option>
              <option value="Actor">Actor</option>
              <option value="Airhoster">Airhostess</option>
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

            {/* Grade */}
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              style={{
                width: "75%",
                marginLeft: "10%",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "green"
              }}
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
              style={{
                width: "75%",
                marginLeft: "10%",
                padding: "10px",
                backgroundColor: "rgba(253, 245, 0, 0.85)",
                color: "green",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Save Profile
            </button>


            {/* Animal Images */}
            <img
              src="/assets/bee.png"
              alt="Giraffe"
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
      </div>

      {/* Second Background Section - WELCOME */}
      {submitted && (
        <div
          style={{
            backgroundImage: "url('/assets/landing3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px", // spacing between avatar & text
              maxWidth: "800px",
              background: "#f7d264", // optional to match yellow board
              borderRadius: "12px",
              color: "black",
              marginRight: "30px",
              paddingLeft: "10px"
            }}
          >
            {/* Left Side - TEXT */}
            <div style={{ flex: 1, textAlign: "left" }}>
              <h1>
                Hi <span style={{ color: "green" }}>{name}</span>, the future{" "}
                {role}!
              </h1>
              <h2 style={{ marginTop: "15px", fontSize: "18px", textAlign: "justify", slineHeight: "1.6",
              }}>
                You're currently in <b>{grade}</b>.
                 At <b>Brainy Buds</b>, we believe every dream is possible with the right
                guidance.  With curiosity, practice, and determination, you can shape your journey to
                become a brilliant <b>{role}</b>. 🚀 <br />
                Keep learning, keep exploring, and let us walk with you towards a brighter
                future. 
              </h2>
            </div>

            {/* Right Side - AVATAR IMAGE */}
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

          {/* Edit Profile Button below */}
          <button
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: "25px",
              padding: "10px 15px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Edit Profile
          </button>
        </div>
      )}

    </div>
  );
}