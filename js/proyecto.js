var inicioApp = function()
{
	var iniciopag= function ()
	{
		$("#footer").show("slow");
		$("#video").show("slow");
		$("#seccionproyectos").hide();
		$("#secciondatospersonales").hide();
		$("#seccionempleos").hide();

	}
	var Proyectos = function()
	{
		$("#seccionproyectos").show("slow");
		$("#secciondatospersonales").hide();
		$("#seccionempleos").hide();
		$("#video").hide();
	}
	
	var datosPersonales = function()
	{
		$("#secciondatospersonales").show("slow");
		$("#seccionproyectos").hide();
		$("#seccionEmpleos").hide();
		$("#video").hide();

	}
	var Empleos =function()
	{
		$("#seccionempleos").show("slow");
		$("#secciondatospersonales").hide();
		$("#seccionproyectos").hide();	
		$("#video").hide();

	}



	$("#btnInicio").on("click",iniciopag);
	$("#btnProyectos").on("click",Proyectos);
	$("#btnDatosPersonales").on("click",datosPersonales);
	$("#btnEmpleos").on("click",Empleos);
	
	var karen = $("#menuCel").val();
	if(karen=="btnInicio")
		iniciopag();
	else if(karen=="btnDatosPersonales")
		datosPersonales();
	else if(karen=="btnProyectos")
		Proyectos();
	else if(karen=="btnEmpleos")
		Empleos();

}
	$(document).on("ready",inicioApp);
