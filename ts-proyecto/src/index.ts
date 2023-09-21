// //!Importamos Hero con alias SuperHero con la palabra reservada "as"
// import { Hero as SuperHero, Hero2 } from "./classes/hero";
// import * as HeroClasses from './classes/Hero'
// import powers from './data/powers';
// import { Hero } from "./classes/Hero"
// const ironMan = new Hero ('Tony Stark',2,25)

// console.log(ironMan)
// console.log(ironMan.power)

//* Generics
import { printObj, genericFn, genericArrowFn } from "./generics/generics";


// printObj(123);
// printObj(new Date());
// printObj({a: 1, b: 2})
// printObj([1,2,3,4,5,6,7])
// printObj('Hola Mundo')

console.log(genericFn(3.25).toFixed(1))
console.log(genericFn('hola').toUpperCase())
console.log(genericArrowFn(123456.12345).toFixed(2))