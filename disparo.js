#pragma strict
var bala1 : Rigidbody;
var bala2 : Rigidbody;
var arma1 : Transform;
var arma2 : Transform;
private var balaNueva1 : Rigidbody;
private var balaNueva2 : Rigidbody;
private var tiempoDeGeneracion : float; 
var velocidadDeGeneracion : float;
static var verificadorSonido : boolean = true;

function FixedUpdate () {
	#if UNITY_STANDALONE
	if(Input.GetKeyDown(KeyCode.Mouse0) || Input.GetKeyDown(KeyCode.E)){
		Disparo();
	}
	#endif
}

function EstadoT(){
	verificadorSonido = true;
}

function EstadoF(){
	verificadorSonido = false;
}

function Disparo(){
	EstadoT();
	if((Time.time > tiempoDeGeneracion)){
		EstadoF();
		tiempoDeGeneracion = Time.time + velocidadDeGeneracion;
		balaNueva1 = Instantiate(bala1,arma1.transform.position,transform.rotation);
		balaNueva2 = Instantiate(bala2,arma2.transform.position,transform.rotation);
		balaNueva1.GetComponent.<Rigidbody>().velocity = arma1.transform.TransformDirection(Vector3.forward*1400f);
		balaNueva2.GetComponent.<Rigidbody>().velocity = arma2.transform.TransformDirection(Vector3.forward*1400f);
	}
}