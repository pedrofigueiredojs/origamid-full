function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(pi);

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80,1.9));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'eu gosto do ceu';
  } else if(cor === 'verde') {
    return 'Eu gosto de mato'
  } else {
    return 'Eu nao gosto de cores';
  }
}

function mostraConsole() {
  console.log('oi');
}

addEventListener('click', mostraConsole)

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80);
console.log(imc(80, 1.80));

function terceiraIdade(idade) {
  console.log(typeof idade)
  if(typeof idade !== 'number') {
    return 'Por favor preencha um numero'
  }
  if(idade >= 60) {
    return true;
  } else {
    return false
  }
}

console.log(terceiraIdade('oi'));

function paisesVisitados(paisesQueVisitei) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesQueVisitei} paises`;
}

// console.log(totalPaises);


var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro
