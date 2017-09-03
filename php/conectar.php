<?php  
	
	require 'conexion.php';

	$con= new conexionDB();	

	if ($con->conexionBaseDatos('pruebat')=='OK'){
		
		$cedula= $_POST['ced'];
		$nombres= $_POST['names'];
		$apellidos= $_POST['surnames'];
		$correo= $_POST['email'];
		$telefono= $_POST['phone'];

		$res= $con->buscarDatos($cedula);
		$res2= $con->validar($correo);

		if (mysqli_num_rows($res)==true){ //obtiene el numero de filas de la consulta, trabaja con booleano
			echo "Cedula ya registrada";		
		}else if(mysqli_num_rows($res2)==true){
			echo "Correo ya se encuentra registrado";
		}else{
			$con->guardarDatos($nombres, $apellidos, $cedula, $correo, $telefono);
			echo "Datos Guardados!!";
		}				
	}else{
		echo "error en la conexion";
		$con->cerrarConexion();
	}
	
?>