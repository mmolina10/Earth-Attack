#pragma strict
var velocidadRotacion : float;
function Start () {
	velocidadRotacion = 20f;
}

function Update () {
	transform.Rotate(0 * Time.deltaTime,velocidadRotacion * Time.deltaTime,0 * Time.deltaTime);
}