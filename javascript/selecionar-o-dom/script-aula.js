const animais = document.getElementById('animais');
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section');
// const gridSection = document.getElementsByTagName('grid-section');
console.log(gridSection[1]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linkInternos = document.querySelector('[href^="#"]');
console.log(linkInternos);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[2]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index) {
  console.log(item)
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item) {
  console.log(item);
})