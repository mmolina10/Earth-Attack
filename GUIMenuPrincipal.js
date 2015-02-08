#pragma strict
private var showGraphicsDropDown = false;
var scriptEnemigos : BarraVidaYEnemigos;
var invertido : boolean = true;
private var mostrarControles = false;
static var mensaje : String = "Invertido";
var PosXDimension : int = 800;
var PosYDimension : int = 500;
var PosX : int = 500;
var PosY : int = 600;
public var textura : Texture;
function Start () {
	AudioListener.volume = 1;
}

function OnGUI(){
		GUI.Label(Rect(Screen.width/2-(PosX/2), Screen.height/2-(PosY/2), PosXDimension, PosYDimension),textura);
// botones del menu
		
	
// boton calidad visual del juego
		if(GUI.Button(Rect(Screen.width /2 - 350,Screen.height /2 - 147.5 ,250,50), "Jugar")){
			mostrarControles = false;
			showGraphicsDropDown = false;
			scriptEnemigos.muertos = 0;
			Application.LoadLevel("controles");
		}
		if(GUI.Button(Rect(Screen.width /2 - 350,Screen.height /2 - 67.5 ,250,50), "Calidad Gráfica")){
			mostrarControles = false;		
			if(showGraphicsDropDown == false){
				showGraphicsDropDown = true;
			}
			else{
				showGraphicsDropDown = false;
			}
		}
		
		if(GUI.Button(Rect(Screen.width /2 - 350,Screen.height /2 - -12.5 ,250,50), "Controles")){
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
			if(GUI.Button(Rect(Screen.width /2.5,Screen.height /1.92 ,150,50), mensaje)){
				if(mensaje.Equals("Normal")){
					mensaje = "Invertido";
				}
				else if(mensaje.Equals("Invertido")){
					mensaje = "Normal";
				}
			}
		}
//funcion para la calidad de imagen del juego
		if(showGraphicsDropDown == true){
			if(GUI.Button(Rect(Screen.width /2.5,Screen.height /3.87 ,100,38), "Fastest")){
				QualitySettings.currentLevel = QualityLevel.Fastest;
			}
			if(GUI.Button(Rect(Screen.width /2.5,Screen.height /3.87 + 50,100,38), "Fast")){
				QualitySettings.currentLevel = QualityLevel.Fast;
			}
			if(GUI.Button(Rect(Screen.width /2.5,Screen.height /3.87 + 100,100,38), "Simple")){
				QualitySettings.currentLevel = QualityLevel.Simple;
			}
			if(GUI.Button(Rect(Screen.width /2.5,Screen.height /3.87 + 150,100,38), "Good")){
				QualitySettings.currentLevel = QualityLevel.Good;
			}
			if(GUI.Button(Rect(Screen.width /2.5,Screen.height /3.87 + 200,100,38), "Beautiful")){
				QualitySettings.currentLevel = QualityLevel.Beautiful;
			}
			if(GUI.Button(Rect(Screen.width /2.5,Screen.height /3.87 + 250,100,38), "Fantastic")){
				QualitySettings.currentLevel = QualityLevel.Fantastic;
			}
		}
			
// salir del juego

		if (GUI.Button (Rect (Screen.width /2 - 350,Screen.height /2 +92.5,250,50), "Salir del juego")){
			showGraphicsDropDown = false;
			mostrarControles = false;	
			Application.Quit();
		}
	}	
