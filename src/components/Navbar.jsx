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
    }, [handleScroll]);

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
                className={`fixed sm:top-0 sm:h-fit sm:rounded-full rounded-t-3xl sm:p-2 p-3 sm:mx-auto bottom-0 ${isScrolled ? 'w-full sm:w-full sm:rounded-none sm:my-0 sm:justify-evenly sm:py-3' : 'w-full sm:w-fit sm:my-8'} bg-indigo-400 text-white shadow-lg flex transition-all duration-300 ease-in-out justify-around sm:space-x-2`}>

                {/* Botón de Inicio */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'inicio' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : ''} ${selected !== 'inicio' ? 'sm:hover:bg-indigo-500' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('inicio')}
                >
                    <FontAwesomeIcon icon={faHouseChimney} className="text-base sm:text-md"/>
                    <span className={`${selected === 'inicio' ? 'block' : 'hidden'} sm:block text-xs sm:text-md font-label`}>Inicio</span>
                </button>

                {/* Botón de Acerca De */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'acerca' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : ''} ${selected !== 'acerca' ? 'sm:hover:bg-indigo-500' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('acerca')}
                >
                    <FontAwesomeIcon icon={faAddressCard} className="text-base sm:text-md"/>
                    <span className={`${selected === 'acerca' ? 'block' : 'hidden'} sm:block text-xs sm:text-md font-label`}>Sobre Mí</span>
                </button>

                {/* Botón de Habilidades */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'habilidades' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : ''} ${selected !== 'habilidades' ? 'sm:hover:bg-indigo-500' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('habilidades')}
                >
                    <FontAwesomeIcon icon={faLightbulb} className="text-base sm:text-md"/>
                    <span className={`${selected === 'habilidades' ? 'block' : 'hidden'} sm:block text-xs sm:text-md font-label`}>Habilidades</span>
                </button>

                {/* Botón de Proyectos */}
                <button
                    className={`flex flex-col justify-center items-center sm:flex-row ${selected === 'proyectos' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : ''} ${selected !== 'proyectos' ? 'hover:bg-indigo-500' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('proyectos')}
                >
                    <FontAwesomeIcon icon={faBriefcase} className="text-base sm:text-md"/>
                    <span className={`${selected === 'proyectos' ? 'block' : 'hidden'} sm:block text-xs sm:text-md font-label`}>Proyectos</span>
                </button>

                {/* Botón de Contacto */}
                <button
                    className={`flex flex-col justify-center sm:flex-row items-center ${selected === 'contacto' ? 'bg-white text-indigo-400 animate__animated animate__fadeIn' : ''} ${selected !== 'contacto' ? 'sm:hover:bg-indigo-500' : ''} gap-1 px-5 py-4 rounded-full transition duration-300 ease-in-out`}
                    onClick={() => handleClick('contacto')}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-base sm:text-md"/>
                    <span className={`${selected === 'contacto' ? 'block' : 'hidden'} sm:block text-xs sm:text-md font-label`}>Contacto</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;
