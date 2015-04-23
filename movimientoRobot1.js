#pragma strict
var velocidad : float = 30;
function Start () {
	transform.Rotate(0,-90,0);
}

function FixedUpdate () {
	this.GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward * velocidad,ForceMode.Impulse);
}
