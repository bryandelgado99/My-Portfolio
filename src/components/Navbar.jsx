import {
    faAddressCard,
    faBriefcase,
    faEnvelopeOpenText,
    faHouseChimney,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Usamos Link y useLocation
import 'animate.css';

function Navbar() {
    const [selected, setSelected] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation(); // Hook para saber la ruta actual

    // Define las secciones y sus ids
    const sections = ['inicio', 'acerca', 'habilidades', 'proyectos', 'contacto'];

    // Función para manejar el scroll y actualizar el estado
    const handleScroll = () => {
        let currentSection = '';
        const scrollTop = window.scrollY;

        // Cambia el estado de isScrolled dependiendo de la posición del scroll
        setIsScrolled(scrollTop > 50);

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // Verificar si la sección ocupa al menos el 50% de la pantalla
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                }
            }
        });

        setSelected(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamada inicial para establecer el estado correcto
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (sectionId) => {
        setSelected(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`sticky flex justify-center items-center w-full h-auto z-20`}>
            <nav
                className={`fixed sm:bottom-8 sm:h-fit sm:rounded-full rounded-t-3xl sm:p-2 p-3 sm:mx-auto bottom-0 ${isScrolled ? 'w-full sm:w-fit sm:rounded-full sm:justify-evenly sm:bg-opacity-50 sm:backdrop-blur-md' : 'w-full sm:w-fit tablet:bottom-0 sm:-bottom-1 sm:shadow-3xl sm:rounded-3xl'} bg-indigo-600 text-white shadow-lg flex transition-all duration-300 ease-in-out justify-around sm:space-x-2`}
            >

                {/* Botón de Inicio */}
                <Link
                    to="/"
                    onClick={() => handleClick('inicio')}
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'inicio' && location.pathname === '/' ? 'bg-gray-200 dark:text-indigo-900 text-indigo-400' : ''} ${location.pathname !== '/' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                >
                    <FontAwesomeIcon icon={faHouseChimney} className="text-base sm:text-md"/>
                    <span className={`hidden tablet:block text-xs sm:text-md font-label`}>Inicio</span>
                </Link>

                {/* Botón de Acerca De */}
                <Link
                    to="/about"
                    onClick={() => handleClick('acerca')}
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'acerca' && location.pathname === '/about' ? 'bg-gray-200 dark:text-indigo-900 text-indigo-400' : ''} ${location.pathname !== '/about' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                >
                    <FontAwesomeIcon icon={faAddressCard} className="text-base sm:text-md"/>
                    <span className={`hidden tablet:block text-xs sm:text-md font-label`}>Sobre Mí</span>
                </Link>

                {/* Botón de Habilidades */}
                <Link
                    to="/skills"
                    onClick={() => handleClick('habilidades')}
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'habilidades' && location.pathname === '/skills' ? 'bg-gray-200 text-indigo-400 dark:text-indigo-900' : ''} ${location.pathname !== '/skills' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                >
                    <FontAwesomeIcon icon={faLightbulb} className="text-base sm:text-md"/>
                    <span className={`hidden tablet:block text-xs sm:text-md font-label`}>Habilidades</span>
                </Link>

                {/* Botón de Proyectos */}
                <Link
                    to="/projects"
                    onClick={() => handleClick('proyectos')}
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'proyectos' && location.pathname === '/projects' ? 'bg-gray-200 text-indigo-400 dark:text-indigo-900' : ''} ${location.pathname !== '/projects' ? 'hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                >
                    <FontAwesomeIcon icon={faBriefcase} className="text-base sm:text-md"/>
                    <span className={`hidden tablet:block text-xs sm:text-md font-label`}>Proyectos</span>
                </Link>

                {/* Botón de Contacto */}
                <Link
                    to="/contact"
                    onClick={() => handleClick('contacto')}
                    className={`flex flex-col justify-center sm:flex-row items-center ${selected === 'contacto' && location.pathname === '/contact' ? 'bg-gray-200 text-indigo-400 dark:text-indigo-900' : ''} ${location.pathname !== '/contact' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-base sm:text-md"/>
                    <span className={`hidden tablet:block text-xs sm:text-md font-label`}>Contacto</span>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;