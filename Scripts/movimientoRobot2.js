#pragma strict
var velocidad : float = 30;
function Start () {

}

function FixedUpdate () {
	rigidbody.AddForce(Vector3.left * velocidad,ForceMode.Impulse);
}


