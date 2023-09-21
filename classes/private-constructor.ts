(()=>{
    //! El private constructor solo se puede llamar dentro de la misma clase, patrón singleton
    class Apocalipis {

        static instance: Apocalipis;


        constructor(public name: string){

        }

        static callApocalipsis(): Apocalipis{
            if( !Apocalipis.instance){
                Apocalipis.instance = new Apocalipis ('Soy Apocalipsis el unico')
            }
            return Apocalipis.instance;
        }
        changeName (newName: string) : void{
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipis.callApocalipsis()
    const apocalipsis2 = Apocalipis.callApocalipsis()
    const apocalipsis3 = Apocalipis.callApocalipsis()

    apocalipsis1.changeName('Xavier')

    // console.log(apocalipsis1,apocalipsis2,apocalipsis3)




})()