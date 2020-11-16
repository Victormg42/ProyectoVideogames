<?php
// Creamos la clase Reserva que contiene todos los atributos de la base de datos
class Participante {
    private $DNI_part;
    private $nom_part;
    private $apellido_part;
    private $apellido2_part;
    private $email_part;
    private $sexo_part;
    private $rango_edad;
    private $fecha_nac;
    private $num_dorsal;
    private $id_inscr;

    public function __construct(){
    }

    /**
     * Get the value of DNI_part
     */ 
    public function getDNI_part()
    {
        return $this->DNI_part;
    }

    /**
     * Set the value of DNI_part
     *
     * @return  self
     */ 
    public function setDNI_part($DNI_part)
    {
        $this->DNI_part = $DNI_part;

        return $this;
    }

    /**
     * Get the value of nom_part
     */ 
    public function getNom_part()
    {
        return $this->nom_part;
    }

    /**
     * Set the value of nom_part
     *
     * @return  self
     */ 
    public function setNom_part($nom_part)
    {
        $this->nom_part = $nom_part;

        return $this;
    }

    /**
     * Get the value of apellido_part
     */ 
    public function getApellido_part()
    {
        return $this->apellido_part;
    }

    /**
     * Set the value of apellido_part
     *
     * @return  self
     */ 
    public function setApellido_part($apellido_part)
    {
        $this->apellido_part = $apellido_part;

        return $this;
    }

    /**
     * Get the value of email_part
     */ 
    public function getEmail_part()
    {
        return $this->email_part;
    }

    /**
     * Set the value of email_part
     *
     * @return  self
     */ 
    public function setEmail_part($email_part)
    {
        $this->email_part = $email_part;

        return $this;
    }

    /**
     * Get the value of sexo_part
     */ 
    public function getSexo_part()
    {
        return $this->sexo_part;
    }

    /**
     * Set the value of sexo_part
     *
     * @return  self
     */ 
    public function setSexo_part($sexo_part)
    {
        $this->sexo_part = $sexo_part;

        return $this;
    }

    /**
     * Get the value of rango_edad
     */ 
    public function getRango_edad()
    {
        return $this->rango_edad;
    }

    /**
     * Set the value of rango_edad
     *
     * @return  self
     */ 
    public function setRango_edad($rango_edad)
    {
        $this->rango_edad = $rango_edad;

        return $this;
    }

    /**
     * Get the value of num_dorsal
     */ 
    public function getNum_dorsal()
    {
        return $this->num_dorsal;
    }

    /**
     * Set the value of num_dorsal
     *
     * @return  self
     */ 
    public function setNum_dorsal($num_dorsal)
    {
        $this->num_dorsal = $num_dorsal;

        return $this;
    }

    /**
     * Get the value of id_inscr
     */ 
    public function getId_inscr()
    {
        return $this->id_inscr;
    }

    /**
     * Set the value of id_inscr
     *
     * @return  self
     */ 
    public function setId_inscr($id_inscr)
    {
        $this->id_inscr = $id_inscr;

        return $this;
    }

    /**
     * Get the value of apellido_part
     */ 
    public function getApellido2_part()
    {
        return $this->apellido2_part;
    }

    /**
     * Set the value of apellido_part
     *
     * @return  self
     */ 
    public function setApellido2_part($apellido2_part)
    {
        $this->apellido2_part = $apellido2_part;

        return $this;
    }

    /**
     * Get the value of apellido_part
     */ 
    public function getFecha_nac()
    {
        return $this->fecha_nac;
    }

    /**
     * Set the value of apellido_part
     *
     * @return  self
     */ 
    public function setFecha_nac($fecha_nac)
    {
        $this->fecha_nac = $fecha_nac;

        return $this;
    }
}
?>