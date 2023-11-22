/* 8 Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
 */


  function tablaMultiplicar(){
    let number = prompt("Ingresa un número para generar la tabla de multiplicar")
    let tabla = `<h2 class="title">Tabla de multiplicar del número: ${number}</h2><table><tr><th></th><th></th></tr>`;
            
    
    if ((number)){
        for(let i = 1; i<11; i++){
            let resultado = number * i;
            tabla += `<tr><td>${number} * ${i}</td><td>${resultado}</td></tr>`;
        }
        tabla += `</table>`;
    }
    document.getElementById('tablaMultiplicar').innerHTML = tabla;
       
  }
  tablaMultiplicar();