import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';

// import { testando as i } from './modules/teste.js';
// import { teste1, teste2 } from './modules/teste.js';
import * as teste from './modules/teste.js';

teste.teste1()
teste.teste2()
console.log(teste.senha);

console.log(this);

initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();