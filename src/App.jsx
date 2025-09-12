import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
import AboutPage from "./common/AboutPage";
import ContactPage from "./common/ContactPage";
import StudentProfile from "./student/StudentProfile";
import ColoringPage from "./student/ColoringPage";
import SubmissionsPage from "./teacher/SubmissionsPage";
import TeacherReviewPage from "./teacher/TeacherReviewPage";



function App() {
    return (
        <>
            <Routes>
                {/* common routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/authpage" element={<AuthPage />} />
                <Route path="/gradepage" element={<GradePage />} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/coloring-page" element={<ColoringPage />} />

                {/* student routes */}
                   <Route path="/attempt/:quizId" element={<QuizAttemptPage />} />
                   <Route path="/day-work/:dateISO" element={<DayWorksPage />} />
                   <Route path="/review/:quizId" element={<QuizReviewPage />} />
                   <Route path="/student-profile" element={<StudentProfile/> } />
                
                <Route element={<SidebarLayout />}>
                    {/* Student routes */}
                    <Route path="/parents-dashboard" element={<ParentDashboardPage/>} />
                    <Route path="/kids-homepage" element={<KidsHomePage />} />
                    <Route path="/leader-board" element={<div>LeaderBoard</div> } />
                    
                    {/* Teacher routes */}
                    <Route path="/teachers-homepage" element={<TeachersHomePage />} />
                    <Route path="/for-parents" element={<ForParentsPage/>} />
                    <Route path="/manage-quiz" element={<ManageQuizPage/>} />
                    <Route path="/create-quiz" element={<CreateQuizPage />} />
                    <Route path="/edit-quiz/:quizId" element={<EditQuizPage />} />  
                    <Route path="/submissions/:quizId" element={<SubmissionsPage/>} /> 
                    <Route path="/teacher-review/:quizId" element={<div>Teacher Reviewing Page</div>} />  

                </Route>

                <Route path="/*" element={<PageNotFound />} />

            </Routes>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </>
    )

}

export default App;