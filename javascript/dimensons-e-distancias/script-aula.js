const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2Left = primeiroh2.offsetLeft;

const h2Rect = primeiroh2.getBoundingClientRect();

console.log(h2Rect.top);

if(h2Rect.top < 0) {
  console.log('Passou do elemento')
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  // window.pageYOffset,
  // window.pageXOffset,
  window.scrollY,
  window.scrollX,
);

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }

const small = window.matchMedia('(max-width: 600px)');
// const small = window.matchMedia('(max-width: 600px)').matches;

console.log(small);
console.log(typeof small.matches);
console.log(small.matches);


if(small.matches) {
  console.log('Usuario mobile');
} else {
  console.log('Usuario desktop')
}