
window.addEventListener('DOMContentLoaded', function(){


const navv = document.querySelector('.navv');//barra de navegacion
const arrowReverse = document.querySelector('.flot-reverse'); //flecha para retroceder
const title = document.querySelector('.p-no'); //titulo de la barra de navegacion cuando se hace scrooll
const banner = document.querySelector('.banner-r'); //banner que observaremos para agregar los efectos a la nav, flecha y titulo
const goBack = document.querySelector('#go-back');

console.log(window.history.length);

// funcion para regresar al index en caso de llegar directamente a una pagina
// y no exista historial previo
goBack.addEventListener('click',function(){
	if(history.length > 2){
		history.back();
	}else{
		window.location.href = 'https://charcas.xyz';
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
if(banner){
	observador.observe(banner);
}




const horario = document.querySelector('#horario');
const modall = document.querySelector('.modall');
const sombra = document.querySelector('.sombra');
const closeH = document.querySelector('#closeH');


if(horario){
	horario.addEventListener('click', () => {
		modall.classList.toggle("visible");
		document.body.classList.toggle("scroll");
		sombra.classList.toggle("visible-som");
	});
}

if(sombra){
	sombra.addEventListener('click', () => {
		modall.classList.remove("visible");
		document.body.classList.remove("scroll");
		sombra.classList.remove("visible-som");
	});
}

if(closeH){
	closeH.addEventListener('click', () => {
		modall.classList.remove("visible");
		document.body.classList.remove("scroll");
		sombra.classList.remove("visible-som");
	});
}






/// funcion para mostrar modal
const compartirButton = document.querySelector('#compartir__enlace');
const modalCompartir = document.querySelector('#modal__compartir');
const modalSombra = document.querySelector('.modal-sombra');


const urlPagina = window.location.href;

if(urlPagina.indexOf('#search') !== -1){
    const nuevaUrl = urlPagina.replace('#search', '');
    window.history.replaceState(null, '', nuevaUrl);   
}

compartirButton.textContent = 'Compartir Categoria';

if(modalCompartir){

	// creamos los elementos del header
	const modalHeader = document.createElement('DIV');
	modalHeader.classList.add('modal__header');

	const titleHeader = document.createElement('H4');
	titleHeader.textContent = 'Compartir Enlace';
	const spanHeader = document.createElement('SPAN');
	spanHeader.classList.add('modal__close');
	spanHeader.textContent = 'X';
	spanHeader.onclick = () => {
			cerrarModal()
		}
	

	// agregamos los elementos al header
	modalHeader.appendChild(titleHeader);
	modalHeader.appendChild(spanHeader);


	// creamos los elementos del container o body
	const modalContainer = document.createElement('DIV');
	modalContainer.classList.add('modal__container');


	const texto = document.createElement('DIV');
	texto.classList.add('texto');

	const inputTexto = document.createElement('INPUT');
	inputTexto.type = 'text';
	inputTexto.id = 'url__compartir';
	inputTexto.value = urlPagina;
	inputTexto.disabled = true;
	
	const botonCopiarEnlace = document.createElement('BUTTON');
	botonCopiarEnlace.id = 'copiar__enlace';
	botonCopiarEnlace.classList.add('copiar__enlace');
	botonCopiarEnlace.textContent = 'Copiar';
	botonCopiarEnlace.onclick = () => {
		copiarEnlace();
		botonCopiarEnlace.textContent = 'Copiado';
		botonCopiarEnlace.classList.add('active')

		setTimeout(() => {
			botonCopiarEnlace.textContent = 'Copiar';
			botonCopiarEnlace.classList.remove('active')
		}, 2500)
	}


	texto.appendChild(inputTexto);
	texto.appendChild(botonCopiarEnlace);


	const redesSocialesContainer = document.createElement('DIV');
	redesSocialesContainer.classList.add('redes__sociales');


	const whatsappDiv = document.createElement('DIV');
	whatsappDiv.classList.add('boton-social');
	whatsappDiv.dataset.social = 'whatsapp';
	whatsappDiv.classList.add('whatsapp');
	whatsappDiv.textContent = 'Compartir por Whatsapp';

	const facebookDiv = document.createElement('DIV');
	facebookDiv.classList.add('boton-social');
	facebookDiv.dataset.social = 'facebook';
	facebookDiv.classList.add('facebook');
	facebookDiv.textContent = 'Compartir en Facebook';

	redesSocialesContainer.appendChild(whatsappDiv);
	redesSocialesContainer.appendChild(facebookDiv);

	// agregamos el input, boton y redes sociales al modal container que esta dentro del modal compartir
	modalContainer.appendChild(texto);
	modalContainer.appendChild(redesSocialesContainer);

	// agregamos al modal de compartir
	modalCompartir.appendChild(modalHeader);
	modalCompartir.appendChild(modalContainer);


}




//funciones
compartirButton.addEventListener('click', (e) => {
	e.preventDefault();
	 modalCompartir.classList.toggle('active');
	 if(modalSombra){
		modalSombra.classList.toggle('active');
	}
})



modalCompartir.addEventListener('click', (e) => {

	if(e.target.classList.contains('boton-social')){

		const redSocial = e.target.dataset.social;
		
		if(redSocial === 'whatsapp'){
			compartirWhatsapp();
		}else if(redSocial === 'facebook'){
			compartirFacebook();
		}
	}





})
		
function cerrarModal(){
	modalCompartir.classList.remove('active');
	if(modalSombra){
		modalSombra.classList.remove('active');
	}
	
}
function copiarEnlace(){
	const elementoTemporal = document.createElement('TEXTAREA');    
	elementoTemporal.value = urlPagina;
	document.body.appendChild(elementoTemporal);
	elementoTemporal.select();
	document.execCommand('copy');
	document.body.removeChild(elementoTemporal);
	
	
}



function compartirWhatsapp(){
	const mensajeWhatsapp =  `¡Hola! Te comparto este enlace interesante: ${urlPagina}`;
	const enlaceWhatapp = `https://wa.me/?text=${encodeURIComponent(mensajeWhatsapp)}`;
	cerrarModal();
	window.open(enlaceWhatapp);
	if(modalSombra){
		modalSombra.classList.remove('active');
	}
}
function compartirFacebook(){
	const enlaceFacebook = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(urlPagina)}`;
	cerrarModal();
	window.open(enlaceFacebook);

	if(modalSombra){
		modalSombra.classList.remove('active');
	}
}

if(modalSombra){
	modalSombra.addEventListener('click', cerrarModal);
}





});




