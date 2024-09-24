import React from 'react';
import ElectronicaIMG from '../../public/assets/electronica.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDartLang, faFlutter, faGithub, faGooglePlay, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import '@material/web/iconbutton/filled-tonal-icon-button';
import '@material/web/button/filled-button';
import '@material/web/button/filled-tonal-button';
import { Link } from 'react-router-dom';

function ProjectCard() {
  return (
    <>
      {/*Tarjeta para dispositivos grandes */}
      <article className='hidden w-auto h-auto tablet:flex justify-between gap-4 rounded-3xl bg-white shadow-xl'>
        <div className='py-8 ml-8'>
          <h2 className='text-xl font-label font-bold'>Electrónica Zurita</h2>
          <p className='text-base text-gray-700 mt-3'>
            Una aplicación que permite la gestión de equipos y órdenes de trabajo para distintos servicios electrónicos.
          </p>
          <aside className='flex flex-row mt-8 py-6 gap-8 justify-start items-center w-fit'>
            <Link to="https://github.com/bryandelgado99/Electronica-Zurita--Mobile-App">
              <md-filled-tonal-button className="w-[170px] flex justify-center items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
                <span className='ml-8'>Repositorio</span>
              </md-filled-tonal-button>
            </Link>

            <Link to="https://play.google.com/store/apps/details?id=com.pauldev.electronica_zurita">
              <md-filled-button className="w-[170px] flex justify-center items-center gap-2">
                <FontAwesomeIcon icon={faGooglePlay} />
                <span className='ml-3'>Ver en Play Store</span>
              </md-filled-button>
            </Link>
          </aside>

        </div>
        <div className='relative bg-slate-500 rounded-2xl shadow-2xl'>
          <img src={ElectronicaIMG} className='w-[400px] h-full object-cover rounded-2xl' />

          <div className='absolute flex justify-around items-center bottom-5 w-full'>
            <md-filled-tonal-icon-button>
              <FontAwesomeIcon icon={faFlutter} className='text-xl' />
            </md-filled-tonal-icon-button>
            <md-filled-tonal-icon-button>
              <FontAwesomeIcon icon={faDartLang} className='text-xl' />
            </md-filled-tonal-icon-button>
            <md-filled-tonal-icon-button>
              <FontAwesomeIcon icon={faNodeJs} className='text-xl' />
            </md-filled-tonal-icon-button>
          </div>
        </div>
      </article>

      {/* Tarjeta para dispsoitivos móviles */}
      <article className='tablet:hidden flex w-auto h-auto flex-col justify-between gap-6 rounded-3xl bg-white shadow-2xl'>
          {/* Imagen */}
          <div className='relative rounded-2xl shadow-md'>
            <img src={ElectronicaIMG} className='w-full h-[350px] object-cover rounded-t-2xl' />

            <div className='absolute flex justify-around items-center bottom-5 w-full'>
              <md-filled-tonal-icon-button>
                <FontAwesomeIcon icon={faFlutter} className='text-xl' />
              </md-filled-tonal-icon-button>
              <md-filled-tonal-icon-button>
                <FontAwesomeIcon icon={faDartLang} className='text-xl' />
              </md-filled-tonal-icon-button>
              <md-filled-tonal-icon-button>
                <FontAwesomeIcon icon={faNodeJs} className='text-xl' />
              </md-filled-tonal-icon-button>
          </div>
        </div>

        <div className='px-8'>
          <h2 className='text-xl font-label font-bold'>Electrónica Zurita</h2>
          <p className='text-base text-gray-700 mt-3 text-justify'>
            Una aplicación que permite la gestión de equipos y órdenes de trabajo para distintos servicios electrónicos.
          </p>
          <aside className='flex flex-col py-10 mb-4 gap-8 justify-start items-center w-full'>
            <Link to="https://github.com/bryandelgado99/Electronica-Zurita--Mobile-App">
              <md-filled-tonal-button className="">
                <FontAwesomeIcon icon={faGithub} className='text-base'/>
                <span className='ml-8 text-base'  >Repositorio</span>
              </md-filled-tonal-button>
            </Link>

            <Link to="https://play.google.com/store/apps/details?id=com.pauldev.electronica_zurita">
              <md-filled-button className="">
                <FontAwesomeIcon icon={faGooglePlay} className='text-base'/>
                <span className='ml-3 text-base'>Ver en Play Store</span>
              </md-filled-button>
            </Link>
          </aside>

        </div>
        
      </article>
      
    </>
  );
}

// Componente contenedor para manejar múltiples tarjetas
function ProjectCardContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-1 lg:grid-cols-3 gap-8 overflow-y-scroll h-auto p-8">
      {/* Instancias de ProjectCard */}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      {/* Añade más ProjectCard según sea necesario */}
    </div>
  );
}

export default ProjectCardContainer;