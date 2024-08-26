import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CoursesPage from './pages/CoursesPage';
import CourseInstancePage from './pages/CourseInstancePage';
import CreateCoursePage from './pages/CreateCoursePage';
import CreateCourseInstancePage from './pages/CreateCourseInstancePage';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail'; // New component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/instances" element={<CourseInstancePage />} />
          <Route path="/create-course" element={<CreateCoursePage />} />
          <Route path="/create-instance" element={<CreateCourseInstancePage />} />
           <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;