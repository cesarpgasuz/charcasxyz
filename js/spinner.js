const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})


const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');



console.log(abrirSpinner)

window.addEventListener('load', mostrarSpinner);

function mostrarSpinner(){
     if(spinner.classList.contains('activo')){
        spinner.classList.remove('activo');
        spinner.classList.add('oculto');
    }else{
        console.log('error...')
    }
}



abrirSpinner.forEach( spin => {
    spin.addEventListener('click', () => {
        spinner.classList.remove('oculto');
        spinner.classList.add('activo');
     })

})


document.addEventListener('DOMContentLoaded', () => {
    if(spinner.classList.contains('activo')){
        spinner.classList.remove('activo');
        spinner.classList.add('oculto');
    }
})