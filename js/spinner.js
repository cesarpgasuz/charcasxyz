const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})



const abrirSpinner = [...document.querySelectorAll('.visitar')];
const spinner = document.querySelector('.spinner');




abrirSpinner.forEach( spin => {
    spin.addEventListener('click', () => {
        spinner.classList.add('visible');
     })

})








