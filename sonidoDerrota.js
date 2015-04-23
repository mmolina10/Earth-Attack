#pragma strict
public var audioDerrota : AudioSource;
var scriptDerrota : Derrota;

function Start() {
	audioDerrota = GetComponent.<AudioSource>();
}

function Update () {
	if(scriptDerrota.derrota == true){
		if(!audioDerrota.isPlaying){
			audioDerrota.Play();
		}
	}
}