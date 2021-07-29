var tope = $('.banner-r').innerHeight();

			
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