
var explosionPrefab : Transform;

function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag != "enemigo"){
		Destroy (this.gameObject);
    	Instantiate(explosionPrefab, transform.position, transform.rotation); 
	}
	else{
		Destroy (this.gameObject);
	}	
}