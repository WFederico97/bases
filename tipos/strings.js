"use strict";
(() => {
    var _a;
    const batman = ' Batman'; //* Tiene 6 caracteres
    const joker = 'joker';
    console.log(batman);
    //console.log(batman[10].toUpperCase()) //!Me tira error porque no posee 10 caracteres batman
    //console.log(batman[10]?.toUpperCase()) //Me devuelve undefined y evita el error con el signo '?.' o nullCheck
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente'); // Codigo mas eficiente que el anterior
})();
