(() => {
  //* Agrego el simbolo '?' para que sea opcional el tipo de dato
  const fullName = (
    firstName: string,
    upper: boolean,
    lastName?: string
  ): string => {
    return `${firstName} ${lastName || " "} `;
  };

  const name = fullName("tony", true);

  console.log({ name });
})();
