#pragma strict
import UI.Text;
import Mono.Data.Sqlite;
private var registros : System.Object[];
private var scriptGUIMenuPrincipal : GUIMenuPrincipal;
private var contenedoresRegistros : GameObject;
private var _connector : DBConnector;
private var textsChildrens : UnityEngine.UI.Text[];
private var lengthOfContenedoresRegistro : int;
private var lengthOftextsChildrens : int;
private var textoTiempo : String;
private var minutos : float;
private var segundos : float;
private var fraccion : float;
private var tiempoRegistro : float;

function Start () {
	_connector = gameObject.AddComponent.<DBConnector>();
	_connector.OpenDB("URI=file:" + Application.dataPath + "\\DB\\db_earth_attack.s3db");
	registros = _connector.SelectRegistrosRanking();
	textsChildrens = GameObject.Find("Primero").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Segundo").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Tercero").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Cuarto").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Quinto").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Sexto").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Septimo").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Octavo").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Noveno").GetComponentsInChildren.<UI.Text>();
	textsChildrens += GameObject.Find("Decimo").GetComponentsInChildren.<UI.Text>();
	
	for(var i : int = 0; i < registros.length; i++){
		if(registros[i] != null){
			if(i == 3 || i == 7 || i == 11 || i == 15 || i == 19 || i == 23 || i == 27 || i == 31 || i == 35 || i == 39){
				tiempoRegistro = registros[i];
				minutos = tiempoRegistro / 120;
				segundos = tiempoRegistro % 60;
				fraccion = (tiempoRegistro * 100) % 100;
				textoTiempo = String.Format ("{0:00}:{1:00}:{2:00}", minutos, segundos, fraccion);
				textsChildrens[i].text = textoTiempo;
			}else{
				textsChildrens[i].text = registros[i].ToString();
			}			
		}else{
			break;
		}
	}
	
	_connector.CloseDB();
}
