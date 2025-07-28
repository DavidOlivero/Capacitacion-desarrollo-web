// // switch
//
// const opcionesMenu = {
//   opcion1: "HTML",
//   opcion2: "JS",
//   opcion3: "CSS"
// }
//
// const opcionElegida = prompt('Eliga qué quiere aprender')
// // if (edadUsuario < 18) {
// //   console.log('Es menor de edad')
// // } else if (edadUsuario >= 18 && edadUsuario <= 39) {
// //   console.log('Es un adulto joven')
// // } else if (edadUsuario >= 40 && edadUsuario <= 59) {
// //   console.log('Es un adulto')
// // } else {
// //   console.log('Es de tercera edad')
// // }
// //
//
// switch (opcionElegida) {
//   case opcionesMenu.opcion1:
//     console.log('Aprender HTML')
//     break;
//   case opcionesMenu.opcion2:
//     console.log('Aprender JvaScript')
//     break;
//   default:
//     console.log('Aprender CSS')
//     break;
// }

// Bucles: Estructura de código que te permite repetir pasos por un tiempo determinado

// for - (contador, condición, incrementador)
const ranquinkPosiciones = ['Juan', 'Pedro', 'Mateo', 'Jorge', 'María', 'Gina', 'Jelixa', 'Antonela', 'Pepe', 'Ana']
// for (let contador = 0; contador < listaDeUsuarios.length; contador++) {
//   console.log('Bienvenido usuario ', listaDeUsuarios[contador])
// }

// forof
// Iterara -> El proceso de recorrer un valor iterable (Que se puede recorrer paso a paso)
// for (const usuario of listaDeUsuarios) {
//   console.log('Bienvenido usuario ', usuario)
// }

// forin
// const coloresDisponibles = {
//   red: 'Rojo',
//   gren: 'Verde',
//   purple: 'Morado',
//   pink: 'Rosado'
// }
// for (const key in coloresDisponibles) {
//   console.log('El color', coloresDisponibles[key], 'se dice en inglés:', key)
// }


// foreach
//
// ranquinkPosiciones.forEach((element, index, array) => {
//   console.log(element, index, array)
// });
//
//
//
//
// const listColores = ['Rojo', 'Verde', 'Azul']
// // element -> Guarda el valor actual del recorrido
// // index -> Guarda el índice del recorrdio actual
// // array -> Guarda el array completo
// listColores.forEach((element, index, array) => {
//   console.log('Color', element)
// })
// listColores.push('Naranja')

// While
// let edadUsuario = Number(prompt('Ingrese un valor entre 1 y 10'))
// while (edadUsuario < 1 || edadUsuario > 10) {
//   edadUsuario = Number(prompt('El valor ingresado no está en el rango esperado ingrésalo de nuevo'))
// }
// console.log('El número es', edadUsuario)
//
let cantidadesDeProducto = Number(prompt('Ingrese la cantidad de producto que descea'))
let incrementador = 0
do {
  cantidadesDeProducto++
  incrementador++
} while (cantidadesDeProducto > 0 && incrementador < 10);
console.log('La cantidad de producto es', cantidadesDeProducto)
