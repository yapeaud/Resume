import { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import InterestsSection from './components/InterestsSection';
import AwardsSection from './components/AwardsSection';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
    <Router>
      <div className="flex">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar visible only on small screens */}
          <Navbar toggleSidebar={toggleSidebar} />

          <main className="p-6 bg-gray-100 min-h-screen">
            <Routes>
              <Route path="/" element={<AboutSection />} />
              <Route path="/experience" element={<ExperienceSection />} />
              <Route path="/education" element={<EducationSection />} />
              <Route path="/skills" element={<SkillsSection />} />
              <Route path="/interests" element={<InterestsSection />} />
              <Route path="/awards" element={<AwardsSection />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
