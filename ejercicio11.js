const palabra = "aleatorio"; 


const ocurrencias = {};


for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i].toLowerCase(); 
    if (letra.match(/[a-z]/)) {
        
        if (ocurrencias[letra]) {
            
            ocurrencias[letra]++;
        } else {
            
            ocurrencias[letra] = 1;
        }
    }
}


const letrasUnicas = Object.keys(ocurrencias).filter(letra => ocurrencias[letra] === 1);
const letrasRepetidas = Object.keys(ocurrencias).filter(letra => ocurrencias[letra] > 1);

console.log("Palabra: ", palabra);
console.log("Letras únicas:", letrasUnicas);
console.log("Letras repetidas:", letrasRepetidas);