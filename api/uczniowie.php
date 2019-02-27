<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, GET");
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Credentials');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

include '../objects/baza_danych.php';

$database = new Database();
$db = $database->getConnection();

$request_method=$_SERVER["REQUEST_METHOD"];
/* create: */
/* CREATE TABLE `projekt_php`.`uczniowie` ( `id` INT UNSIGNED NOT NULL , `imie` TEXT CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL , `nazwisko` TEXT CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL , `klasa` TEXT CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL , `telefon` INT UNSIGNED NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB; */

/* insert: */
/* INSERT INTO `uczniowie` (`id`, `imie`, `nazwisko`, `klasa`, `telefon`) VALUES (NULL, 'Jakub', 'Koralewski', '3D', '666666666'); */

/* delete */
/* DELETE FROM `uczniowie` WHERE `uczniowie`.`id` = 1 */
/* function get_students() {
    global $db;
    $query = "SELECT * FROM `uczniowie`";
    $response = array();
    $result = mysqli_query($db, $query);
    while($row = mysqli_fetch_array($result)) {
        $response[] = $row;
    }
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode($response);
} */

function get_students($id = 0){
    global $db;
    
    $query = "SELECT * FROM `uczniowie`";
    
	if($id != 0) {
		$query .= "WHERE id = " . $id . " LIMIT 1";
    }
    $uczniowie = array();
    $stmt = $db->prepare($query);
    $stmt->execute();

	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $uczen=array(
            "id" => $id,
            "imie" => $imie,
            "nazwisko" => $nazwisko,
            "klasa" => $klasa,
            "telefon" => $telefon
        );

        array_push($uczniowie, $uczen);
    }
 
    // set response code - 200 OK
    http_response_code(200);
    header("Content-Type: application/json; charset=UTF-8");
    // show categories data in json format
    echo json_encode($uczniowie);
	
}

switch($request_method) {
    case 'GET':
        // Retrive Products
        if(!empty($_GET["id"]))
        {
            $id=intval($_GET["id"]);
            get_students($id);
        } else {
            get_students();
        }
        break;
    case 'POST':
        
    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}




?>