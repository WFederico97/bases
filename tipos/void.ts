(()=> {
    //! Void establece que no hay un valor de retorno de una funcion

    function callBatman(): void {
        return
    }

    const a = callBatman()

    console.log(a)

    const callSuperman = (): void => {
        return
    }

})()