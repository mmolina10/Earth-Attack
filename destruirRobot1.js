#pragma strict

static var verificador : int;
public var particulas : Transform;
var thePosition; 

function Start(){
	verificador = 0;
}

function OnCollisionEnter (colision : Collision) {
	thePosition = transform.TransformPoint(Vector3.up * 1);
	if(colision.gameObject.tag == "misil"){
		verificador = 1;
		Destroy(this.gameObject);
		Instantiate(particulas, thePosition, Quaternion.identity);
	}
}