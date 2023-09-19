"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger("Antman", "Capitan", "scott lang");
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(isMutant) {
            super('Wolverine', 'Logan');
            this.isMutant = isMutant;
        }
    }
    const wolverine = new Xmen(true);
    console.log(wolverine);
})();
//# sourceMappingURL=main.js.map