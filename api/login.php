<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Credentials');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

header("Content-Type: application/json; charset=UTF-8");
include '../objects/baza_danych.php';

if (isset($_POST['login']) and isset($_POST['haslo'])){
    //3.1.1 Assigning posted values to variables.
    $login = $_POST['login'];
    $haslo = $_POST['haslo'];
}

$database = new Database();
$db = $database->getConnection();

// get posted data
$data = json_decode(file_get_contents("php://input"));

function getUser($login, $haslo, $db) {
    // query to check if email exists
    $query = 'SELECT id, login
            FROM uzytkownicy
            WHERE login = ?
            AND haslo = ?
            LIMIT 0,1 ';
    
    $stmt = $db->prepare($query);

    $login = htmlspecialchars(strip_tags($login));
    $stmt->bindParam(1, $login);

    $haslo = htmlspecialchars(strip_tags($haslo));
    $stmt->bindParam(2, $haslo);

    $stmt->execute();

    // get number of rows
    $num = $stmt->rowCount();

    if ($num == 1) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return true;
    }
    return false;
}

if ( getUser($data->login, $data->haslo, $db)) {
    // set response code
    http_response_code(200);
    echo json_encode(
            array(
                "status" => true,
                "message" => "Zalogowany.",
            )
        );
} else {
    // set response code
    http_response_code(401);
    echo json_encode(array(
        "status" => false,
        "message" => "Błąd logowania."
    ));
}


?>