let variablea = "Hola mundo"
const CONSANTES = "Hola desde una constante"

// Colecciones de datos
// Arrays, objetos json

// NaN -> Not a number
// Longitud -> Es el tamaño del array
// let edadesUsuarios = [25, 45, 20, 30]
// let nuevaEdad = Number(prompt('¿Qué edad tienes?'))
// edadesUsuarios.push(nuevaEdad)
// console.log('Lista de usuarios: ', edadesUsuarios)
// console.log('¿Es mayor de edad?', edadesUsuarios[0] >= 18)
// console.log('¿Cuántos registros de usuarios hay?', edadesUsuarios.length)
// edadesUsuarios.splice(1, 3, 55)
// console.log('Nuevo array', edadesUsuarios)

// Typescript Array<number>(4)

// Los objetos json son entidades de datos
// Una entidad en una variable o una constante que tiene identidad propia
let cantidadDeProductos = 0
let productos = []

let computador = {
  precio: 2000000,
  peso: 20,
  color: 'negro'
}

let televisor = {
  precio: 3000000,
  peso: 2,
  color: 'Gris'
}

// Operador de propagación
let productoCompartido = computador

productos.push(computador)
productos.push(televisor)
cantidadDeProductos = productos.length

computador.precio = 1500000
computador['calificaciones'] = 20;
console.log(computador)
console.log('Objeto copiado', productoCompartido)

let array1 = [2, 3, 4, 5]
let copiaArray = array1
array1[3] = 10
console.log(copiaArray)
// Cuando tu guardas un valor dentro de una variable se guarda en un espacio en la memoria RAM y la RAM te devuelve la referencia a ese espacio en memoria
// let color = 'rojo'
//
// string templates -> Plantillas de strings
const NOMBRE = 'Juan'
const EDAD = 20;
console.log(`Bienvenido ${NOMBRE} a esta página. Tienens ${EDAD + 1} años de edad`)
// `${numeroCuotas} cuopreciotas de $${valorCuota} con ${intereses}%`
