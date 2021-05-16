document.querySelector("#btnInvertir").addEventListener("click", tomarDatos);

function tomarDatos() {
  let textoCampo = document.querySelector("#txtTexto").value;
  let char = document.querySelector("#txtTexto2").value;
  let dadoVuelta = invertirTexto(textoCampo);
  let cantChar = contarCaracter(char, textoCampo);
  document.querySelector("#pInvertido").innerHTML =
    " Dado vuelta " + dadoVuelta + " Cantidad de veces " + char + " que aparece un caracter " + cantChar;
}

function invertirTexto(textoOriginal) {
  let textoInvertido = "";
  for (let i = textoOriginal.length - 1; i >= 0; i--) {
    textoInvertido += textoOriginal.charAt(i);
  }
  return textoInvertido;
}

// Para saber cantidad de X letra dentro de un arrayy string
// charAt(i) nos nos deja en la posiciòn

function contarCaracter(char, textoCampo) {
  let cantChar = 0;
  alert(textoCampo)
  for (let i = 0; i < textoCampo.length; i++) {
    if (textoCampo.charAt(i) === char) {
      cantChar++;
    }
  }
  return cantChar
}
