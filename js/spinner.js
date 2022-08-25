const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})



const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');



document.addEventListener('DOMContentLoaded', mostrarSpinner);

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


function GoBackWithRefresh(event) {
    if ('referrer' in document) {
        window.location = document.referrer;
        /* OR */
        //location.replace(document.referrer);
    } else {
        window.history.back();
    }
}





