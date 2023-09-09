(() => {
    //Rest args nos permite tener varias propiedades no obligatorias a traves de parametros
    // '...' es lo que hay que escribir para traer las propiedades no obligatorias 
    // hace un arreglo de propiedades
    const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`
  };

  const superman = fullName("clark", "joseph", "kent");

  console.log({ superman });
})();
