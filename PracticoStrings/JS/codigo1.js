document.querySelector("#btnInvertir").addEventListener("click", tomarDatos);

function tomarDatos() {
  let textoCampo = document.querySelector("#txtTexto").value;
  let dadoVuelta = invertirTexto(textoCampo);
  document.querySelector("#pInvertido").innerHTML = dadoVuelta;
}

function invertirTexto(textoOriginal) {
  let textoInvertido = "";
  for (let i = textoOriginal.length - 1; i >= 0; i--) {
    textoInvertido += textoOriginal.charAt(i);
  }
  return textoInvertido;
}

// Para saber cantidad hasta x letras

let cantidadA = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto.charAt(i) === "a") {
    cantidadA++;
  }
}
