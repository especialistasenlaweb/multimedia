$("#formulario").submit(function(e){
	e.preventDefault();
	var cadena=$("#formulario").serializeArray();
	console.info(cadena);
	$.ajax({
		url:"http://especialistasenlaweb.com/datos.php",
		type:"post",
		data:cadena
	}).done(function(respuesta){
		 $(".mensaje").html(respuesta);
	});
});