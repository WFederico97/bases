(() => {

    //! Interfaces vs Classes, Interfaces permiten ser declaradas dos veces para agregarle propiedades sin tener que modificar la anterior

  interface Client {
    name: string;
    age?: number;
    address: Address
    getFullAddress(id: string) : void //! Interfaces vs Classes, asi declaro el metodo en una interface a diferencia de la clase que es con una flecha
  }
  interface Address {
    id: number,
    zip: string,
    city: string
  }
    const client: Client = {
    name: "Federico",
    age: 26,
    address: {
      id: 125,
      zip: "1234",
      city: "Ottawa",
    },
    getFullAddress(id:string) {
        return this.address.city
    },
  };

  const client2: Client = {
    name: 'Gustavo',
    age: 22,
    address: {
        id:222,
        zip: '0',
        city: 'Allá'
    },
    getFullAddress(id:string) {
        return this.address.city
    },
  }

})();
