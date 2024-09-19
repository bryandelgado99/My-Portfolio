import React, { useEffect, useRef } from 'react';
import '@material/web/dialog/dialog';
import '@material/web/button/text-button';
import '@material/web/button/filled-tonal-button';

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

    return (
        <md-dialog ref={dialogRef} className="isOpen">
            <div slot="headline" className='font-title font-bolder sm:title-2xl title-lg'>
                Ordenar items
            </div>
            <form slot="content" id="form-id" method="dialog" className='font-body text-white'>
                <p className='sm:text-base text-sm'>Selecciona el tipo de característica o tecnología a buscar</p>
                
            </form>
            <div slot="actions" className='font-label'>
                <md-filled-tonal-button form="form-id" type="submit">Buscar</md-filled-tonal-button>
                <md-text-button onClick={() => dialogRef.current.close()} className="font-label">Cerrar</md-text-button>
            </div>
        </md-dialog>
    );
}

export default DialogFilter;