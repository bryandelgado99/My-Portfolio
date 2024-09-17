import AboutView from "./views/AboutView.jsx";
import Navbar from "./components/Navbar.jsx";
import HomeView from "./views/HomeView.jsx";
import ProjectsView from "./views/ProjectView.jsx";
import ContactView from "./views/ContactView.jsx";
import SkillsView from "./views/SkilsView.jsx";
import CustomizingWidget from "./components/Customizing.widget.jsx"; // Asegúrate de ajustar la ruta según la ubicación de tu archivo Home.jsx

function App() {
  return (
      <div>
          <Navbar/>
          <CustomizingWidget/>
          <HomeView/>
          <AboutView/>
          <SkillsView/>
          <ProjectsView/>
          <ContactView/>
      </div>
  );
}

export default App;
