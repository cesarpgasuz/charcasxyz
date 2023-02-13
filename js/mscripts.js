const navv = document.querySelector('.navv');//barra de navegacion
const arrowReverse = document.querySelector('.flot-reverse'); //flecha para retroceder
const title = document.querySelector('.p-no'); //titulo de la barra de navegacion cuando se hace scrooll
const banner = document.querySelector('.banner-r'); //banner que observaremos para agregar los efectos a la nav, flecha y titulo
const goBack = document.querySelector('#go-back');

// funcion para regresar al index en caso de llegar directamente a una pagina
// y no exista historial previo
goBack.addEventListener('click',function(){
	if(history.length > 0){
		history.back();
	}else{
		window.location.replace('https://charcas.xyz');
	}
});



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


