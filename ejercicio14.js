const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function filtrarNumerosPares(arr) {
  return arr.filter(numero => numero % 2 === 0);
}


const numerosPares = filtrarNumerosPares(numeros);


console.log("Números pares:", numerosPares);