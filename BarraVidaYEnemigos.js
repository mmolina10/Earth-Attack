#pragma strict
public var barraVida : GUIStyle;
public var imagenFondo : Texture2D;
public var imagenFrente : Texture2D;
var scriptContacto : ContactoConMeta;
static var energiaJugador : int;
static var vidas : int;
static var tantoPorCiento : int;
static var verificador : boolean = false;
static var muertos : int;
var estilo : GUISkin;
var scriptDestruirAstronauta : DestruirAstronauta;
var scriptDestruirRobot1 : DestruirRobot1;
var scriptDestruirRobot2 : DestruirRobot2;
var scriptTexturaGolpe : TexturaGolpe;
public var textura : Texture2D;
static var comprobador2 : boolean;
var scriptDerrota : Derrota;


function Start(){
	scriptContacto = GetComponent("ContactoConMeta");
	scriptDestruirAstronauta = GetComponent("DestruirAstronauta");
	scriptDestruirRobot1 = GetComponent("DestruirRobot1");
	scriptDestruirRobot2 = GetComponent("DestruirRobot2");
	scriptTexturaGolpe = GetComponent("TexturaGolpe");
	scriptDerrota = GetComponent("Derrota");
	vidas = 10;
	tantoPorCiento = 100;
	energiaJugador = 300;
	muertos = 0;
	comprobador2 = false;
}

function OnGUI() {
	GUI.skin = estilo;
	GUI.BeginGroup(Rect(10,10,300,32));
	GUI.Box(Rect(0,0,300,32),imagenFondo,barraVida);
	GUI.BeginGroup(Rect(0,0,energiaJugador,32));
	GUI.Box(Rect(0,0,300,32),imagenFrente,barraVida);
	GUI.EndGroup();
	GUI.EndGroup();
	GUI.Label (Rect (320, 10, 100, 20), "Vidas: " + vidas.ToString());
	GUI.Label (Rect (450,10,140,30), "Muertes: " + muertos.ToString());
	ReducirVida();
	ContadorMuertes();
}

function MostrarTextura(){
	comprobador2 = true;
	scriptTexturaGolpe.text = textura;
	yield WaitForSeconds(1);
	scriptTexturaGolpe.text = null;
	
}

function ReducirVida(){
	if(scriptContacto.verificador == 1 && vidas > 0){
		MostrarTextura();
		energiaJugador-=30;
		vidas -= 1;
		tantoPorCiento -= 10;
		scriptContacto.verificador = 2;
	}
}

function ContadorMuertes(){
	if(scriptDestruirAstronauta.verificador == 1 || scriptDestruirRobot1.verificador == 1 || scriptDestruirRobot2.verificador == 1){
		if(muertos >= 40){
			verificador = true;
		}
		else{
			verificador = false;
		}
		if(verificador == false && scriptDerrota.derrota == false){
			muertos += 1;
		}
		scriptDestruirAstronauta.verificador = 2;
		scriptDestruirRobot1.verificador = 2;
		scriptDestruirRobot2.verificador = 2;
	}
}


