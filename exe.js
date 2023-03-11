const db = [
    {
       id: 19,
       work: true,
       categoria: 'comida',
       nombre: 'negocio 1',
       datos: {
            direccion: 'direccion 1',
            info: {
                telefono: 419100,
                whatsapp: 419100,
                telegram: 456484
            }
       }
    },

    {
        id: 20,
        work: true,
        categoria: 'comida',
        nombre: 'negocio 2',
        datos: {
             direccion: 'direccion 2',
             info: {
                 telefono: null,
                 whatsapp: 419200,
                 telegram: null,
                 messenger: '@message'
             }
        }
     },
     {
        id: 20,
        work: true,
        categoria: 'oficina',
        nombre: 'negocio 3',
        datos: {
             direccion: 'direccion 3',
             info: {
                 telefono: 419300,
                 whatsapp: 419300,
                 telegram: 445662
             }
        }
     },
     {
        id: 20,
        work: true,
        categoria: 'comida',
        nombre: 'negocio 4',
        datos: {
             direccion: 'direccion 4',
             info: {
                 telefono: 419400,
                 whatsapp: 419400,
                 telegram: 445662
             }
        }
     },


]


const resultado = document.querySelector('#resultado');

const resultado2 = db.filter(negocio => negocio.work === true && negocio.categoria === 'comida');
console.log(resultado2);

db.forEach(negocio => {

    const {nombre, datos:{direccion,info, info:{telefono, whatsapp}}} = negocio;
    const divResultado = document.createElement('DIV'); 
    divResultado.classList.add('negocio');

    if(nombre){
        const negocioNombre = document.createElement('H3');
        negocioNombre.textContent = nombre;
        divResultado.appendChild(negocioNombre);
    }
    if(direccion){
        const negocioDireccion = document.createElement('P');
        negocioDireccion.innerHTML = `<strong>Direccion:</strong> ${direccion}`;
        divResultado.appendChild(negocioDireccion);
    }
    
    const telefonosContact = document.createElement('UL');

    if(telefono){
        const negocioTelefono = document.createElement('LI');
        negocioTelefono.textContent = `Telefono: ${telefono}`;
        telefonosContact.appendChild(negocioTelefono);
    }

    if(whatsapp){
        const negocioWhatsapp = document.createElement('LI');
        negocioWhatsapp.textContent = `Whatsapp: ${whatsapp}`;
        telefonosContact.appendChild(negocioWhatsapp);
    }
    

    divResultado.appendChild(telefonosContact);

    resultado.appendChild(divResultado);


    for(let key in info){
        
        if(info[key] !== null){

            const lili = document.createElement('li');
            lili.textContent = `${key}: `;
            lili.style.textTransform = 'capitalize'
            const titleLili = document.createElement('STRONG');
          
            titleLili.textContent = info[key];

            lili.appendChild(titleLili);

            if(key === 'messenger'){
                console.log('si hay');
            }
          
            const listadoNumeros = document.createElement('ul');
            listadoNumeros.appendChild(lili);
            resultado.appendChild(listadoNumeros);
        }
        
    }

    
    
})
