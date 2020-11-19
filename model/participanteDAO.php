<?php
require_once 'participante.php';
class ParticipanteDAO{

    public function __construct(){
    }
    // En la funcion filtrarHistorico ejecutaremos todas las consultas para filtrar por nombre de la sala y mesa el historico.
    public function insertarParticipante(){
        include "../model/connection.php";
    try{
        $pdo->beginTransaction();
        $query="INSERT INTO `tbl_inscripciones` (`id_inscr`, `precio_inscr`, `fecha_inscr`) VALUES (NULL,'32.50',CURRENT_DATE());";
        $sentencia=$pdo->prepare($query);
        $sentencia->execute();
        $id_inscr = $pdo->lastInsertId();

        $query2 = "INSERT INTO `tbl_dorsal` (`num_dorsal`) VALUES (FLOOR(RAND() * 999));";
        $sentencia2=$pdo->prepare($query2);
        $sentencia2->execute();
        $num_dorsal = $pdo->lastInsertId();

        $query1="INSERT INTO `tbl_participantes` (`DNI_part`, `nom_part`, `apellido_part`, `apellido2_part`, `email_part`, `sexo_part`, `rango_edad`, `fecha_nac`, `id_inscr`, `num_dorsal`) VALUES (?,?,?,?,?,?,?,?,?,?);";
        $sentencia1=$pdo->prepare($query1);
        $DNI=$_POST['DNI_part'];
        $nombre=$_POST['nom_part']; 
        $apellido=$_POST['apellido_part'];
        $apellido2=$_POST['apellido2_part'];
        $email=$_POST['email_part'];
        $sexo=$_POST['sexo_part']; 
        $edad=$_POST['rango_edad'];
        $fecha_nac=$_POST['fecha_nac']; 
        $sentencia1->bindParam(1,$DNI);
        $sentencia1->bindParam(2,$nombre);
        $sentencia1->bindParam(3,$apellido);
        $sentencia1->bindParam(4,$apellido2);
        $sentencia1->bindParam(5,$email);
        $sentencia1->bindParam(6,$sexo);
        $sentencia1->bindParam(7,$edad);
        $sentencia1->bindParam(8,$fecha_nac);
        $sentencia1->bindParam(9,$id_inscr);
        $sentencia1->bindParam(10,$num_dorsal);
        $sentencia1->execute();
        $pdo->commit();
	    header("Location: ../view/inscripcions.php");
        } catch (Exception $ex) {
            /* Reconocer un error y no hacer los cambios */
            $pdo->rollback();
            echo $ex->getMessage();
            //header("Location: ../view/inscripcions.php");
          }
    }          
}
?>