#pragma strict
static var Dialogos:int;
var Textos:String = "";
var PosX:float = 580; //así se podrá modificar mientras estes jugando.
var PosY:float = 30; //así se podrá modificar mientras estes jugando.
static var iDialogueCnt:int;
var aDialogs = new Array();
var customSkin : GUISkin;

function Start()
{
Dialogos = 0;
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
if(Input.GetKeyDown(KeyCode.Return) && Dialogos < iDialogueCnt || Input.touchCount > 0 && Dialogos < iDialogueCnt)
{
Dialogos += 1;//Dialogo Adelante.
if(Dialogos < iDialogueCnt)
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

function OnGUI()
{
GUI.skin = customSkin;
if(Dialogos != iDialogueCnt){
	GUI.Box(Rect(Screen.width/2-(PosX/2), Screen.height/1.2-(PosY/2.0), PosX, PosY), aDialogs[Dialogos].ToString());
}

}