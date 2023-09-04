(()=>{
    const hero : string = 'Flash';

    function returnName(): string{
        return hero
    };

    const activateBatiSignal = (): string =>{
        return 'batiseñal activada'
    };

    console.log(typeof activateBatiSignal);

    const heroName = returnName();
})()