import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice";
import teacherReducer from "./slices/teacherSlice"
import quizReducer from "./slices/quizSlice"
// Load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (e) {
        // ignore write errors
    }
};

// ---------- Store ----------
const store = configureStore({
    reducer: {
        student: studentReducer,
        teacher: teacherReducer,
        quiz: quizReducer,
    },
    preloadedState: loadState()
})

// ---------- Subscribe to store changes ----------
store.subscribe(() => {
    saveState({
        student: store.getState().student,
        teacher: store.getState().teacher,
        quiz: store.getState().quiz,
    });
});
export default store
