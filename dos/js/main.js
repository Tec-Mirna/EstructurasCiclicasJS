/* 2- Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
 
    let notaExamen = examen * 0.2;
    let notaTareas = tareas * 0.4;
    let notaAsistencia = asistencia * 0.1;
    let notaInvestigacion = investigacion * 0.3;


    let notaFinal = notaExamen + notaTareas + notaAsistencia + notaInvestigacion;

    
    console.log("Datos del alumno:");
    console.log("Nombre: " + nombre);
    console.log("Carnet: " + carnet);
    console.log("Nota Final: " + notaFinal);
    
    return notaFinal; 

}
let notaAlumno = calcularNotaFinal("MIRNA LEMUS", "LR22003", 9, 8, 10, 9); 


