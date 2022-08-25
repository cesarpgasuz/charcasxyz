const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})



const abrirSpinner = [...document.querySelectorAll('.visitar')];
   

abrirSpinner.forEach( spin => {
    spin.addEventListener('click', () => {

        const spinner = document.createElement('div');
        spinner.classList.toggle('spinner');
        document.body.insertBefore(spinner, document.querySelector('.navv'));
        
     })

})

window.addEventListener('load', () => {

    const spin = document.querySelector('.spinner');
    if(spin){
       spin.remove()
    }
    
});







