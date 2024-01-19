// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");

// li.forEach(i => i.classList.add('ativa'));
// li.forEach((item, index) => {item.classList.add('ativa' + index)});

// const retornoForeach = li.forEach((item, index) => {
//   item.classList.add("ativa" + index);
// });

// console.log(retornoForeach);

// const carros = ["Ford", "Fiat", "Honda"];

// const novoArray = carros.map((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosx2 = numeros.map((n) => n * 2);

// console.log(numerosx2);
// console.log(novoArray);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// const nomeAulas = aula => aula.nome;

// const nomeAulas2 = function(aula) {
//   return aula.nome;
// }

// const arrayNomeAulas = aulas.map(nomeAulas2);

// // const arrayNomeAulas = aulas.map(function (aula) {
// //   return aula.nome;
// // });

// console.log(arrayNomeAulas);

// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   // console.log(acumulador, item, index);
//   console.log(acumulador, item)
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 25, 60, 5, 35, 10];

// const maiorNumero = numeros.reduce(
//   (anterior, atual) => (anterior > atual ? anterior : atual),
//   0
// );

// console.log(maiorNumero);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

var acumulador = {};
acumulador[0] = "sadasd";
const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  console.log(acumulador);
  return acumulador;
}, {});

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// frutasRight; // Uva Pêra Banana

const frutas = ["", "Maca", undefined, "Pera", "Uva"];

const temUva = frutas.some((item) => {
  return item === "Uva";
});

// console.log(temUva);

const every = frutas.every((fruta) => {
  console.log(fruta);
  return fruta;
});

const indexUva = frutas.findIndex((item) => {
  return item;
});

// const indexUva = frutas.find((item) => {
//   return item;
// });


console.log("Index:", indexUva);
console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every((n) => n >= 6);
// const maiorQue3 = numeros.every(function (n) {
//   return n >= 7;
// });

console.log(maiorQue3);


const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
  console.log(item);
  return item;
});

console.log(arrayFrutas);

const aulas1 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) => {
  return aula.min >= 15;
});

console.log(maiores15);