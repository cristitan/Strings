document.querySelector("#btnInvertir").addEventListener("click", tomarDatos);

function tomarDatos() {
  let textoCampo = document.querySelector("#txtTexto").value;
  let char = document.querySelector("#txtTexto2").value;
  let dadoVuelta = invertirTexto(textoCampo);
  let vocales = contarVocales (textoCampo);
  let cantChar = contarCaracter(char, textoCampo);
  let upper = toUpper(textoCampo);
  let lower = toLower(textoCampo);
  document.querySelector("#pInvertido").innerHTML = " Dado vuelta " + dadoVuelta + " Cantidad de veces " + char + " que aparece un caracter " + cantChar + " vocales tiene " + vocales;
  document.querySelector("#pInvertido2").innerHTML = " Todo en mayusculas " + upper + " todo en minuscula " + lower;
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

  for (let i = 0; i < textoCampo.length; i++) {
    if (textoCampo.charAt(i) === char) {
      cantChar++;
    }
  }
  return cantChar
}

function contarVocales(textoCampo) {

  let vocales = 0;
  for (let i = 0; i < textoCampo.length; i++) {
    if ("aeiou".includes(textoCampo.charAt(i))) vocales++
    //if (textoCampo.charAt(i) === "a" || textoCampo.charAt(i) === "e" || textoCampo.charAt(i) === "i" || textoCampo.charAt(i) === "o" || textoCampo.charAt(i) === "u") {
    // }
      
  }
  return vocales
}

function toUpper (textoCampo) {

  let upper = textoCampo.toUpperCase();

  return upper;

}

function toLower (textoCampo) {

  let lower = textoCampo.toLowerCase();

  return lower;

}