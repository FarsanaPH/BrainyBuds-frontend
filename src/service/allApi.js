import { commonApi } from "./commonApi";
import { serverURL } from "./serverURL";

// -------------------For Students

// Check if student ID already exists 
export const findStudentByIDAPI = (studentID) => {
  return commonApi("GET", `${serverURL}/students?studentID=${encodeURIComponent(studentID)}`);
};

// Sign Up 
export const registerStudentAPI = (reqBody) => {
  return commonApi("POST", `${serverURL}/students`, reqBody);
};

// Sign In 
export const loginStudentAPI = ({ studentID, password }) => {
  return commonApi("GET",`${serverURL}/students?studentID=${encodeURIComponent(studentID)}&password=${encodeURIComponent(password)}`);
};

// updateprofile
export const updateStudentProfileAPI = (id, data) => {
  return commonApi("PUT", `${serverURL}/students/${id}`, data);
};


// -------------------For Teachers

// Check if student ID already exists 
export const findTeacherByIDAPI = (teacherID) => {
  return commonApi("GET", `${serverURL}/teachers?teacherID=${encodeURIComponent(teacherID)}`);
};

// Sign Up 
export const registerTeacherAPI = (reqBody) => {
  return commonApi("POST", `${serverURL}/teachers`, reqBody);
};

// Sign In 
export const loginTeacherAPI = ({ teacherID, password }) => {
  return commonApi("GET", `${serverURL}/teachers?teacherID=${encodeURIComponent(teacherID)}&password=${encodeURIComponent(password)}`);
};

//----------------------------Quizzes

// export const createQuizAPI = (reqBody) => commonApi("POST", `${serverURL}/quizzes`, reqBody);
// export const updateQuizAPI = (id, reqBody) => commonApi("PUT", `${serverURL}/quizzes/${id}`, reqBody);
// export const getQuizzesByGradeAPI = (grade) => commonApi("GET", `${serverURL}/quizzes?grade=${encodeURIComponent(grade)}`);
// export const getQuizzesByDateAndGradeAPI = (dateISO, grade) => commonApi("GET", `${serverURL}/quizzes?scheduledDate=${encodeURIComponent(dateISO)}&grade=${encodeURIComponent(grade)}`);
// export const getQuizByIdAPI = (id) => commonApi("GET", `${serverURL}/quizzes/${id}`);

//---------------------------Submissions

// export const submitQuizAPI = (reqBody) => commonApi("POST", `${serverURL}/submissions`, reqBody);
// export const getStudentSubmissionsAPI = (studentID) => commonApi("GET", `${serverURL}/submissions?studentID=${encodeURIComponent(studentID)}`);
// export const getSubmissionsByQuizAPI = (quizId) => commonApi("GET", `${serverURL}/submissions?quizId=${encodeURIComponent(quizId)}`);

// --------------------------Quizzes
// Add new quiz-
export const addQuizAPI = (reqBody) => 
  commonApi("POST", `${serverURL}/quizzes`, reqBody);

// Update quiz
export const updateQuizAPI = (id, reqBody) =>
  commonApi("PUT", `${serverURL}/quizzes/${id}`, reqBody);

// Delete quiz-
export const deleteQuizAPI = (id) =>
  commonApi("DELETE", `${serverURL}/quizzes/${id}`);

// Get quiz by id-
export const getQuizByIdAPI = (id) =>
  commonApi("GET", `${serverURL}/quizzes/${id}`);

// Get all quizzes-
export const getAllQuizzesAPI = () => 
  commonApi("GET", `${serverURL}/quizzes`);

// Get quizzes by teacherid
export const getAllQuizzesByTeacherAPI = (teacherID) =>
  commonApi("GET", `${serverURL}/quizzes?teacherID=${encodeURIComponent(teacherID)}`);


// Get quizzes by grade
export const getQuizzesByGradeAPI = (grade) => 
  commonApi("GET", `${serverURL}/quizzes?grade=${encodeURIComponent(grade)}`);

// Get quizzes by date + grade
export const getQuizzesByDateAndGradeAPI = (dateISO, grade) =>
  commonApi("GET", `${serverURL}/quizzes?scheduledDate=${encodeURIComponent(dateISO)}&grade=${encodeURIComponent(grade)}`);



// -----------------------------------------submissions

// Save student attempt-
export const submitAttemptAPI = (reqBody) =>
  commonApi("POST", `${serverURL}/submissions`, reqBody);

// Get a particular students all attempts-
export const getAttemptsByStudentAPI = (studentID) =>
  commonApi("GET", `${serverURL}/submissions?studentID=${encodeURIComponent(studentID)}`);

// get a particular submission by it's id
export const getAttemptsByQuizAPI = (quizId) => commonApi("GET", `${serverURL}/submissions?quizId=${encodeURIComponent(quizId)}`);

// get all students by grade
export const getStudentsByGradeAPI = (grade) =>
  commonApi("GET", `${serverURL}/students?grade=${encodeURIComponent(grade)}`);


// -----------------------------------------Parent Notes
// Add a new parent note
export const addParentNoteAPI = async (noteData) => {
  return await commonApi("POST", `${serverURL}/parentNotes`, noteData);
};

// Get all parent notes
export const getParentNotesAPI = async () => {
  return await commonApi("GET", `${serverURL}/parentNotes`, "");
};

// Update a parent note
export const updateParentNoteAPI = async (id, noteData) => {
  return await commonApi("PUT", `${serverURL}/parentNotes/${id}`, noteData);
};

// Delete a parent note
export const deleteParentNoteAPI = async (id) => {
  return await commonApi("DELETE", `${serverURL}/parentNotes/${id}`, {});
};
