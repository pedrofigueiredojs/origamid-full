console.log(Number.isNaN(`NaN`));
console.log(Number.isInteger(10.213));

console.log(Number.parseFloat('  213213213.1232'));
console.log(parseFloat('100 reais'));
console.log(parseInt('23.27 reais'));
console.log(parseInt(23.49, 10));


const preco = 10.324234;
console.log(preco.toFixed() + 255);

let valor = 48.49;
valor = valor.toLocaleString('en-US', {style: 'currency',currency: 'BRL'});

console.log(valor);
console.log(Math.PI);

const Matematica = {
  PI: 3.14
};

// MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 

const aleatorio = Math.floor(Math.random() * 500);

console.log(aleatorio);

const aleatorio2 = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

console.log(aleatorio2);
