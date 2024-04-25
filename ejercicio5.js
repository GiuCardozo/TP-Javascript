function repeat ( string, n) {
    let repeatedString = "";
    
    while (n > 0) {
        repeatedString += string;
        n--;
    }

    return repeatedString;
}

let response = repeat(" Hola ", 8)

console.log("=== respuesta ===");
console.log(response);