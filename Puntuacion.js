﻿#pragma strict

private var scriptBarraVidaYEnemigos : BarraVidaYEnemigos;
private var scriptCronometro : Cronometro;
private var scriptDestruirRobot1 : DestruirRobot1;
private var scriptDestruirRobot2 : DestruirRobot2;
private var scriptDestruirAstronauta : DestruirAstronauta;
static var puntuacion : float = 0;
private var cronometro : GameObject;
public static var puntuacionTexto : UnityEngine.UI.Text;

function Start () {
	cronometro = GameObject.Find("Cronometro");
	puntuacionTexto = GameObject.Find("Puntuacion").GetComponent.<UnityEngine.UI.Text>();
	scriptCronometro = cronometro.GetComponent("Cronometro");
	puntuacion = 0;
	puntuacionTexto.text = "Puntos: " + puntuacion.ToString();
}

function Update () {
	if(scriptDestruirRobot1.verificador == 2 || scriptDestruirRobot2.verificador == 2 || scriptDestruirAstronauta.verificador == 2){
		scriptDestruirRobot1.verificador = 3;
		scriptDestruirRobot2.verificador = 3;
		scriptDestruirAstronauta.verificador = 3;
		if(scriptBarraVidaYEnemigos.vidas == 10){
			puntuacion += 250;
		}else if(scriptBarraVidaYEnemigos.vidas >= 8 && scriptCronometro.guiTiempo < 30.00000){
			puntuacion = puntuacion + 220;
		}else if(scriptBarraVidaYEnemigos.vidas >= 8 && scriptCronometro.guiTiempo < 60.00000){
			puntuacion = puntuacion + 180;
		}else if(scriptBarraVidaYEnemigos.vidas >= 8 && scriptCronometro.guiTiempo < 90.00000){
			puntuacion = puntuacion + 160;
		}else if(scriptBarraVidaYEnemigos.vidas >= 8 && scriptCronometro.guiTiempo < 120.00000){
			puntuacion = puntuacion + 140;
		}else if(scriptBarraVidaYEnemigos.vidas >= 8 && scriptCronometro.guiTiempo >= 120.00000){
			puntuacion = puntuacion + 120;
		}else if(scriptBarraVidaYEnemigos.vidas >= 6 && scriptCronometro.guiTiempo < 30.00000){
			puntuacion = puntuacion + 180;
		}else if(scriptBarraVidaYEnemigos.vidas >= 6 && scriptCronometro.guiTiempo < 60.00000){
			puntuacion = puntuacion + 160;
		}else if(scriptBarraVidaYEnemigos.vidas >= 6 && scriptCronometro.guiTiempo < 90.00000){
			puntuacion = puntuacion + 140;
		}else if(scriptBarraVidaYEnemigos.vidas >= 6 && scriptCronometro.guiTiempo < 120.00000){
			puntuacion = puntuacion + 120;
		}else if(scriptBarraVidaYEnemigos.vidas >= 6 && scriptCronometro.guiTiempo >= 120.00000){
			puntuacion = puntuacion + 100;
		}else if(scriptBarraVidaYEnemigos.vidas >= 4 && scriptCronometro.guiTiempo < 30.00000){
			puntuacion = puntuacion + 160;
		}else if(scriptBarraVidaYEnemigos.vidas >= 4 && scriptCronometro.guiTiempo < 60.00000){
			puntuacion = puntuacion + 140;
		}else if(scriptBarraVidaYEnemigos.vidas >= 4 && scriptCronometro.guiTiempo < 90.00000){
			puntuacion = puntuacion + 120;
		}else if(scriptBarraVidaYEnemigos.vidas >= 4 && scriptCronometro.guiTiempo < 120.00000){
			puntuacion = puntuacion + 100;
		}else if(scriptBarraVidaYEnemigos.vidas >= 4 && scriptCronometro.guiTiempo >= 120.00000){
			puntuacion = puntuacion + 80;
		}else if(scriptBarraVidaYEnemigos.vidas >= 1 && scriptCronometro.guiTiempo < 30.00000){
			puntuacion = puntuacion + 140;
		}else if(scriptBarraVidaYEnemigos.vidas >= 1 && scriptCronometro.guiTiempo < 60.00000){
			puntuacion = puntuacion + 120;
		}else if(scriptBarraVidaYEnemigos.vidas >= 1 && scriptCronometro.guiTiempo < 90.00000){
			puntuacion = puntuacion + 100;
		}else if(scriptBarraVidaYEnemigos.vidas >= 1 && scriptCronometro.guiTiempo < 120.00000){
			puntuacion = puntuacion + 80;
		}else if(scriptBarraVidaYEnemigos.vidas >= 1 && scriptCronometro.guiTiempo >= 120.00000){
			puntuacion = puntuacion + 140;
		}
		else if(scriptBarraVidaYEnemigos.vidas == 0){
			puntuacion = 0;
			puntuacionTexto.text = "Puntos: " + puntuacion.ToString();
		}
		puntuacionTexto.text = "Puntos: " + puntuacion.ToString();
	}
}