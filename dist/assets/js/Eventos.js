// Tachar elemento de lista
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed")
})

//Eliminar un elemento de dato
$("ul").on("click", "#delete", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	event.stopPropagation()
})

//Editar un elemento
$("ul").on("click", "#edit", function(event){

	var inpName = $("#name")
	var newName = inpName.val();

	if(newName != '') {

		$(this).parent().replaceWith("<li id='nombre'><span id='delete' ><i class='fa fa-trash'></i></span><span id='edit'><i class='fa fa-pencil'></i></span> " + newName + "</li>")
		inpName.val("") // Limpiar Input Name
	}

})

//Agregar un nuevo elemento
$("#name").keypress(function(event){
	console.log(event);
	if(event.which === 13) {
		var todoText = $(this).val()
		console.log(todoText);
		if(todoText != ''){
			$(this).val("")
			$("ul").append("<li id='nombre'><span id='delete' ><i class='fa fa-trash'></i></span><span id='edit'><i class='fa fa-pencil'></i></span> " + todoText + "</li>")
		}
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})