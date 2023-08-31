"use strict";
(() => {
    //!Los enums permiten una escala numerica o numeraciones que tengan un sentido semantico para comprender valores maximos , medios y minimos
    //!Los enums son una cierta manera de manejar numeros
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log('Audio Level = ' + currentAudio);
    console.log(AudioLevel);
})();
