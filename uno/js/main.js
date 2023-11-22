/* 1 Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
 */

let age = document.getElementById('age');
let submitButton = document.getElementById('submitButton');
let messageDisplay = document.getElementById('messageDisplay');

submitButton.addEventListener('click', () => {
  let edad = parseInt(age.value);
  Message(edad);
});


age.addEventListener('input', () => {
  clearMessage();
});

// Elimina el mensjae
const clearMessage = () => {
  messageDisplay.textContent = "";
};

const Message = (edad) => {
  clearMessage(); //Elimina antes de mostrar otro mensaje

  if (edad >= 18) {
    messageDisplay.textContent = "Eres mayor de edad";
  } else {
    messageDisplay.textContent = "Eres menor de edad";
  }
};

 







