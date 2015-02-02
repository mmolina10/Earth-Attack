#pragma strict
function Start () {
	Screen.showCursor = false;
}

function Update(){
	if(Input.GetKeyDown(KeyCode.Return) || Input.touchCount > 0){
		Application.LoadLevel("Nivel1");
	}
}