#pragma strict
static var dialogos:int;
private var textos:String = "";
static var iDialogueCnt:int;
var aDialogs = new Array();
public var dialogoTexto : UnityEngine.UI.Text;

function Start()
{
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
		dialogoTexto.text = aDialogs[dialogos];
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
			Time.timeScale = 0;
		}
		else
		{
			GameObject.Find("Nave").GetComponent(movimientosRatonNave).enabled = true;
			Time.timeScale = 1;
		}
	}
}
