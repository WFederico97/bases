export const printObj = (argument: any ) :void => {
    console.log(argument)
}

// export function genericFn (argument: any) {
//     return argument;
// }

export function genericFn<T> (argument: T) { //! con <T> designamos que una funcion es genérica
    return argument;
}

export const genericArrowFn = <T> (argument: T) =>  argument;