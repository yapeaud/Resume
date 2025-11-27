import { NavLink } from 'react-router-dom';
import { profilImage } from '../constants';

const Sidebar = ({ isOpen }) => {
    return (
        <aside className={`fixed top-0 left-0 w-64 bg-blue-600 text-white p-4 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:block`}>
            <div className='flex justify-center items-center mt-12 mb-12'>
                <img src={profilImage} alt="" className='w-32 h-32 rounded-full border-4 border-blue-400' />
            </div>
            <nav className="flex flex-col space-y-4 justify-center items-center">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `font-semibold flex items-center gap-2 hover:text-blue-700 ${isActive ? "text-blue-300" : ""}`}
                >
                    ABOUT
                </NavLink>
                <NavLink
                    to="/experience"
                    className={({ isActive }) => `font-semibold flex items-center gap-2 hover:text-blue-700 ${isActive ? "text-blue-300" : ""}`}
                >
                    EXPERIENCE
                </NavLink>
                <NavLink
                    to="/education"
                    className={({ isActive }) => `font-semibold flex items-center gap-2 hover:text-blue-700 ${isActive ? "text-blue-300" : ""}`}
                >
                    EDUCATION
                </NavLink>
                <NavLink
                    to="/skills"
                    className={({ isActive }) => `font-semibold flex items-center gap-2 hover:text-blue-700 ${isActive ? "text-blue-300" : ""}`}
                >
                    SKILLS
                </NavLink>
                <NavLink
                    to="/interests"
                    className={({ isActive }) => `font-semibold flex items-center gap-2 hover:text-blue-700 ${isActive ? "text-blue-300" : ""}`}
                >
                    INTERESTS
                </NavLink>
                <NavLink
                    to="/awards"
                    className={({ isActive }) => `font-semibold flex items-center gap-2 hover:text-blue-700 ${isActive ? "text-blue-300" : ""}`}
                >
                    AWARDS
                </NavLink>
                <NavLink
                    to="/accomplishments"
                    className={({ isActive }) => `font-semibold flex items-center gap-2 hover:text-blue-700 ${isActive ? "text-blue-300" : ""}`}
                >
                    ACCOMPLISHMENTS
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
