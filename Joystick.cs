/* Written by Kaz Crowe */
using UnityEngine;
using System.Collections;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Joystick : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
{
	/* Posicionamiento */
	public enum Position
	{
		Left,
		Right
	}
	public Position position;
	public Transform joystick;
	Vector3 joystickCenter;
	float radius;
	/* Colorear */
	public Color highlightColor;
	public Image[] highlightImage;
	public Color tensionAccentColor;
	public Image tensionAccentUp;
	public Image tensionAccentDown;
	public Image tensionAccentLeft;
	public Image tensionAccentRight;
	Color defaultTensionAccentColor;
	float alphaModifier;

	
	void Start ()
	{
		//Esto configura el tamaño de la textura para que se vea correctamente en cualquier tamaño de pantalla
		float textureSize = Screen.height/3;
		Vector2 texturePosition = ConfigurePosition( textureSize );
		radius = textureSize / 1.5f;

		// Lo siguiente es cambiar el tranform para que todos los componentes vayan a tener el tamaño correcto
		// NOTA: Para que esto funcione, se tendrá que hacer todos los hijos a este objeto
		// Llenar la pantalla para su RectTransform
		RectTransform baseTrans = GetComponent<RectTransform>();
		// En esta linea le paso el tamaño del RectTransform relativo para las distancias entre los anclajes
		baseTrans.sizeDelta = new Vector2( textureSize, textureSize );
		// La posicion del RectTransform es igual al Vector 2 especificado para la textura anteriormente
		baseTrans.position = texturePosition;

		// Se almacena el centro del joystick para dar la posibilidad de volver a el
		joystickCenter = joystick.position;

		// Se configura los colores y se resetean al por defecto
		alphaModifier = tensionAccentColor.a;
		defaultTensionAccentColor = tensionAccentColor;
		defaultTensionAccentColor.a = 0.0f;
		TensionAccentReset();
		if( highlightImage.Length != 0 )
		{
			for( int i = 0; i < highlightImage.Length; i++ )
			{
				highlightImage[ i ].color = highlightColor;
			}
		}
		else
		{
			Debug.LogError( "No Highlight Images! Please assign at least 1 image." );
		}
	}
	
	//Este metodo permite a otros scripts obtener la posicion de los joysticks
	public Vector2 JoystickPosition
	{
		get
		{
			Vector2 tempVec = joystick.position - joystickCenter;
			return tempVec / radius;
		}
	}
	
	public void OnPointerDown ( PointerEventData touchInfo )
	{
		// Esto significa que ha sido tocado y se procesa a donde se ha tocando
		UpdateJoystick( touchInfo );
	}
	
	public void OnDrag ( PointerEventData touchInfo )
	{
		// Esto significa que se esta moviendo y se procesa donde se esta tocando
		UpdateJoystick( touchInfo );
	}
	
	public void OnPointerUp ( PointerEventData touchInfo )
	{
		// Esto significa que se ha dejado y se reinicia al centro la posicion del joystick
		joystick.position = joystickCenter;
		TensionAccentReset();
	}
	
	void UpdateJoystick ( PointerEventData touchInfo )
	{
		// Create a new Vector2 to equal the vector from our curret touch to the center of joystick
		Vector2 tempVector = touchInfo.position - ( Vector2 )joystickCenter;

		// Clamp the vector to our selected radius 
		tempVector = Vector2.ClampMagnitude( tempVector, radius );

		// Apply the position to our joystick
		joystick.transform.position = ( Vector2 )joystickCenter + tempVector;

		// This will display our joystick tension
		TensionAccentDisplay();
	}

	void TensionAccentDisplay ()
	{
		// We need a Vector2 to store our joystickPosition
		Vector2 tension = JoystickPosition;

		// Now we will use 2 floats to control amount of tension projected
		float tensionX = tension.x * alphaModifier;
		float tensionY = tension.y * alphaModifier;

		// And we need a new color to work with
		Color tensionColor = defaultTensionAccentColor;

		// If our joystick is to the right
		if( tensionX > 0 )
		{
			// Then we set our color.a according to our X position
			tensionColor.a = tensionX;
			tensionAccentRight.color = tensionColor;

			// If our tensionAccentLeft is not defaultTensionAccentColor, we want to make it defaultTensionAccentColor
			if( tensionAccentLeft.color != defaultTensionAccentColor )
				tensionAccentLeft.color = defaultTensionAccentColor;
		}
		// else our joystick is to the left
		else
		{
			// Then we set our color.a according to our X position
			// We multiply by -1 because our X is currently negative, and we need a positive number to work with
			tensionColor.a = tensionX * -1;
			tensionAccentLeft.color = tensionColor;

			// If our tensionAccentRight is not defaultTensionAccentColor, we want to make it defaultTensionAccentColor
			if( tensionAccentRight.color != defaultTensionAccentColor )
				tensionAccentRight.color = defaultTensionAccentColor;
		}
		if( tensionY > 0 )
		{
			// Then we set our color.a according to our Y position
			tensionColor.a = tensionY;
			tensionAccentUp.color = tensionColor;

			// If our tensionAccentDown is not defaultTensionAccentColor, we want to make it defaultTensionAccentColor
			if( tensionAccentDown.color != defaultTensionAccentColor )
				tensionAccentDown.color = defaultTensionAccentColor;
		}
		else
		{
			// Then we set our color.a according to our Y position
			// We multiply by -1 because our Y is currently negative, and we need a positive number to work with
			tensionColor.a = tensionY * -1;
			tensionAccentDown.color = tensionColor;

			// If our tensionAccentUp is not defaultTensionAccentColor, we want to make it defaultTensionAccentColor
			if( tensionAccentUp.color != defaultTensionAccentColor )
				tensionAccentUp.color = defaultTensionAccentColor;
		}
	}

	void TensionAccentReset ()
	{//
		// This resets our tension colors back to default
		tensionAccentUp.color = defaultTensionAccentColor;
		tensionAccentDown.color = defaultTensionAccentColor;
		tensionAccentLeft.color = defaultTensionAccentColor;
		tensionAccentRight.color = defaultTensionAccentColor;
	}

	Vector2 ConfigurePosition ( float textureSize )
	{
		// This configures our UI positions according to what our position variable is set as
		float positionX;
		float positionY;
		float positionSpacer = textureSize / 3;
		if( position == Position.Left )
		{
			positionX = ( Screen.width / 2 ) / Screen.width + positionSpacer;
		}
		else
		{
			positionX = ( Screen.width - textureSize ) - positionSpacer;
		}
		positionY = ( Screen.height / 2 ) / Screen.height + positionSpacer;
		return new Vector2( positionX, positionY );
	}
}