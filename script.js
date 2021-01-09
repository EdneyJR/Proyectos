/*
let js = 'asombroso';
console.log(40 + 8 + 23 - 10);

console.log('Edney');
console.log(24);

let nombre = "JONNY";

console.log(nombre);
console.log(nombre);
console.log(nombre);

//Convencion de los nombres de variables
let edney_stephanie = "ES";
let $function = 27;

let person = "Edney"
let PI = 3.1415;

let miPrimerTrabajo = "Telefonista"
let miTrabajoActual = "AyR Agent"

let trabajo1 = "telefonista"
let trabajo2 = "ayr agent"

console.log(miPrimerTrabajo);

let javascriptEsDivertido = true;
console.log(javascriptEsDivertido);

//console.log(typeof true);
console.log(typeof javascriptEsDivertido);
//console.log(typeof 23);
//console.log(typeof 'Edney');

javascriptEsDivertido = 'SI!'
console.log(typeof javascriptEsDivertido);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let edad = 30;
edad = 31;

const anioDeNacimiento = 1991;
// anioDeNacimiento = 1990;
// const trabajo;

var trabajo = 'programador';
trabajo = 'profesor';

apellido = 'Quezada';
console.log(apellido);

//Operadores matematicos
const ahora = 2021;
const edadDeEdney = ahora - 2004;
const edadDeStephanie = ahora - 1995;
console.log(edadDeEdney, edadDeStephanie);

console.log(edadDeEdney * 2, edadDeEdney / 10, 2 ** 3);
//2 ** 3 significa 2 elevado a 3 = 2 * 2 * 2

const nombre = 'Edney';
const apellido = 'Quezada';
console.log(nombre + ' ' + apellido);

//Operadores de asignacion
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Operadores de comparacion
console.log(edadDeStephanie > edadDeEdney); // >, <, >=, <=
console.log(edadDeEdney >= 18);

const esMayor = edadDeEdney >= 18;

console.log(ahora - 1995 > ahora - 2004);

const ahora = 2021;
const edadDeEdney = ahora - 2004;
const edadDeStephanie = ahora - 1995;

console.log(ahora - 2004 > ahora - 1995);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const promedioEdad = (edadDeEdney + edadDeStephanie) / 2
console.log(edadDeEdney, edadDeStephanie, promedioEdad);


//Coding Challenge #1
// Data 1
const markMass = 78, markHeight = 1.69, johnMass = 92, johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2, johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

//Data 2
const markMass = 95, markHeight = 1.88, johnMass = 85, johnHeight = 1.76;
const markBMI = markMass / (markHeight * markHeight), johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

const primerNombre = 'Edney'
const trabajo = 'Agente de AYR'
const añoDeNacimiento = 1996;
const año = 2021;

const edney = 'Me llamo ' + primerNombre + ', un ' + trabajo + ' de ' + (año - añoDeNacimiento) + ' años de edad!';
console.log(edney);

const edneyNuevo = `Me llamo ${primerNombre}, un ${trabajo} de ${año - añoDeNacimiento} años de edad!`;
console.log(edneyNuevo);

console.log(`Solo un String normal`);

console.log('Strings con \n\
multiples \n\
lineas');

console.log(`Strings con
multiples
lineas`);

const edad = 15;

if (edad >= 18) {
    console.log(`Stephanie puede comenzar con las clases de manejo🚗`);
} else {
    const aniosFaltantes = 18 - edad;
    console.log(`Stephanie es muy joven. Espera otros ${aniosFaltantes} anios 😘`);
}

const anioNacimiento = 2012;

let siglo;
if (anioNacimiento <= 2000) {
    siglo = 20;
} else {
    siglo = 21;
}
console.log(siglo);

//Coding Challenge #2
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`El BMI de Mark (${markBMI}) es mas grande que el BMI de John (${johnBMI})!`);
} else {
    console.log(`El BMI de John (${johnBMI}) es mas grande que el BMI de Mark (${markBMI})!`);
}
*/

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Edney'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('Tengo ' + 24 + ' anios!');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
