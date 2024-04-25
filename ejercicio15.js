function obtenerDivisores(minimo, maximo, divisor) {
    const divisores = [];
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        divisores.push(i);
      }
    }
    return divisores;
  }
  
  const min = 10;
  const max = 50;
  const div = 5;
  const listaDivisores = obtenerDivisores(min, max, div);
  console.log("Divisores entre", min, "y", max, "con divisor", div, ":", listaDivisores);