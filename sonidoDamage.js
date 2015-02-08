#pragma strict
var scriptEnemigos : BarraVidaYEnemigos;

function Update () {
	if(scriptEnemigos.comprobador == true){
		audio.Play();
		scriptEnemigos.comprobador = false;
	}
}