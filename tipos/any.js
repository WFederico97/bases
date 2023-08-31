"use strict";
(() => {
    let avenger = 123; //! Any permite cualquier tipo de dato, no es lo mas recomendable usarlo en Ts
    let exists;
    let power;
    avenger = 'Dr Strange';
    //console.log(avenger.charAt(0))
    console.log(avenger.charAt(0)); //* Casting para tratar a la variable como un string (variable as tipo).
    //* Tambien se puede castear de la manera (<tipo>variable)
    //* agregandole el punto a los casteos , aparecen las propiedades correspondiente al tipo de dato casteado
    avenger = 168.325;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
