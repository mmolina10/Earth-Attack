#pragma strict
static var text : Texture2D;
var textura : Texture2D;
function Start () {
	text = textura;
	Screen.showCursor = false;
}

function OnGUI () {
	GUI.Label(Rect(0,-3,Screen.width,Screen.height+6),text);
}

function Update(){
	if(Input.GetKeyDown(KeyCode.Return)){
		Application.LoadLevel("Nivel1");
	}
}