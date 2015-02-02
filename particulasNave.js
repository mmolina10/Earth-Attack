var plane: Transform;
var Trail : ParticleSystem;
var Emission : float;
var scriptMensajes : GUIMensajes;
var scriptMenuPausa : GUIMenuPausa;
var scriptEnemigos : BarraVidaYEnemigos;
private var particulas : GameObject;

function Start(){
	particulas = GameObject.Find("Particle System");
}

function Update(){
scriptMensajes = GetComponent("GUIMensajes");
scriptMenuPausa = GetComponent("GUIMenuPausa");
scriptEnemigos = GetComponent("BarraVidaYEnemigos");
var spd = plane.rigidbody.velocity.magnitude;
Trail.emissionRate=spd*200;
	if(scriptMensajes.dialogos < scriptMensajes.iDialogueCnt){
		light.enabled = false;
	}
	else if(scriptMenuPausa.pauseEnabled == true){
		light.enabled = false;
	}
	else if(scriptEnemigos.energiaJugador == 0 || scriptEnemigos.muertos == 40){
		particulas.SetActive(false);
	}
	else if(Input.GetKey(KeyCode.Space)){
		light.enabled = true;
	}
	else if(Input.GetKeyUp(KeyCode.Space)){
		light.enabled = false;
	}
	else if(Input.GetKey(KeyCode.Z)){
		light.enabled = true;
	}
	else if(Input.GetKeyUp(KeyCode.Z)){
		light.enabled = false;
	}
}