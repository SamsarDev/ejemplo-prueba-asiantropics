# Seccion Logica

## Problema 1

### Planteamiento

Basado en un cuestionario con N preguntas y M respuestas por pregunta crear un script en javascript que realice lo siguiente:

1) Calcular la cantidad de combinaciones (solo una respuesta por pregunta)
2) Crear un archivo CSV con todas las combinaciones sin hacer uso de librerias de terceros

### Solucion

Para resolver este problema, se podria utilizar una funcion que calcule el factorial de N (cantidad de preguntas) y multiplique ese valor por M (numero de respuestas posibles para cada pregunta). Esto nos daria como resultado el numero total de combinaciones posibles.

Luego, se podria utilizar un ciclo for para recorrer las preguntas y otro ciclo anidado para recorrer las respuestas. En cada iteracion se agrega una fila al archivo CSV junto con la combinacion de respuestas actual.

A continuacion se muestra un ejemplo de como se podria implementar esta solucion en Javascript:

```javascript
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
const file = fs.createWriteStream('combinations.csv');

// Escribimos las combinaciones en el archivo
combinations.forEach(combination => {
  file.write(combination.join(',') + '\n');
});

file.end();

```

### Ejemplo

Podemos ver un codigo funcional de este ejemplo en el archivo [solucion.js](/problema-3/solucion.js) o ejecutando: `npm run start` desde esta carpeta.

> No es necesario ejecutar antes **npm install**, pero si es necesario tener **node** instalado para ejecutar el script.
