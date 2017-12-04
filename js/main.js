'use strict';
// Vamos a realizar primero una versión sencilla del juego. Para ello tenemos que realizar las siguientes funcionalidades desde JavaScript:
// generar un número aleatorio con la ayuda de Math.random y Math.ceil
// al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado")
// actualizamos el contador de intentos cada que el usuario pruebe


var score = document.querySelector('.tries');
var button = document.querySelector('.boton_try');

//El número aleatorio no con cada click
var aleatorio = Math.random()*100;
var aleatorio2 = Math.ceil(aleatorio);

	button.addEventListener('click', function(){
		console.log(aleatorio2);
});
