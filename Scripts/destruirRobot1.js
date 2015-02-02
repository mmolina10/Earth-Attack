#pragma strict

static var verificador : int = 0;
public var particulas : Transform;
var thePosition; 

function OnCollisionEnter (colision : Collision) {
	thePosition = transform.TransformPoint(Vector3.up * 1);
	if(colision.gameObject.tag == "misil"){
		Destroy(this.gameObject);
		Instantiate(particulas, thePosition, Quaternion.identity);
		verificador = 1;
	}
}