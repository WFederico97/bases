"use strict";
(() => {
    //* Agrego el simbolo '?' para que sea opcional el tipo de dato
    const fullName = (firstName, upper, lastName) => {
        return `${firstName} ${lastName || " "} `;
    };
    const name = fullName("tony", true);
    console.log({ name });
})();
