import React, { useState } from 'react';
import '@material/web/button/filled-button.js';
import CodingWeb from "../../public/coding-5-61.svg";
import CodingMobile from "../../public/mobile-phone-75.svg"
import ComposableCard from '../components/ComposableCard';
import MobileCompose from './partials/MobileCompose';
import WebCompose from './partials/WebCompose';


function ProjectsView() {
    const title = "<Proyectos/>";
    
    // Estado para controlar cuál modal está abierto
    const [openModal, setOpenModal] = useState(null);

    // Función para abrir el modal de Web Apps
    const handleOpenWebModal = () => {
        setOpenModal('web');
    };

    // Función para abrir el modal de Mobile Apps
    const handleOpenMobileModal = () => {
        setOpenModal('mobile');
    };

    // Función para cerrar cualquier modal
    const handleCloseModal = () => {
        setOpenModal(null);
    };

    return (
        <>
            <section 
                id="proyectos" 
                className="min-h-screen flex flex-col tablet:flex-col sm:flex-row gradient-background bg-gradient-base-purple z-50">
                
                <div className="flex flex-col p-10 sm:w-1/2 tablet:p-14 sm:justify-center sm:items-start">
                    <h1 className="sm:relative text-bold font-title text-3xl text-white font-bold tablet:text-5xl">{title}</h1>
                    <p className="mt-5 sm:text-lg py-4 tablet:text-xl font-body leading-normal text-justify text-white text-base tablet:py-8 tablet:mt-10">
                        Encontrarás una variedad de proyectos web y móviles que reflejan mi experiencia en el desarrollo de aplicaciones modernas y funcionales. He trabajado en soluciones adaptables a diferentes plataformas, utilizando las últimas tecnologías para crear experiencias de usuario intuitivas y eficientes. 
                        <br/> 
                        <br/> 
                        Desde tiendas en línea hasta aplicaciones móviles, cada proyecto demuestra mi capacidad para abordar desafíos técnicos y de diseño, ofreciendo soluciones innovadoras y sostenibles.
                    </p>
                </div>  

                {/* Sección para las tarjetas */}
                <div className='flex flex-col px-4 gap-4 sm:hidden mb-28'>
                    <ComposableCard 
                         title="Aplicaciones Web y Escritorio" 
                         description="Aplicaciones destinadas a entornos de sobremesa, más amplias y dinámicas." 
                         image={CodingWeb}
                         onClick={handleOpenWebModal}  // Maneja la apertura del modal de Web
                    />
                    <ComposableCard 
                         title="Aplicaciones Móviles" 
                         description="Un conjunto de aplicaciones al alcance de la mano." 
                         image={CodingMobile}
                         onClick={handleOpenMobileModal}  // Maneja la apertura del modal de Mobile
                    />
                </div>

                <div className='sm:flex sm:w-1/2 hidden sm:flex-col bg-gray-700 bg-opacity-70 w-fit gap-8 justify-evenly items-center backdrop-blur-xl rounded-l-6xl shadow-lg p-20 h-screen'>
                    <ComposableCard 
                         title="Aplicaciones Web y Escritorio" 
                         description="Aplicaciones destinadas a entornos de sobremesa, más amplias y dinámicas." 
                         image={CodingWeb}
                         onClick={handleOpenWebModal}  // Maneja la apertura del modal de Web
                    />
                    <ComposableCard 
                         title="Aplicaciones Móviles" 
                         description="Un conjunto de aplicaciones al alcance de la mano." 
                         image={CodingMobile}
                         onClick={handleOpenMobileModal}  // Maneja la apertura del modal de Mobile
                    />
                </div>
            </section>

            {/* Renderización condicional de los modales */}
            {openModal === 'web' && <WebCompose isOpen={true} onClose={handleCloseModal} />}
            {openModal === 'mobile' && <MobileCompose isOpen={true} onClose={handleCloseModal} />}
        </>
    );
}

export default ProjectsView;