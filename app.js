function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de  = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  let numeroAleatorio = []
  
  numeroAleatorio = obterNumerosAleatorios(de,ate);
  console.log(`numeroAleatorio: ${numeroAleatorio}`)

}

function obterNumerosAleatorios(min, max) {
  let contador = 0
  while (contador < quantidade) {
    let numAleat = Math.floor(Math.random() * (max - min + 1)) + min;
    numeroAleatorio.push(numAleat)
    contador++;
  }
  return numeroAleatorio;
}

function reiniciar() {
  quantidade = '';
  de = '';
  ate = '';
  numeroAleatorio = '';

}