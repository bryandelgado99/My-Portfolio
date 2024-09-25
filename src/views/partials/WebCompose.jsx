import React from 'react';
import '@material/web/iconbutton/outlined-icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { WebProjects } from '../../components/ProjectCard';

function WebCompose({ isOpen, onClose }) {

    if (!isOpen) return null;  // Si no está abierto, no renderiza nada

    return (
        <div className="fixed inset-0 z-50 flex flex-col justify-start items-center bg-indigo-300 bg-opacity-40 backdrop-blur-xl animate__animated animate__fadeInUp">
            <div className='flex w-full h-fit justify-end items-center px-6 py-8'>
                <span>
                    <md-outlined-icon-button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} className='text-white'/>
                     </md-outlined-icon-button>
                </span>
            </div>
            <h1 className="text-white text-xl font-title font-semibold tablet:text-3xl py-4 px-4 tablet:px-0 mb-4 text-center" >{"<Aplicaciones Web y Escritorio/>"}</h1>
            <WebProjects />
        </div>
    );
}

export default WebCompose;
