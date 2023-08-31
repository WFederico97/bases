(()=>{
    //!Los enums permiten una escala numerica o numeraciones que tengan un sentido semantico para comprender valores maximos , medios y minimos
    //!Los enums son una cierta manera de manejar numeros
    enum AudioLevel { //* la sintaxis se basa en el nombre escrito como UpperCamelCase
        min,
        medium,
        max
    }

    let currentAudio = AudioLevel.max

    console.log('Audio Level = ' + currentAudio)
    console.log(AudioLevel)

})()