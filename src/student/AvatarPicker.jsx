import { boyAvatars, girlAvatars } from "../data/avatar";

function AvatarPicker({ gender, onSelect }) {
  const avatars = gender === "boy" ? boyAvatars : girlAvatars;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
      {avatars.map((file) => (
        <img
          key={file}
          src={`/assets/${gender}/${file}`}  // pulls from public/assets/boy or girl
          alt={file}
          style={{ width: "80px", height: "80px", cursor: "pointer", borderRadius: "50%" }}
          onClick={() => onSelect(`/assets/${gender}/${file}`)}
        />
      ))}
    </div>
  );
}

<<<<<<< HEAD
export default AvatarPicker;
=======
export default AvatarPicker;
>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc
