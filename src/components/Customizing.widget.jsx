// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './LanguageSelector.jsx';
import '@material/web/button/text-button.js';

function CustomizingWidget() {
    const [isDayMode, setIsDayMode] = useState(false); // Estado para el modo día/noche

    const handleToggle = () => {
        setIsDayMode(prevState => !prevState); // Alternar entre día y noche
    };

    return (
        <div className={`fixed flex flex-row justify-around shadow-lg items-center w-fit h-auto bg-indigo-400 my-3 sm:px-4 dark:bg-indigo-900 px-2 py-2 space-x-2 rounded-l-full right-0 sm:bottom-0 sm:my-8`}>
            <md-text-button onClick={handleToggle}>
                <FontAwesomeIcon
                    icon={isDayMode ? faSun : faMoon}
                    className="text-white text-lg justify-center items-center flex"
                />
            </md-text-button>
            <LanguageSelector/>
        </div>
    );
}

export default CustomizingWidget;
