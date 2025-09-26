//console.log("conectado");
let lista = document.querySelector("#lista_unorder");
console.log(lista.lastElementChild);

//traer referencia al boton
let btn = document.querySelector("#btn_del");
btn.addEventListener("click", () => {
  console.log("presionaste el boton eliminar el ultimo");
  if (lista.lastElementChild !== null) {
    lista.removeChild(lista.lastElementChild);
  }
});

let $btn_add = document.querySelector("#btn_add");
$btn_add.addEventListener("click", () => {
  let temp = document.querySelector("template");
  let clon = temp.content.cloneNode(true);
  let $notas = document.querySelector(".notas");
  if (clon.firstElementChild !== null) {
    clon.firstElementChild.firstElementChild.textContent = "nota dinamica";
    clon.firstElementChild.lastElementChild.textContent = "contenido dinamico";
  }
  $notas.appendChild(clon);
});

window.addEventListener("DOMContentLoaded", () => {
  let $temp_prod = document.querySelector("#t_producto");

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((prod) => {
        let clon = $temp_prod.content.cloneNode(true);
        const { title, description, price, image } = prod;
        const div_prod = clon.firstElementChild;

        div_prod.querySelector(".titulo_prod").textContent = title;
        div_prod.querySelector("#descripcion_prod").textContent = description;
        div_prod.querySelector("#precio").textContent = `$ ${price}`;
        div_prod.querySelector("img").setAttribute("src", `${image}`);
        document.body.appendChild(clon);
      });
    })
    .catch((error) => console.err(error));
});
