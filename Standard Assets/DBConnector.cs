using UnityEngine;
using System.Collections;
using Mono.Data.Sqlite;

public class DBConnector : MonoBehaviour {
	private SqliteConnection _conexion;
	private SqliteCommand _command;
	private SqliteDataReader _reader;

	private string _query;

	public void OpenDB(string _dbName){
		_conexion = new SqliteConnection (_dbName);
		_conexion.Open ();
	}

	public void SelectData(){
		_query = "SELECT * FROM usuarios";
		_command = _conexion.CreateCommand ();
		_command.CommandText = _query;
		_reader = _command.ExecuteReader ();

		if (_reader != null) {
			while(_reader.Read()){
				print(_reader.GetValue(1).ToString() + " - " + _reader.GetValue(2).ToString());
			}
		}
	}

	public void InsertData(string _nombre, float _tiempo, int _muertes, int _vidas, int _puntuacion){
		_query = "INSERT INTO usuarios VALUES('"+_nombre+"', '"+_tiempo+"', '"+_muertes+"', '"+_vidas+"', '"+_puntuacion+"')";
		_command = _conexion.CreateCommand ();
		_command.CommandText = _query;
		_command.ExecuteReader ();
	}

	public void CloseDB(){
		_reader.Close ();
		_reader = null;
		_command = null;
		_conexion.Close ();
		_conexion = null;
	}

		
}
