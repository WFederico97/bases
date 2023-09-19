(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };


  const printAvengers = ({activo, poder}: Avengers): void => {  //? podemos desestructurar la clase avengers directamente en la constante
    console.log(poder)                                              //? podemos usar el spread operator tambien para traer el resto de las propiedades aparte
  }

  printAvengers(avengers)


  const avengersArr: [string, boolean, number] = ['CAP America', false, 123];

  const [heroe,isDead] = avengersArr

  console.log({heroe, isDead})


  // const {poder,vision} = avengers

  // console.log(poder, vision.toUpperCase())
})();
