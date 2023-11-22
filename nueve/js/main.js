/* Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
 */

function convertirAFahrenheit(tempCelcius){
    //CONVERTIR TEMPERATURA A FAHRENHEIT
    const fahrenheit = (tempCelcius * 9 / 5) + 32;



    if(fahrenheit >= 14 && fahrenheit < 32){
       console.log (`${tempCelcius}°C equivalen a ${fahrenheit}°F. "Temperatura baja🥶"`)
    } else if (fahrenheit >= 32 && fahrenheit < 68){
        console.log(`${tempCelcius}°C equivalen a ${fahrenheit}°F. "Temperatura adecuada😊"`)  
    }else if (fahrenheit >= 68 && fahrenheit < 96){
        console.log(`${tempCelcius}°C equivalen a ${fahrenheit}°F. "Temperatura alta🥵"`)  
    }else {
        console.log("Temperatura desconocida🤔")
    }
  
}
const tempCelcius = 100;
convertirAFahrenheit(tempCelcius);