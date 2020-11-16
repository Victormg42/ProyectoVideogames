<?php
// Creamos la clase Mesa que contiene todos los atributos de la base de datos
    class Mesa {
        private $id_inscr;
        private $precio_inscr;
        private $fecha_inscr;

    function __construct() {
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
         * Get the value of precio_inscr
         */ 
        public function getPrecio_inscr()
        {
                return $this->precio_inscr;
        }

        /**
         * Set the value of precio_inscr
         *
         * @return  self
         */ 
        public function setPrecio_inscr($precio_inscr)
        {
                $this->precio_inscr = $precio_inscr;

                return $this;
        }

        /**
         * Get the value of fecha_inscr
         */ 
        public function getFecha_inscr()
        {
                return $this->fecha_inscr;
        }

        /**
         * Set the value of fecha_inscr
         *
         * @return  self
         */ 
        public function setFecha_inscr($fecha_inscr)
        {
                $this->fecha_inscr = $fecha_inscr;

                return $this;
        }
}

?>