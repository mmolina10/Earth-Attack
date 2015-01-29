#pragma strict
static var verificador : int = 0;

function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "meta"){
		Destroy(this.gameObject);
		verificador = 1;
	}
}


