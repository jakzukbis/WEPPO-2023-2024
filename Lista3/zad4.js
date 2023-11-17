function sum(){
    suma = 0
    for (let i = 0; i < arguments.length; i++)
    {
        suma += arguments[i]
    }
    return suma
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))