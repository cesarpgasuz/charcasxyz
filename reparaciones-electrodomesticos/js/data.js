	
	  	// const db = {
        //     nombre: 'Electronica Sanchez',
        //     direccion: 'Calle San luis de la Paz #24, Doctor Mora',
        //     extracto: 'Ventas de Equipos y Refacciones Electrónicas para Sonidos, Luces, TV, MP3, Computadoras, Etc.',
        //     telefono: '4681231545',
        //     whatsapp: '4681231545',
        //     facebook: 'electronicasanchezdoctormora',
        //   imagen: 'electronica-sanchez.jpg'
        //     }


filtrado.forEach(filtro => {

    const llamada = document.querySelector('.contenedor__llamada');
    const contenedor = document.querySelector('#datos');
    const data = document.createElement('div');

    const {direccion, extracto, facebook, imagen, nombre, telefono, whatsapp} = filtro;

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


    data.classList.add('information')
    data.innerHTML = `

        <img src="images/${imagen}" class="img-fluid log" alt="">
                        
         <ul class="list-unstyled">
            <li class="title">${nombre}</li>
            <li><i class="bi bi-geo-alt-fill"></i> ${direccion}</li>
            <li class="tel"><a href="tel:+52${telefono}"><i class="bi bi-telephone"></i> ${telefonoD}</a></li>
            <li class="whatsapp"><a href="https://api.whatsapp.com/send?phone=52${whatsapp}"><i class="bi bi-whatsapp"></i> ${whatsappD}</a></li>
            <li class="facebook"><a href="https://www.facebook.com/${facebook}" target="_blank"><i class="bi bi-facebook"></i> fb.com/${facebook}</a></li>
            <li class="disable"><a href="#" class="boton-promo">Promociones</a></li>
        </ul>
    `;

    const contacto = document.createElement('div');
    contacto.classList.add('llamada');
    contacto.innerHTML = `
        <a href="tel:+52${telefono}"><i class="bi bi-telephone-outbound-fill"></i> Llamar</a>
        <a href="https://api.whatsapp.com/send?phone=52${whatsapp}"><i class="bi bi-whatsapp"></i>Mandar Whatsapp</a>
    `;

    llamada.appendChild(contacto);

    contenedor.appendChild(data);

    const bannerInfo = document.querySelector('.p-no-min');
    bannerInfo.innerHTML = `<img src="images/${imagen}" class="img-fluid" alt="" width="15px"> ${nombre}`;

});


