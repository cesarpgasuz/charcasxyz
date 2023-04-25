import { db } from "../db.js";
import { formatearNumero } from "./formatear.js";

filtrarNegocios();

function filtrarNegocios(){

    const id = document.querySelector('body').dataset.id;
    const categorias = db.filter(data => data.categoria === id);
    const contenedor = document.querySelector('#datos-neg');

   
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
        negocioImagen.src = `images/${imagen}`;
        
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


}
