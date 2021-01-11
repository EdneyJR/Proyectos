/*
//LECTURE: Values and Variables
const pais = "Republica Dominicana";
const continente = "Americano";
let poblacion = 8000000;
console.log(pais);
console.log(continente);
console.log(poblacion);

//LECTURE: Data Types
const esIsla = true;
let lenguaje;
console.log(typeof esIsla);
console.log(typeof poblacion);
console.log(typeof pais);
console.log(typeof lenguaje);


//LECTURE: let, const and var
lenguaje = "español";
//continente = "Europeo";

//LECTURE: Basic Operators
console.log(poblacion / 2);
// poblacion++;
console.log(poblacion);
console.log(poblacion > 6000000);
console.log(poblacion < 33000000);
const descripcion = `${pais} esta en el continente ${continente} y sus ${poblacion} de personas hablan ${lenguaje}`;

console.log(descripcion);

if (poblacion > 33000000) {
    console.log(`La poblacion de ${pais} esta por encima del promedio`);
} else {
    console.log(`La poblacion de ${pais} esta ${(33000000 - poblacion) / 2} por debajo del promedio`);
}

console.log('9' - '5'); // = 4 Number
console.log('19' - '13' + '17'); // = 617 String
console.log('19' - '13' + 17); // = 23 Number
console.log('123' < 57); // = false Boolean
console.log(5 + 6 + '4' + 9 - 4 - 2); // = 1143 Number


// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'),);

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders')
// }

if (lenguaje === 'ingles' && poblacion < 50000000 && !esIsla) {
    console.log(`Stephanie, deberias vivir en ${pais}😍`);
} else {
    console.log(`Stephanie, ${pais} no cumple con tus exigencias! 😢`)
}

switch (lenguaje) {
    case 'chino':
    case 'mandarin':
        console.log('El Mayor numero de hablantes nativos');
        break;
    case 'español':
        console.log('El 2do lugar en numero de hablantes nativos');
        break;
    case 'ingles':
        console.log('3er lugar');
        break;
    case 'hindu':
        console.log('Numero 4');
        break;
    case 'arabico':
        console.log('El quinto idioma mas hablado');
        break;
    default:
        console.log('Tambien es un lenguaje asombroso :D');
}


console.log(`La poblacion de ${pais} esta ${poblacion > 33000000 ? 'por encima del promedio' : 'por debajo del promedio'}`);
*/