const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste");
menu.classList.remove("azul");
// menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

menu.className += " vermelho";

console.log(menu.className);

// console.log(menu.classList);

const animais = document.querySelector(".animais");

console.log(animais.attributes["data-texto"]);
console.log(animais.attributes.class);

const img = document.querySelector("img");
const srcImg = img.getAttribute("alt");
const removeAlt = img.removeAttribute("alt");

img.setAttribute("alt", "E uma raposa");

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);
console.log(srcImg);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}km`);
  },
};
