// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '@material/web/button/filled-button.js';
import ProjectCompose from './partials/ProyectCompose.jsx'; // Importa el componente del modal

function ProjectsView() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section id="proyectos" className="min-h-screen flex dark:bg-gray-600 z-10">
                <aside className="flex justify-center items-start flex-col sm:w-1/2 sm:h-auto w-auto h-1/2 p-5">
                    <h1 className="sm:relative sm:py-10 sm:px-10 sm:text-5xl font-title font-bold text-white text-3xl my-8">Proyectos</h1>
                    <p className="sm:px-10 sm:py-12 sm:text-xl font-body leading-normal text-justify text-white text-base">
                        Encontrarás una variedad de proyectos web y móviles que reflejan mi experiencia en el desarrollo de aplicaciones modernas y funcionales. He trabajado en soluciones adaptables a diferentes plataformas, utilizando las últimas tecnologías para crear experiencias de usuario intuitivas y eficientes. Desde tiendas en línea hasta aplicaciones móviles, cada proyecto demuestra mi capacidad para abordar desafíos técnicos y de diseño, ofreciendo soluciones innovadoras y sostenibles.
                    </p>
                    <div className="flex w-full sm:justify-end sm:items-end sm:px-12 my-8 justify-center items-center font-label font-bolder">
                        <md-filled-button onClick={openModal}>
                            <span className="text-white">Ver todos los proyectos</span>
                        </md-filled-button>
                    </div>
                </aside>
                <aside className="flex justify-center items-center flex-col sm:w-1/2 sm:h-auto w-auto h-1/2 bg-indigo-400">
                    {/* Contenido adicional si es necesario */}
                </aside>
            </section>

            {/* Modal */}
            <ProjectCompose isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default ProjectsView;
