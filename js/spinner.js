const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})


const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');



console.log(abrirSpinner)

window.addEventListener('DOMContentLoaded', mostrarSpinner);

function mostrarSpinner(){
     if(spinner.classList.contains('activo')){
        spinner.classList.remove('activo');
        spinner.classList.add('oculto');
    }else{
        console.log('error...')
    }

  

}

 setTimeout(() => {
        spinner.classList.remove('activo');
        spinner.classList.add('oculto');
}, 1500);



abrirSpinner.forEach( spin => {
    spin.addEventListener('click', () => {
        spinner.classList.remove('oculto');
        spinner.classList.add('activo');
     })

})





