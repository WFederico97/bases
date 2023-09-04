"use strict";
(() => {
    //* Agrego el simbolo '?' para que sea opcional el tipo de dato
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ' '} `;
    };
    const name = fullName('tony');
    console.log({ name });
})();
