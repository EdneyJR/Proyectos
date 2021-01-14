'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;





function logger() {
    console.log('My name is Edney');
}

//llamar / correr / invocar funciones
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);






//Function declariation
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);



// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} se retira en ${retirement} anios`;
}

console.log(yearUntilRetirement(1991, 'Edney')); console.log(yearUntilRetirement(1980, 'Stephanie'));



//Funciones llamando a otras funciones

function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice
};

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} se retira en ${retirement} anios`);
        return retirement;
    } else {
        console.log(`${firstName} ya esta retirad@ 🎉`);
        return -1;
    }
}

console.log(yearUntilRetirement(1991, 'Edney'));
console.log(yearUntilRetirement(1950, 'Stephanie'));
*/

const calcPromedio = (puntuacion1, puntuacion2, puntuacion3) => (puntuacion1 + puntuacion2 + puntuacion3) / 3;

console.log(`Los delfines tienen: ${calcPromedio(44, 23, 71)}`);
console.log(`Los Koalas tienen: ${calcPromedio(65, 54, 49)}`);

const verificarGanador = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Los delfines ganan (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Los Koalas ganan (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`Ninguno tiene el doble de puntos que el otro, NADIE GANA! 😢`)
    }
}

verificarGanador(calcPromedio(44, 23, 71), (calcPromedio(65, 54, 49)));

console.log(`Los delfines tienen: ${calcPromedio(85, 54, 41)}`);
console.log(`Los Koalas tienen: ${calcPromedio(23, 34, 27)}`);

verificarGanador(calcPromedio(85, 54, 41), (calcPromedio(23, 34, 27)));
