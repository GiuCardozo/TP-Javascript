function sumaNumerosPares(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            suma += array[i];
        }
    }
    return suma;
}

// Ejemplo de uso:
const miArray = [2, 5, 8, 10, 15, 20, 8, 9];
const resultado = sumaNumerosPares(miArray);
console.log(`La suma de los números pares en el arreglo es: ${resultado}`);