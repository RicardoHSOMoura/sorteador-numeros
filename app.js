function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de  = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  let numeroAleatorio = obterNumerosAleatorios(de,ate);
  console.log(`numeroAleatorio: ${numeroAleatorio}`)

}

function obterNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
  quantidade = '';
  de = '';
  ate = '';
  numeroAleatorio = '';

}