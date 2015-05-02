#pragma strict

function Start () {
	Screen.showCursor = false;
}

function Update(){
	if(Input.GetKeyDown(KeyCode.Return)){
		Application.LoadLevel("Nivel1");
	}
}