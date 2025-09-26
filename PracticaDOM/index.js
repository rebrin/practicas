console.log("carga index.js");

console.log(document.getElementById("encabezado_princ"));
let $encabezado = document.querySelector("#encabezado_princ");
console.log($encabezado);

let $parrafos = document.querySelectorAll("p");
$parrafos.forEach((el) => console.log(el.textContent));

let $lorem = document.querySelector(".loremCorto");
console.log($lorem);

//creacion de nuevos elementos DOM
let $div_new = document.createElement("div");
$div_new.innerHTML =
  "<h2>Hola soy un nuevo div</h2><p>Soy un parrafo dentro del div</p>";
console.log($div_new);
$div_new.classList.add("peligro");
document.body.appendChild($div_new);

let btn = document.querySelector("#btn-main");
btn.addEventListener("click", (e) => {
  console.log("diste click");
  btn.classList.add("boton_negro");
  let $div_new = document.createElement("div");
  $div_new.innerHTML = "<p>creado dinamicamente</p>";
  $div_new.classList.add("peligro");
  document.body.appendChild($div_new);
});

// 3 botones grande, mediano y pequeño
// hacen ref .bg,.md y.sm
// dependiendo del boton que se pulse cambiar los parrafos de tamaño.

let btn_gde = document.querySelector("#grande");
btn_gde.addEventListener("click", (e) => {
  let parrafos = document.querySelectorAll("p");
  parrafos.forEach((el) => el.classList.add("big"));
});

let btn_med = document.querySelector("#mediano");
btn_med.addEventListener("click", (e) => {
  let parrafos = document.querySelectorAll("p");
  console.log(parrafos);
  parrafos.forEach((el) => el.classList.add("md"));
});

let btn_sm = document.querySelector("#peque");
btn_sm.addEventListener("click", (e) => {
  let parrafos = document.querySelectorAll("p");
  console.log(parrafos);
  parrafos.forEach((el) => el.classList.add("sm"));
});
