const valores = [5, 20, 40]
let mayor = valores [0]
let menor = valores [0]

for (let numero of valores){
    if (numero > mayor){
    mayor = numero;
    } else if (numero < menor){
    menor = numero;
    }
}

console.log("El número de mayor valor es " +mayor);
console.log("El número de menor valor es " +menor);