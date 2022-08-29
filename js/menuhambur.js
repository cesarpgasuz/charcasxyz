const hambur = document.querySelector('#hambur');
const sombra = document.querySelector('.sombra');
const menuNav = document.querySelector('.menu-nav');

hambur.addEventListener('click', () => {	
 menuNav.classList.toggle('visibles');
 document.body.classList.toggle('scroll');
 sombra.classList.toggle('visible-som');
});

sombra.addEventListener('click', () => {
 menuNav.classList.remove('visibles');
 document.body.classList.remove('scroll');
 sombra.classList.remove('visible-som');
});