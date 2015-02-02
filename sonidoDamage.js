#pragma strict
var scriptEnemigos : BarraVidaYEnemigos;
function Start () {
	scriptEnemigos = GetComponent("BarraVidaYEnemigos");
}

function Update () {
	if(scriptEnemigos.comprobador == true){
		audio.Play();
		scriptEnemigos.comprobador = false;
	}
}