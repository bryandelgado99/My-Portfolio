import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@material/web/iconbutton/filled-icon-button';

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col w-full bg-indigo-600 backdrop-blur-2xl bg-opacity-40 rounded-lg shadow-lg overflow-hidden sm:transition-all sm:hover:scale-z1 cursor-pointer">
      <div className="p-4 flex flex-row justify-between items-center">
        <aside className="">
          <h2 className="text-xl font-semibold font-title text-white">{title}</h2>
          <p className="mt-2 text-gray-200 font-body text-sm tablet:text-base mr-4">{description}</p>
        </aside>

        <span className="flex justify-end items-center">
          <md-filled-icon-button>
            <FontAwesomeIcon icon={faArrowRight} />
          </md-filled-icon-button>
        </span>
      </div>

      {/* Contenedor de la imagen */}
      <div className="relative flex h-64 w-full justify-center items-center sm:right-0 sm:bottom-0">
        <img className="object-contain h-full w-full" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Card;