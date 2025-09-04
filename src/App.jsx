import { Route, Routes } from "react-router-dom";
import GradePage from "./common/GradePage";
import KidsHomePage from "./student/KidsHomePage"
import AuthPage from "./common/AuthPage";
import TeachersHomePage from "./teacher/TeachersHomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
    return (
        <>
            <Routes>
                <Route path="/kids-homepage" element={<KidsHomePage />} />
                <Route path="/gradepage" element={<GradePage />} />
                <Route path="/authpage" element={<AuthPage/>} />
                <Route path="/teachers-homepage" element={<TeachersHomePage />} />
            </Routes>
            
            <ToastContainer position="bottom-right" autoClose={3000} />
        </>
    )

}

export default App;