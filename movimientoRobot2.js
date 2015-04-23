#pragma strict
var velocidad : float = 30;
function Start () {

}

function FixedUpdate () {
	this.GetComponent.<Rigidbody>().AddForce(Vector3.left * velocidad,ForceMode.Impulse);
}


