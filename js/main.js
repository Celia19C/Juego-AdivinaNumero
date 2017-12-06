'use strict';
// Vamos a realizar primero una versión sencilla del juego. Para ello tenemos que realizar las siguientes funcionalidades desde JavaScript:
// generar un número aleatorio con la ayuda de Math.random y Math.ceil
// al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado")
// actualizamos el contador de intentos cada que el usuario pruebe


var score = document.querySelector('.tries');
var button = document.querySelector('.boton_try');
var puntos=0;
var pista=document.querySelector('.pista');
var guardar=document.querySelector('.name');



//El número aleatorio NO con cada click, fuera.
// Antes no era función, pero ahora sí porque luego, cuando acierten, la necesitaré para crear otro número nuevo.
function aleatorio3 (){
 	var aleatorio = Math.random()*100;
 	var aleatorio = Math.ceil(aleatorio);
	return aleatorio;
}

var aleatorio2 = aleatorio3();
console.log(aleatorio2);

//El click
button.addEventListener('click', function(){
//El input como valor
var numero= document.querySelector ('#box_number').value;

var numero = parseInt(numero);
//Cuando es un número del 0 al 100
	if (numero<101 && numero>=0){
		//El numero de intentos al hacer click

		score.innerHTML=1+puntos++;
		//Pistas
		if (numero<aleatorio2) {
			pista.innerHTML= 'Te has quedado corta ¡Prueba otra vez!'
		}
		else if (numero>aleatorio2) {
			pista.innerHTML='Te has pasado ¡Inténtalo de nuevo!'
		}
		else if (numero==aleatorio2){
			pista.innerHTML='¡¡Enhorabuena, has acertado!!'
			guardar.classList.remove('name')
			guardar.classList.add('open')
		}}
//Cuando o no es un número o es menor de 0 o mayor de 100.
	else if (numero>100 || numero<0) {
		alert ('Solo se permiten números del 0 al 100.')
	}
	else {
		alert ('Escribe un número con dígitos.')
	}
});

////////////////////////////////////////////////////////////

var boton_s=document.querySelector('.boton_save')
var hstrc=document.querySelector('.lista')

//Hacer click en el botón guardar
boton_s.addEventListener('click', function(){
	aleatorio3();
	aleatorio2 = aleatorio3();
	console.log(aleatorio2);
//Volver a ocultar lo de guardar el nombre
	guardar.classList.remove('open')
	guardar.classList.add('name');
//Resetear el marcador y las pistas
	score.innerHTML='0';
	pista.innerHTML='Escribe un número del 0 al 100 y prueba';
//Histórico
	var nombre= document.querySelector ('#box_name').value;
	hstrc.innerHTML='<li>'+ nombre +'</li>'+
});
