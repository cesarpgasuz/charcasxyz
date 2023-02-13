(function() {

    const btnFil = document.querySelectorAll('.btn-fil');

    for(const boton of btnFil){
        boton.addEventListener('click', (e) => {
           
            const filtro = boton.dataset.filter;

            if(filtro === 'todos'){
                mostrarTodos();
                
            }else{
                mostrarFiltrados(filtro);
                ocultarNoFiltrados(filtro);
            }
        })

    }


    const listaElementos = document.querySelectorAll('ul.fil li');

    for(const lista of listaElementos){
        lista.addEventListener('click', () => {
           
            lista.classList.add('activeee');
            const sibling = getSiblings(lista);
            console.log(sibling)
            sibling.forEach(sib => sib.classList.remove('activeee')); 
        })
    }


    function getSiblings(elem) {
        
        var siblings = [];
        var sibling = elem.parentNode.firstChild;
        console.log(sibling);
       

        while (sibling) {
          if (sibling.nodeType === 1 && sibling !== elem) {
            
            siblings.push(sibling);
            console.log(sibling);
          }
          sibling = sibling.nextSibling;
          
        }
    
        return siblings;
      }


    function mostrarTodos(){
        const elementosBox = document.querySelectorAll('.box-cat');
         elementosBox.forEach(element => element.style.display = 'flex');
     }

    function mostrarFiltrados(filtro){
       const elementosBox = document.querySelectorAll('.box-cat.' + filtro);
        elementosBox.forEach(element =>  element.style.display = 'flex');
    }

    function ocultarNoFiltrados(filtro){
        const elementosBox = document.querySelectorAll('.box-cat:not(.' + filtro +')');
        elementosBox.forEach(element => element.style.display = 'none');
    }
    
})();