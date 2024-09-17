import {
    faAddressCard,
    faBriefcase,
    faEnvelopeOpenText,
    faHouseChimney,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import 'animate.css'; // Importa Animate.css

function Navbar() {
    const [selected, setSelected] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    // Define las secciones y sus ids
    const sections = ['inicio', 'acerca', 'habilidades', 'proyectos', 'contacto'];

    // Función para manejar el scroll y actualizar el estado
    const handleScroll = () => {
        let currentSection = '';
        const scrollTop = window.scrollY;

        // Cambia el estado de isScrolled dependiendo de la posición del scroll
        if (scrollTop > 50) { // Puedes ajustar el valor para cuando se considera que se ha hecho scroll
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
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
        <div className={`flex justify-center items-center w-full h-auto`}>
            <nav
                className={`fixed sm:top-0 sm:h-fit sm:rounded-full rounded-t-3xl sm:p-2 p-3 sm:mx-auto sm:my-4 bottom-0 ${isScrolled ? 'sm:w-full sm:rounded-none sm:my-0 sm:justify-evenly' : 'sm:w-fit'} bg-indigo-400 text-white shadow-lg flex transition-all duration-300 ease-in-out justify-around space-x-2`}>
                {/* Botón de Inicio */}
                <button
                    className={`flex items-center ${selected === 'inicio' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : 'hover:bg-indigo-500'} px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('inicio')}
                >
                    <FontAwesomeIcon icon={faHouseChimney} className="text-xl sm:text-md"/>
                    <span className={`ml-2 ${selected === 'inicio' ? 'block' : 'hidden'} sm:block text-sm sm:text-md`}>Inicio</span>
                </button>

                {/* Botón de Acerca De */}
                <button
                    className={`flex items-center ${selected === 'acerca' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : 'hover:bg-indigo-500'} px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('acerca')}
                >
                    <FontAwesomeIcon icon={faAddressCard} className="text-xl sm:text-md"/>
                    <span className={`ml-2 ${selected === 'acerca' ? 'block' : 'hidden'} sm:block text-sm sm:text-md`}>Acerca de Mi</span>
                </button>

                {/* Botón de Habilidades */}
                <button
                    className={`flex items-center ${selected === 'habilidades' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : 'hover:bg-indigo-500'} px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('habilidades')}
                >
                    <FontAwesomeIcon icon={faLightbulb} className="text-xl sm:text-md"/>
                    <span className={`ml-2 ${selected === 'habilidades' ? 'block' : 'hidden'} sm:block text-sm sm:text-md`}>Habilidades</span>
                </button>

                {/* Botón de Proyectos */}
                <button
                    className={`flex items-center ${selected === 'proyectos' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : 'hover:bg-indigo-500'} px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('proyectos')}
                >
                    <FontAwesomeIcon icon={faBriefcase} className="text-xl sm:text-md"/>
                    <span className={`ml-2 ${selected === 'proyectos' ? 'block' : 'hidden'} sm:block text-sm sm:text-md`}>Proyectos</span>
                </button>

                {/* Botón de Contacto */}
                <button
                    className={`flex items-center ${selected === 'contacto' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : 'hover:bg-indigo-500'} px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('contacto')}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-xl sm:text-md"/>
                    <span className={`ml-2 ${selected === 'contacto' ? 'block' : 'hidden'} sm:block text-sm sm:text-md`}>Contacto</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;