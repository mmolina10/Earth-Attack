#pragma strict
public var clip : AudioClip;
function Start () {
	AudioSource.PlayClipAtPoint(clip, new Vector3 (5, 1, 2));
}

function Update () {

}