#pragma strict
var scriptEnemigos : BarraVidaYEnemigos;
var scriptTexturaGolpe : TexturaGolpe;
function Start () {
	scriptTexturaGolpe = GetComponent("TexturaGolpe");
	scriptEnemigos = GetComponent("BarraVidaYEnemigos");
}

function Update () {
	if(scriptEnemigos.comprobador2 == true){
		audio.Play();
		scriptEnemigos.comprobador2 = false;
	}
}