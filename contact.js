function procesa_envio(event) {
	event.preventDefault();
	
	console.log("Procesando envío!!!");
	
	let salida = document.getElementById("salida");

	let nombre = document.getElementById("nombre");
	
	if (nombre.value.length < 2) {
		salida.value = "El nombre debe tener al menos 2 caracteres ! ! !";
		event.preventDefault();
		
		nombre.style.color = "#ff0000";
		nombre.style.border = "2px solid #ff0000";
		salida.style.color = "#ff0000";
		
		return false;
	}
	nombre.style.color = "#22ff00";
	nombre.style.border = "2px solid #22ff00";
	salida.style.color = "#22ff00";
	
	let email = document.getElementById("email");
	
	if (email.value.lenght < 6) {
		salida.value = "El e-mail debe tener al menos 6 caracteres."
		
		email.style.color = "#ff0000";
		email.style.border = "2px solid #ff0000";
		salida.style.color = "#ff0000";
		
		return false;
	}
	document.getElementById("form_contacto").submit();
}