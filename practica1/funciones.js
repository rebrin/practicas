function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

//funcion callback para calculadora
function calculadora(a, b, callback) {
  return callback(a, b);
}

function timer() {
  const elemento = document.getElementById("timer");
  console.log(elemento);
  let segundos = 0;
  let minutos = 0;
  setInterval(() => {
    elemento.innerHTML = `minutos ${minutos} Segundos: ${segundos}`;
    segundos++;
    //segundos = segundos % 60;
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }
    //agregar los minutos y reiniciar a 0 cada 60 segundos
  }, 1000);
}
export { suma, resta, calculadora, timer };
