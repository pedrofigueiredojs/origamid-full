// window.alert('isso mesmo');

const href = window.location.href;

console.log(href);

if (href === "http://127.0.0.1:5500/o-que-e-o-doms/") {
  console.log("E igual");
}

const h1Selecionado = document.querySelector("h1");

const h1Classes = h1Selecionado.classList;

function callBackH1() {
  console.log("Clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callBackH1);
