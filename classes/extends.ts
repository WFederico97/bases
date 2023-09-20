(()=> {

    class Avenger {
        constructor (
            public name: string,
            public realName: string,
        ) {
            // console.log('Constructor Avenger llamado!')
        }
        protected getFullName(){ //!Protected a diferencia de private, puede hacer llegar el metodo a todas las clases que extiendan la clase padre
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean //! declaro las propiedades de la clase Xmen
        ) {
            super(name, realName) //! traigo las propiedades de Avenger porque es la super clase que hereda Xmen
        }

        get fullName() { //! Los getter siempre devuelven algo
            return `${ this.name } - ${this.realName}`
        } 
        
        set fullName(name: string){ //! Los setter no devuelven nada la mayoría de las veces
            if(name.length < 3){
                throw new Error('El nombre debe de ser mayor de 3 letras')
            }
            this.name = name
        }

        getFullNameDesdeXmen (){
            console.log(super.getFullName())
        }
    }

    const wolverine = new Xmen('Wolverine','Logan',true) //! Le paso la unica propiedad declarada en la clase Xmen
    // console.log(wolverine)
    // wolverine.getFullNameDesdeXmen()
    // console.log(wolverine.fullName)
    wolverine.fullName = 'Federico'
    // console.log(wolverine.fullName)
})()