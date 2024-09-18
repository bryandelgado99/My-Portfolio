// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/chips/filter-chip.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMobile,
    faGlobe,
    faCode,
    faFeatherAlt,
    faCube,
    faSyncAlt,
    faX
} from '@fortawesome/free-solid-svg-icons';
import {faAngular, faFlutter, faJava, faReact} from "@fortawesome/free-brands-svg-icons";

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
                className="fixed inset-0 bg-gray-600 flex sm:flex-row flex-col justify-center items-center z-50 m-5 rounded-md animate__animated animate__fadeInUp">
                <section
                    className="w-full h-full bg-indigo-800 flex overflow-auto rounded-lg sm:p-5 flex-col backdrop-blur-lg">
                    {/* Encabezado del modal */}
                    <div
                        className="flex flex-row justify-between items-center w-full px-5 py-3">
                        <h1 className="text-white font-title text-lg sm:text-3xl font-bold">
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
                    <div className="flex flex-col justify-start items-center w-full h-fit py-8 text-justify text-base text-white font-body mt-5">
                        <p>Aquí encontrarás los proyectos realizados y puedes conocer sus características, las
                            tecnologías empleadas y el repositorio con el código del mismo. Puedes filtrar los items por tecnologías, lenguajes y dispositivos de destino.</p>
                        {/* Filter chips */}
                        <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 justify-around items-center w-full p-4 mt-10 rounded-md h-fit text-justify">
                            <md-chip-set aria-labelledby="dates-label">
                                {/* Aplicación Móvil */}
                                <md-filter-chip label="Aplicación Móvil">
                                    <FontAwesomeIcon icon={faMobile} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* Aplicación Web */}
                                <md-filter-chip label="Aplicación Web">
                                    <FontAwesomeIcon icon={faGlobe} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* Flutter */}
                                <md-filter-chip label="Flutter">
                                    <FontAwesomeIcon icon={faFlutter} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* React */}
                                <md-filter-chip label="React">
                                    <FontAwesomeIcon icon={faReact} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* Tailwind */}
                                <md-filter-chip label="Tailwind">
                                    <FontAwesomeIcon icon={faCode} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* JetPack Compose */}
                                <md-filter-chip label="JetPack Compose">
                                    <FontAwesomeIcon icon={faCube} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* Java */}
                                <md-filter-chip label="Java">
                                    <FontAwesomeIcon icon={faJava} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* Ionic */}
                                <md-filter-chip label="Ionic">
                                    <ion-icon name="logo-ionic" slot="icon" className="text-white"></ion-icon>
                                </md-filter-chip>

                                {/* Angular */}
                                <md-filter-chip label="Angular">
                                    <FontAwesomeIcon icon={faAngular} slot="icon" className="text-white"/>
                                </md-filter-chip>

                                {/* Sistema Híbrido */}
                                <md-filter-chip label="Sistema Híbrido">
                                    <FontAwesomeIcon icon={faSyncAlt} slot="icon" className="text-white"/>
                                </md-filter-chip>
                            </md-chip-set>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ProjectCompose;
