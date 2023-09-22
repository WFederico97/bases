var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("generics/generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericArrowFn = exports.genericFn = exports.printObj = void 0;
    const printObj = (argument) => {
        console.log(argument);
    };
    exports.printObj = printObj;
    function genericFn(argument) {
        return argument;
    }
    exports.genericFn = genericFn;
    const genericArrowFn = (argument) => {
        return argument;
    };
    exports.genericArrowFn = genericArrowFn;
});
define("index", ["require", "exports", "generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLvl: 130
    };
    console.log((0, generics_1.genericArrowFn)(deadpool));
});
define("data/powers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const powers = [
        {
            id: 1,
            desc: 'Super Fuerza'
        },
        {
            id: 2,
            desc: 'Super Velocidad'
        },
        {
            id: 3,
            desc: 'Invisibilidad'
        },
    ];
    exports.default = powers;
});
define("classes/Hero", ["require", "exports", "data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero3 = exports.Hero2 = exports.Hero1 = exports.Hero = void 0;
    powers_1 = __importDefault(powers_1);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_1.default.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.desc) || 'not found';
        }
    }
    exports.Hero = Hero;
    class Hero1 {
        constructor() { }
    }
    exports.Hero1 = Hero1;
    class Hero2 {
        constructor() { }
    }
    exports.Hero2 = Hero2;
    class Hero3 {
        constructor() { }
    }
    exports.Hero3 = Hero3;
});
define("interfaces/hero", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/villian", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=main.js.map