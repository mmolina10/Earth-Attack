#pragma strict
var scriptEnemigos : BarraVidaYEnemigos;
public var audioDamage : AudioSource;

function Start() {
	audioDamage = GetComponent.<AudioSource>();
}

function Update () {
	if(scriptEnemigos.comprobador == true){
		audioDamage.Play();
		scriptEnemigos.comprobador = false;
	}
}