// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '@material/web/button/text-button.js';

// Imágenes de banderas
import ecFlag from '../assets/ec_flag.png'; // Cambia esta ruta según la ubicación de tu imagen
import enFlag from '../assets/en_flag.png'; // Cambia esta ruta según la ubicación de tu imagen

function LanguageSelector() {
    const [isEnglish, setIsEnglish] = useState(false); // false para Español, true para Inglés

    const handleClick = () => {
        setIsEnglish(prevState => !prevState);
        // Lógica adicional para cambiar el idioma de la aplicación
    };

    return (
        <md-text-button
            onClick={handleClick}
            className="flex items-center justify-center px-3 bg-indigo-400 rounded-full text-white"
        >
            <img
                src={isEnglish ? enFlag : ecFlag}
                alt={isEnglish ? 'US Flag' : 'Ecuador Flag'}
                className="sm:w-8 sm:h-8 w-6 h-6"
            />
        </md-text-button>
    );
}

export default LanguageSelector;
