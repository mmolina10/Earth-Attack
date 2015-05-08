#pragma strict
var scriptDisparo : Disparo;

function Start () {
	scriptDisparo = GetComponent("Disparo");
}

function Update () {
	if(scriptDisparo.verificadorSonido == false){
		audio.Play();
	}
}