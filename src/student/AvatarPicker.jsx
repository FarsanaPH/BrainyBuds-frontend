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

export default AvatarPicker;
