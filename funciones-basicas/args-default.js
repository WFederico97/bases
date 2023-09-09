"use strict";
(() => {
    //* Agrego el simbolo '?' para que sea opcional el tipo de dato
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || " ---"} `.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || " ---"} `;
        }
    };
    const name = fullName("tony", 'stark', true);
    console.log({ name: name });
})();
