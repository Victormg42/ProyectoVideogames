window.onload = function(){
    document.getElementById('DNI_part').addEventListener("focusout", validarDNI1);
    document.getElementById('DNI_part').addEventListener("focusout", validarDNI);
    document.getElementById('fecha_nac').addEventListener("focusout", categoria);
}
function validacionForm() {
    // variables 
    var email=document.getElementById('email_part').value;
    var nombre=document.getElementById('nom_part').value;
    var dni=document.getElementById('DNI_part').value;
    var apellido=document.getElementById('apellido_part').value;
    var apellido2=document.getElementById('apellido2_part').value;
    var fecha=document.getElementById('fecha_nac').value;
    if (email == '' && nombre == '' && dni == '' && apellido == '' && apellido2 == '' && fecha == '') {
        // si la contraseña y el correo estan vacios mostrar los dos campos en rojo y un mensaje en rojo
        document.getElementById("message").innerHTML = 'Inténtelo de nuevo.';
        document.getElementById("nom_part").style.borderColor = "red";
        document.getElementById("email_part").style.borderColor = "red";
        document.getElementById("DNI_part").style.borderColor = "red";
        document.getElementById("apellido_part").style.borderColor = "red";
        document.getElementById("apellido2_part").style.borderColor = "red";
        document.getElementById("fecha_nac").style.borderColor = "red";
    } else if (dni == '') {
        // si la password esta vacio mostrar el campo en rojo y un mensaje en rojo
        document.getElementById("message").innerHTML = 'Te has dejado el DNI vacio.';
        document.getElementById("email_part").style.borderColor = "white";
        document.getElementById("nom_part").style.borderColor = "white";
        document.getElementById("DNI_part").style.borderColor = "red";
        document.getElementById("apellido_part").style.borderColor = "white";
        document.getElementById("apellido2_part").style.borderColor = "white";
        document.getElementById("fecha_nac").style.borderColor = "white";
    } else if (nombre == '') {
        // si la password esta vacio mostrar el campo en rojo y un mensaje en rojo
        document.getElementById("message").innerHTML = 'Te has dejado el nombre vacio.';
        document.getElementById("email_part").style.borderColor = "white";
        document.getElementById("nom_part").style.borderColor = "red";
        document.getElementById("DNI_part").style.borderColor = "white";
        document.getElementById("apellido_part").style.borderColor = "white";
        document.getElementById("apellido2_part").style.borderColor = "white";
        document.getElementById("fecha_nac").style.borderColor = "white"; 
    } else if (apellido == '') {
        // si la password esta vacio mostrar el campo en rojo y un mensaje en rojo
        document.getElementById("message").innerHTML = 'Te has dejado el apellido vacio.';
        document.getElementById("email_part").style.borderColor = "white";
        document.getElementById("nom_part").style.borderColor = "white";
        document.getElementById("DNI_part").style.borderColor = "white";
        document.getElementById("apellido_part").style.borderColor = "red";
        document.getElementById("apellido2_part").style.borderColor = "white";
        document.getElementById("fecha_nac").style.borderColor = "white";
    } else if (apellido2 == '') {
        // si la password esta vacio mostrar el campo en rojo y un mensaje en rojo
        document.getElementById("message").innerHTML = 'Te has dejado el segundo apellido vacia.';
        document.getElementById("email_part").style.borderColor = "white";
        document.getElementById("nom_part").style.borderColor = "white";
        document.getElementById("DNI_part").style.borderColor = "white";
        document.getElementById("apellido_part").style.borderColor = "white";
        document.getElementById("apellido2_part").style.borderColor = "red";
        document.getElementById("fecha_nac").style.borderColor = "white";
    } else if (fecha == '') {
        // si la password esta vacio mostrar el campo en rojo y un mensaje en rojo
        document.getElementById("message").innerHTML = 'Te has dejado la fecha vacia.';
        document.getElementById("email_part").style.borderColor = "white";
        document.getElementById("nom_part").style.borderColor = "white";
        document.getElementById("DNI_part").style.borderColor = "white";
        document.getElementById("apellido_part").style.borderColor = "white";
        document.getElementById("apellido2_part").style.borderColor = "white";
        document.getElementById("fecha_nac").style.borderColor = "red";
    } else if (email == '' ) {
        // si el correo esta vacio mostrar el campo en rojo y un mensaje en rojo
        document.getElementById("message").innerHTML = 'Te has dejado el email vacio.';
        document.getElementById("email_part").style.borderColor = "red";
        document.getElementById("nom_part").style.borderColor = "white";
        document.getElementById("DNI_part").style.borderColor = "white";
        document.getElementById("apellido_part").style.borderColor = "white";
        document.getElementById("apellido2_part").style.borderColor = "white";
        document.getElementById("fecha_nac").style.borderColor = "white";
    } else{
        return true;
    }
    document.getElementById("message").style= "background-color: #FFB0AE; border-radius: 5px; padding: 13px;";
    return false;
}

function validarDNI() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var iden = document.getElementById("DNI_part").value;
    var error = document.getElementById("errores");
    var semaforoNIE=false;
    var soloNum="";
    if (iden.length==9) {
    //pregunto si el primer caracter es una letra
    if((isNaN(parseInt(iden.substr(0,1))))) {
        if ("XYZ".indexOf(iden.substr(0,1))!=-1) {
            // tengo un nie con inicio válido.
            var soloNum = "XYZ".indexOf(iden.substr(0,1))+iden.substr(1,7);
            semaforoNIE=true;
        } else {
            error.innerHTML = "El NIE no es válido , la primera letra ha de ser X, Y o Z";
        }
    } else {
        semaforoNIE=true;
        soloNum=iden.substr(0,8);
    }
    if (semaforoNIE) {
        if((isNaN(parseInt(iden.substr(-1,1))))) {
            if (letras[soloNum%23]===iden.substr(-1,1)) {  
                error.innerHTML = "NIF/NIE correcto"; 
            } else {
                error.innerHTML = "La letra final del NIF esta mal";
            }
        } else {
            error.innerHTML = "Debe acabar con letra";
        } 
    } else if (iden.value == '') {
        return false;
    }
}
}
function validarDNI1() {
    var dni = document.getElementById('DNI_part');
    if (dni.value.length == 9) {
        //console.log('DNI válido');
        dni.style.border = "solid green 5px";
        return true;
    } else {
        dni.style.border = "solid red 5px";
        return false;
    }
}

function validarFor() {
    var inputs = document.getElementsByClassName('validar');
    var val = true;
    for (let i = 0; i < inputs.length; i++) {
        if ((inputs[i].type == 'text' || inputs[i].type == 'date' || inputs[i].type == 'email') && inputs[i].value == '') {
            inputs[i].style.borderColor='red';
            val = false;
        } else if ((inputs[i].type == 'text' || inputs[i].type == 'date' || inputs[i].type == 'email') && inputs[i].value !== '') {
            inputs[i].style.borderColor='white';
        } 
    }
    if (validarDNI1() && val) {
        return true;
    } else {
        return false;
    }
    
}
/* Mostrar categoría a partir de la fecha de nacimiento */
function categoria() {
    var nacimiento = document.getElementById('fecha_nac').value;
    var nac = new Date(nacimiento);
    var msg = document.getElementById('rango_edad');
    var e = document.getElementById('edad');
    var fecha = new Date();
    var categoria = fecha.getFullYear() - nac.getFullYear();
    console.log(categoria);
    // si la fecha de nacimiento es inferior a 30 de nov. 2020 va a indicarnos que somos viejos
    if (categoria > 0 && categoria <= 17) {
        msg.innerHTML = 'Se va a inscribir a la categoria 0-17 años';
        e.value = '0-17';
    } else if (categoria >= 18 && categoria <= 30) {
        msg.innerHTML = 'Se va a inscribir a la categoria 18-30 años';
        e.value = '18-30';
    } else if (categoria >= 31 && categoria <= 50) {
        msg.innerHTML = 'Se va a inscribir a la categoria 31-50 años';
        e.value = '31-50';
    } else if (categoria >= 51 && categoria <= 70) {
        msg.innerHTML = 'Se va a inscribir a la categoria 51-70 años';
        e.value = '51-70';
    } else if (categoria >= 71) {
        msg.innerHTML = 'Se va a inscribir a la categoria 71 o mas años';
        e.value = '71 o mas';
    } else {
        msg.innerHTML = 'Fechas no coinciden, introduza su fecha de nacimiento correcta';
    }
}
