//var Variable = "Variable";
//Variable = 20;
let miVar = "rebrin";
miVar = 20;
miVar = true;

const miConst = "hola";
console.log(miVar);
console.log(typeof miVar);

const miArr = [1, 2, 4, 5];
console.log(miArr);
console.log(typeof miArr);

//JSON
const usuario = {
  nombre: "rebrin",
  edad: 42,
  altura: 183,
  pasatiempos: ["futbol", "ajedrez", "correr", "programar"],
};

//destructuring
let { altura, nombre } = usuario;
console.log(altura);
console.log(nombre);
console.log(usuario);

//object literal
const complejo = {
  autenticado: true,
  usuario,
};
console.log(complejo);
//cambiar el nombre a JOSE
usuario.nombre = "Jose";
usuario.apellidoP = "rubalcava";
console.log(usuario);

//Object.freeze(usuario);
//delete usuario.altura;

usuario.apellidoM = "lopez";
console.log(usuario);
console.log(usuario.apellidoM);

console.log(
  "nombre:" + usuario.nombre + "apellido paterno:" + usuario.apellidoP
);
console.log("nombre:", usuario.nombre, "apellido paterno:", usuario.apellidoP);
console.log(`nombre:${usuario.nombre} apellido paterno:${usuario.apellidoP}`);

const tecnologias = ["react", "vue", "angular"];
tecnologias.push("git"); //insertar al final
tecnologias.unshift("svelte"); //insertar al inicio
console.log(tecnologias);
//unshift obtiene al inicio, pop obtiene al final
console.log(tecnologias.pop());
console.log(tecnologias);
console.log(tecnologias.splice(1, 1));
console.log(tecnologias);

const numeros = [1, 2, 3, 4, 5, 6, 7];
const filtradas = numeros.filter((num) => {
  return num % 2 === 0;
});
console.log(filtradas);
//destructuring arrays
const [primero, segundo] = filtradas;
console.log(primero);
console.log(segundo);

console.log("---------------");

//for each iterar sin resultado y map iterar con resultado
const arr2 = filtradas.map((num) => {
  return num * 2;
});

console.log(arr2);
console.log(filtradas);

console.log("---------------");

//funcion normal
function suma(a, b) {
  return a + b;
}

//expresion functions
const multiplicar = function (a, b) {
  return a * b;
};

//arrow functions
const dividir = (a, b) => {
  return a / b;
};

console.log(suma(3, 2));

console.log(multiplicar(3, 2));
console.log(dividir(4, 2));

const coleccion_numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const coleccion_objetos = [
  { nombre: "rebrin", edad: 42 },
  { nombre: "jose", edad: 22 },
  { nombre: "maria", edad: 32 },
];

// includes saber si el 30 esta en el arreglo
console.log("---------------");
console.log(coleccion_numeros.includes(30));

//indexof encontrar la posicion del 30
console.log(coleccion_numeros.indexOf(30));

//some saber si hay algun numero mayor a 25
const mayores = coleccion_numeros.some((num) => num > 25);
console.log(mayores);

//every saber si todos los numeros son mayores a 25

const ever = coleccion_numeros.every((num) => num > 25);
console.log(ever);
//find de 60
const encontrar = coleccion_numeros.find((number) => number === 40);
console.log(encontrar);
const encontrado = coleccion_objetos.find(
  (alumno) => alumno.nombre === "rebrin"
);
console.log(encontrado);
//every de todos los divisibles entre 5
console.log(coleccion_numeros.every((num) => num % 5 === 0));
//filter de todos los mayores a 25
console.log(coleccion_numeros.filter((num) => num > 25));
//filter de todos lo divisibles entre 10
console.log(coleccion_numeros.filter((num) => num % 10 === 0));
//map de todos los numeros multiplicados por 3
console.log(coleccion_numeros.map((num) => num * 3));
//filter de los objetos cuya edad sea mayor a 30
console.log(coleccion_objetos.filter((obj) => obj.edad > 30));
//reduce de la suma de todos los numeros
let avg = coleccion_numeros.reduce(
  (total_sum, cur_num) => (total_sum += cur_num),
  0
);
//promedio de todos los numeros
let edades_sum = coleccion_objetos.reduce(
  (total_sum, cur_num) => (total_sum += cur_num.edad),
  0
);
console.log(edades_sum);

//optional chaining de usuario.direccion.calle
const usuario2 = {
  nombre: "rebrin",
  edad: 42,
  altura: 183,
  pasatiempos: ["futbol", "ajedrez", "correr", "programar"],
  direccion: {
    calle: "av siempre viva",
    numero: 742,
  },
};
//optional chaining de calle o no definido
console.log(usuario2?.direccion?.calle || "Desconocido");

//optional chaining de pais o no definido
console.log(usuario2?.direccion?.pais || "Desconocido");

//operador ternario
const goles_equipo1 = 2;
const goles_equipo2 = 1;
//usar operador ternario para saber quien gano o si hay empate
const resultado =
  goles_equipo1 > goles_equipo2
    ? "Gano el equipo 1"
    : goles_equipo2 > goles_equipo1
    ? "Gano el equipo 2"
    : "Empate";
console.log(resultado);
