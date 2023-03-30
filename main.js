//Identifico como clase a ALUMNO, cuyas propiedades son nombre y notas\\
class Alumno {
    constructor (nombre, notas){
        this.nombre = nombre;
        this.notas = notas;
    }     
}

//Realizo un Array para almacenar mis alumnos con sus respectivos parámetros, en los cuales encontraremos al nombre, y dentro de las notas, las correspondientes tanto al primer parcial como al segundo parcial. Dentro del Array tan sólo por el orden de ingreso se identifica a la primera como nota primer parcial, y a la segunda como nota segundo parcial.\\

const alumnos = [
    new Alumno ("Manuel González Alayes", [8, 9]),
    new Alumno ("Alejandro Wilcke", [10, 9]),
    new Alumno ("Lionel Messi", [10, 10]),
    new Alumno ("Cristina Fernández", [1, 1]),
    new Alumno ("Alberto Fernández", [4, 3]),
    new Alumno ("Fernando Peña", [6, 6]),
]

// En caso de querer consultar algún alumno del listado dentro del array dentro de la lista 0-5. Ingresamos en la siguiente fórmula el nro. de alumno. Por ejemplo, alumno 2 -Lionel Messi.
// console.log (alumnos[2])

// El forEach recorre el Array de alumnos, aplicando esa function a los alumnos de dicho array
alumnos.forEach(function (alumno,index) {
    const promedio = calcularPromedio (alumno.notas[0], alumno.notas[1])

    if(promedio>=7){
        console.log ("El estudiante ha promocionado la asignatura y por lo tanto no debe rendir final")
    }
    else if(promedio >=4 && promedio<7){
        console.log ("El estudiante ha aprobado la asignatura pero aún debe rendir final")
    }
    else if(promedio<4){
        console.log ("El estudiante ha desaprobado la asignatura y por lo tanto debe recursar")
    }
});

function calcularPromedio (nota1 , nota2){
    return ((nota1 + nota2) /2)
}

    console.log ("En esta asignatura no se permite rendir examen recuperatorio. A partir del promedio de notas de los parciales del estudiante, será posible determinar si el estudiante ha promocionado la asignatura y por lo tanto no debe rendir final; si el estudiante ha aprobado la asignatura pero aún debe rendir final; o si el estudiante ha desaprobado la asignatura y por lo tanto debe recursar")


// console.log("El estudiante " + nombreAlumnoNuevo +" ha obtenido una nota de " +notaPrimerParcial, 
// " en su primer parcial. Mientras que en su segundo parcial obtuvo un " +notaSegundoParcial+ 
// ". Esto significa que la nota promedio resultante de ambos parciales es un " +promedio + ".")

