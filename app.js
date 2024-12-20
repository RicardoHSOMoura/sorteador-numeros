function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de  = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if(de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!!!');
    return;
  }

  let numerosAleatorios = []
  
  for (let i = 0; i < quantidade; i++) {
    let numeros = obterNumerosAleatorios(de, ate)
    if(quantidade >= ate - de) {
      alert('A quantidade entre os valores dos campos "Do número" e "Até o número" devem ser maior do que o valor inserido no campo "Quantidades de números". Verifique!!!');
      return;
    } else {
      while(numerosAleatorios.includes(numeros)) {
        numeros = obterNumerosAleatorios(de, ate)
      }
      numerosAleatorios.push(numeros);
  
      alterarBotaoReiniciar()
    }
  }

  let resultado = document.getElementById('resultado')
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosAleatorios}</label>`
  
  console.log(`numerosAleatorios: ${numerosAleatorios}`)

}

function obterNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotaoReiniciar() {
  let botaoReiniciar = document.getElementById('btn-reiniciar')
  if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao')
  } else {
    botaoReiniciar.classList.remove('container__botao')
    botaoReiniciar.classList.add('container__botao-desabilitado');
  }
}

function reiniciar()  {
  document.getElementById('quantidade').value = "";
  document.getElementById('de').value = "";
  document.getElementById('ate').value = "";
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
  alterarBotaoReiniciar();
}