#pragma strict

static var verificador : int;
public var particulas : Transform;

function Start(){
	verificador = 0;
}

function OnCollisionEnter (colision : Collision) {
	if(colision.gameObject.tag == "misil"){
		verificador = 1;
		Destroy(this.gameObject);
		Instantiate(particulas, transform.position, transform.rotation);
	}
}