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

//Coding Challenge #1
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





const friend1 = 'Jendry';
const friend2 = 'Cristian';
const friend3 = 'Leonardo';


const friends = ['Jendry', 'Cristian', 'Leonardo'];
console.log(friends);
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'Noe';
console.log(friends);
//friends = ['bob', 'alice'] no se puede cambiar el valor de la variable pero si los elementos.
const firstName = 'Edney'
const edney = [firstName, 'Quezada', 2037 - 1996, 'Estudiante', friends];
console.log(edney);
console.log(edney.length);

//Ejercicio
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



const friends = ['Jendry', 'Cristian', 'Leonardo'];

//Anadir elementos
const newLength = friends.push('Noe');
console.log(friends);
console.log(newLength);

friends.unshift('Hugo');
console.log(friends);

//Remover elementos
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //Firts
console.log(friends);

console.log(friends.indexOf('Cristian'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Cristian'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Jendry')) {
    console.log('Tienes un amigo llamado Jendry');
}



//Coding Challenge #2

const calcPropina = function (laCuenta) {
    return laCuenta >= 50 && laCuenta <= 300 ? laCuenta * 0.15 : laCuenta * 0.2;
};
console.log(calcPropina(100));

const lasCuentas = [125, 555, 44];
console.log(lasCuentas);

const propinas = [calcPropina(lasCuentas[0]), calcPropina(lasCuentas[1]), calcPropina(lasCuentas[2])];
console.log(propinas);

const totales = [lasCuentas[0] + propinas[0], lasCuentas[1] + propinas[1], lasCuentas[2] + propinas[2],];
console.log(totales);



const edneyArray = [
    'Edney',
    'Quezada',
    2037 - 1996,
    'Estudiante',
    ['Jendry', 'Cristian', 'Leonardo']
];

const edney = {
    firstName: 'Edney',
    lastName: 'Quezada',
    age: 2037 - 1996,
    job: 'Estudiante',
    friends: ['Jendry', 'Cristian', 'Leonardo']
};

const edney = {
    firstName: 'Edney',
    lastName: 'Quezada',
    age: 2037 - 1996,
    job: 'Estudiante',
    friends: ['Jendry', 'Cristian', 'Leonardo']
};
console.log(edney);

console.log(edney.lastName);
console.log(edney['lastName'])

const nameKey = 'Name';
console.log(edney['first' + nameKey]);
console.log(edney['last' + nameKey]);

// console.log(edney.'last' + nameKey);

const interestedIn = prompt('Que quieres saber acerca de Edney? Escoje entre firstName, lastName, age, job, y friends');

if (edney[interestedIn]) {
    console.log(edney[interestedIn]);
} else {
    console.log('Solicitud erronea! Escoje entre firstName, lastName, age, job, y friends')
}

edney.location = 'Republica Dominica';
edney['telephoneNumber'] = '550-3625';
console.log(edney);

//Desafio
//"Edney tiene 3 amigos y su mejor amigo es Jendry"

console.log(`${edney.firstName} tiene ${edney.friends.length} amigos, y su mejor amigo es ${edney.friends[0]}`);


const edney = {
    firstName: 'Edney',
    lastName: 'Quezada',
    birthYear: 1996,
    job: 'Estudiante',
    friends: ['Jendry', 'Cristian', 'Leonardo'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function (birthYear) {
    //     // console.log(this);
    //     return 2037 - birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSumary: function () {
        return `${this.firstName} es un viejo ${this.job} de ${this.calcAge()} anios de edad, y ${this.hasDriversLicense ? 'tiene' : 'no tiene'} licencia de conducir`
    }

};

console.log(edney.calcAge());

console.log(edney.age);
console.log(edney.age);
console.log(edney.age);

//Desafio
//"Edney es un viejo estudiante de 41 anios de edad, y no tiene licencia de conducir"

console.log(edney.getSumary())



//Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();


console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log(`They have the same BMI!`);
};


// console.log('Lifting weights repetition 1🏋️‍♂️');
// console.log('Lifting weights repetition 2🏋️‍♂️');
// console.log('Lifting weights repetition 3🏋️‍♂️');
// console.log('Lifting weights repetition 4🏋️‍♂️');
// console.log('Lifting weights repetition 5🏋️‍♂️');
// console.log('Lifting weights repetition 6🏋️‍♂️');
// console.log('Lifting weights repetition 7🏋️‍♂️');
// console.log('Lifting weights repetition 8🏋️‍♂️');
// console.log('Lifting weights repetition 9🏋️‍♂️');
// console.log('Lifting weights repetition 10🏋️‍♂️');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
}


const edney = [
    'Edney',
    'Quezada',
    2037 - 1996,
    'Estudiante',
    ['Jendry', 'Cristian', 'Leonardo'],
    true
];

const types = [];

for (let i = 0; i < edney.length; i++) {
    //Reading from edney array
    console.log(edney[i], typeof edney[i]);

    //Filling types array
    // types[i] = typeof edney[i];
    types.push(typeof edney[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < edney.length; i++) {
    if (typeof edney[i] !== 'string') continue;

    console.log(edney[i], typeof edney[i]);
}

console.log('---BREAK WITH NUMBERS---')
for (let i = 0; i < edney.length; i++) {
    if (typeof edney[i] === 'number') break;

    console.log(edney[i], typeof edney[i]);
}


const edney = [
    'Edney',
    'Quezada',
    2037 - 1996,
    'Estudiante',
    ['Jendry', 'Cristian', 'Leonardo'],
    true
];

for (let i = edney.length - 1; i >= 0; i--) {
    console.log(i, edney[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}-------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Linfting ${exercise}: repetition ${rep} 🏋️‍♂️`);
    }
}



// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}🏋️‍♂️`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`Haz obtenido un ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('El loop esta apunto de terminar...');
}

*/

//Coding Challenge #4

//1
const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

//2
const tips = [];
const totals = [];

//3
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

//Bonus:
//4
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));