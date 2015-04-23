#pragma strict
var velocidad : float = 30;
function Start () {
	transform.Rotate(-90,80,0);
	transform.localPosition.y = 30;
}

function FixedUpdate () {
	this.GetComponent.<Rigidbody>().AddForce(Vector3.left * velocidad,ForceMode.Impulse);
}
