import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faFlutter, faGithub, faNodeJs, faReact, faVuejs, faGooglePlay, faDartLang, faAndroid, faEdge, faWindows, faLinux } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import 'boxicons'; // Importa BoxIcons
import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/button/filled-button';
import '@material/web/button/filled-tonal-button';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import WebJSON from '../databases/web_projects.json';
import MobileJSON from '../databases/mobile_projects.json';

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
  "Bootstrap": <box-icon name='bootstrap' type='logo' className="text-xl"></box-icon>,
  "Dart": <FontAwesomeIcon icon={faDartLang} className="text-xl"/>,
  "Android": <FontAwesomeIcon icon={faAndroid} className="text-xl"/>,
  "Web": <FontAwesomeIcon icon={faEdge} className="text-xl"/>,
  "Windows": <FontAwesomeIcon icon={faWindows} className="text-xl"/>,
  "Linux": <FontAwesomeIcon icon={faLinux} className="text-xl"/>
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
        <div className='py-8 ml-8 w-2/3'>
          <h2 className='text-xl font-label font-bold'>{project.title}</h2>
          <p className='text-base text-gray-700 mt-3'>{project.description}</p>
          <aside className='flex flex-row mt-12 py-6 gap-8 justify-start items-center w-fit'>
            {project.technologies.map((tech, index) => (
              <md-filled-tonal-icon-button key={index}>
                {techIcons[tech] || null} {/* Renderiza el ícono correspondiente o null si no existe */}
              </md-filled-tonal-icon-button>
            ))}
          </aside>
        </div>
        <div className='relative bg-slate-500 rounded-2xl shadow-2xl w-2/3'>
          <img src={project.image} className='w-full h-[380px] object-cover flex justify-start rounded-2xl' alt={project.title} />
          <div className='absolute flex flex-row gap-4 justify-around items-center bottom-10 w-full'>
          <Link to={project.github_repo}>
              <md-filled-tonal-button className="w-[170px] flex justify-center items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
                <span className='ml-2'>Repositorio</span>
              </md-filled-tonal-button>
            </Link>

            {project.live_preview ? (
              <Link to={project.live_preview}>
                <md-filled-button className="w-[180px]">
                  <FontAwesomeIcon icon={faLink} className="text-base" />
                  <span className="ml-2 text-sm">Demo</span>
                </md-filled-button>
              </Link>
              ) : (
              <md-filled-button className="">
                Próximamente
              </md-filled-button>
              )
            }
          </div>
        </div>
      </article>

      {/* Tarjeta para dispositivos móviles */}
      <article className='tablet:hidden flex w-auto h-auto flex-col justify-between gap-6 rounded-3xl bg-white shadow-2xl'>
        <div className='relative rounded-2xl shadow-md'>
          <img src={project.image} className='w-full h-[350px] object-cover rounded-t-2xl' alt={project.title} />
          <div className='absolute flex justify-around items-center bottom-5 w-full'>
            <Link to={project.github_repo}>
              <md-filled-tonal-button className="">
                <FontAwesomeIcon icon={faGithub} className='text-base'/>
                <span className='ml-2 text-base'>Repositorio</span>
              </md-filled-tonal-button>
            </Link>
            {project.live_preview ? (
              <Link to={project.live_preview}>
                <md-filled-button className="w-[180px]">
                  <FontAwesomeIcon icon={faLink} className="text-base" />
                  <span className="ml-2 text-base">Demo</span>
                </md-filled-button>
              </Link>
              ) : (
              <md-filled-button className="">
                Próximamente
              </md-filled-button>
              )
            }
          </div>
        </div>
        <div className='px-8'>
          <h2 className='text-xl font-label font-bold'>{project.title}</h2>
          <p className='text-base text-gray-700 mt-3 text-justify'>{project.description}</p>
          <aside className='flex flex-row py-10 mb-4 gap-4 justify-start items-center w-full'>
          {project.technologies.map((tech, index) => (
              <md-filled-tonal-icon-button key={index}>
                {techIcons[tech] || null} {/* Renderiza el ícono correspondiente o null si no existe */}
              </md-filled-tonal-icon-button>
            ))}
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
    fetchProjects(MobileJSON).then(setProjects);
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
    fetchProjects(WebJSON).then(setProjects);
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