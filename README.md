# Objetivo

Medir habilidades y conocimientos del desarrollador frontend en temas de maquetacion y logica de programacion con Javascript.

## Maquetación

### Instrucciones

1. Siguiendo el siguiente [Link] encontrará el diseño (mobile / desktop) de la
prueba y en este otro [Link] encontrará los assets que se requieren para
realizar está prueba.

2. Realizar la maquetación de las siguientes páginas (se lista el nombre con el
que aparecen en figma):<br><br> a. barista-transition (agregar un botón de next para avanzar al siguiente paso) <br> b. q1 y q1-selected (se debe poder seleccionar y deseleccionar las opciones) <br> c. q2 y q2-selected (se debe poder seleccionar y deseleccionar las opciones)

3. Crear la interacción entre las diferentes páginas, al presionar el botón back
o next se debe mover entre las diferentes páginas.

4. La navigation bar y el link “Why it matters” son solamente visuales no
tienen ninguna acción.

## Javascript

### Instrucciones

Crear un script que pueda ser ejecutado en la consola del navegador en la
página de detalle de un producto de está [página] y que haga lo siguiente:

Si el usuario elige alguno de estos Sizes: 2T, 3T o 4T se debe mostrar un mensaje
debajo del precio del producto de la siguiente forma:

El texto debe cambiar cuando el usuario cambie la cantidad de productos que va a
agregar:

+ -1+ : Add 2 of this product and the third one is free!
+ -2+ : Add another one free to your cart.
+ -3+ : Congrats! add to cart now!
+ 4 en adelante: debe esconder el mensaje.

## Lógica

### Instrucciones

Basado en un questionario con N preguntas y M respuestas por pregunta crear un
script en javascript que realice lo siguiente:

1. Calcular la cantidad de combinaciones (solo una respuesta por pregunta)

Estructura del cuestionario:

```javascript
[
  {
    questionId: 1,
    questionName: 'What is you favorite color?'
    answers: [
      {
        answerName: 'Red',
        answerId: 11
      },
      {
        answerName: 'Blue',
        answerId: 12
      },
      {
        answerName: 'Pink',
        answerId: 13
      }
    ]
  },
  {
    questionId: 2,
    questionName: 'Are you a flat-earther?'
    answers: [
      {
        answerName: 'Yes',
        answerId: 21
      },
      {
        answerName: 'No',
        answerId: 22
      }
    ]
  }
]
```

2. Crear un archive CSV con todas las combinaciones sin usar ningun librería de
terceros (zero third-party dependencies approach)

Ejemplo visual del CSV:

| QuestionName1 | QuestionName2 | QuestionName3 | QuestionNameN |
| --- | --- | --- | ---|
| AnwerValid1 | AnwerValid2 | AnwerValid3 | AnwerValidN |
| AnwerValid1 | AnwerValid2 | AnwerValid3 | AnwerValidN |
| AnwerValid1 | AnwerValid2 | AnwerValid3 | AnwerValidN |
