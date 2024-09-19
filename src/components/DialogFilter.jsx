import React, { useEffect, useRef } from 'react';
import '@material/web/dialog/dialog';
import '@material/web/button/text-button';
import '@material/web/button/filled-tonal-button';
import '@material/web/radio/radio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importar los íconos que necesitas
import { faGlobe, faCode, faCube, faSyncAlt, faBorderAll, faMobile } from '@fortawesome/free-solid-svg-icons'; // Íconos sólidos
import { faReact, faAngular, faJava } from '@fortawesome/free-brands-svg-icons'; // Íconos de marcas
import { faFlutter } from '@fortawesome/free-brands-svg-icons';

function DialogFilter({ handleClose }) {
    const dialogRef = useRef(null); // Referencia al diálogo

    useEffect(() => {
        const dialog = dialogRef.current;

        if (dialog) {
            dialog.show(); // Abre el diálogo al montar el componente

            // Escucha el evento de cierre del diálogo
            const closeHandler = () => {
                handleClose(); // Llama a la función de cierre pasada por props
            };

            dialog.addEventListener('closed', closeHandler);

            return () => {
                dialog.removeEventListener('closed', closeHandler);
            };
        }
    }, [handleClose]);

    // Array de opciones para los radio buttons
    const options = [
        { id: 'all', label: 'Todos', value: 'Todos', icon: faBorderAll },
        { id: 'web-app', label: 'Aplicación Web', value: 'Aplicación Web', icon: faGlobe },
        { id: 'mobile-app', label: 'Aplicación Móvil', value: 'Aplicación Móvil', icon: faMobile },
        { id: 'hybrid-system', label: 'Sistema Híbrido', value: 'Sistema Híbrido', icon: faSyncAlt },
        { id: 'flutter', label: 'Flutter', value: 'Flutter', icon: faFlutter },
        { id: 'react', label: 'React', value: 'React', icon: faReact },
        { id: 'tailwind', label: 'Tailwind', value: 'Tailwind', icon: 'bxl-tailwind-css', isBoxIcon: true }, // Usar BoxIcons para Tailwind
        { id: 'jetpack-compose', label: 'JetPack Compose', value: 'JetPack Compose', icon: faCube },
        { id: 'java', label: 'Java', value: 'Java', icon: faJava },
        { id: 'ionic', label: 'Ionic', value: 'Ionic', icon: 'logo-ionic', isIonIcon: true }, // Caso especial para Ionic
        { id: 'angular', label: 'Angular', value: 'Angular', icon: faAngular },
    ];

    return (
        <md-dialog ref={dialogRef} className="isOpen">
            <div slot="headline" className='font-title font-bold sm:title-2xl title-lg'>
                Ordenar items
            </div>
            <form slot="content" id="form-id" method="dialog" className='font-body text-white'>
                <p className='sm:text-base text-sm py-4'>Selecciona el tipo de característica o tecnología a buscar</p>
                <hr className='mt-2 mb-2' />

                {/* Contenedor para el scroll con estilo Material Design */}
                <div className="max-h-64 overflow-y-auto scroll-m-2">
                    {/* Generar los radio buttons dinámicamente desde el array */}
                    <div className="space-y-4">
                        {options.map(({ id, label, value, icon, isBoxIcon, isIonIcon }) => (
                            <div key={id} className="flex items-center space-x-2">
                                <md-radio id={`${id}-radio`} name="technology" value={value}></md-radio>
                                <label htmlFor={`${id}-radio`} className="flex items-center space-x-2">
                                    {isBoxIcon ? (
                                        // Caso especial para BoxIcons
                                        <i className={`bx ${icon} text-base text-white`}></i>
                                    ) : isIonIcon ? (
                                        // Caso especial para Ionic (usa ion-icon en lugar de BoxIcons)
                                        <ion-icon name={icon} className="text-base text-white"></ion-icon>
                                    ) : (
                                        <FontAwesomeIcon icon={icon} className="text-base" />
                                    )}
                                    <span>{label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='mb-2 mt-2' />
            </form>
            <div slot="actions" className='font-label'>
                <md-filled-tonal-button form="form-id" type="submit">Buscar</md-filled-tonal-button>
                <md-text-button onClick={() => dialogRef.current.close()} className="font-label">Cerrar</md-text-button>
            </div>
        </md-dialog>
    );
}

export default DialogFilter;