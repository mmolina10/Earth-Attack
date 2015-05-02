#pragma strict
var PosX:int = 150;
var PosY:int = 50;
var PosX1:int = 300;
var PosY1:int = 300;
private var mensaje : String = "¡Victoria!";
var scriptEnemigos : BarraVidaYEnemigos;
var scriptGolpe : TexturaGolpe;
var pauseEnabled;
var estilo : GUISkin;
static var victoria : boolean;
var scriptDerrota : Derrota;
private var textFieldStringNombre : String = "";
var styleTexto : GUIStyle;
private var _connector : DBConnector;
private var scriptCronometro : Cronometro;
var scriptPuntuacion : Puntuacion;
private var cronometro : GameObject;
private var puntuacion : GameObject;


function Start () {
	cronometro = GameObject.Find("Cronometro");
	puntuacion = GameObject.Find("Puntuacion");
	scriptEnemigos = GetComponent("BarraVidaYEnemigos");
	scriptGolpe = GetComponent("TexturaGolpe");
	scriptDerrota = GetComponent("Derrota");
	scriptCronometro = cronometro.GetComponent("Cronometro");
	scriptPuntuacion = cronometro.GetComponent("Puntuacion");
	AudioListener.volume = 1;
	Screen.showCursor = false;
	pauseEnabled = false;
	victoria = false;
}

function Update () {
	Victoria();
}

function OnGUI(){
	GUI.skin = estilo;
	if(pauseEnabled == true){
		GUI.Label(Rect (Screen.width/2.33-(PosX/2), Screen.height/5-(PosY/1.5),500, 500),mensaje);
		GUI.Box(Rect (Screen.width/2-(PosX1/2), Screen.height/2-(PosY1/2), PosX1, PosY1),"");
		if(victoria == true){
			if(scriptDerrota.derrota == false){
				GameObject.Find("Nave").GetComponent(movimientosRatonNave).enabled = false;
			}
		}
	
// Solicitud nombre Jugador
		if(!textFieldStringNombre.Equals("")){
			styleTexto.normal.textColor = Color.green;
		}else{
			styleTexto.normal.textColor = Color.red;
		}
		GUI.Label(Rect(Screen.width /2 - 120,Screen.height /2 - 125, 180, 30), "*Nombre del jugador:", styleTexto);
		textFieldStringNombre = GUI.TextField(Rect(Screen.width/2 + 30,Screen.height /2 - 130, 100, 30), textFieldStringNombre, 25);
					
// Resumen
		if(GUI.Button(Rect(Screen.width /2 - 120,Screen.height /2 - 80,250,50), "Volver a jugar")){
			//Vuelve al juego
			if(!textFieldStringNombre.Equals("")){
				_connector = gameObject.AddComponent.<DBConnector>();
				_connector.OpenDB("URI=file:"+ Application.dataPath + "/db_earth_attack.s3db");
				_connector.InsertData(textFieldStringNombre,scriptCronometro.guiTiempo, scriptEnemigos.muertos, scriptEnemigos.vidas, scriptPuntuacion.puntuacion);
				_connector.CloseDB();
				scriptEnemigos.muertos = 0;
				Application.LoadLevel(Application.loadedLevel);
			}
		}	

// volver a menu principal
		if(GUI.Button(Rect(Screen.width /2 - 120,Screen.height /2 - -30,250,50), "Volver al menú principal" )){
			if(!textFieldStringNombre.Equals("")){
				_connector = gameObject.AddComponent.<DBConnector>();
				_connector.OpenDB("URI=file:"+ Application.dataPath + "/db_earth_attack.s3db");
				_connector.InsertData(textFieldStringNombre,scriptCronometro.guiTiempo, scriptEnemigos.muertos, scriptEnemigos.vidas, scriptPuntuacion.puntuacion);
				_connector.CloseDB();
				scriptEnemigos.muertos = 0;
				Application.LoadLevel("MenuPrincipal");
			}
		}	
	}	
}

function Victoria(){
	if(scriptDerrota.derrota == false){
		if(scriptEnemigos.muertos == 40){
			if(pauseEnabled == false){
				victoria = true;
				yield WaitForSeconds(0.5);
				scriptGolpe.text = null;
				pauseEnabled = true;
				AudioListener.volume = 0;
				Time.timeScale = 0;
				Screen.showCursor = true;
			}
		}
	}
}