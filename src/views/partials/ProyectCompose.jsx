import React, { useEffect, useState } from 'react';
import '@material/web/button/filled-tonal-button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faX } from '@fortawesome/free-solid-svg-icons';
import DialogFilter from '../../components/DialogFilter';
import '@material/web/iconbutton/filled-icon-button';

function ProjectCompose({ isOpen, onClose }) {
    const [isDialogOpen, setDialogOpen] = useState(false); // Estado para controlar el diálogo

    // Controlar el overflow del body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Evitar scroll en la página principal
        } else {
            document.body.style.overflow = 'auto'; // Restaurar scroll cuando se cierra el modal
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Funciones para abrir y cerrar el cuadro flotante
    const handleOpenDialog = () => setDialogOpen(true);
    const handleCloseDialog = () => setDialogOpen(false);

    return (
        <>
            <div className="fixed inset-0 bg-gray-800 flex sm:flex-row flex-col justify-center items-center z-50 m-5 rounded-md animate__animated animate__fadeInUp">
                <section className="w-full h-full bg-indigo-600 flex overflow-auto rounded-lg sm:p-5 flex-col backdrop-blur-lg">
                    {/* Encabezado del modal */}
                    <div className="flex flex-row justify-between items-center w-full p-8">
                        <h1 className="text-white font-title text-xl sm:text-4xl font-bold">
                            Todos los proyectos
                        </h1>

                        <md-filled-icon-button className="text-white font-bolder flex justify-center items-center" onClick={onClose}>
                            <md-icon>
                                <FontAwesomeIcon icon={faX}/>
                            </md-icon>
                        </md-filled-icon-button>

                    </div>
                    <p className="px-9 sm:px-8 text-white font-body text-base mt-4 sm:text-lg text-justify py-4 sm:py-6">
                        Aquí encontrarás los proyectos realizados y puedes conocer sus características, las
                        tecnologías empleadas y el repositorio con el código del mismo. Puedes filtrar los items por tecnologías, lenguajes y dispositivos de destino.
                    </p>

                    {/* Botón para abrir el cuadro flotante */}
                    <span className="flex w-full py-5 px-8 justify-end items-center">
                        <md-filled-tonal-button onClick={handleOpenDialog}>
                            <FontAwesomeIcon icon={faFilter} className="mr-4" />
                            Ordenar por
                        </md-filled-tonal-button>
                    </span>

                    {/* Componente del cuadro flotante usando Material Web Dialog */}
                    {isDialogOpen && (
                        <DialogFilter handleClose={handleCloseDialog} />
                    )}
                </section>
            </div>
        </>
    );
}

export default ProjectCompose;