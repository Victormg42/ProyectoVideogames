window.onload = function(){
    document.getElementById('DNI_part').addEventListener("focusout", validarDNI1);
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
            alert("El NIE no es válido , la primera letra ha de ser X, Y o Z");
        }
    } else {
        semaforoNIE=true;
        soloNum=iden.substr(0,8);
    }
    
    
    
    if (semaforoNIE) {
        if((isNaN(parseInt(iden.substr(-1,1))))) {
            if (letras[soloNum%23]===iden.substr(-1,1)) {  
                alert("NIF/NIE correcto"); 
            } else {
                alert("La letra final del NIF esta mal");
            }
        } else {
            alert("error debe acabar con letra");
            }   
        }
    } else {
        alert("Introduce el DNI en el campo correspondiente");
        }
}

function validarDNI1() {
    var dni = document.getElementById('DNI_part');
    if (dni.value.length == 9) {
        //console.log('DNI válido');
        dni.style.border = "solid green 5px";
    } else {
        dni.style.border = "solid red 5px";
    }
}

function validarFor() {
    var inputs = document.getElementsByClassName('validar');
    var dni = document.getElementById('DNI_part');
    for (let i = 0; i < inputs.length; i++) {
        if ((inputs[i].type == 'text' || inputs[i].type == 'date' || inputs[i].type == 'email') && inputs[i].value == '') {
            inputs[i].style.borderColor='red';
        } else if ((inputs[i].type == 'text' || inputs[i].type == 'date' || inputs[i].type == 'email') && inputs[i].value !== '') {
            inputs[i].style.borderColor='white';
        }
        validarDNI1();
        //console.log(inputs[i].type);
    }
    return false;
}
