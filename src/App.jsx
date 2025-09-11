import { Route, Routes } from "react-router-dom";
import GradePage from "./common/GradePage";
import KidsHomePage from "./student/KidsHomePage"
import AuthPage from "./common/AuthPage";
import TeachersHomePage from "./teacher/TeachersHomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LandingPage from "./common/LandingPage";
import Profile from "./student/Profile";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/kids-homepage" element={<KidsHomePage />} />
                <Route path="/gradepage" element={<GradePage />} />
                <Route path="/authpage" element={<AuthPage />} />
                <Route path="/teachers-homepage" element={<TeachersHomePage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </>
    )

}

export default App;