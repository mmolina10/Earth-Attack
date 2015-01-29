#pragma strict
import UnityEngine.UI.Image;
var PosX:int = 150;
var PosY:int = 50;
var PosX1:int = 300;
var PosY1:int = 300;
private var mensaje : String = "¡Fallaste!";
var scriptEnemigos : BarraVidaYEnemigos;
var pauseEnabled;
var estilo : GUISkin;
static var derrota : boolean;

function Start () {
	scriptEnemigos = GetComponent("BarraVidaYEnemigos");
	AudioListener.volume = 1;
	Screen.showCursor = false;
	pauseEnabled = false;
	derrota = false;
}

function Update () {
	RetardoYMenu();
}

function OnGUI(){
	GUI.skin = estilo;
	if(pauseEnabled == true){
		GUI.Label(Rect (Screen.width/2.2-(PosX/2), Screen.height/5-(PosY/0.7),500, 500),mensaje);
		GUI.Box(Rect (Screen.width/2-(PosX1/2), Screen.height/2-(PosY1/2), PosX1, PosY1),"");
		if(GameObject.Find("Nave") != null){	
			GameObject.Find("Nave").GetComponent(movimientosRatonNave).enabled = false;
		}
// botones del menu
		
// Resumen

		if(GUI.Button(Rect(Screen.width /2 - 120,Screen.height /2 - 80,250,50), "Volver a jugar")){
			//Vuelve al juego
			scriptEnemigos.muertos = 0;
			Application.LoadLevel(Application.loadedLevel);
		}	


// volver a menu principal

		if(GUI.Button(Rect(Screen.width /2 - 120,Screen.height /2 - -30,250,50), "Volver al menú principal" )){
			Application.LoadLevel("MenuPrincipal");
		}	
	}	
}

function RetardoYMenu(){
	if(scriptEnemigos.vidas == 0 || GameObject.Find("Nave") == null){
		scriptEnemigos.vidas = 0;
		scriptEnemigos.tantoPorCiento = 0;
		scriptEnemigos.energiaJugador = 0;
		if(pauseEnabled == false){
			derrota = true;
			yield WaitForSeconds(2);
			scriptEnemigos.imagenGolpe.SetActive(false);
			pauseEnabled = true;
			AudioListener.volume = 0;
			Time.timeScale = 0;
			Screen.showCursor = true;
		}
	}
}