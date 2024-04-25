function contarCaracteres(texto='') {
    if (typeof texto !== 'string') return 'El valor ingresado no es una cadena';
    if (texto == '') return 'No ha ingresado ningun valor';
    return texto.length;
}

console.log(contarCaracteres('Bienvenido'));