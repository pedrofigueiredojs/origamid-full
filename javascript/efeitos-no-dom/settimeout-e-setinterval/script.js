// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   setTimeout(() => {
//     console.log(this)
//     this.classList.add("active");
//   }, 1000);
// }
// // function espera(texto) {
// //   console.log('Passou 0');
// // }

// setTimeout(() => {
//   console.log("Testando");
// }, 1000);

// // for(let i = 0; i < 20; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, 300 * i);
// // }

function loop(texto) {
  console.log(texto);
}
// setInterval(loop, 300, '300ms');

let i = 0;
const meuLoop= setInterval(() => {
  console.log(i++);
  if(i > 20) {
    clearInterval(meuLoop);
  }
}, 300);