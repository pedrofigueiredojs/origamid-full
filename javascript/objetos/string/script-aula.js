// const comida = 'Pizza';
// const agua = new String('Agua  ');

// console.log(agua.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length - 1));

const frase = 'A melhor linguagem e ';
const linguagem = 'JavaScript';

const fraseFinal =  frase.concat(linguagem, ' !!', ' OI adskiajsdijqidji');

console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 4)); // true
console.log(fruta.includes(listaFrutas)); // false

console.log(fruta.startsWith('Bana'));
console.log(fruta.endsWith('na'));
console.log(fruta);

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

console.log(transacao3.slice(-5));

const linguagemJs = 'JavaScript';
linguagemJs.substring(3,5); // aS
linguagemJs.substring(0,4); // Java
linguagemJs.substring(4); // Script
linguagemJs.substring(-3); // JavaScript
console.log(linguagemJs.substring(3,5))

console.log(fruta.indexOf('na'));
console.log(fruta.lastIndexOf('na'));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '-'));
})

console.log(listaPrecos[0].padStart(10, '.')); // .....R$ 99
console.log(listaPrecos[0].padEnd(10, '.'));   // R$ 99.....

const frase2 = 'Ta';

frase2.repeat(5); // TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');


let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

console.log(listaItens);

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Larana'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

const sexo3Menor = sexo3.toLocaleLowerCase();

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
