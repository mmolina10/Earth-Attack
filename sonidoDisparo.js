#pragma strict
var scriptDisparo : disparo;

function Start () {
	scriptDisparo = GetComponent("disparo");
}

function Update () {
	if(scriptDisparo.verificadorSonido == false){
		audio.Play();
	}
}