#pragma strict
public var audioVictoria : AudioSource;
var scriptVictoria : Victoria;

function Start() {
	audioVictoria = GetComponent.<AudioSource>();
}

function Update () {
	if(scriptVictoria.victoria == true){
		if(!audioVictoria.isPlaying){
			audioVictoria.Play();
		}
	}
}