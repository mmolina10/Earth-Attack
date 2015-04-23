using UnityEngine;
using System.Collections;

public class AccionesJoystick : MonoBehaviour {
	private float velocidad = 170f;
	public Joystick joystickLeft;

	void FixedUpdate () {
		Vector2 joystickLeftPos = joystickLeft.JoystickPosition; 

		if( joystickLeftPos != Vector2.zero )
		{
			if(joystickLeftPos.y > 0){
				GetComponent<Rigidbody>().AddRelativeForce (Vector3.forward * velocidad,ForceMode.Impulse);
			}
			else if(joystickLeftPos.y < 0){
				GetComponent<Rigidbody>().AddRelativeForce (Vector3.back * velocidad,ForceMode.Impulse);
			}
		}
	}
}
