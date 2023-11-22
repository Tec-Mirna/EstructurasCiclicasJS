/* 4 */
function ingresaNumero() {
    let num1 = (prompt("Ingresa el primer número entero:"));
    let num2 = (prompt("Ingresa el segundo número entero:"));
    numMayor(num1, num2)
}
function numMayor(num1, num2) {
    
   let resultadosDiv = document.getElementById('resultado')
    if ((num1) && (num2)) {
        let mayor = num1 > num2 ? num1 : num2;
    resultadosDiv.textContent = `El número mayor es: ${mayor}`;
    } else {
        resultadosDiv.textContent = "Por favor, ingresa números válidos.";
    }
  }
  
