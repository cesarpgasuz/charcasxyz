
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




const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    //console.log(boton)
    boton.classList.add('visitar');
})


const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');


document.addEventListener('load', () =>{
  for(const irse of abrirSpinner){
    
    irse.addEventListener('click', () => {
        spinner.style.display = 'block';
    })

}
});



//document.addEventListener('DOMContentLoaded', ocultarSpinner);



if (document.readyState == 'loading') {
  // cargando todavía, esperar el evento
  console.log('cargando')
  
  //document.addEventListener('DOMContentLoaded', work);
} else if(document.readyState == 'interactive'){
    console.log('listo')
    ocultarSpinner();
  
}else{
    // DOM está listo!
  console.log('leido')
  ocultarSpinner();

}




function ocultarSpinner(){
        spinner.style.display = 'none';
}
