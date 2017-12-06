'use strict';
// Vamos a realizar primero una versión sencilla del juego. Para ello tenemos que realizar las siguientes funcionalidades desde JavaScript:
// generar un número aleatorio con la ayuda de Math.random y Math.ceil
// al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado")
// actualizamos el contador de intentos cada que el usuario pruebe


var score = document.querySelector('.tries');
var button = document.querySelector('.boton_try');
var puntos=1;
var pista=document.querySelector ('.pista');
var guardar=document.querySelector ('.name')


//El número aleatorio NO con cada click, fuera
var aleatorio = Math.random()*100;
var aleatorio2 = Math.ceil(aleatorio);


//El numero de intentos al hacer click
button.addEventListener('click', function(){

//Las pistas o acierto
var numero= document.querySelector ('#box_number').value;
var numero = parseInt(numero);
//Cuando es un número del 0 al 100
	if (numero<101 && numero>0){
		console.log(aleatorio2);
		score.innerHTML=puntos++;
		if (numero<aleatorio2) {
			pista.innerHTML= 'Te has quedado corta ¡Prueba otra vez!'
		}
		else if (numero>aleatorio2) {
			pista.innerHTML='Te has pasado ¡Inténtalo de nuevo!'
		}
		else if (numero==aleatorio2){
			pista.innerHTML='¡¡Enhorabuena, has acertado!!'
			// guardar.classList.remove ('.name')
			// guardar.classList.add ('.open')
		}}
//Cuando o no es un número o es menor de cero o mayor de 100.
	else if (numero>100 || numero<0) {
		alert ('Solo se permiten números del 0 al 100.')
	}
	else {
		alert ('Escribe un número con dígitos.')
	}
});
