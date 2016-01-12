$(document).ready(initPage);

function initPage()
{
	var opciones = {
		rules:{
			nombre:{
				required:true,
				minlength:6
			},
			apellidos:"required",
			email:{
				required:true
			},
			telefono:
			{
				required:true,
				minlength:6,
				maxlength:12
			},

			placa:
			{
				minlenght: 6
			},
			vehiculo:
			{
				required: true,
				minlenght: 10
			}
		},
		messages:{
			nombre:"Por favor ingresa tu nombre",
			apellidos:"Por favor ingresa tu apellido",
			telefono:"Ingresa tu numero de teléfono",
			email:{
				required:"Ingresa tu correo"},
			ciudad:
			{
				required:"Seleccione su ciudad de origen",
			},
			placa:
			{
				required:"Ingresa tu numero de placa",
			},
			vehiculo:
			{
				required:"Seleccione el uso del vehículo"
			}

		},
		submitHandler: function()
		{
			swal("Es válido", "Todo ok", "success");
		},
		invalidHandler: function()
		{
			swal("Error", "Verifica el fomulario", "warning");
		}
	};


	$("#myForm").validate(opciones);
}
