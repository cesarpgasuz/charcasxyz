const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})

const contSpin = document.querySelector('.contSpin');

const abrirSpinner = [...document.querySelectorAll('.visitar')];

limpiarSpin();

abrirSpinner.forEach( spin => {
    spin.addEventListener('click', () => {
        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        contSpin.appendChild(spinner);
     })
})

window.addEventListener('load', () => {

    const spin = document.querySelector('.spinner');
    if(spin){
       spin.remove()
    }
    
});

function limpiarSpin(){
    while(contSpin.firstChild){
        contSpin.removeChild(contSpin.firstChild);
    }
   }






