#pragma strict
public var audioVictoria : AudioClip;
var scriptVictoria : Victoria;
function Start () {
	scriptVictoria = GetComponent("Victoria");
}

function Update () {
	if(scriptVictoria.victoria == true){
		if(!audio.isPlaying){
			audio.clip = audioVictoria;
			audio.Play();
		}
	}
}