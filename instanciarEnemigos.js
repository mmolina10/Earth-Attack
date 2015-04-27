#pragma strict
var enemigos : GameObject[]; 
private var clon : GameObject;
private var indice;
var tiempoMinEspera = 2;
var tiempoMaxEspera = 10;
var position : Vector3;
var rotacion : Quaternion = Quaternion.identity;
private var posicionZ : float;
private var numAnterior : float;
var scriptEnemigos : BarraVidaYEnemigos;

function Start(){
	scriptEnemigos = GetComponent("BarraVidaYEnemigos");
	GenerarEnemigos();
}

function GenerarEnemigos(){
	while(scriptEnemigos.verificador == false){
		while(scriptEnemigos.muertos < 40){
			posicionZ = Random.Range(240, 1940);
			position = Vector3(1850, 0, posicionZ);
			indice = Random.Range(0,enemigos.length);
			yield WaitForSeconds(Random.Range(tiempoMinEspera, tiempoMaxEspera));
			if(scriptEnemigos.muertos == 40){
				return;
			}
			clon = Instantiate(enemigos[indice], position, rotacion);
		}
		if(scriptEnemigos.muertos ==  40){
			return;
		}
	}
}





