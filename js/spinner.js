const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})



const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');





console.log(abrirSpinner)


if (document.readyState == 'loading') {
    // cargando todavía, esperar el evento
    document.addEventListener('DOMContentLoaded', mostrarSpinner);
  } else {
    // DOM está listo!
    console.log('listo....')
  }



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


const reverse = document.querySelector('.flot-anverse');

reverse.addEventListener('click', () => {
    history.back();
    spinner.classList.remove('activo');
    spinner.classList.add('oculto');
})






