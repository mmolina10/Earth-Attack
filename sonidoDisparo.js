#pragma strict
var scriptDisparo : disparo;

function Update () {
	if(scriptDisparo.verificadorSonido == false){
		audio.Play();
	}
}