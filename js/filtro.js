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