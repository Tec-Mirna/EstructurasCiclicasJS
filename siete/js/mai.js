/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
 */

function numbers() {
    let numbersNegativos = 0;
    let numbersPositivos = 0;
    let multiplos = 0;
    let numbersoPares = 0;
  
    for (let i = 0; i < 10; i++) {
      let valor = (prompt(`Ingrese el valor #${i + 1}:`));
  
      if (valor < 0) {
        numbersNegativos++;
      } else if (valor > 0) {
        numbersPositivos++;
      }
  
      if (valor % 15 === 0) {
       multiplos++;
      }
  
      if (valor % 2 === 0) {
        numbersoPares++;
      }
    }
  
    console.log(`Cantidad de valores negativos ingresados: ${numbersNegativos}`);
    console.log(`Cantidad de valores positivos ingresados: ${numbersPositivos}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplos}`);
    console.log(`Valor acumulado de números pares: ${numbersoPares}`);
  }
  
  
  numbers();
  