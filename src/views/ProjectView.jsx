import React, { useState } from 'react';
import '@material/web/button/filled-button.js';
import ProjectCompose from './partials/ProyectCompose.jsx'; 
import PortfolioSVG from '../assets/vectors/undraw_portfolio_update_re_jqnp.svg';

function ProjectsView() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* Modal */}
            <ProjectCompose isOpen={isModalOpen} onClose={closeModal} />

            <section 
                id="proyectos" 
                className="min-h-screen flex flex-col tablet:flex-col sm:flex-row z-10 dark:bg-indigo-400 bg-no-repeat bg-left-bottom"
                style={{ backgroundImage: `url(${PortfolioSVG})`, backgroundSize: 'auto 50%' }}>

                <h1 className="sm:relative text-bold font-title text-3xl text-white font-bold p-8 sm:text-5xl">Proyectos</h1>
                <p className="sm:px-10 sm:py-4 sm:text-xl font-body leading-normal tablet:text-justify text-white text-base">
                    Encontrarás una variedad de proyectos web y móviles que reflejan mi experiencia en el desarrollo de aplicaciones modernas y funcionales. He trabajado en soluciones adaptables a diferentes plataformas, utilizando las últimas tecnologías para crear experiencias de usuario intuitivas y eficientes. 
                    <br/> 
                    <br/> 
                    Desde tiendas en línea hasta aplicaciones móviles, cada proyecto demuestra mi capacidad para abordar desafíos técnicos y de diseño, ofreciendo soluciones innovadoras y sostenibles.
                </p>
                <div className="flex w-full sm:justify-end sm:items-end sm:px-12 my-8 justify-center items-center font-label font-bolder">
                    <md-filled-button onClick={openModal}>
                        <span className="text-white">Ver todos los proyectos</span>
                    </md-filled-button>
                </div>   
              
            </section>

        </>
    );
}

export default ProjectsView;