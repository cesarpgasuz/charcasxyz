/*var tope = $('.banner-r').innerHeight();

			
			$(window).scroll(function(){
				
				var scroll = $(window).scrollTop();

				if(scroll > tope){
					$('.navv').addClass('blanca');
					$('.flot-reverse').addClass('reverse-color');
					$('.p-no').addClass('visible');
				}else{
					$('.navv').removeClass('blanca');
					$('.flot-reverse').removeClass('reverse-color');
					$('.p-no').removeClass('visible');
				}
			});







$('#horario').on('click', function(){
	$('.modall').toggleClass('visible');
	$('body').toggleClass('scroll');
	$('.sombra').toggleClass('visible-som');
})

$('.sombra').on('click', function(){
	$('.modall').removeClass('visible');
	$('body').removeClass('scroll');
	$('.sombra').removeClass('visible-som');
})

$('#closeH').on('click', function(){
	$('.modall').removeClass('visible');
	$('body').removeClass('scroll');
	$('.sombra').removeClass('visible-som');
})




let tope = document.querySelector('.banner-r').offsetHeight;
console.log(tope)
			
			window.addEventListener('scroll', function(e){
				
				let scroll = window.pageYOffset;
				console.log(scroll)

				if(scroll > tope){
					document.querySelector(".navv").classList.add("blanca");
					document.querySelector(".flot-reverse").classList.add("reverse-color");
					document.querySelector(".p-no").classList.add("visible");
				}else{
					document.querySelector(".navv").classList.remove("blanca");
					document.querySelector(".flot-reverse").classList.remove("reverse-color");
					document.querySelector(".p-no").classList.remove("visible");
				}
			});


*/

const navv = document.querySelector('.navv');//barra de navegacion
const arrowReverse = document.querySelector('.flot-reverse'); //flecha para retroceder
const title = document.querySelector('.p-no'); //titulo de la barra de navegacion cuando se hace scrooll
const banner = document.querySelector('.banner-r'); //banner que observaremos para agregar los efectos a la nav, flecha y titulo



//funcion activar los efectos
const callback = (entries) => {
	for(const entrie of entries){
		if(entrie.isIntersecting){
			navv.classList.remove('blanca');
			arrowReverse.classList.remove('reverse-color');
			title.classList.remove('visible');
		}else{
			navv.classList.add('blanca');
			arrowReverse.classList.add('reverse-color');
			title.classList.add('visible');
		}
	}
}

//objeto con las options
const options = {
	threshold: 0
}


//creamos el observador
const observador = new IntersectionObserver(callback, options)
observador.observe(banner);






document.querySelector('#horario').addEventListener('click', (e) => {
	document.querySelector(".modall").classList.toggle("visible");
	document.body.classList.toggle("scroll");
	document.querySelector(".sombra").classList.toggle("visible-som");
});

document.querySelector(".sombra").addEventListener('click', (e) => {
	document.querySelector(".modall").classList.remove("visible");
	document.body.classList.remove("scroll");
	document.querySelector(".sombra").classList.remove("visible-som");
});

document.querySelector('#closeH').addEventListener('click', (e) => {
	document.querySelector(".modall").classList.remove("visible");
	document.body.classList.remove("scroll");
	document.querySelector(".sombra").classList.remove("visible-som");
});


