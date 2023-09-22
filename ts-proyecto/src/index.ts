import { getPokemon } from "./generics/getPokemon";


getPokemon(20)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.log(error))
    .finally(()=> console.log('fin pokemon'))