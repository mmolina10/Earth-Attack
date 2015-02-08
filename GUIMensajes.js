#pragma strict
static var dialogos:int;
private var textos:String = "";
static var iDialogueCnt:int;
var aDialogs = new Array();
public var dialogoTexto : UnityEngine.UI.Text;
static var terminado : boolean;
#if UNITY_ANDROID
	var joystickObject : GameObject;
	var botonDisparoObject : GameObject;
	//var joystickScript : AccionesJoystick;
#endif

function Start()
{
	#if UNITY_ANDROID
		//joystickScript = joystickObject.GetComponent(AccionesJoystick);
		joystickObject.SetActive(false);
		botonDisparoObject.SetActive(false);
	#endif
	dialogos = 0;
	iDialogueCnt = 0;
	// Seteamos los textos
	aDialogs[0] = "¡Estás al borde de la extinción! ¡Debes evitar que los humanos te destruyan!";
	aDialogs[1] = "Quieren apoderarse de tu zona para sus investigaciones, ¡tienes que evitarlo a toda costa!";
	aDialogs[2] = "Destruye a 40 enemigos para acabar con ellos antes de que lleguen a tu zona 10 enemigos.";
	aDialogs[3] = "Un consejo: evita el contacto con ellos, ya que explotarás.";

	iDialogueCnt = aDialogs.length;

	GameObject.Find("Nave").GetComponent(movimientosRatonNave).enabled = false;
	Time.timeScale = 0;
}

function Update()
{
	if(dialogos < iDialogueCnt){
		dialogoTexto.text = aDialogs[dialogos].ToString();
	}
	else{
		Destroy(this.gameObject);
		Destroy(GameObject.Find("Panel Inferior"));
	}
	if(Input.GetKeyDown(KeyCode.Return) && dialogos < iDialogueCnt || Input.touchCount > 0 && dialogos < iDialogueCnt)
		{
		dialogos += 1;//Dialogo Adelante.
		if(dialogos < iDialogueCnt)
		{
			terminado = false;
			Time.timeScale = 0;
			
		}
		else
		{
			#if UNITY_ANDROID
				joystickObject.SetActive(true);
				botonDisparoObject.SetActive(true);
			#endif
			terminado = true;
			GameObject.Find("Nave").GetComponent(movimientosRatonNave).enabled = true;
			Time.timeScale = 1;
		}
	}
}
