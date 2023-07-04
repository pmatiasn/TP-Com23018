(function(){
    var formulario= document.getElementsByName('formulario')[0],
    elementos= formulario.elements,
    boton= document.getElementById('b1')

var validarNombre = function(e){
    if(formulario.nombre.value==0){
        document.getElementById("valNom").innerHTML="Falta ingresar nombre.";
        e.preventDefault();
    }
};
var validarEmpresa = function(e){
    if(formulario.empresa.value==0){
        document.getElementById("valEmp").innerHTML="Falta ingresar empresa.";
        e.preventDefault();
    }
};

var validarProvincia= function(e){
    if(formulario.provincia.value==""){
        document.getElementById("valProv").innerHTML="Falta seleccionar provincia.";
        e.preventDefault();
    }
}

var validarTipo= function(e){
    if(formulario.tipoviaje[0].checked==true || formulario.tipoviaje[1].checked==true){}
    else {
        document.getElementById("valExc").innerHTML="Falta seleccionar tipo de viaje";
        e.preventDefault();
    }
}


var validarEnviar= function(e){
    validarNombre(e);
    validarEmpresa(e);
    validarLocalidad(e);
    validarProvincia(e);
    validarTipo(e);
};
var validarLocalidad= function(e){
    if(formulario.localidad.value==""){
        document.getElementById("valLoc").innerHTML="Falta ingresar localidad.";
        e.preventDefault();
    }
}

formulario.addEventListener("submit",validarEnviar );

}())
