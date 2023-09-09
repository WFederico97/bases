"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado ! `;
    let myFunction;
    //* Para tipar la funcion utilizamos '(parametro 1 : tipo , parametro 2 : tipo)=> 'tipo de devolucion' '
    //! myFunction = 10;
    // myFunction = addNumbers
    // console.log(myFunction(1,25))
    // myFunction = greet
    // console.log(myFunction('Fede'))
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
