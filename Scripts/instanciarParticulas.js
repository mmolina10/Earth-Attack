#pragma strict
public var particulas : Transform;
function Start(){
	Instantiate(particulas, transform.position, transform.rotation);
}