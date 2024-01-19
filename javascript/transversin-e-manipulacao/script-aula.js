const h1 = document.querySelector('h1');
const animaisList = document.querySelector('.animais-descricao');

// h1.outerHTML = '<p>Novo titulo</p>';
console.log(h1.innerHTML);
console.log(h1.outerHTML);
// console.log(animaisList.innerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement.parentElement.parentElement);

console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'))

// console.log(lista.childNodes);
// console.log(lista.childNodes);
console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');

// contato.insertBefore(animais, mapa);
// animais.appendChild(titulo);
// contato.removeChild(titulo);
// contato.replaceChild(lista, titulo);

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Titulo!';
novoH1.classList.add('novo-titulo');

mapa.appendChild(novoH1);

// const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);