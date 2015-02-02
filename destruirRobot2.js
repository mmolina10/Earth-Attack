#pragma strict

static var verificador : int = 0;
public var particulas : Transform;
var thePosition; 
function OnCollisionEnter (colision : Collision) {
	thePosition = transform.TransformPoint(Vector3.up * 0.5);
	if(colision.gameObject.tag == "misil"){
		Destroy(this.gameObject);
		Instantiate(particulas, thePosition, transform.rotation);
		verificador = 1;
	}
}