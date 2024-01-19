"use strict";
var carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (false) {
  var mes = "dezembro";
  console.log(mes);
}

// console.log(mes);

{
  var carro2 = 'Fusca2';
  const ano = 2018;
}
console.log(carro); // Carro
// console.log(ano); // erro ano is not defined

var i = 50;

// for(let i = 0; i < 10; i++) {
//   console.log(`Numero ${i}`);
// }

console.log(i * 10)

const semana = 'Sexta';
// semana = 'Quinta';
// const semana = 'Domingo';

console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro',
};

data.ano = 2019;
data.dia = 25;