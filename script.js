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

// 5 valores falsables: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Edney'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log(`No lo gastes todo!`);
} else {
    console.log(`Deberias conseguir trabajo`);
}

let altura = 0;
if (altura) {
    console.log(`Siii! altura esta definida`);
} else {
    console.log(`Altura no esta definida`);
}

const age = '18';
if (age === 18) console.log(`Te haz convertido en adulto, {estricto`);

if (age == 18) console.log(`Te haz convertido en adulto, {loose`);

const favorito = Number(prompt(`Cual es tu numero favorito`));
console.log(favorito);
console.log(typeof favorito);

if (favorito === 2) {
    console.log(`Genial 2 es un numero fantastico`);
} else if (favorito === 7) {
    console.log(`7 tambien es un numero genial`);
} else if (favorito === 9) {
    console.log(`9 tambien es un numero genial`);
} else {
    console.log(`Este numero no es ni 2 ni 7 ni 9`);
}

if (favorito !== 2) console.log(`Por que no 2?`);


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Stephanie es capaz de conducir🚲`);
// } else {
//     console.log(`Stephanie no puede conducir🚳`)
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Stephanie es capaz de conducir🚲`);
} else {
    console.log(`Stephanie no puede conducir🚳`)
}

//Coding Challenge #3
//Data 1
// const firtDolphinsScore = 96;
// const secondDolphinsScore = 108;
// const thirdDolphinsScore = 89;

// const firtKoalasScore = 88;
// const secondKoalasScore = 91;
// const thirdKoalasScore = 110;

//Data 2
// const firtDolphinsScore = 97;
// const secondDolphinsScore = 112;
// const thirdDolphinsScore = 101;

// const firtKoalasScore = 109;
// const secondKoalasScore = 95;
// const thirdKoalasScore = 123;

//Data 3
const firtDolphinsScore = 97;
const secondDolphinsScore = 112;
const thirdDolphinsScore = 80;

const firtKoalasScore = 109;
const secondKoalasScore = 95;
const thirdKoalasScore = 50;

const dolphinsAverage = (firtDolphinsScore + secondDolphinsScore + thirdDolphinsScore) / 3;
const koalasAverage = (firtKoalasScore + secondKoalasScore + thirdKoalasScore) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Los Delfines ganan con un promedio de ${dolphinsAverage} aqui tienen su trofeo! 🐬🏆`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
    console.log(`Hay un empate con un promedio de ${dolphinsAverage} para los delfines y ${koalasAverage} para los Koalas, ambos equipos reciben sus trofeos 🐬🐨🏆🏆`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Los Koalas ganan con un promedio de ${koalasAverage} su trofeo! 🐨🏆`);
} else {
    console.log(`Ninguno de los equipos obtuvo el minimo de 100 puntos requerido 😞`)
}

const day = 'lunes';

switch (day) {
    case 'lunes': // day === 'lunes'
        console.log('Planear la estructra del curso');
        console.log('Ir a un meeting de codificacion');
        break;
    case 'martes':
        console.log('Preparar teoria');
        break;
    case 'miercoles':
    case 'jueves':
        console.log('Escribir ejemplos de codigo');
        break
    case 'viernes':
        console.log('Grabar videos');
        break
    case 'sabado':
    case 'domingo':
        console.log('Disfrutar el finde!');
        break
    default:
        console.log('No es un dia valido');

}

if (day === 'lunes') {
    console.log('Planear la estructra del curso');
    console.log('Ir a un meeting de codificacion');
} else if (day === 'martes') {
    console.log('Preparar teoria');
} else if (day === 'miercoles' || day === 'jueves') {
    console.log('Escribir ejemplos de codigo');
} else if (day === 'viernes') {
    console.log('Grabar videos');
} else if (day === 'sabado' || day === 'domingo') {
    console.log('Disfrutar el finde!');
} else {
    console.log('No es un dia valido');
}


//Expresions
3 + 4
1991
true && false && !false

//Staments
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Edney'
console.log(`I'm ${2037 - 1991} years old ${me} `)


const age = 23;
// age >= 18 ? console.log('Me gustaria beber vino🍷') : console.log('Me gustaria beber agua💧');

const drink = age >= 18 ? 'vino🍷' : 'agua💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'vino🍷';
} else {
    drink2 = 'agua💧';
}
console.log(drink2);

console.log(`Me gusta beber ${age >= 18 ? 'vino🍷' : 'agua💧'}`);

//Mi largo codigo T-T
// let tip;

// const bill = 275;
// const bill2 = 40;
// const bill3 = 430;

// console.log(`La cuenta fue de ${bill}, la propina fue de ${bill >= 50 && bill <= 300 ? tip = (bill * 15) / 100 : tip = (bill * 20) / 100} y el valor total es: ${bill + tip}`);

// console.log(`La cuenta fue de ${bill2}, la propina fue de ${bill2 >= 50 && bill2 <= 300 ? tip = (bill2 * 15) / 100 : tip = (bill2 * 20) / 100} y el valor total es: ${bill2 + tip}`);

// console.log(`La cuenta fue de ${bill3}, la propina fue de ${bill3 >= 50 && bill3 <= 300 ? tip = (bill3 * 15) / 100 : tip = (bill3 * 20) / 100} y el valor total es: ${bill3 + tip}`);

//El sencillo de Jonas XD
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`La cuenta fue de ${bill}, la propina fue de ${tip}, y el total fue de ${bill + tip}`);
*/


