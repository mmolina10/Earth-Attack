#pragma strict

static var verificador : int = 0;
public var particulas : Transform;

function OnCollisionEnter (colision : Collision) {
	if(colision.gameObject.tag == "misil"){
		Destroy(this.gameObject);
		Instantiate(particulas, transform.position, transform.rotation);
		verificador = 1;
	}
}