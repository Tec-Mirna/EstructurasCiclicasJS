/* Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial. */



function calcularAumento(nombre, salario, categoria) {
   
    let aumento = 0;
    let resultadosDiv = document.getElementById('resultados')

    switch (categoria) {
        case "A":
            aumento = salario * 0.15;
            break;
        case "B":
            aumento = salario * 0.3;
            break;
        case "C":
            aumento = salario * 0.05;
            break;
        case "D":
            aumento = salario * 0.2;
            break;
        default:
            resultadosDiv.innerHTML = "Categoría no válida";
            break;
    }

    let card = `
    <div class="card">
        <div class="card-body">
           <p class="title1">Datos del empleado:</p>
           <p>Nombre: ${nombre}</p>
           <p>Salario: $${salario}</p>
           <p>Categoría: ${categoria}</p>
           <p>Aumento Salarial: $${aumento}</p>
            <p>El salario total del empleado es: $${salario + aumento}</p>
        </div>
    </div>
`;
resultadosDiv.innerHTML = card;
    return aumento;
}

let nombre = "Mirna";
let salario = 2500;
let categoria = "B";

calcularAumento(nombre, salario, categoria);
