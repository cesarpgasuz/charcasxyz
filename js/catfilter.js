	
	  	// const db = {
        //     nombre: 'Electronica Sanchez',
        //     direccion: 'Calle San luis de la Paz #24, Doctor Mora',
        //     extracto: 'Ventas de Equipos y Refacciones Electrónicas para Sonidos, Luces, TV, MP3, Computadoras, Etc.',
        //     telefono: '4681231545',
        //     whatsapp: '4681231545',
        //     facebook: 'electronicasanchezdoctormora',
        //   imagen: 'electronica-sanchez.jpg'
        //     }
        const id = document.querySelector('body').dataset.id;
        const filtrado = db.filter(data => data.categoria === id);
        const contenedor = document.querySelector('#datos-neg');
        
        console.log(filtrado);
        filtrado.forEach(filtro => {
            
            console.log(filtro)
          
            const {url, direccion, imagen, nombre, telefono, whatsapp} = filtro;
        
            const nuevoNumero = telefono;
            const sub1 = nuevoNumero.substring(0,3);
            const sub2 = nuevoNumero.substring(3,6);
            const sub3 = nuevoNumero.substring(6,8);
            const sub4 = nuevoNumero.substring(8,10);
            const telefonoD = [sub1,sub2,sub3,sub4].join(' ');
        
            const nuevoWhatsapp = whatsapp;
            const subw1 = nuevoWhatsapp.substring(0,3);
            const subw2 = nuevoWhatsapp.substring(3,6);
            const subw3 = nuevoWhatsapp.substring(6,8);
            const subw4 = nuevoWhatsapp.substring(8,10);
            const whatsappD = [subw1,subw2,subw3,subw4].join(' ');
        
            const divTarjeta = document.createElement('DIV');
            divTarjeta.classList.add('tarjeta');
            divTarjeta.innerHTML = `

            <div class="imagen">
            <img src="images/${imagen}" class="img-fluid" alt="" width="120">
            </div>
            <div class="contenido">
                <ul class="list-unstyled">
                    <li class="title">${nombre}</li>
                    <li class="direction"><i class="bi bi-geo-alt-fill"></i> ${direccion}</li>
                    <li class="telefono"><i class="bi bi-telephone-fill"></i> ${telefonoD}</li>
                    <li><a href="${url}" class="boton boton-menu">Ver Menu</a></li>
                </ul>
            </div>
            
            
            
            `;

            contenedor.appendChild(divTarjeta);
        
        });
        
        
        