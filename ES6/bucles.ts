(()=> {
    type Avenger = {
        name: string,
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    }
    const batman: Avenger = {
        name: 'Batman',
        weapon: 'Bati Movil'
    }
    const flash: Avenger = {
        name: 'Flash',
        weapon: 'Super Velocidad'
    }

    const avengers: Avenger[] = [ironman,batman,flash]

    for (const avenger of avengers) {
        console.log(avenger)
    }
})()