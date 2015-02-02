#pragma strict
function Start () {
	Screen.showCursor = false;
}

function Update(){
	if(Input.GetKeyDown(KeyCode.Return)){
		OnClick();
	}
}

function OnClick(){
	Application.LoadLevel("Nivel1");
}
