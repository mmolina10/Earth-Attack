#pragma strict

static var verificador : int;
public var particulas : Transform;
var thePosition; 

function Start(){
	verificador = 0;
}

function OnCollisionEnter (colision : Collision) {
	thePosition = transform.TransformPoint(Vector3.up * 0.5);
	if(colision.gameObject.tag == "misil"){
		verificador = 1;
		Destroy(this.gameObject);
		Instantiate(particulas, thePosition, transform.rotation);
	}
}