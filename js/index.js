
function peticionAjax(newUrl, dataSubmit){
	$.ajax({
		method:'POST',
		url: newUrl,
		data: dataSubmit,
		success: function(data){
			alert(data);
		},
		error: function(){
			alert("ha ocurrido un problema");
		}
	});
	limpiarCampos();
}

function limpiarCampos(){
	$("#ced").val("");
	$("#names").val("");
	$("#surnames").val("");
	$("#email").val("");
	$("#phone").val("");
}


$(document).ready(function () {	

	$("#btnEditar").click(function(){
		var ced= $("#ced").val();
		var nombres= $("#names").val();
		var apellidos= $("#surnames").val();
		var correo= $("#email").val();
		var tel= $("#phone").val();

		if (nombres.trim().length==0 || apellidos.trim().length==0 || ced=="" || tel=="" || correo==""){
			event.preventDefault();
			alert("Debes completar bien los campos!!");
		}else{
			peticionAjax('php/editar.php',{ced:ced, names:nombres, surnames:apellidos, email:correo, phone:tel});
		}
	});

	$("#btnListar").click(function(){
		$.ajax({
			method:'POST',
			url: 'php/listar.php',
			success: function(data){
				$("#resulListar").append(data);
			},
			error: function(error){
				alert("ha ocurrido un problema");
			}
		});		
	});

	$("#btnGuardar").click(function(event){
		$("input").trigger("blur");
		var ced= $("#ced").val();
		var nombres= $("#names").val();
		var apellidos= $("#surnames").val();
		var correo= $("#email").val();
		var tel= $("#phone").val();

		if (nombres.trim().length==0 || apellidos.trim().length==0 || ced=="" || tel=="" || correo==""){
			event.preventDefault();
			alert("Debes completar bien los campos!!");
		}else{
			peticionAjax('php/conectar.php',{ced:ced, names:nombres, surnames:apellidos, email:correo, phone:tel});
		}	
	});

	$("#ced, #phone").blur(function(){
		if (isNaN($("#ced").val()) || isNaN($("#phone").val())) {
			$(this).siblings(".campoErroneo").css("display","block");
			$(this).addClass("campErr");
		}else{
			$(this).removeClass("campErr");
		}				
	});

	$("input").focus(function(){
		$(this).siblings(".campoErroneo").css("display","none");
		$(this).removeClass("campErr");
	});

	$("#email").blur(function(){
		var validar= $(this).val();
		if (!validar.includes('@') || !validar.includes('.')){
			$(this).siblings(".correoErroneo").css("display","block");
			$(this).addClass("campErr");
		}else{
			$(this).siblings(".correoErroneo").css("display","none");
			$(this).removeClass("campErr");
		}
	});
	/*
	$("#btnEditar").click(function(){
		var cedConsulta= prompt("Digita la cedula:");
		$("#ced").attr("disabled","true");
		$("#ced").val(cedConsulta);

		peticionAjax('php/editar.php', {cedConsulta:cedConsulta});
	});	
	*/
});



