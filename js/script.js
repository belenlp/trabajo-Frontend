function imprimirDatosComplejos(seccion, arreglo) {
    var elementos = '';
    for (var i = 0; i < arreglo.length; i++) {
        elementos = elementos + " <li> " + arreglo[i] + "</br>";

    }
    document.getElementById(seccion).innerHTML = elementos;
}


function cambiarVisibilidad(seccion, tituloSeccion, tituloSeccionValue) {

    if (document.getElementById(seccion).style.visibility == "hidden") {
        document.getElementById(seccion).style.visibility = "visible";
        document.getElementById(seccion).style.display = "block";
        document.getElementById(tituloSeccion).innerHTML = tituloSeccionValue + " &#x25B2";
    } else {
        document.getElementById(seccion).style.visibility = "hidden";
        document.getElementById(seccion).style.display = "none";
        document.getElementById(tituloSeccion).innerHTML = tituloSeccionValue + "  &#x25BC;";

    }

}




document.getElementById("misEstudiosBoton").addEventListener('click', function() {
    cambiarVisibilidad("misEstudiosP", "misEstudiosBoton", "Formación académica");

});

document.getElementById("misConocimientosBoton").addEventListener('click', function() {
    cambiarVisibilidad("misConocimientosP", "misConocimientosBoton", "Formación Laboral");

});

document.getElementById("datosInteresBoton").addEventListener('click', function() {
    cambiarVisibilidad("datosInteresP", "datosInteresBoton", "Otros datos de interés");

});




const response = await fetch('https://localhost/curso-frontend/misDatos.json');
const miCurriculum = await response.json();




var misEstudios = miCurriculum.cv.estudios;
imprimirDatosComplejos("misEstudiosP", misEstudios);

var conocimientos = miCurriculum.cv.laboral;
imprimirDatosComplejos("misConocimientosP", conocimientos);

var datosInteres = miCurriculum.cv.datosInteres;
imprimirDatosComplejos("datosInteresP", datosInteres);


document.getElementById("misEstudiosP").style.visibility = "hidden";
document.getElementById("misEstudiosP").style.display = "none";

document.getElementById("misConocimientosP").style.visibility = "hidden";
document.getElementById("misConocimientosP").style.display = "none";

document.getElementById("datosInteresP").style.visibility = "hidden";
document.getElementById("datosInteresP").style.display = "none";

document.getElementById("misEstudiosBoton").innerHTML = "Formación académica" + "  &#x25BC;";
document.getElementById("misConocimientosBoton").innerHTML = "Formación Laboral" + "  &#x25BC;";
document.getElementById("datosInteresBoton").innerHTML = "Otros datos de interés" + "  &#x25BC;";