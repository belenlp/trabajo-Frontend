document.getElementById("botonSubmit").addEventListener('click', function() {
    document.getElementById("validarEmail").innerHTML = "";
    document.getElementById("validarNombre").innerHTML = "";
    document.getElementById("validarSugerencia").innerHTML = "";

});


document.getElementById("botonLimpiar").addEventListener('click', function() {
    document.getElementById("validarEmail").innerHTML = "";
    document.getElementById("validarNombre").innerHTML = "";
    document.getElementById("validarSugerencia").innerHTML = "";

    document.getElementById("email").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("sugerencia").value = "";
    document.getElementById("formularioEnviado").style.visibility = "hidden";



});



document.addEventListener("DOMContentLoaded", function() {

    document
        .getElementById("formulario")
        .addEventListener("submit", validarFormulario);
});




function validarFormulario(evento) {
    evento.preventDefault();

    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var sugerencia = document.getElementById("sugerencia").value;

    if (!campoObligatorio(email, "email", "validarEmail")) return false;
    if (!validarEmail(email, "email", "validarEmail")) return false;

    if (!campoObligatorio(sugerencia, "sugerencia", "validarSugerencia")) return false;

    document.getElementById("formularioEnviado").innerHTML = "Enviado Formulario exitosamente";
    document.getElementById("formularioEnviado").style.visibility = "visible";
    //this.submit();
}



function campoObligatorio(campo, campoNombre, textoError) {
    if (campo.length == 0) {
        document.getElementById(textoError).innerHTML = "El " + campoNombre + " es obligatorio";
        return false;
    }
    return true;
}


//nunca pasa por esta función::
function validarEmail(campo, campoNombre, textoError) {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(campo)) {
        return true;
    } else {
        document.getElementById(textoError).innerHTML = "El " + campo + " es incorrecto";
        return false;
    }
}