import {db} from '../db.js';

import { extractoCategoria } from "./extractoCategoria.js";
import {formatearNumero} from './formatear.js';

//variables
const invitacion = document.querySelector('.invitacion');
const footer = document.querySelector('footer');

iniciarApp(); 

function iniciarApp(){

    //variables
    const id = document.querySelector('body').dataset.id;
    const filtrado = db.filter(data => data.id === id);
    const llamada = document.querySelector('.llamada');
    const contenedor = document.querySelector('#datos');



    const {direccion, extracto, facebook, imagen, nombre, telefono, whatsapp, instagram, categoria} = filtrado[0];

    console.log(typeof categoria);

    /// liston top
    const bannerInfo = document.querySelector('.p-no-min');
    bannerInfo.innerHTML = `<img src="images/${imagen}" class="img-fluid" alt="Imagen del Negocio ${nombre}" width="15px"> ${nombre}`;


    // div con la informacion del negocio
    const informationDiv = document.createElement('DIV');
    informationDiv.classList.add('information');

    // imagen del negocio
    const negocioImage = document.createElement('IMG');
    negocioImage.classList.add('img-fluid', 'log');
    negocioImage.alt = `Imagen del Negocio ${nombre}`;
    negocioImage.src = `images/${imagen}`;


    // listado con la direccion, nombre y telefonos
    const informationListado = document.createElement('UL');
    informationListado.classList.add('list-unstyled');


    //nombre negocio
    const negocioTitle = document.createElement('LI');
    negocioTitle.classList.add('title');
    negocioTitle.innerHTML = nombre;
     
    //direccion del negocio
    const negocioDireccion = document.createElement('LI');
    negocioDireccion.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${direccion}`;

     
    informationListado.appendChild(negocioTitle);
    informationListado.appendChild(negocioDireccion);
   

    //numero de telefono
    if(telefono){
        const negocioTelefono = document.createElement('LI');
        negocioTelefono.classList.add('tel');

        const numeroDeTelefono = `tel:+52${telefono}`;

        const telefonoLink = document.createElement('A');
        telefonoLink.href = numeroDeTelefono;
        const numeroFormateado = formatearNumero(telefono);
        telefonoLink.innerHTML = `<i class="bi bi-telephone"></i> ${numeroFormateado}`;

        negocioTelefono.appendChild(telefonoLink);
        informationListado.appendChild(negocioTelefono);

        // telefono contenedor llamada
        const telefonoLlamada = document.createElement('A');
        telefonoLlamada.classList.add('telefono');
        telefonoLlamada.href = numeroDeTelefono;
        telefonoLlamada.innerHTML = `<i class="bi bi-telephone"></i> Llamar`;

        llamada.appendChild(telefonoLlamada);
    }

    // whatsapp
    if(whatsapp){
        const negocioWhatsapp = document.createElement('LI');
        negocioWhatsapp.classList.add('whatsapp');

        const whatsappLink = document.createElement('A');
        whatsappLink.href = `https://api.whatsapp.com/send?phone=52${whatsapp}`;
        const numeroFormateado = formatearNumero(whatsapp);
        whatsappLink.innerHTML = `<i class="bi bi-whatsapp"></i> ${numeroFormateado}`;

        negocioWhatsapp.appendChild(whatsappLink);
        informationListado.appendChild(negocioWhatsapp);

        // whatsapp contenedor llamada
        const whatsappLlamada = document.createElement('A');
        whatsappLlamada.classList.add('whatsapp')
        whatsappLlamada.href = `https://api.whatsapp.com/send?phone=52${whatsapp}`;
        whatsappLlamada.innerHTML = `<i class="bi bi-whatsapp"></i> Mandar Whatsapp`;

        llamada.appendChild(whatsappLlamada);

    }

    // facebook
    if(facebook){
        const negocioFacebook = document.createElement('LI');
        negocioFacebook.classList.add('facebook');

        const facebookLink = document.createElement('A');
        facebookLink.href = `https://www.facebook.com/${facebook}`;
        facebookLink.target = '_blank';
        facebookLink.rel = 'noopener noreferrer';
        facebookLink.innerHTML = `<i class="bi bi-facebook"></i> fb.com/${facebook}`;

        negocioFacebook.appendChild(facebookLink);
        informationListado.appendChild(negocioFacebook);
    }

    // facebook
    if(instagram){
        const negocioInstagram = document.createElement('LI');
        negocioInstagram.classList.add('instagram');

        const instagramLink = document.createElement('A');
        instagramLink.href = `https://www.instagram.com/${instagram}`;
        instagramLink.target = '_blank';
        instagramLink.rel = 'noopener noreferrer';
        instagramLink.innerHTML = `<i class="bi bi-instagram"></i> ig.com/${instagram}`;

        negocioInstagram.appendChild(instagramLink);
        informationListado.appendChild(negocioInstagram);
    }


    
       
        // agregamos al html

        informationDiv.appendChild(negocioImage);
        informationDiv.appendChild(informationListado);

        contenedor.appendChild(informationDiv);
    
        
    // invitacion para el registro de negocios
    if(invitacion){

        const container = document.createElement('DIV');
        container.classList.add('container');

        const row = document.createElement('DIV');
        row.classList.add('row');

        const invitacionContainer = document.createElement('DIV');
        invitacionContainer.classList.add('invitacion__container');

        const invitacionTexto = document.createElement('DIV');
        invitacionTexto.classList.add('invitacion__texto');

        const invitacionInfo = extractoCategoria(categoria);
        const invitacionParrafo = document.createElement('P');
        invitacionParrafo.innerHTML = `${invitacionInfo}`

        const invitacionButton = document.createElement('DIV');
        invitacionButton.classList.add('invitacion__button');

        const invitacionEnlace = document.createElement('A');
        invitacionEnlace.href = '../registro.html';
        invitacionEnlace.classList.add('button__register');
        invitacionEnlace.textContent = 'Quiero Registrarme';


        
        //agregagmos al html
        invitacionTexto.appendChild(invitacionParrafo);
        invitacionButton.appendChild(invitacionEnlace);

        invitacionContainer.appendChild(invitacionTexto);
        invitacionContainer.appendChild(invitacionButton);

        row.appendChild(invitacionContainer);

        container.appendChild(row);

        invitacion.appendChild(container);

    }
    
    
    if(footer){

        const year = new Date().getFullYear();
    
        const container = document.createElement('DIV');
        container.classList.add('container');

        const row = document.createElement('DIV');
        row.classList.add('row');

        const copy = document.createElement('DIV');
        copy.classList.add('copy');

        const imagenCopy = document.createElement('IMG');
        imagenCopy.src = 'https://charcas.xyz/images/icon192n.png';
        imagenCopy.classList.add('img-fluid');
        imagenCopy.loading = 'lazy';
        imagenCopy.decoding = 'async';

        const copyText = document.createElement('P');
        copyText.innerHTML = `Copyright © <span class="year-page">${year}</span>`;

        //agregamos al html
        copy.appendChild(imagenCopy);
        copy.appendChild(copyText);

        row.appendChild(copy);

        container.appendChild(row);

        footer.appendChild(container);

    }

};


