window.addEventListener('DOMContentLoaded', function(){

	//variables
	let botonesFiltro = document.querySelectorAll(".btn-fil");
	let categorias = document.querySelectorAll(".box-cat");


	//funcion para mostrar y ocultar los cards
	botonesFiltro.forEach( boton => {
		boton.addEventListener('click', function(e){
		

			let filtro = this.dataset.filter;

			if(filtro == 'todos'){
				categorias.forEach( categoria => categoria.style.display = 'flex');
				
			} else {
				categorias.forEach( categoria => {
					if(categoria.classList.contains(filtro)){
						categoria.style.display = 'flex';
					} else {
						categoria.style.display = 'none';
					}
				});
			}
		});
	});

	///////////////////////////////////////////////

	// funcione para colorear los elementos del menu de opciones
	let filtros = document.querySelectorAll('.fil li');

	filtros.forEach( filtro => {
		filtro.addEventListener('click', function(){
			this.classList.add('activeee');
			let hermanos = this.parentElement.children;

			for(let i = 0; i < hermanos.length; i++){
				if(hermanos[i] !== this){
					hermanos[i].classList.remove('activeee');
				}
			}
		});
	});
	///////////////////////////////////////////////////////

});
