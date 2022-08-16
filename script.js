const contenedor = document.querySelector('.contenedor');
const contenedorListado = document.querySelector('.contenedor__listado');

const catTitle1 = document.querySelector('.cat1');
const catTitle2 = document.querySelector('.cat2');
const cat1Listado = document.querySelector('.cat1 ul');
const cat2Listado = document.querySelector('.cat2 ul');
		
const card = document.querySelector('.card');

filtrarDatos();
		
function filtrarDatos(){

const resultado = negocios.filter(negocio => negocio.id === 'neg03');


		resultado.forEach((negocio, index) => {
			const row = document.createElement('div');
			row.classList.add('card');
			row.innerHTML = `
				<ul>
					<li>${negocio.id}</li>
					<li>${negocio.nombre}</li>
					<li>${negocio.direccion}</li>
					<li>${negocio.telefono}</li>
					<li>${negocio.whatsapp}</li>
					
				</ul>
			`;
			
			

			contenedor.insertBefore(row, contenedorListado);

		})
		
		
		filtradoCategorias(resultado);


}



function filtradoCategorias(resultado){


	const categorias = resultado.filter(categoria => categoria.servicios);

	if(categorias.length > 0){
		console.log(true)
	}else{
		console.log(false)
		contenedorListado.remove();
	}


	console.log(categorias)

		categorias.forEach(item => {
			item.servicios.forEach(valor => {
				
					const tarjeta = document.createElement('div');
					const title = document.createElement('h4');
					title.textContent = `${valor.id}`;
					tarjeta.appendChild(title);

					for(let item of valor.tarea){
					const listado = document.createElement('p');
					listado.innerHTML = `${item}`;
					tarjeta.appendChild(listado)
					}


				card.appendChild(tarjeta)

			})


		})

}
