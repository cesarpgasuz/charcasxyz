const contenedor = document.querySelector('.contenedor');
const contenedorListado = document.querySelector('.contenedor__listado');

const catTitle1 = document.querySelector('.cat1');
const catTitle2 = document.querySelector('.cat2');
const cat1Listado = document.querySelector('.cat1 ul');
const cat2Listado = document.querySelector('.cat2 ul');
		
const card = document.querySelector('.card');

		//resultado = negocios.filter(negocio => negocio.id === 'neg02');
/*
		negocios.forEach(neg => {
			const row = document.createElement('div');
			row.classList.add('card');
			row.innerHTML = `
				<ul>
					<li>${neg.id}</li>
					<li>${neg.nombre}</li>
					<li>${neg.direccion}</li>
					<li>${neg.telefono}</li>
					
				</ul>
			`;


			contenedor.appendChild(row);


		})

		*/

		const resultado = negocios.filter(negocio => negocio.id === 'neg02');


		resultado.forEach(negocio => {
			const row = document.createElement('div');
			row.classList.add('card');
			row.innerHTML = `
				<ul>
					<li>${negocio.id}</li>
					<li>${negocio.nombre}</li>
					<li>${negocio.direccion}</li>
					<li>${negocio.telefono}</li>
					
				</ul>
			`;


			contenedor.insertBefore(row, contenedorListado);


		})



		const categorias = resultado.filter(categoria => categoria.servicios);

		
/* -----------------------------------------------*
		categorias.forEach(item => {
			item.servicios.forEach(valor => {
				
				const dato = valor.id

				switch(dato){
					case 'papeleria':
						 categoria1(valor);
					break;
					case 'celular':
						 categoria2(valor);
					break;
					default:
						console.log('error');
					break;
				}

			})

		})

*/


/*
		function categoria1(valor){

			for(let item of valor.tarea){
				const card = document.createElement('li');
			
			card.innerHTML = `
				
					${item}
				
				
			`;
			cat1.appendChild(card);
			}



	
		}

*/



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



/******************************

		function categoria1(valor){

			const title = document.createElement('h4');
			title.innerHTML = `${valor.id}`;
			catTitle1.insertBefore(title, cat1Listado);

			for(let item of valor.tarea){
				const card = document.createElement('li');
				card.innerHTML = `${item}`;
				cat1Listado.appendChild(card)
			}
		}

******/

		function categoria2(valor){

			const title = document.createElement('h4');
			title.innerHTML = `${valor.id}`;
			catTitle2.insertBefore(title, cat2Listado);
			
			for(let item of valor.tarea){
				const card = document.createElement('li');
				card.innerHTML = `${item}`;
				cat2Listado.appendChild(card);
			}

		}