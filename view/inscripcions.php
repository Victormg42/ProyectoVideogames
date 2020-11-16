<!DOCTYPE html>
<html>
    <head>
        <title>Proyecto Inicial</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/estilos.css">
        <script src="../js/validar.js"></script>
    </head>

<body>
    <div class="topnav2">
            <a href="index.html" style="margin-left: 25%;"><strong>Inicio</a>
            <a href="inscripcions.php">Inscripciones</a>
            <a href="#">Noticias</a>
            <a href="#">Galeria</strong></a>
                <div class="idioma1">
                    <select class="selectpicker" data-width="fit">
                        <option>Idioma</option>
                        <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
                        <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
                        <input type="submit" value="Enviar">
                </div>
    </div>
    <div class="formulario">
    <h2>RELLENA EL FORMULARIO PARA INSCRIBIRTE</h2>
    <form action="../view/inscripcions.php" method="POST" onsubmit="return validacionForm()">
        <input type="text" style="width: 20.5%;" class="validar" id="DNI_part" name="DNI_part" placeholder="Doble click para validar DNI..." ondblclick="return validarDNI()">
        <input type="text" style="width: 20.5%;" class="validar" id="nom_part" name="nom_part" placeholder="Nombre..."><br>
        <input type="text" style="width: 20.5%;" class="validar" id="apellido_part" name="apellido_part" placeholder="Primer apellido...">
        <input type="text" style="width: 20.5%;" class="validar" id="apellido2_part" name="apellido2_part" placeholder="Segundo apellido..."><br>
        <input type="date" style="width: 20.5%;" class="validar" id="fecha_nac" name="fecha_nac">
        <input type="email" style="width: 20.5%;" class="validar" id="email_part" name="email_part" placeholder="Email..."><br><br>
        <select style="width: 41%;" type="text" id="sexo_part" name="sexo_part">
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Desconocido">Desconocido</option>
        </select><br>
        <select style="width: 41%;" type="text" id="rango_edad" name="rango_edad">
            <option value="0-17">0-17</option>
            <option value="18-30">18-30</option>
            <option value="31-50">31-50</option>
            <option value="51-70">51-70</option>
            <option value="71 o mas">71 o mas</option>
        </select><br>
        <div id="message"></div><br>
        <input style="width: 41%" type="submit" value="Inscribir" name="submit">
</form>
</div>
    <?php
    if (isset($_POST['submit'])) {
        require_once '../model/participanteDAO.php';
        $participante = new ParticipanteDAO();
        $participante->insertarParticipante();
    }
    ?>
    <footer>
    <h3><strong>Contacte</strong></h3>
    <p>11 de octubre del 2020</p>
    <p>Jesuites Bellvitge Joan XXIII</p>
    <p>Hecho por: Víctor Martínez García</p>
</footer>
</body>
</html>