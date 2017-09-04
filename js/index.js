
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
	$("#btnGuardar").click(function(){
		$("input").trigger("blur");
		var ced= $("#ced").val();
		var nombres= $("#names").val();
		var apellidos= $("#surnames").val();
		var correo= $("#email").val();
		var tel= $("#phone").val();

		if (($("input").hasClass("campErr")) || nombres.trim().length==0 || apellidos.trim().length==0){
			event.preventDefault();
			alert("Debes completar bien los campos!!");
		}else{
			peticionAjax('php/conectar.php',{ced:ced, names:nombres, surnames:apellidos, email:correo, phone:tel});
		}
	});

	$("#btnEditar").click(function(){
		var ced= $("#ced").val();
		var nombres= $("#names").val();
		var apellidos= $("#surnames").val();
		var correo= $("#email").val();
		var tel= $("#phone").val();

		if (($("input").hasClass("campErr")) || nombres.trim().length==0 || apellidos.trim().length==0){
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

	$("#ced").blur(function(){
		if (isNaN($("#ced").val())) {
			$(this).siblings(".campoErroneo").css("display","block");
			$(this).addClass("campErr");
		}else{
			$(this).removeClass("campErr");
		}				
	});
	$("#phone").blur(function(){
		if (isNaN($("#phone").val())) {
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
});
