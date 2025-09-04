import { commonApi } from "./commonApi";
import { serverURL } from "./serverURL";

// -------------------For Students

// Check if student ID already exists 
export const findStudentByIDAPI = (studentID) => {
  const url = `${serverURL}/students?studentID=${encodeURIComponent(studentID)}`;
  return commonApi("GET", url);
};

// Sign Up 
export const registerStudentAPI = (reqBody) => {
  return commonApi("POST", `${serverURL}/students`, reqBody);
};

// Sign In 
export const loginStudentAPI = ({ studentID, password }) => {
  const url = `${serverURL}/students?studentID=${encodeURIComponent(studentID)}&password=${encodeURIComponent(password)}`;
  return commonApi("GET", url);
};

// -------------------For Teachers

// Check if student ID already exists 
export const findTeacherByIDAPI = (teacherID) => {
  const url = `${serverURL}/teachers?teacherID=${encodeURIComponent(teacherID)}`;
  return commonApi("GET", url);
};

// Sign Up 
export const registerTeacherAPI = (reqBody) => {
  return commonApi("POST", `${serverURL}/teachers`, reqBody);
};

// Sign In 
export const loginTeacherAPI = ({ teacherID, password }) => {
  const url = `${serverURL}/teachers?teacherID=${encodeURIComponent(teacherID)}&password=${encodeURIComponent(password)}`;
  return commonApi("GET", url);
};



