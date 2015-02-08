#pragma strict
public var audioVictoria : AudioClip;
var scriptVictoria : Victoria;

function Update () {
	if(scriptVictoria.victoria == true){
		if(!audio.isPlaying){
			audio.clip = audioVictoria;
			audio.Play();
		}
	}
}