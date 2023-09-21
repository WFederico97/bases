"use strict";
(() => {
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
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: "Federico",
        age: 26,
        address: {
            id: 125,
            zip: "1234",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Gustavo',
        age: 22,
        address: {
            id: 222,
            zip: '0',
            city: 'Allá'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(15, 25));
})();
//# sourceMappingURL=main.js.map