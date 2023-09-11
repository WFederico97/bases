"use strict";
(() => {
    var _a;
    //*En los objetos, a diferencia de las funciones, no importa el orden de las propiedades.
    //* Por conveniencia se los ordena alfabeticamente 
    let flash = {
        name: 'barry allen',
        age: 24,
        powers: ['Super Velocidad', 'viajar en el tiempo']
    };
    flash = {
        name: 'Quiñon Jijo',
        age: 55,
        powers: ['super fuerza'],
        getName() {
            return this.name;
        },
        //?la funcion getName la declaramos en el objeto de arriba , siendo un tipo funcion que devuelva un string
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
