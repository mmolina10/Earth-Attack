using UnityEngine;
using System.Collections;
using Mono.Data.Sqlite;

public class DBConnector : MonoBehaviour {
	private SqliteConnection _conexion;
	private SqliteCommand _command;
	private SqliteDataReader _reader;
	private object[] valoresBBDD = new object[40];
	private string _query;
	
	public void OpenDB(string _dbName){
		_conexion = new SqliteConnection (_dbName);
		_conexion.Open ();
	}

	public object[] SelectRegistrosRanking(){
		_query = "SELECT nombre, vidas, puntuacion, tiempo FROM usuarios ORDER BY puntuacion DESC, tiempo ASC, nombre limit 10";
		_command = _conexion.CreateCommand ();
		_command.CommandText = _query;
		_reader = _command.ExecuteReader ();
		int i = 0;
		if (_reader != null) {
			while(_reader.Read()){
				valoresBBDD[i] = _reader.GetValue (0);
				i++;
				valoresBBDD[i] = _reader.GetValue (1);
				i++;
				valoresBBDD[i] = _reader.GetValue (2);
				i++;
				valoresBBDD[i] = _reader.GetValue (3); 
				i++;
			}
		}
		return valoresBBDD;
	}

	public void InsertData(string _nombre, float _tiempo, int _muertes, int _vidas, int _puntuacion){
		_command = _conexion.CreateCommand ();
		_command.CommandText = "INSERT INTO usuarios (nombre, tiempo, muertes, vidas, puntuacion)VALUES(@_nombre, @_tiempo, @_muertes, @_vidas, @_puntuacion)";
		_command.Parameters.AddWithValue ("@_nombre", _nombre);
		_command.Parameters.AddWithValue ("@_tiempo", _tiempo);
		_command.Parameters.AddWithValue ("@_muertes", _muertes);
		_command.Parameters.AddWithValue ("@_vidas", _vidas);
		_command.Parameters.AddWithValue ("@_puntuacion", _puntuacion);
		_command.ExecuteReader ();
	}

	public void CloseDB(){
		if(_reader != null){
			_reader.Close ();
			_reader = null;
		}
		_command = null;
		_conexion.Close ();
		_conexion = null;
	}

	public void CreateTable(){
		_query = "create table if not exists usuarios(id integer primary key autoincrement, nombre text not null, tiempo numeric not null, muertes integer not null, vidas integer not null, puntuacion integer not null)";
		_command = _conexion.CreateCommand ();
		_command.CommandText = _query;
		_command.ExecuteReader ();
	}
}
