// let tope = document.querySelector('.banner-r').offsetHeight;

// window.addEventListener('scroll', function(){
//   let scroll = window.scrollY;

//   if(scroll > tope){
//     document.querySelector('.navv').classList.add('blanca');
//     document.querySelector('.flot-reverse').classList.add('reverse-color');
//     document.querySelector('.p-no').classList.add('visible');
//   } else {
//     document.querySelector('.navv').classList.remove('blanca');
//     document.querySelector('.flot-reverse').classList.remove('reverse-color');
//     document.querySelector('.p-no').classList.remove('visible');
//   }
// });





// const horario = document.querySelector('#horario');
// const sombra = document.querySelector('.sombra');
// const closeH = document.querySelector('#closeH');
// const modal = document.querySelector('.modall');


// horario.addEventListener('click', function(){
// 	modal.classList.toggle('visible');
// 	sombra.classList.toggle('visible-som');
// 	updateScroll();

// })

// sombra.addEventListener('click', function(){
// 	modal.classList.remove('visible');
// 	this.classList.remove('visible-som');
// 	updateScroll();
// })

// closeH.addEventListener('click', function(){
// 	modal.classList.remove('visible');
// 	sombra.classList.remove('visible-som');
// 	updateScroll();
// })

// function updateScroll(){

// 	if(modal.classList.contains('visible')){
// 		document.body.classList.add('scroll');
// 	}else{
// 		document.body.classList.remove('scroll');
// 	}
// }



// $('#horario').on('click', function(){
// 	$('.modall').toggleClass('visible');
// 	$('body').toggleClass('scroll');
// 	$('.sombra').toggleClass('visible-som');
// })

// $('.sombra').on('click', function(){
// 	$('.modall').removeClass('visible');
// 	$('body').removeClass('scroll');
// 	$('.sombra').removeClass('visible-som');
// })

// $('#closeH').on('click', function(){
// 	$('.modall').removeClass('visible');
// 	$('body').removeClass('scroll');
// 	$('.sombra').removeClass('visible-som');
// })