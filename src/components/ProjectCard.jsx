import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faFlutter, faGithub, faNodeJs, faReact, faVuejs, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import 'boxicons'; // Importa BoxIcons
import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/button/filled-button';
import '@material/web/button/filled-tonal-button';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// Mapeo de tecnologías a íconos usando BoxIcons e Ionicons
const techIcons = {
  "React": <FontAwesomeIcon icon={faReact} className="text-xl"/>,
  "NodeJS": <FontAwesomeIcon icon={faNodeJs} className='text-xl'/>,
  "Firebase": <ion-icon name="logo-firebase" className='text-xl'></ion-icon>,
  "Tailwind": <box-icon name='tailwind-css' type='logo' className="text-xl"></box-icon>,
  "Ionic": <ion-icon name="logo-ionic" className="text-xl"></ion-icon>, // Ionicons para Ionic
  "Angular": <FontAwesomeIcon icon={faAngular} className="text-xl"/>,
  "Vue": <FontAwesomeIcon icon={faVuejs} className="text-xl"/>,
  "MongoDB": <box-icon name='mongodb' type='logo' className="text-xl"></box-icon>,
  "Flutter": <FontAwesomeIcon icon={faFlutter} className="text-xl"/>,
  "Bootstrap": <box-icon name='bootstrap' type='logo' className="text-xl"></box-icon>
};

// Función para obtener los datos desde el JSON
const fetchProjects = async (jsonFile) => {
  const response = await fetch(jsonFile);
  const data = await response.json();
  return data.projects;
};

// Componente para una tarjeta de proyecto
function ProjectCard({ project }) {
  return (
    <>
      {/* Tarjeta para dispositivos grandes */}
      <article className='hidden w-auto h-auto tablet:flex justify-between gap-4 rounded-3xl bg-white shadow-xl'>
        <div className='py-8 ml-8'>
          <h2 className='text-xl font-label font-bold'>{project.title}</h2>
          <p className='text-base text-gray-700 mt-3'>{project.description}</p>
          <aside className='flex flex-row mt-8 py-6 gap-8 justify-start items-center w-fit'>
            <Link to={project.github_repo}>
              <md-filled-tonal-button className="w-[170px] flex justify-center items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
                <span className='ml-8'>Repositorio</span>
              </md-filled-tonal-button>
            </Link>

            <Link to={project.live_preview}>
              <md-filled-button className="w-[170px] flex justify-center items-center gap-2">
                <FontAwesomeIcon icon={faGooglePlay} />
                <span className='ml-3'>Ver Demo</span>
              </md-filled-button>
            </Link>
          </aside>
        </div>
        <div className='relative bg-slate-500 rounded-2xl shadow-2xl'>
          <img src={project.image} className='w-[500px] h-full object-cover rounded-2xl' alt={project.title} />
          <div className='absolute flex justify-around items-center bottom-5 w-full'>
            {project.technologies.map((tech, index) => (
              <md-filled-tonal-icon-button key={index}>
                {techIcons[tech] || null} {/* Renderiza el ícono correspondiente o null si no existe */}
              </md-filled-tonal-icon-button>
            ))}
          </div>
        </div>
      </article>

      {/* Tarjeta para dispositivos móviles */}
      <article className='tablet:hidden flex w-auto h-auto flex-col justify-between gap-6 rounded-3xl bg-white shadow-2xl'>
        <div className='relative rounded-2xl shadow-md'>
          <img src={project.image} className='w-full h-[350px] object-cover rounded-t-2xl' alt={project.title} />
          <div className='absolute flex justify-around items-center bottom-5 w-full'>
            {project.technologies.map((tech, index) => (
              <md-filled-tonal-icon-button key={index}>
                {techIcons[tech] || null} {/* Renderiza el ícono correspondiente o null si no existe */}
              </md-filled-tonal-icon-button>
            ))}
          </div>
        </div>
        <div className='px-8'>
          <h2 className='text-xl font-label font-bold'>{project.title}</h2>
          <p className='text-base text-gray-700 mt-3 text-justify'>{project.description}</p>
          <aside className='flex flex-col py-10 mb-4 gap-8 justify-start items-center w-full'>
            <Link to={project.github_repo}>
              <md-filled-tonal-button className="">
                <FontAwesomeIcon icon={faGithub} className='text-base'/>
                <span className='ml-8 text-base'>Repositorio</span>
              </md-filled-tonal-button>
            </Link>
            <Link to={project.live_preview}>
              <md-filled-button className="">
                <FontAwesomeIcon icon={faLink} className='text-base'/>
                <span className='ml-3 text-base'>Ver Demo</span>
              </md-filled-button>
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}

// Función para renderizar las tarjetas de proyectos móviles
function MobileProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects('../src/databases/mobile_projects.json').then(setProjects);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-scroll h-full p-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

// Función para renderizar las tarjetas de proyectos web
function WebProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects('../src/databases/web_projects.json').then(setProjects);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-scroll h-auto p-8 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export { MobileProjects, WebProjects };