/* : Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */

function calcularDescuento(origen, destino, costoViaje) {
    let descuento = 0;
        //toLowerCase : INSENCIBLE A MAYUSCULAS Y MINUSCULAS
    if (origen.toLowerCase() === 'palma' && destino.toLowerCase() === 'la costa del sol') {
      descuento = 0.05; 
    } else if (destino.toLowerCase() === 'panchimalco') {
      descuento = 0.1; 
    } else if (destino.toLowerCase() === 'puerto el triunfo') {
      descuento = 0.15; 
    }
  
    let descuentoAplicado = costoViaje * descuento;
    let costoConDescuento = costoViaje - descuentoAplicado;
  
    return {
      descuento: descuento * 100, 
      costoConDescuento: costoConDescuento
    };
  }
  
  let origen = 'Palma';
  let destino = 'puerto el triunfo';
  let costoViaje = 600; 
  
  let resultadoDescuento = calcularDescuento(origen, destino, costoViaje);
  console.log(`Su destino es ${destino}, por tanto de se le hará un descuento del ${resultadoDescuento.descuento}%`)
  console.log(`El costo a pagar es de $${resultadoDescuento.costoConDescuento} en lugar de $${costoViaje} 😉`)
 
  