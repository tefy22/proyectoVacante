<?php  
	
	require 'conexion.php';

	$con= new conexionDB();

	if ($con->conexionBaseDatos('pruebat')=='OK') {
		if ($resultado= $con->todosDatos()) {
			echo "<table class='table table-condensed' style='margin:20px auto;'>
						<thead>
							<tr>
								<th>Cedula</th>
								<th>Nombres</th>
								<th>Apellidos</th>
								<th>Correo</th>
								<th>Telefono</th>
							</tr>
						</thead>
						<tbody>";
			while ($fila= $resultado->fetch_assoc()) {
				echo "
							<tr>
								<td>".$fila['cedula']."</td>
								<td>".$fila['nombres']."</td>
								<td>".$fila['apellidos']."</td>
								<td>".$fila['correo']."</td>
								<td>".$fila['telefono']."</td>
							</tr>";
			}
			echo 		"</tbody>
					</table>";
		}else{
			echo "No se encontro ningun dato";
		}

	}else{
		echo "Error en la conexion";
		$con->cerrarConexion();
	}

?>