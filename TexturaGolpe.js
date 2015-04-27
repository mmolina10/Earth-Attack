#pragma strict
static var text : Texture2D;
function Start () {
	text = null;
}

function OnGUI () {
	GUI.Label(Rect(0,-3,Screen.width,Screen.height+6),text);
}

