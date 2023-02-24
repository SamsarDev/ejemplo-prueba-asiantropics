'use strict';

// Función para calcular el factorial de un número
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Número de preguntas
const N = 5;

// Número de respuestas por pregunta
const M = 3;

// Número de combinaciones posibles
const totalCombinations = factorial(N) * M;

console.log(`Num. Preguntas: ${N} \nNum. Respuestas x Pregunta: ${M} \nTotal Combinaciones: ${totalCombinations}`);

// Inicializamos un array para guardar las combinaciones
const combinations = [];

// Generamos todas las combinaciones posibles
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    combinations.push([i, j]);
  }
}

// Creamos el archivo CSV
const fs = require('fs');
const file = fs.createWriteStream('./combinations.csv');

// Escribimos las combinaciones en el archivo
combinations.forEach(combination => {
  file.write(combination.join(',') + '\n');
});

file.end();

console.log(`CSV creado en: ./combinations.csv`);