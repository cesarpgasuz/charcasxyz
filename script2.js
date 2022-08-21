const contenedor = document.querySelector('.contenedor');
		const contenedorListado = document.querySelector('.contenedor__listado');
		const cat1 = document.querySelector('.cat1 ul');
		const cat2 = document.querySelector('.cat2 ul');
		
const contenido = document.querySelector('.contenido');
const listado = document.querySelectorAll('.tareas_de');




	const resultado = negocios.filter(negocio => negocio.id === 'neg02')
	
	resultado.forEach(categorias => {

		const row = document.createElement('div');
		row.style.background = 'purple';
		row.innerHTML = `
			<ul>
			 	<li>${categorias.id}</li>
			 	<li>${categorias.nombre}</li>
			 	<li>${categorias.telefono}</li>
			 	<li>${categorias.whatsapp}</li>
			</ul>
			

		`;


		contenido.appendChild(row);


	});

	resultado.forEach(servicio => {
		
		servicio.servicios.forEach(item => {
			limpiarHTML();

			
			item.tareas.forEach(subtarea => {
			
				const fila = document.createElement('ul');
				fila.innerHTML = `
				   				<li>${item.id}</li>
				   				<li>${item.tareas.nombre}</li>

							`;
				console.log(subtarea)
				
				contenido.appendChild(fila);
			})

			

			

				


				
		})

	})

	function limpiarHTML(){
		while(fila.firstChild){
			fila.removeChild(fila.firstChild);
		}
	}