#pragma strict
public var audioDerrota : AudioClip;
var scriptDerrota : Derrota;

function Update () {
	if(scriptDerrota.derrota == true){
		if(!audio.isPlaying){
			audio.clip = audioDerrota;
			audio.Play();
		}
	}
}