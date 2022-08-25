const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})



const abrirSpinner = [...document.querySelectorAll('.visitar')];
   

abrirSpinner.forEach( spin => {
    spin.addEventListener('click', () => {

        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        document.body.insertBefore(spinner, document.querySelector('.navv'));
        
     })

})

document.addEventListener('DOMContentLoaded', () => {

    const spin = document.querySelector('.spinner');
    if(spin){
       spin.remove()
    }
    
});







