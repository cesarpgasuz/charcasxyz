const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    //console.log(boton)
    boton.classList.add('visitar');
})


const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');


document.addEventListener('load', () =>{
  for(const irse of abrirSpinner){
    
    irse.addEventListener('click', () => {
        spinner.style.display = 'block';
    })

}
});



//document.addEventListener('DOMContentLoaded', ocultarSpinner);



if (document.readyState == 'loading') {
  // cargando todavía, esperar el evento
  console.log('cargando')
  
  //document.addEventListener('DOMContentLoaded', work);
} else if(document.readyState == 'interactive'){
    console.log('listo')
    ocultarSpinner();
  
}else{
    // DOM está listo!
  console.log('leido')
  ocultarSpinner();

}




function ocultarSpinner(){
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








