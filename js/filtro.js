(function(){
	$(document).ready(function(){
		$(".btn-fil").click(function(e){
			e.preventDefault();
			var filtro = $(this).attr("data-filter");

			if (filtro == "todos") {
				$(".box-cat").show(500);
			} else {
				$(".box-cat").not("."+filtro).hide(500);
				$(".box-cat").filter("."+filtro).show(500);
			}
		});

		$("ul.fil li").click(function(){
			$(this).addClass("activeee").siblings().removeClass("activeee");
		});
	});
}())


/*
const boxCat = [...document.querySelectorAll('.box-cat')];
const listado = [...document.querySelectorAll('ul.fil li')];
console.log(listado);
//console.log(boxCat);
const botonFiltro = [...document.querySelectorAll('.btn-fil')];
//console.log(botonFiltro);

for(const btnFiltro of botonFiltro){
	btnFiltro.addEventListener('click', (e) => {
		e.preventDefault();
		const categoria = e.target.getAttribute('data-filter');
		
		const rest = boxCat.filter(box => {
		 	if(box.classList.contains(categoria)){
		 		box.classList.remove('nooo')
		 			
		 	}
		 	else{
				box.classList.add('nooo')
		 	}
		 });
		 
		
	})
}



*/