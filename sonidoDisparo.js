#pragma strict
var scriptDisparo : disparo;
var sonidoDisparo : AudioSource;

function Start() {
	sonidoDisparo = GetComponent.<AudioSource>();
}

function Update () {
	if(scriptDisparo.verificadorSonido == false){
		sonidoDisparo.Play();
	}
}