<?php
class Uczen {
 
    // specify your own database credentials
    public $id;
    public $imie;
    public $nazwisko;
    public $klasa;
    public $telefon;

    public function __construct($id, $imie, $nazwisko, $klasa, $telefon) {
        $this->id = htmlspecialchars(strip_tags($id));
        $this->imie = htmlspecialchars(strip_tags($imie));
        $this->nazwisko = htmlspecialchars(strip_tags($nazwisko));
        $this->klasa = htmlspecialchars(strip_tags($klasa));
        $this->telefon = htmlspecialchars(strip_tags($telefon));
    }

    public function as_json() {
        return json_encode($this);
    }
}
?>