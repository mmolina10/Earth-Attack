#pragma strict

var plane : Rigidbody;
var Strength: float = 55;
public var particulas : Transform;
var minPitch : float = 1.0;
var maxPitch : float = 2.0;
private var tiempo : float = 0;
static var muerte : boolean;
var scriptEnemigos : BarraVidaYEnemigos;


function Start(){
	scriptEnemigos = GetComponent("BarraVidaYEnemigos");
	muerte = false;
}

function OnCollisionEnter(colision : Collision){
	if(colision.gameObject.tag == "Terreno" || colision.gameObject.tag == "fuego" || colision.gameObject.tag == "objetosMarcianos" || colision.gameObject.tag == "enemigo"){
		if (colision.relativeVelocity.magnitude > Strength){
			Instantiate(particulas, transform.position, transform.rotation);
			Destroy(this.gameObject);
			muerte = true;
		}
	}
}


function FixedUpdate(){
	if(scriptEnemigos.muertos == 40 || scriptEnemigos.energiaJugador == 0){
		audio.pitch = 0;
	}
	else{
		var currentSpeed = rigidbody.velocity.magnitude;
		audio.pitch = minPitch + ((currentSpeed)/maxPitch); 
	}
}

function OnCollisionStay(colision : Collision){
	if(colision.gameObject.tag == "Terreno" || colision.gameObject.tag == "fuego"){
		if(Input.GetKey(KeyCode.UpArrow) && (Input.GetKey(KeyCode.Space))){
			tiempo += 1 * Time.deltaTime;
			if (tiempo >= 3){
				Instantiate(particulas, transform.position, transform.rotation);
				Destroy(this.gameObject);
				muerte = true;
			}
		}
		else if(Input.GetKey(KeyCode.DownArrow) && (Input.GetKey(KeyCode.Z))){
			tiempo += 1 * Time.deltaTime;
			if (tiempo >= 3){
				Instantiate(particulas, transform.position, transform.rotation);
				Destroy(this.gameObject);
				muerte = true;
			}
		}
	}
}



