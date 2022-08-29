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

*/


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


