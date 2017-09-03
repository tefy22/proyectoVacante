<?php  
	
	require 'conexion.php';

	$con= new conexionDB();

	if ($con->conexionBaseDatos('pruebat')=='OK') {
		
		$cedula= $_POST['ced'];
		$nombres= $_POST['names'];
		$apellidos= $_POST['surnames'];
		$correo= $_POST['email'];
		$telefono= $_POST['phone'];

		$res= $con->buscarDatos($cedula);

		if (mysqli_num_rows($res)==false){ //obtiene el numero de filas de la consulta, trabaja con booleano
			echo "Usuario no registrado";		
		}else{
			$con->actualizarDatos($cedula, $nombres, $apellidos, $correo, $telefono);
			echo "Datos Actualizados!!";
		}
	}else{
		echo "Error en la conexion";
		$con->cerrarConexion();
	}

?>