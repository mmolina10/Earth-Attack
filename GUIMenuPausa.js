var PosX1:int = 300;
var PosY1:int = 350;
var scriptMensajes : GUIMensajes; 
var scriptExplosionNave : explosionNave; 
static var pauseEnabled;
private var showGraphicsDropDown = false;
var scriptEnemigos : BarraVidaYEnemigos;
private var mostrarControles = false;
var scriptMenuPrincipal : GUIMenuPrincipal;

function Start(){
	scriptMensajes = GetComponent("GUIMensajes");
	scriptExplosionNave = GetComponent("explosionNave");
	scriptEnemigos = GetComponent("BarraVidaYEnemigos");
	scriptMenuPrincipal = GetComponent("GUIMenuPrincipal");
	Cursor.visible = false;
	pauseEnabled = false;
	AudioListener.volume = 1;
}

function OnGUI(){
	
	if(pauseEnabled == true){
		GUI.Box(Rect (Screen.width/2-(PosX1/2), Screen.height/2-(PosY1/2), PosX1, PosY1),"");
		GameObject.Find("Nave").GetComponent(movimientosRatonNave).enabled = false;
// botones del menu
		
// Resumen

		if(GUI.Button(Rect(Screen.width /2.025 - 120,Screen.height /1.970 - 160,250,50), "Resumen")){
			//Vuelve al juego
			showGraphicsDropDown = false;
			mostrarControles = false;
			if(pauseEnabled == true){
				pauseEnabled = false;
				Time.timeScale = 1;
				AudioListener.volume = 1;
				Cursor.visible = false;	
				GameObject.Find("Nave").GetComponent(movimientosRatonNave).enabled = true;	
			}
		}	
		
		if(GUI.Button(Rect(Screen.width /2.025 - 120,Screen.height /1.970 - 95 ,250,50), "Controles")){
			showGraphicsDropDown = false;
			if(mostrarControles == false){
				mostrarControles = true;
			}
			else{
				mostrarControles = false;
			}
		}
	
//funcion para los controles del juego

		if(mostrarControles == true){
			if(GUI.Button(Rect(Screen.width /2 - (500/2),Screen.height /1.94- (300/2) + 50,100,50),scriptMenuPrincipal.mensaje)){
				if(scriptMenuPrincipal.mensaje.Equals("Normal")){
					scriptMenuPrincipal.mensaje = "Invertido";
				}
				else if(scriptMenuPrincipal.mensaje.Equals("Invertido")){
					scriptMenuPrincipal.mensaje = "Normal";
				}
			}
		}
	
// boton calidad visual del juego
	
		if(GUI.Button(Rect(Screen.width /2.025 - 120,Screen.height /1.970 - 30 ,250,50), "Calidad Gráfica")){
			mostrarControles = false;
			if(showGraphicsDropDown == false){
				showGraphicsDropDown = true;
			}
			else{
				showGraphicsDropDown = false;
			}
		}

//funcion para la calidad de imagen del juego
		if(showGraphicsDropDown == true){
			if(GUI.Button(Rect(Screen.width /2 - (500/2),Screen.height /2- (300/2) ,100,50), "Fastest")){
				QualitySettings.currentLevel = QualityLevel.Fastest;
			}
			if(GUI.Button(Rect(Screen.width /2 - (500/2),Screen.height /2- (300/2) + 50,100,50), "Fast")){
				QualitySettings.currentLevel = QualityLevel.Fast;
			}
			if(GUI.Button(Rect(Screen.width /2 - (500/2),Screen.height /2- (300/2) + 100,100,50), "Simple")){
				QualitySettings.currentLevel = QualityLevel.Simple;
			}
			if(GUI.Button(Rect(Screen.width /2 - (500/2),Screen.height /2- (300/2) + 150,100,50), "Good")){
				QualitySettings.currentLevel = QualityLevel.Good;
			}
			if(GUI.Button(Rect(Screen.width /2 - (500/2),Screen.height /2- (300/2) + 200,100,50), "Beautiful")){
				QualitySettings.currentLevel = QualityLevel.Beautiful;
			}
			if(GUI.Button(Rect(Screen.width /2 - (500/2),Screen.height /2- (300/2) + 250,100,50), "Fantastic")){
				QualitySettings.currentLevel = QualityLevel.Fantastic;
			}
		}


// volver a menu principal

		if(GUI.Button(Rect(Screen.width /2.025 - 120,Screen.height /1.970 - -35,250,50), "Volver a menú principal" )){
			showGraphicsDropDown = false;
			mostrarControles = false;
			Application.LoadLevel("MenuPrincipal");
		}		


// salir del juego

		if (GUI.Button (Rect (Screen.width /2.025 - 120,Screen.height /1.970 +100,250,50), "Salir del juego")){
			showGraphicsDropDown = false;
			Application.Quit();
		}
	}	
}

function Update(){
	//boton que llama el menu
	
	if(Input.GetKeyDown(KeyCode.P) && scriptMensajes.dialogos == scriptMensajes.iDialogueCnt && scriptExplosionNave.muerte == false && scriptEnemigos.muertos < 40 && scriptEnemigos.energiaJugador > 0){
		if(pauseEnabled == false){
			pauseEnabled = true;
			AudioListener.volume = 0;
			Time.timeScale = 0;
			Cursor.visible = true;
		}
	}
}
