﻿#pragma strict

private var verificador : boolean; 
private var velocidad : int = 170;
public var velocidadCamara : int = 80;
var scriptMenuPrincipal : GUIMenuPrincipal;
function Start(){
	verificador = false;
}

function FixedUpdate () {
	if(Input.GetButton("Jump")){
		this.GetComponent.<Rigidbody>().AddRelativeForce (Vector3.forward * velocidad,ForceMode.Impulse);
		if(Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D)){
			this.GetComponent.<Rigidbody>().AddRelativeForce (Vector3.right* velocidad,ForceMode.Impulse);
		}
		else if(Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A)){
			this.GetComponent.<Rigidbody>().AddRelativeForce (Vector3.left* velocidad,ForceMode.Impulse);
		}
	}
	else if(Input.GetButton("Jump")){
		this.GetComponent.<Rigidbody>().AddRelativeForce (Vector3.zero,ForceMode.Impulse);
	}
	
	else if(Input.GetKey(KeyCode.Z)){
		this.GetComponent.<Rigidbody>().AddRelativeForce (Vector3.back * velocidad,ForceMode.Impulse);
	}
	else if(Input.GetKeyUp(KeyCode.Z)){
		this.GetComponent.<Rigidbody>().AddRelativeForce (Vector3.zero);
	}
}

function Update(){	
	if(scriptMenuPrincipal.mensaje.Equals("Normal")){
		this.GetComponent(movimientosNave).enabled = true;
	}
	else{
		this.GetComponent(movimientosNave).enabled = false;
		GameObject.Find("Nave").GetComponent(movimientosNaveInvertido).enabled = true;
	}
	var h = Input.GetAxis("Vertical"); 
	var v = Input.GetAxis("Horizontal"); 
    transform.localEulerAngles.z =  -v*5; 
    transform.localEulerAngles.x =  -h*30; 
  
   	if((Input.GetKey(KeyCode.DownArrow)) && (Input.GetKey(KeyCode.LeftArrow)) || (Input.GetKey(KeyCode.DownArrow)) && (Input.GetKey(KeyCode.RightArrow)) || (Input.GetKey(KeyCode.UpArrow)) && (Input.GetKey(KeyCode.LeftArrow)) || (Input.GetKey(KeyCode.UpArrow)) && (Input.GetKey(KeyCode.RightArrow))){
   		verificador = true;
	}
	else{
		verificador = false;
	}
	
	if(verificador == false){
		transform.Rotate(0,Input.GetAxis ("Horizontal") * velocidadCamara * Time.deltaTime, 0);
	}
}
