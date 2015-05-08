#pragma strict
import Mono.Data.Sqlite;
private var showGraphicsDropDown = false;
private var invertido : boolean = true;
private var mostrarControles = false;
static var mensaje : String = "Invertido";
private var anchuraXButtons : int;
private var alturaYButtons : int; 
public var textura : Texture;
private var anchuraXBox : int;
private var alturaYBox : int;
private var alturaYTitulo : int;
private var anchuraXTitulo : int;
private var achuraXButtonsGraphics : float;
private var alturaYButtonsGraphics : float;

function Start () {
	Screen.SetResolution(800,600,true);
	anchuraXButtons = 320;
	alturaYButtons = 50;
	anchuraXBox = 350;
	alturaYBox = 350;
	anchuraXTitulo= 500;
	alturaYTitulo = 500;
	achuraXButtonsGraphics = 100;
	alturaYButtonsGraphics = 38;
	AudioListener.volume = 1;
}

function OnGUI(){
		GUI.Label(Rect(Screen.width/2 - anchuraXTitulo/2, Screen.height/2 - alturaYTitulo/2 - 35, anchuraXTitulo, alturaYTitulo),textura);
		GUI.Box(Rect (Screen.width/2 - anchuraXBox/2, Screen.height/2 - alturaYBox/2 + 50, anchuraXBox, alturaYBox),"");
		
// botones del menu
		
// boton calidad visual del juego
		if(GUI.Button(Rect(Screen.width /2 - anchuraXButtons/2, Screen.height /2 - alturaYButtons/2 - 70,anchuraXButtons,alturaYButtons), "Jugar")){
			mostrarControles = false;
			showGraphicsDropDown = false;
			Application.LoadLevel("controles");
		}
		
		if(GUI.Button(Rect(Screen.width /2 - anchuraXButtons/2, Screen.height /2 - alturaYButtons/2 - 10,anchuraXButtons,alturaYButtons), "Ranking")){
			mostrarControles = false;
			showGraphicsDropDown = false;	
			Application.LoadLevel("ranking");
		}
		
		if(GUI.Button(Rect(Screen.width /2 - anchuraXButtons/2, Screen.height /2 - alturaYButtons/2 + 50,anchuraXButtons,alturaYButtons), "Controles")){
			showGraphicsDropDown = false;
			if(mostrarControles == false){
				mostrarControles = true;
			}
			else{
				mostrarControles = false;
			}
		}
		
		if(GUI.Button(Rect(Screen.width /2 - anchuraXButtons/2, Screen.height /2 - alturaYButtons/2 + 110,anchuraXButtons,alturaYButtons), "Calidad Gráfica")){
			mostrarControles = false;		
			if(showGraphicsDropDown == false){
				showGraphicsDropDown = true;
			}
			else{
				showGraphicsDropDown = false;
			}
		}
		
//funcion para los controles del juego

		if(mostrarControles == true){
			if(GUI.Button(Rect(Screen.width /2 - 150/2 + 250, Screen.height /2 - 50/2 + 50,150,50), mensaje)){
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
			if(GUI.Button(Rect(Screen.width /2 - achuraXButtonsGraphics/2 + 225, Screen.height /2 - alturaYButtonsGraphics/2 - 70,achuraXButtonsGraphics,alturaYButtonsGraphics), "Fastest")){
				QualitySettings.currentLevel = QualityLevel.Fastest;
			}
			if(GUI.Button(Rect(Screen.width /2 - achuraXButtonsGraphics/2 + 225, Screen.height /2 - alturaYButtonsGraphics/2 - 20,achuraXButtonsGraphics,alturaYButtonsGraphics), "Fast")){
				QualitySettings.currentLevel = QualityLevel.Fast;
			}
			if(GUI.Button(Rect(Screen.width /2 - achuraXButtonsGraphics/2 + 225, Screen.height /2 - alturaYButtonsGraphics/2 + 30,achuraXButtonsGraphics,alturaYButtonsGraphics), "Simple")){
				QualitySettings.currentLevel = QualityLevel.Simple;
			}
			if(GUI.Button(Rect(Screen.width /2 - achuraXButtonsGraphics/2 + 225, Screen.height /2 - alturaYButtonsGraphics/2 + 80,achuraXButtonsGraphics,alturaYButtonsGraphics), "Good")){
				QualitySettings.currentLevel = QualityLevel.Good;
			}
			if(GUI.Button(Rect(Screen.width /2 - achuraXButtonsGraphics/2 + 225, Screen.height /2 - alturaYButtonsGraphics/2 + 130,achuraXButtonsGraphics,alturaYButtonsGraphics), "Beautiful")){
				QualitySettings.currentLevel = QualityLevel.Beautiful;
			}
			if(GUI.Button(Rect(Screen.width /2 - achuraXButtonsGraphics/2 + 225, Screen.height /2 - alturaYButtonsGraphics/2 + 180,achuraXButtonsGraphics,alturaYButtonsGraphics), "Fantastic")){
				QualitySettings.currentLevel = QualityLevel.Fantastic;
			}
		}
			
// salir del juego

		if (GUI.Button(Rect(Screen.width /2 - anchuraXButtons/2, Screen.height /2 - alturaYButtons/2 + 170,anchuraXButtons,alturaYButtons), "Salir del juego")){
			showGraphicsDropDown = false;
			mostrarControles = false;	
			Application.Quit();
		}
	}	
