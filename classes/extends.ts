(()=> {
    class Avenger {
        constructor (
            public name: string,
            public realName: string,
        ) {
            console.log('Constructor Avenger llamado!')
        }
        private getFullName(){
            return `${ this.name } ${ this.realName }`
        }
    }    
    class Xmen extends Avenger {
        constructor(
            public isMutant: boolean //! declaro las propiedades de la clase Xmen
        ) {
            super('Wolverine', 'Logan') //! traigo las propiedades de Avenger porque es la super clase que hereda Xmen
        }
    }

    const wolverine = new Xmen(true) //! Le paso la unica propiedad declarada en la clase Xmen

    console.log(wolverine)
})()