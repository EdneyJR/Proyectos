'use strict';

/*
//Part 2
//LECTURE: Functions
function descripcionDelPais(pais, poblacion, ciudadCapital) {
    return `${pais} tiene ${poblacion} millones de personas y su ciudad capital es ${ciudadCapital}.`;
}

const republicaDominicana = descripcionDelPais('Republica Dominicana', 8, 'Santo Domingo');
const canada = descripcionDelPais('Canada', 37, 'Ottawa');
const alemania = descripcionDelPais('Alemania', 83, 'Berlin');
console.log(republicaDominicana, canada, alemania);


//LECTURE: Function Declarations vs. Expressions
//Declaation
function porcentajeDelMundo1(poblacion) {
    return (poblacion / 7900) * 100;
};
const republicaDominicana1 = porcentajeDelMundo1(8);
const canada1 = porcentajeDelMundo1(37);
const alemania1 = porcentajeDelMundo1(83);
console.log(republicaDominicana1, canada1, alemania1);

//Expression
const porcentajeDelMundo2 = function (poblacion, pais) {
    return `${pais} tiene ${poblacion} millones de personas, asi que tiene el ${(poblacion / 7900) * 100}% de la poblacion mundial`
}
const republicaDominicana2 = porcentajeDelMundo2(8, 'Republica Dominicana');
const canada2 = porcentajeDelMundo2(37, 'Canada');
const alemania2 = porcentajeDelMundo2(83, 'Alemania');
console.log(republicaDominicana2, canada2, alemania2);

//LECTURE: Arrow Functions
const porcentajeDelMundo3 = (poblacion, pais) => `${pais} tiene ${poblacion} millones de personas, asi que tiene el ${(poblacion / 7900) * 100}% de la poblacion mundial`;

const republicaDominicana3 = porcentajeDelMundo3(8, 'Republica Dominicana');
const canada3 = porcentajeDelMundo3(37, 'Canada');
const alemania3 = porcentajeDelMundo3(83, 'Alemania');
console.log(republicaDominicana3, canada3, alemania3);

//LECTURE: Functions Calling Other Functions
const descripcionDePoblacion = function (pais, poblacion) {
    const porcentaje = porcentajeDelMundo1(poblacion)
    return `${pais} tiene ${poblacion} millones de personas, lo cual representa el ${porcentaje}% del mundo`
}
console.log(descripcionDePoblacion('Republica Dominicana', 8));
console.log(descripcionDePoblacion('Canada', 37));
console.log(descripcionDePoblacion('Alemania', 83));

//LECTURE: Introduction to Arrays
const poblaciones = [8, 37, 83, 10];
console.log(poblaciones.length === 4);
const porcentajes = [
    porcentajeDelMundo1(poblaciones[0]), porcentajeDelMundo1(poblaciones[1]), porcentajeDelMundo1(poblaciones[2]), porcentajeDelMundo1(poblaciones[3])
];
console.log(porcentajes);

//LECTURE: Basic Array Operations (Methods)
const vecinos = ['Haiti', 'Puerto Rico', 'Cuba', 'Jamaica'];
console.log(vecinos);

vecinos.push('Utopia');
console.log(vecinos);

vecinos.pop();
console.log(vecinos);

if (!vecinos.includes('Alemania')) {
    console.log('Probablemente no es un pais de Europa Central :D');
}

vecinos[vecinos.indexOf('Haiti')] = 'Republica de Haiti';
console.log(vecinos);

//LECTURE: Introduction to Objects

const miPais = {
    pais: 'Republica Dominicana',
    capital: 'Santo Domingo',
    idioma: 'Español',
    poblacion: 8,
    vecinos: ['Haiti', 'Puerto Rico', 'Cuba', 'Jamaica'],
};

//LECTURE: Dot vs. Bracket Notation

console.log(`${miPais.pais} tiene ${miPais.poblacion} millones de hablantes del idima ${miPais.idioma}, ${miPais.vecinos.length} paises vecinos y una ciudad capital llamada ${miPais.capital}.`);

//LECTURE: Object Methods

const miPais2 = {
    pais: 'Republica Dominicana',
    capital: 'Santo Domingo',
    idioma: 'Español',
    poblacion: 8,
    vecinos: ['Haiti', 'Puerto Rico', 'Cuba', 'Jamaica'],

    //L:O M
    descripcion: function () {
        console.log(`${this.pais} tiene ${this.poblacion} millones de hablantes del idima ${this.idioma}, ${this.vecinos.length} paises vecinos y una ciudad capital llamada ${this.capital}.`);
    },

    verificarIsla: function () {
        this.esIsla = this.vecinos.length === 0 ? true : false;
    }

};
miPais2.descripcion();
miPais2.verificarIsla();
console.log(miPais2);

//LECTURE: Iteration: The for Loop

for (let votante = 1; votante <= 50; votante++) {
    console.log(`Votante numero ${votante} esta votando ahora`);
};

//LECTURE: Looping Arrays, Breaking and Continuing

const porcentajes2 = [];
for (let i = 0; i < poblaciones.length; i++) {
    porcentajes2.push(porcentajeDelMundo1(poblaciones[i]));
};

console.log(porcentajes);
console.log(porcentajes2);

//LECTURE: Looping Backwards and Loops in Loops

const listaDeVecinos = [
    ['Canada', 'Mexico'],
    ['España'],
    ['Noruega', 'Suesia', 'Russia']
];

for (let i = 0; i < listaDeVecinos.length; i++) {
    console.log(`---PAISES VECINOS ${i + 1} ---`);
    if (listaDeVecinos[i].length > 1) {
        for (let i2 = 0; i2 < listaDeVecinos[i].length; i2++) {
            console.log(`Vecino: ${listaDeVecinos[i][i2]}`);
        }
    } else {
        continue;
    }
}

for (let j = 0; j < listaDeVecinos.length; j++)
    for (let y = 0; y < listaDeVecinos[j].length; y++)
        console.log(`Neighbour: ${listaDeVecinos[j][y]}`);


//LECTURE: The while Loop
const porcentajes3 = [];
let i = 0;
while (i < poblaciones.length) {
    porcentajes3.push(porcentajeDelMundo1(poblaciones[i]));
    i++
}

console.log(porcentajes);
console.log(porcentajes2);
console.log(porcentajes3);

//Prefiero el for loop para esta tarea debido a que debo de usar un contador y es mas limpio el for para estos casos de que usan contador con lo cual la variable para el contador se crea y usa dentro del for loop y no fuera del mismo.

*/