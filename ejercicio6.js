function enumerarElementosEntre(minimo, maximo) {
    const elementos = [];
    for (let i = minimo + 1; i < maximo; i++) {
      elementos.push(i);
    }
    return elementos;
  }
  
  
  const valorMinimo = 3;
  const valorMaximo = 10;
  const elementosEntre = enumerarElementosEntre(valorMinimo, valorMaximo);
  console.log("Elementos entre", valorMinimo, "y", valorMaximo, ":", elementosEntre);