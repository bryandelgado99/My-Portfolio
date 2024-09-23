import React from 'react';
import '@material/web/button/filled-button.js';
import ProjectCompose from './partials/ProyectCompose.jsx'; 
import ComposableCard from '../components/ComposableCard.jsx';

function ProjectsView() {

    const title = "<Proyectos/>";

    return (
        <>
            <section 
                id="proyectos" 
                className="min-h-screen flex flex-col tablet:flex-col sm:flex-row z-10 dark:bg-indigo-500 bg-no-repeat bg-left-bottom sm:bg-none">

                <div className="flex flex-col p-10 sm:w-1/2 tablet:p-14 sm:justify-center sm:items-start">
                    <h1 className="sm:relative text-bold font-title text-3xl text-white font-bold tablet:text-5xl">{title}</h1>
                    <p className="mt-5 sm:text-lg py-4 tablet:text-xl font-body leading-normal text-justify text-white text-base tablet:py-8 tablet:mt-10">
                        Encontrarás una variedad de proyectos web y móviles que reflejan mi experiencia en el desarrollo de aplicaciones modernas y funcionales. He trabajado en soluciones adaptables a diferentes plataformas, utilizando las últimas tecnologías para crear experiencias de usuario intuitivas y eficientes. 
                        <br/> 
                        <br/> 
                        Desde tiendas en línea hasta aplicaciones móviles, cada proyecto demuestra mi capacidad para abordar desafíos técnicos y de diseño, ofreciendo soluciones innovadoras y sostenibles.
                    </p>
                </div>  

                <div className='flex flex-col gap-4 p-8 -mt-10 sm:hidden'>
                    <ComposableCard 
                         title="Aplicaciones Web" 
                         description="Aplicaciones destinadas a entornos de sobremesa, más amplias y dinámicas." 
                         image="./src/assets/vectors/coding-5-61.svg"
                    />
                    <ComposableCard 
                         title="Aplicaciones Móviles" 
                         description="Un cojunto de aplicaciones al alcance de la mano." 
                         image="./src/assets/vectors/mobile-phone-75.svg"
                    />
                </div>

                <div className='sm:flex sm:w-1/2 hidden sm:flex-col bg-gray-700 bg-opacity-70 w-fit gap-8 justify-evenly items-center backdrop-blur-xl rounded-l-6xl shadow-lg p-20 h-screen animate__animated animate__fadeInRight animate__delay-2s'>
                    {/* Mockups de proyectos, solamente en web  */}
                    <ComposableCard 
                         title="Aplicaciones Web" 
                         description="Aplicaciones destinadas a entornos de sobremesa, más amplias y dinámicas." 
                         image="./src/assets/vectors/coding-5-61.svg"
                    />
                    <ComposableCard 
                         title="Aplicaciones Móviles" 
                         description="Un cojunto de aplicaciones al alcance de la mano." 
                         image="./src/assets/vectors/mobile-phone-75.svg"
                    />
                </div>

            </section>

        </>
    );
}

export default ProjectsView;