(()=>{
    //* Agrego el simbolo '?' para que sea opcional el tipo de dato
    const fullName = (firstName : string , lastName?:string) : string => {
        return `${firstName} ${lastName || ' '} `;
    }

    const name = fullName('tony')

    console.log({name})
    
})()