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
lenguaje = "Español";
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

'9' - '5'; // = 4 Number
'19' - '13' + '17'; // = 617 String
'19' - '13' + 17; // = 23 Number
'123' < 57; // = false Boolean
5 + 6 + '4' + 9 - 4 - 2; // = 1143 Number
*/