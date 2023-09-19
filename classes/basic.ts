(() => {
  // class Avenger { //! Version standard para declarar una clase en ts

  //     private name: string;
  //     public team: string;
  //     public realName? : string;
  //     static avgAge : number = 35;

  //     constructor (name:string, team:string,realName?:string){
  //         this.name = name;
  //         this.team = team;
  //         this.realName = realName;
  //     }
  // }

  class Avenger {
    //* Version mas simplificada para declarar una clase y ahorrar codigo

    static avgAge: number = 35;

    constructor(
      private name: string,
      public team: string,
      public realName?: string,
    //   avgAge: number = 55   //!accedemos a la propiedad static y le agregamos un nuevo valor
    ) {
        // Avenger.avgAge = avgAge //! la seteamos
    }
  }

  const antMan: Avenger = new Avenger("Antman", "Capitan", "scott lang");
//   console.log(antMan);

//   console.log(Avenger.avgAge) //! Logueamos la nueva propiedad static 
})();
