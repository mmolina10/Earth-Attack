var plane: Transform;
var Trail : ParticleSystem;
var Emission : float;
private var particulas : GameObject;

function Start(){
	particulas = GameObject.Find("Particulas");
}

function Update(){
	Trail.emissionRate=55500;
}

