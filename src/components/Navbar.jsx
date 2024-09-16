import {
    faAddressCard,
    faBriefcase,
    faEnvelopeOpenText,
    faHouseChimney,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import 'animate.css'; // Importa Animate.css

function Navbar() {
    const [selected, setSelected] = useState('');

    const handleClick = (item) => {
        setSelected(item);
    };

    return (
        <nav className={`fixed sm:top-0 sm:h-fit sm:w-fit sm:rounded-full rounded-t-3xl sm:p-2 p-3 sm:mx-auto sm:my-4 bottom-0 w-full bg-indigo-400 text-white shadow-lg flex transition-all duration-300 justify-around space-x-2`}>
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
    );
}

export default Navbar;