


const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})


const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');



for(const irse of abrirSpinner){
    
    irse.addEventListener('click', () => {
        spinner.classList.remove('oculto');
        spinner.classList.add('activo');
    })

}


//document.addEventListener('DOMContentLoaded', ocultarSpinner);

function ocultarSpinner(){
    if(spinner.classList.contains('activo')){
        spinner.style.display = 'none';
    }
}


if (document.readyState == 'interactive') {
  // cargando todavía, esperar el evento
  console.log('todavia no se lee')
  document.addEventListener('DOMContentLoaded', ocultarSpinner);
  
  //document.addEventListener('DOMContentLoaded', work);
} else if(document.readyState == 'loading'){
    console.log('cargando..')
    spinner.style.display = 'none';
  
}else{
    // DOM está listo!
  console.log('leido')
  spinner.style.display = 'none';

}





/*
window.addEventListener('unload', () => {
    spinner.remove();
})

*/



// abrirSpinner.forEach( spin => {
//     spin.addEventListener('click', () => {
//         const spinner = document.createElement('div');
//         spinner.classList.add('spinner');
//         document.body.insertBefore(spinner, document.querySelector('.navv'));
//      })
// })








