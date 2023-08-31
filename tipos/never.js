"use strict";
(() => {
    //! never , rompe codigo , hace que no siga el codigo hasta ese punto
    const error = (message) => {
        throw new Error(message);
    };
    error('Error en la base de datos');
})();
