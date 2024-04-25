
const persona1 = {
    nombre: "Ana",
    sexo: "mujer",
    edad: 30,
  };
  
  const persona2 = {
    nombre: "Carlos",
    sexo: "hombre",
    edad: 25,
  };
  
  const persona3 = {
    nombre: "María",
    sexo: "mujer",
    edad: 28,
  };
  
  
  const personas = [persona1, persona2, persona3];
  
  
  function calcularPromedioEdad(personas) {
    const totalEdades = personas.reduce((suma, persona) => suma + persona.edad, 0);
    return totalEdades / personas.length;
  }
  
  
  function encontrarMujerMayor(personas) {
    return personas.reduce((mayor, persona) => {
      if (persona.sexo === "mujer" && persona.edad > mayor.edad) {
        return persona;
      }
      return mayor;
    }, { edad: 0 });
  }
  
  
  function encontrarHombreMenor(personas) {
    return personas.reduce((menor, persona) => {
      if (persona.sexo === "hombre" && persona.edad < menor.edad) {
        return persona;
      }
      return menor;
    }, { edad: Infinity });
  }
  
  
  function calcularPromedioEdadMujeres(personas) {
    const mujeres = personas.filter(persona => persona.sexo === "mujer");
    const totalEdadesMujeres = mujeres.reduce((suma, mujer) => suma + mujer.edad, 0);
    return totalEdadesMujeres / mujeres.length;
  }
  
  
  console.log("Promedio de edad:", calcularPromedioEdad(personas));
  console.log("Mujer con mayor edad:", encontrarMujerMayor(personas).nombre);
  console.log("Hombre con menor edad:", encontrarHombreMenor(personas).nombre);
  console.log("Promedio de edad de las mujeres:", calcularPromedioEdadMujeres(personas));
  