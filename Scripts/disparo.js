#pragma strict
var bala1 : Rigidbody;
var bala2 : Rigidbody;
var arma1 : Transform;
var arma2 : Transform;
private var tiempoDeGeneracion : float; 
var velocidadDeGeneracion : float;
static var verificadorSonido : boolean = true;


function Start () {

}

function FixedUpdate () {
		if(Input.GetKey(KeyCode.Mouse0) || Input.GetKey(KeyCode.E) || Input.touchCount > 0){
			EstadoT();
			if((Time.time > tiempoDeGeneracion)){
				EstadoF();
				tiempoDeGeneracion = Time.time + velocidadDeGeneracion;
				var balaNueva1 : Rigidbody = Instantiate(bala1,arma1.transform.position,transform.rotation);
				var balaNueva2 : Rigidbody = Instantiate(bala2,arma2.transform.position,transform.rotation);
				balaNueva1.rigidbody.velocity = arma1.transform.TransformDirection(Vector3.forward*1400f);
				balaNueva2.rigidbody.velocity = arma2.transform.TransformDirection(Vector3.forward*1400f);
			}
		}
}

function EstadoT(){
	verificadorSonido = true;
}

function EstadoF(){
	verificadorSonido = false;
}