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

const porcentajeDelMundo3 = (poblacion, pais) => `${pais} tiene ${poblacion} millones de personas, asi que tiene el ${(poblacion / 7900) * 100}% de la poblacion mundial`;

const republicaDominicana3 = porcentajeDelMundo3(8, 'Republica Dominicana');
const canada3 = porcentajeDelMundo3(37, 'Canada');
const alemania3 = porcentajeDelMundo3(83, 'Alemania');
console.log(republicaDominicana3, canada3, alemania3);

const descripcionDePoblacion = function (pais, poblacion) {
    const porcentaje = porcentajeDelMundo1(poblacion)
    return `${pais} tiene ${poblacion} millones de personas, lo cual representa el ${porcentaje}% del mundo`
}
console.log(descripcionDePoblacion('Republica Dominicana', 8));
console.log(descripcionDePoblacion('Canada', 37));
console.log(descripcionDePoblacion('Alemania', 83));
*/