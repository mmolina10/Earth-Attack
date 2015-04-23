#pragma strict
function Start () {
	Cursor.visible = false;
}

function Update(){
	if(Input.GetKeyDown(KeyCode.Return)){
		OnClick();
	}
}

function OnClick(){
	Application.LoadLevel("Nivel1");
}
