// const pessoa = new Object({
//   nome: "Andre"
// });

// console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   },
// }

// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// Object.assign(moto, funcaoAutomovel);

// console.log(moto);

// const moto = {
//   capacete: true,
// };

// Object.defineProperties(moto, {
//   rodas: {
//     // value: 2,
//     // configurable: false, // so preciso passar se quiser TRUE, por padrao vem false
//     // writable: true,
//     enumerable: true,
//     get: function() {
//       // return this._rodas;
//       return 2
//     },
//     set(valor) {
//       this._rodas = valor * 4
//     }
//   }
// });

// // delete moto.rodas;
// // moto.rodas = 3;
// console.log(moto);

// const innerHightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

// Object.keys(moto);
// Object.values(moto);
// Object.entries(moto);

// Object.getOwnPropertyNames(Array.prototype);

// const frutas = ['Banana'];

// console.log(Object.getPrototypeOf(''));
// console.log(Array.prototype);

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// const novaFruta = frutas1;

// novaFruta[0] = 'Uva';

// console.log(frutas1);

// Object.is(frutas1, novaFruta);

// const carro1 = {
//   marca: 'Ford',
//   ano: 2018,
// }

// // Object.freeze(carro1);
// // Object.seal(carro1);
// // Object.preventExtensions(carro1);

// carro1.portas = 4;
// delete carro1.marca;

// carro1.marca = 'Honda';

// console.log(carro1);
// console.log(Object.isFrozen(carro1));
// console.log(Object.isExtensible(carro1));
// console.log(Object.isSealed(carro1));

const frutas = ['Banana', 'Uva'];
const frase = 'Oi Frase';
const somar = function(){
  return a + b;
};
const carro = {
  marca: 'Ford'
}

console.log(carro.toString());

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));