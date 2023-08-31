"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PowerLevel;
    (function (PowerLevel) {
        PowerLevel[PowerLevel["batman"] = 1] = "batman";
        PowerLevel[PowerLevel["Aquaman"] = 1] = "Aquaman";
        PowerLevel[PowerLevel["flash"] = 5] = "flash";
        PowerLevel[PowerLevel["superman"] = 100] = "superman";
    })(PowerLevel || (PowerLevel = {}));
    const fuerzaFlash = PowerLevel.flash;
    const fuerzaSuperman = PowerLevel.superman;
    const fuerzaBatman = PowerLevel.batman;
    const fuerzaAcuaman = PowerLevel.Aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
