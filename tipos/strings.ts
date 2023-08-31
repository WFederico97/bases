(()=> {
  const batman: string = ' Batman' //* Tiene 6 caracteres
  const joker: string = 'joker'
  console.log(batman)  

    //console.log(batman[10].toUpperCase()) //!Me tira error porque no posee 10 caracteres batman
    //console.log(batman[10]?.toUpperCase()) //Me devuelve undefined y evita el error con el signo '?.' o nullCheck
    console.log(batman[10]?.toUpperCase() || 'No esta presente') // Codigo mas eficiente que el anterior
})()