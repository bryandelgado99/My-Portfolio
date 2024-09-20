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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                // Verificar si la sección ocupa al menos el 50% de la pantalla
                if (
                    rect.top <= window.innerHeight / 2 &&
                    rect.bottom >= window.innerHeight / 2 &&
                    ((rect.bottom - rect.top) / window.innerHeight) >= 0.5
                ) {
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
    }, [handleScroll]);

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
                className={`fixed sm:bottom-8 sm:h-fit sm:rounded-full rounded-t-3xl sm:p-2 p-3 sm:mx-auto bottom-0 ${isScrolled ? 'w-full sm:w-fit sm:rounded-full sm:my-5 sm:justify-evenly tablet:bg-opacity-50 tablet:backdrop-blur-md' : 'w-full tablet:bottom-0 sm:rounded-none'} bg-indigo-600 text-white shadow-lg flex transition-all duration-300 ease-in-out justify-around sm:space-x-2`}
            >


                {/* Botón de Inicio */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'inicio' ? 'bg-gray-200 dark:text-indigo-900 text-indigo-400' : ''} ${selected !== 'inicio' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('inicio')}
                >
                    <FontAwesomeIcon icon={faHouseChimney} className="text-base sm:text-md"/>
                    <span className={`hidden sm:block text-xs sm:text-md font-label`}>Inicio</span>
                </button>

                {/* Botón de Acerca De */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'acerca' ? 'bg-gray-200 dark:text-indigo-900 text-indigo-400' : ''} ${selected !== 'acerca' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('acerca')}
                >
                    <FontAwesomeIcon icon={faAddressCard} className="text-base sm:text-md"/>
                    <span className={`hidden sm:block text-xs sm:text-md font-label`}>Sobre Mí</span>
                </button>

                {/* Botón de Habilidades */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'habilidades' ? 'bg-gray-200 text-indigo-400 dark:text-indigo-900' : ''} ${selected !== 'habilidades' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('habilidades')}
                >
                    <FontAwesomeIcon icon={faLightbulb} className="text-base sm:text-md"/>
                    <span className={`hidden sm:block text-xs sm:text-md font-label`}>Habilidades</span>
                </button>

                {/* Botón de Proyectos */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'proyectos' ? 'bg-gray-200 text-indigo-400 dark:text-indigo-900' : ''} ${selected !== 'proyectos' ? 'hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('proyectos')}
                >
                    <FontAwesomeIcon icon={faBriefcase} className="text-base sm:text-md"/>
                    <span className={`hidden sm:block text-xs sm:text-md font-label`}>Proyectos</span>
                </button>

                {/* Botón de Contacto */}
                <button
                    className={`flex flex-col justify-center sm:flex-row items-center ${selected === 'contacto' ? 'bg-gray-200 text-indigo-400 dark:text-indigo-900' : ''} ${selected !== 'contacto' ? 'sm:hover:bg-indigo-500 sm:hover:dark:bg-indigo-700' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('contacto')}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-base sm:text-md"/>
                    <span className={`hidden sm:block text-xs sm:text-md font-label`}>Contacto</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;
