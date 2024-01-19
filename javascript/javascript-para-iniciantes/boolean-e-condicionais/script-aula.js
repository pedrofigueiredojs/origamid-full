var possuiGraduacao = false;
var possuiDoutorado = true

if(possuiGraduacao) {
  console.log('E verdadeiro');
  var x = 10;
} else if(possuiDoutorado) {
  console.log('Possui Doutorado')
} else {
  console.log('Nao possui nada!')
}

// console.log(x);

var nome = '10kg' / 10;

if(nome) {
  console.log(nome);
} else {
  console.log('Nome nao existe')
}

if(!possuiGraduacao) {
  console.log('Nao possui graduacao.')
}

var x = 10;

console.log(x !== 11)

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

var condicional2 = ((5 - 5) || (5 + 5)  && (10 - 2))
console.log(condicional2);

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul': 
    console.log('Ole para o ceu');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break;
  default:
    console.log('Feche os olhos');
  }