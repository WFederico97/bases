"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman(true);
const unirheroes = (...personas) => {
    return personas.join(", ");
};
unirheroes('Jorge', 'Humberto', 'Anibal', 'Rafael');
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ' '} `;
    };
    const name = fullName('tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName("clark", "joseph", "kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado ! `;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    ;
    const activateBatiSignal = () => {
        return 'batiseñal activada';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'barry allen',
        age: 24,
        powers: ['Super Velocidad', 'viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 55,
        powers: ['Super Velocidad']
    };
})();
(() => {
    var _a;
    let flash = {
        name: 'barry allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 55,
        powers: [1],
        getName() {
            return this.name;
        },
    };
    console.log((_a = superman.getName) === null || _a === void 0 ? void 0 : _a.call(superman));
})();
(() => {
    let myCustomVariable = 'Federico';
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 168.325;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ["omega rojo", " Dormammu", "Duende Verde"];
    villians.forEach((v) => console.log(v.toUpperCase()));
    numbers.forEach((n) => console.log(n));
})();
(() => {
    let isSuperman = true;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log('Audio Level = ' + currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Error en la base de datos');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('hasta los huevos');
    }
    {
        console.log('Zafamos');
    }
})();
(() => {
    var _a;
    const batman = ' Batman';
    const joker = 'joker';
    console.log(batman);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['Dr strange', 100, true];
    hero[0] = 'Spiderman';
    hero[1] = 250;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const a = callBatman();
    console.log(a);
    const callSuperman = () => {
        return;
    };
})();
//# sourceMappingURL=main.js.map