using UnityEngine;
using System.Collections;

public class Cronometro : MonoBehaviour {
	private float comienzoTiempo;
	string textoTiempo;
	public float guiTiempo;
	private float minutos;
	private float segundos;
	private float fraccion;
	public UnityEngine.UI.Text cronometroTexto;
	// Use this for initialization
	void Start () {
		comienzoTiempo = Time.time;
	}
	
	// Update is called once per frame
	void Update () {
		guiTiempo = Time.time - comienzoTiempo;
		minutos = guiTiempo / 120;
		segundos = guiTiempo % 60;
		fraccion = (guiTiempo * 100) % 100;

		textoTiempo = string.Format ("{0:00}:{1:00}:{2:00}", minutos, segundos, fraccion);
		cronometroTexto.text = textoTiempo;
	}
}
