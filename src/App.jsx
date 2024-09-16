import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo Home.jsx

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirecciona automáticamente a /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
