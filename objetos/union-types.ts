(()=>{
    type Hero = { 
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string,
    }

    let myCustomVariable: (string | number | Hero) = 'Federico'
    console.log(myCustomVariable)
})() 