// variables
const compartirButton = document.querySelector('#compartir__enlace');
const modalCompartir = document.querySelector('#modal__compartir');
const modalSombra = document.querySelector('.modal-sombra');


const urlPagina = window.location.href;




//funciones
document.addEventListener('DOMContentLoaded', () => {



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
         modalSombra.classList.toggle('active');
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
        modalSombra.classList.toggle('active');
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
        modalSombra.classList.remove('active');
    }
    function compartirFacebook(){
        const enlaceFacebook = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(urlPagina)}`;
        cerrarModal();
        window.open(enlaceFacebook);
        modalSombra.classList.remove('active');
    }
    
    modalSombra.addEventListener('click', cerrarModal);

    
});