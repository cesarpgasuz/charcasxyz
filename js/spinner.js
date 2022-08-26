const botonMenu = [...document.querySelectorAll('.boton-menu')];
botonMenu.forEach(boton => {
    console.log(boton)
    boton.classList.add('visitar');
})


const abrirSpinner = [...document.querySelectorAll('.visitar')];



for(const irse of abrirSpinner){
    
    irse.addEventListener('click', () => {
        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        document.body.insertBefore(spinner, document.querySelector('.navv'));
    })

}



// abrirSpinner.forEach( spin => {
//     spin.addEventListener('click', () => {
//         const spinner = document.createElement('div');
//         spinner.classList.add('spinner');
//         document.body.insertBefore(spinner, document.querySelector('.navv'));
//      })
// })








