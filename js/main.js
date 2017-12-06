'use strict';
// Vamos a realizar primero una versión sencilla del juego. Para ello tenemos que realizar las siguientes funcionalidades desde JavaScript:
// generar un número aleatorio con la ayuda de Math.random y Math.ceil
// al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado")
// actualizamos el contador de intentos cada que el usuario pruebe


var score = document.querySelector('.tries');
var button = document.querySelector('.boton_try');
var puntos=1;
var pista=document.querySelector ('.pista');


//El número aleatorio NO con cada click, fuera
var aleatorio = Math.random()*100;
var aleatorio2 = Math.ceil(aleatorio);


//El numero de intentos al hacer click
	button.addEventListener('click', function(){
		console.log(aleatorio2);
		score.innerHTML=puntos++;
//Las pistas o acierto
var numero= document.querySelector ('#box_number').value;
		if (numero<aleatorio2) {
			pista.innerHTML= 'Te has quedado corta ¡Prueba otra vez!'
		}
		else if (numero>aleatorio2) {
			pista.innerHTML='Te has pasado ¡Inténtalo de nuevo!'
		}
		else {
			pista.innerHTML='¡¡Enhorabuena, has acertado!!'
		};
});
