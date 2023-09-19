"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    };
    const batman = {
        name: 'Batman',
        weapon: 'Bati Movil'
    };
    const flash = {
        name: 'Flash',
        weapon: 'Super Velocidad'
    };
    const avengers = [ironman, batman, flash];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    const printAvengers = ({ activo, poder }) => {
        console.log(poder);
    };
    printAvengers(avengers);
    const avengersArr = ['CAP America', false, 123];
    const [heroe, isDead] = avengersArr;
    console.log({ heroe, isDead });
})();
(() => {
    let a = "Federico";
    console.log(a);
})();
//# sourceMappingURL=main.js.map