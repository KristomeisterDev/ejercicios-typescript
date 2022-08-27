function sumar(a: number, b: number): number {
    return a + b;
  }
  
  const sumarFlecha = (a: number, b: number): number => {
    return a + b;
  };
  
  const resultadoSuma = sumar(10, 25);
  
  //console.log(resultadoSuma);
  
  function multiplicar(
    numero: number,
    otroNumero?: number,
    base: number = 2
  ): number {
    return numero * base;
  }
  
  const resultadoMultiplicacion = multiplicar(5, 0, 10);
  
  //console.log(resultadoMultiplicacion)
  
  interface PersonajeLOTR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
  }
  
  function curar(personaje: PersonajeLOTR, curarPersonaje: number): void {
    personaje.pv += curarPersonaje;
  }
  
  const nuevoPersonaje: PersonajeLOTR = {
    nombre: "Strider", //trancos XD
    pv: 50,
    mostrarHp() {
      console.log("Puntos de Vida", this.pv);
    },
  };
  
  curar(nuevoPersonaje, 20);
  
  nuevoPersonaje.mostrarHp();