var pessoa = {
  nome: 'Pedro',
  idade: '25',
}

console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.PI);
console.log(Math.random());

// var height = 100;
var menu = {
  wdth: 800,
  height: 50,
  backgrundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  },
}

menu.backgrundColor = '#000'

menu.color = 'blue';
menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgrundColor;
