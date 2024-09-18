// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFilter,
    //faMobile,
    //faGlobe,
    //faCode,
    //faCube,
    //faSyncAlt,
    faX
} from '@fortawesome/free-solid-svg-icons';
//import {faAngular, faFlutter, faJava, faReact} from "@fortawesome/free-brands-svg-icons";

// eslint-disable-next-line react/prop-types
function ProjectCompose({ isOpen, onClose }) {
    // Controlar el overflow del body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Evitar scroll en la página principal
        } else {
            document.body.style.overflow = 'auto'; // Restaurar scroll cuando se cierra el modal
        }

        // Limpieza al desmontar el componente
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-gray-800 flex sm:flex-row flex-col justify-center items-center z-50 m-5 rounded-md animate__animated animate__fadeInUp">
                <section
                    className="w-full h-full bg-indigo-600 flex overflow-auto rounded-lg sm:p-5 flex-col backdrop-blur-lg">
                    {/* Encabezado del modal */}
                    <div
                        className="flex flex-row justify-between items-center w-full sm:p-8 p-9">
                        <h1 className="text-white font-title text-4xl font-bold">
                            Todos los proyectos
                        </h1>

                        {/* Botón para cerrar el modal */}
                        <md-filled-button
                            className="text-white rounded-md flex justify-center items-center"
                            onClick={onClose}
                        >
                            <FontAwesomeIcon icon={faX} className="text-white" />
                        </md-filled-button>
                    </div>
                    <p className="px-9 sm:px-8 text-white font-body text-base mt-4 sm:text-lg text-justify py-6 sm:py-8">Aquí encontrarás los proyectos realizados y puedes conocer sus características, las
                        tecnologías empleadas y el repositorio con el código del mismo. Puedes filtrar los items por tecnologías, lenguajes y dispositivos de destino.</p>
                    {/* Filter Item */}
                    <span className="flex w-full py-5 px-8 justify-end items-center">
                        <md-filled-tonal-button>
                            <FontAwesomeIcon icon={faFilter} className="mr-4"/>
                            Ordenar por
                        </md-filled-tonal-button>
                    </span>

                </section>
            </div>
        </>
    );
}

export default ProjectCompose;
