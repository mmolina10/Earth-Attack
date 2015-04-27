#pragma strict
var velocidadRotacion : float = 1;
function Start () {

}

function Update () {
	transform.Rotate(0,velocidadRotacion,0 * Time.deltaTime);
}