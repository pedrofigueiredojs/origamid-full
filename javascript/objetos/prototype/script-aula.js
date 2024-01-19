function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abracou';
  }
  // this.andar = function () {
  //   return 'Andou pelo objeto'
  // }
}

var obj = {
  nome: 'Pedro',
  idade: 25
}

Pessoa.prototype.andar = function () {
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function () {
  return this.nome + ' Pessoa nadou';
}

const andre = new Pessoa('Andre', 28);

// console.log(Pessoa.prototype);
// console.log(andre.prototype);

const pais = 'brasil';
const cidade = new String('Rio');

const listaAnimais = ['cachorro', 'gato', 'cavalo'];

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

Object.getOwnPropertyNames(Array)
Object.getOwnPropertyNames(Array.prototype)

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true
  },
}

Carro.andar.constructor.name // function
Carro.andar().constructor.name // boolean
Carro.preco.constructor.name // string
