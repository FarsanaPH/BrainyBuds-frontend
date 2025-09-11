import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
import PageNotFound from "./common/PageNotFound";
import LandingPage from "./common/LandingPage";
import AuthPage from "./common/AuthPage";
import GradePage from "./common/GradePage";
import SidebarLayout from "./common/SidebarLayout";
import KidsHomePage from "./student/KidsHomePage"
import TeachersHomePage from "./teacher/TeachersHomePage";
import CreateQuizPage from "./teacher/CreateQuizPage";
import ManageQuizPage from "./teacher/ManageQuizPage";
import QuizAttemptPage from "./student/QuizAttemptPage";
import QuizReviewPage from "./student/QuizReviewPage";
import DayWorksPage from "./student/DayWorksPage";
import EditQuizPage from "./teacher/EditQuizPage";
import ForParentsPage from "./teacher/ForParentsPage";
import ParentDashboardPage from "./student/ParentDashboardPage";

=======
import LandingPage from "./common/LandingPage";
import Profile from "./student/Profile";
>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc


function App() {
    return (
        <>
            <Routes>
<<<<<<< HEAD
                {/* common routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/authpage" element={<AuthPage />} />
                <Route path="/gradepage" element={<GradePage />} />

                {/* student routes */}
                   <Route path="/attempt/:quizId" element={<QuizAttemptPage />} />
                   <Route path="/day-work/:dateISO" element={<DayWorksPage />} />
                   <Route path="/review/:quizId" element={<QuizReviewPage />} />
                
                <Route element={<SidebarLayout />}>
                    {/* Student routes */}
                    <Route path="/parents-dashboard" element={<ParentDashboardPage/>} />
                    <Route path="/kids-homepage" element={<KidsHomePage />} />
                    
                     

                    {/* Teacher routes */}
                    <Route path="/teachers-homepage" element={<TeachersHomePage />} />
                    <Route path="/for-parents" element={<ForParentsPage/>} />
                    <Route path="/manage-quiz" element={<ManageQuizPage/>} />
                    <Route path="/create-quiz" element={<CreateQuizPage />} />
                    <Route path="/edit-quiz/:quizId" element={<EditQuizPage />} />                   
                </Route>

                <Route path="/*" element={<PageNotFound />} />
=======
                <Route path="/" element={<LandingPage />} />
                <Route path="/kids-homepage" element={<KidsHomePage />} />
                <Route path="/gradepage" element={<GradePage />} />
                <Route path="/authpage" element={<AuthPage />} />
                <Route path="/teachers-homepage" element={<TeachersHomePage />} />
                <Route path="/profile" element={<Profile />} />
>>>>>>> 0d6207c808ec459c314fc7f4fb36555fa4153cfc
            </Routes>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </>
    )

}

export default App;