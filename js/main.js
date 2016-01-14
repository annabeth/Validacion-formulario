$(document).ready(initPage);

function initPage()
{
	$('#formRegistro').submit(enviarFormulario);
	//Inicio de aplicacion, conectando con parse
	Parse.initialize("0QRQlrhhO6K0xnDQfB9iAPSAg0edo33aaTCm3UCc", "RSasCizqHgKIUMgIo6RZuTwwICO5sMZbPdsq7JUN");

	$("#formRegistro").validate(opciones);

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
		submitHandler: function(form)
		{
			enviarFormulario();
			return false;
		},
		invalidHandler: function(event, validator)
		{
			console.log(validator);
			swal("Error", "Verifica el fomulario", "warning");
		}
	};



}

function enviarFormulario(){

	var Cliente = Parse.Object.extend("Cliente");

	var instancia = new Cliente();

	instancia.save({
		Nombre: $('#nombre').val(),
		Apellido:$('#apellido').val()
	}).then(function(){
		$('#nombre').val("");
		$('#apellido').val("");
		swal("Buen Trabajo", "Tu registro fue guardado", "success");
	});


}

