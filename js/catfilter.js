import { db } from "../db.js";

import { extractoCategoria } from "./extractoCategoria.js";
import { formatearNumero } from "./formatear.js";

//variables

const invitacion = document.querySelector('.invitacion');
const footer = document.querySelector('footer');

 
filtrarNegocios();

function filtrarNegocios(){

    const id = parseInt(document.querySelector('body').dataset.id);
    const categorias = db.filter(data => data.categoria === id);
    const contenedor = document.querySelector('#datos-neg');

    // console.log(typeof id);
    // console.log(categorias)

    categorias.forEach(negocio => {

        

        const {nombre, direccion, telefono, whatsapp, imagen, url} = negocio;

        const tarjetaDiv = document.createElement('DIV');
        tarjetaDiv.classList.add('tarjeta');

        /// imagen del negocio
        const contenedorImagen = document.createElement('DIV');
        contenedorImagen.classList.add('imagen');

        const negocioImagen = document.createElement('IMG');
        negocioImagen.width = '120';
        negocioImagen.classList.add('img-fluid');
        negocioImagen.alt = `Imagen del negocio ${nombre}`;
        negocioImagen.src = imagen ? `images/${imagen}` : 'https://charcas.xyz/images/icon256n.png';
        console.log(negocioImagen)
        
        contenedorImagen.appendChild(negocioImagen);


        //contenedor con la informacion del negocio
        const contenidoDiv = document.createElement('DIV');
        contenidoDiv.classList.add('contenido');

        const listadoUl = document.createElement('UL');
        listadoUl.classList.add('list-unstyled');


        // nombre del negocio
        const negocioTitle = document.createElement('LI');
        negocioTitle.classList.add('title');
        negocioTitle.textContent = nombre;
        
        // direccion del negocio
        const negocioDireccion = document.createElement('LI');
        negocioDireccion.classList.add('direction');
        negocioDireccion.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${direccion}`;


        listadoUl.appendChild(negocioTitle);
        listadoUl.appendChild(negocioDireccion);

        /// numero de telefono
        if(telefono){
            const negocioTelefono = document.createElement('LI');
            negocioTelefono.classList.add('telefono');
            const numeroFormateado = formatearNumero(telefono)
            negocioTelefono.innerHTML = `<i class="bi bi-telephone-fill"></i> ${numeroFormateado}`;
            listadoUl.appendChild(negocioTelefono);
        }

        if(whatsapp){
            const negocioWhatsapp = document.createElement('LI');
            negocioWhatsapp.classList.add('whatsapp');
            const numeroFormateado = formatearNumero(whatsapp);
            negocioWhatsapp.innerHTML = `<i class="bi bi-whatsapp"></i> ${numeroFormateado}`;
            listadoUl.appendChild(negocioWhatsapp);
        }

        if(url){
            const negocioUrl = document.createElement('LI');

            const negocioA = document.createElement('A');
            negocioA.href = url;
            negocioA.classList.add('boton', 'boton-menu');
            negocioA.textContent = 'Más Información';

            negocioUrl.appendChild(negocioA);
            listadoUl.appendChild(negocioUrl);
        }
        


        contenidoDiv.appendChild(listadoUl);




        // agregamos a la tarjeta o card
        tarjetaDiv.appendChild(contenedorImagen);
        tarjetaDiv.appendChild(contenidoDiv);


        // agregamos al html
        contenedor.appendChild(tarjetaDiv);




    });


    if(invitacion){


        const container = document.createElement('DIV');
        container.classList.add('container');

        const row = document.createElement('DIV');
        row.classList.add('row');

        const invitacionContainer = document.createElement('DIV');
        invitacionContainer.classList.add('invitacion__container');

        const invitacionTexto = document.createElement('DIV');
        invitacionTexto.classList.add('invitacion__texto');

        const invitacionInfo = extractoCategoria(id);
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










}

