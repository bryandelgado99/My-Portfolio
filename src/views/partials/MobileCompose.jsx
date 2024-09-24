import React from 'react';
import '@material/web/iconbutton/outlined-icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MobileProjects } from '../../components/ProjectCard';

function MobileCompose({ isOpen, onClose }) {

    if (!isOpen) return null;  // Si no está abierto, no renderiza nada

    return (
        <div className="fixed inset-0 z-50 flex flex-col justify-start items-center bg-indigo-400 bg-opacity-40 backdrop-blur-lg animate__animated animate__fadeInUp">
            <div className='flex w-full h-fit justify-end items-center px-6 py-8'>
                <span>
                    <md-outlined-icon-button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} className='text-white'/>
                     </md-outlined-icon-button>
                </span>
            </div>
            <h1 className="text-white text-2xl font-title font-semibold tablet:text-4xl py-8">{"<Aplicaciones Móviles/>"}</h1>
            <div className='flex w-full h-96 mt-9'>
                {/* Contenido del modal */}
                <MobileProjects/>
            </div>
        </div>
    );
}

export default MobileCompose;
