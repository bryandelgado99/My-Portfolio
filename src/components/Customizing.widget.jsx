// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './LanguageSelector.jsx';
import '@material/web/button/text-button.js';

function CustomizingWidget({ darkMode, toggleDarkMode }) {
    return (
        <div className={`fixed flex flex-row justify-around shadow-lg items-center w-fit h-auto my-3 sm:px-4 px-2 py-2 space-x-2 rounded-l-full right-0 sm:bottom-0 sm:my-8 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-900'}`}>
            <md-text-button onClick={toggleDarkMode}>
                <FontAwesomeIcon
                    icon={darkMode ? faSun : faMoon}
                    className="text-white text-lg"
                />
            </md-text-button>
            <LanguageSelector />
        </div>
    );
}

CustomizingWidget.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};

export default CustomizingWidget;