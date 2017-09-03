<?php  

	class conexionDB
	{
		private $host;
		private $user;
		private $password;
		private $conexion;

		function __construct(){
			$this->host= 'localhost';
			$this->user= 'proyectoT';
			$this->password= 'proyectoT';
		}

		function conexionBaseDatos($bd){
			$this->conexion= new mysqli($this->host, $this->user, $this->password, $bd);
			if ($this->conexion->connect_error) {
				return "Error al conectar".$this->conexion->connect_error;
			}else{
				return "OK";
			}
		}

		function ejecutarConsulta($query){
			return $this->conexion->query($query);
		}

		function cerrarConexion(){
			$this->conexion->close();
		}

		function guardarDatos($nombres,$apellidos,$ced,$correo,$telefono){
			$sql="call guardarUser('".$nombres."', '".$apellidos."', ".$ced.", '".$correo."', ".$telefono.");";
			return $this->ejecutarConsulta($sql);
		}
		//buscar todos los datos que tengan el mismo numero de cedula
		function buscarDatos($ced){
			$sql="select * from usuario where cedula=".$ced.";"; 
			return $this->ejecutarConsulta($sql);
		}
		//buscar todos los datos que tengan el mismo correo
		function validar($correo){
			$sql="select * from usuario where correo='".$correo."';";
			return $this->ejecutarConsulta($sql);
		}

		function todosDatos(){
			$sql="select * from usuario;";
			return $this->ejecutarConsulta($sql);
		}
		
		function actualizarDatos($ced, $nombres, $apellidos, $correo, $telefono){
			$sql="call actualizarUser(".$ced.", '".$nombres."', '".$apellidos."', '".$correo."', ".$telefono.");";
			return $this->ejecutarConsulta($sql);
		}
	}

?>