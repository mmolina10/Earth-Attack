#pragma strict
import UnityEngine.UI.Image;
public var barraVida : GUIStyle;

var scriptContacto : ContactoConMeta; 
static var energiaMaximaJugador : int;
static var energiaJugador : int;
public var vidasTexto : UnityEngine.UI.Text;
public var imagenCambioDeColorVida : UnityEngine.UI.Image;
static var verificador : boolean = false;
static var muertos : int;
public var muertosTexto : UnityEngine.UI.Text;
var scriptDestruirAstronauta : destruirAstronauta;
var scriptDestruirRobot1 : destruirRobot1;
var scriptDestruirRobot2 : destruirRobot2;
var scriptDerrota : Derrota;
static var comprobador : boolean;
static var imagenGolpe : GameObject;


function Start(){
	energiaMaximaJugador = 10;
	imagenGolpe = GameObject.Find("ImagenGolpe");
	imagenGolpe.SetActive(false);
	energiaJugador = energiaMaximaJugador;
	muertos = 0;
	comprobador = false;
}

function Update() {
	if(scriptDerrota.derrota == true){
		GameOver();
	}
	if(scriptContacto.verificador == 1){
		ReducirVida();
	}
	if(scriptDestruirAstronauta.verificador == 1 || scriptDestruirRobot1.verificador == 1 || scriptDestruirRobot2.verificador == 1){
		ContadorMuertes();
	}
}

function MostrarTextura(){
	comprobador = true;
	imagenGolpe.SetActive(true);
	yield WaitForSeconds(1);
	imagenGolpe.SetActive(false);
}

function ReducirVida(){
	if(scriptContacto.verificador == 1 && energiaJugador > 0){
		MostrarTextura();
		energiaJugador-=1;
		vidasTexto.text = "Vidas: " + energiaJugador;
		scriptContacto.verificador = 2;
    	imagenCambioDeColorVida.fillAmount -= 0.10f;
    	
		if (energiaJugador > energiaMaximaJugador / 2)
		{	
		 	imagenCambioDeColorVida.color = new Color32(Map(energiaJugador,energiaMaximaJugador/2,energiaMaximaJugador,255,0),255,0,255);
		}
	 	else
	 	{
	 		imagenCambioDeColorVida.color = new Color32(255,Map(energiaJugador, 0, energiaMaximaJugador / 2, 0, 255),0,255);
	 	}
	}
}

function Map(x : float, in_min : float , in_max: float ,out_min : float ,out_max : float )
{
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function ContadorMuertes(){
		if(muertos >= 40){
			verificador = true;
		}
		else{
			verificador = false;
		}
		if(verificador == false && scriptDerrota.derrota == false){
			muertos += 1;
			muertosTexto.text = "Muertes: " + muertos;
		}
		scriptDestruirAstronauta.verificador = 2;
		scriptDestruirRobot1.verificador = 2;
		scriptDestruirRobot2.verificador = 2;
}

function GameOver(){
	vidasTexto.text = "Vidas: " + energiaJugador;
	imagenCambioDeColorVida.fillAmount = 0;
}