(()=>{

    type Hero = { //*Tipo Personalizado , tipamos un objeto que va a tener muchas variantes pero con los mismo tipos
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string,
    }

    //*  flash al ser de tipo Hero , name sera un string , age opcional y number, power arreglo de strings y getName opcional y funcion que devuelve un string
    let flash: Hero = {
        name: 'barry allen',
        age: 24,
        powers: [1, 2]
    }
    //*Lo mismo para superman
    let superman: Hero = {
        name: 'Clark Kent',
        age: 55,
        powers: [1],
        getName() {
            return this.name
        },
    }

    console.log(superman.getName?.())
})()