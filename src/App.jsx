// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutView from "./views/AboutView.jsx";
import Navbar from "./components/Navbar.jsx";
import HomeView from "./views/HomeView.jsx";
import ProjectsView from "./views/ProjectView.jsx";
import ContactView from "./views/ContactView.jsx";
import SkillsView from "./views/SkilsView.jsx";
import WebCompose from './views/partials/WebCompose.jsx';
import MobileCompose from './views/partials/MobileCompose.jsx';
//import CustomizingWidget from "./components/Customizing.widget.jsx";// Asegúrate de que el nombre del archivo esté correcto

function App() {
    {/* const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.querySelector('html').classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };
    */}

    return (
       <BrowserRouter>
            <Navbar />
            <Routes>
                {/* Definimos las rutas para las diferentes vistas */}
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/skills" element={<SkillsView />} />
                <Route path="/projects" element={<ProjectsView />}/>
                <Route path="/contact" element={<ContactView />} />
            </Routes>
       </BrowserRouter>
    );
}

export default App;