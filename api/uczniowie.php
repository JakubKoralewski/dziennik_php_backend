<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, GET, DELETE");
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Credentials');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	exit;
}

header("Content-Type: application/json; charset=UTF-8");

include '../objects/baza_danych.php';
include '../objects/uczen.php';

$database = new Database();
$db = $database->getConnection();
$db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );

$request_method=$_SERVER["REQUEST_METHOD"];
/* create: */
/* CREATE TABLE `projekt_php`.`uczniowie` ( `id` INT UNSIGNED NOT NULL , `imie` TEXT CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL , `nazwisko` TEXT CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL , `klasa` TEXT CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL , `telefon` INT UNSIGNED NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB; */


/* delete */
/* DELETE FROM `uczniowie` WHERE `uczniowie`.`id` = 1 */

function get_students($id = 0){
	global $db;
	
	$query = "SELECT * FROM uczniowie";
	
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

function get_student($imie, $nazwisko) {
	global $db;
	
	$query = "SELECT * FROM uczniowie WHERE imie=:imie AND nazwisko=:nazwisko";
	$stmt = $db->prepare($query);

	$stmt->bindParam(":imie", $imie);
	$stmt->bindParam(":nazwisko", $nazwisko);

	$stmt->execute();

	// get retrieved row
	$row = $stmt->fetch(PDO::FETCH_ASSOC);

	if ($stmt->rowCount() === 0) {
		return false;
	}

	// echo "\$row: " . $row; 
 
	$uczen = array(
		"id" => $row["id"],
		"imie" => $row["imie"],
		"nazwisko" => $row["nazwisko"],
		"klasa" => $row["klasa"],
		"telefon" => $row["telefon"]
	);
 
	return $uczen;
}

/* insert: */
/* INSERT INTO `uczniowie` (`id`, `imie`, `nazwisko`, `klasa`, `telefon`) VALUES (NULL, 'Jakub', 'Koralewski', '3D', '666666666'); */
function add_student($nowy_uczen) {
	global $db;
	$query = "INSERT INTO uczniowie (id, imie, nazwisko, klasa, telefon) VALUES(:id, :imie, :nazwisko, :klasa, :telefon)";
	
	$stmt = $db->prepare($query);

	// bind values
	$stmt->bindParam(":id", $nowy_uczen->id);
	$stmt->bindParam(":imie", $nowy_uczen->imie);
	$stmt->bindParam(":nazwisko", $nowy_uczen->nazwisko);
	$stmt->bindParam(":klasa", $nowy_uczen->klasa);
	$stmt->bindParam(":telefon", $nowy_uczen->telefon);

	if($stmt->execute()){
		return true;
	} 
	echo $stmt->errorInfo();
	return false;
	
}

function delete_student($id){
	global $db;
	// delete query
	$query = "DELETE FROM uczniowie WHERE id = ?";
	// prepare query
	$stmt = $db->prepare($query);
 
	// sanitize
	$id = htmlspecialchars(strip_tags($id));
 
	// bind id of record to delete
	$stmt->bindParam(1, $id);
 
	// execute query
	if($stmt->execute()){
		return true;
	}
 
	return false;
}

function edit_student($id, $nowy_uczen) {
	global $db;
	// delete query
	
	$set_query = "SET ";
	$properties_amount = sizeof($nowy_uczen);
	$properties_set = 0;
	if( isset($nowy_uczen["imie"]) ) {
		//echo 'property_exists';
		$set_query.= "imie='".htmlspecialchars(strip_tags($nowy_uczen["imie"]))."' ";
		$properties_set++;
	}
	if( isset($nowy_uczen["klasa"]) ) {
		$set_query.= "klasa='".htmlspecialchars(strip_tags($nowy_uczen["klasa"]))."' ";
		$properties_set++;
	}
	if( isset($nowy_uczen["telefon"]) ) {
		$set_query.= "telefon='".htmlspecialchars(strip_tags($nowy_uczen["telefon"]))."' ";
		$properties_set++;
	}
	if( isset($nowy_uczen["nazwisko"]) ) {
		$set_query.= "nazwisko='".htmlspecialchars(strip_tags($nowy_uczen["nazwisko"]))."' ";
		$properties_set++;
	}


	$query = "UPDATE uczniowie " . $set_query . "WHERE id=:id";
	//echo "\$query:" . $query;
	// prepare query
	$stmt = $db->prepare($query);
 
	// sanitize
	$id = htmlspecialchars(strip_tags($id));
 
	// bind id of record to delete
	$stmt->bindParam(":id", $id);
 
	// execute query
	if($stmt->execute()){
		return true;
	}
 
	return false;
}

switch($request_method) {
	case 'GET':
		// Remove student
		if(!empty($_GET["id"]))
		{
			$id=intval($_GET["id"]);
			get_students($id);
		} else {
			get_students();
		}
		break;
	case 'POST':
		// Add Student
		$data = json_decode(file_get_contents('php://input'), true);
		header("Content-Type: application/json; charset=UTF-8");
		
		if( !is_null($data["id"]) && !is_null($data["imie"]) && !is_null($data["nazwisko"]) ){
			$found_same_student = get_student($data["imie"], $data["nazwisko"]);

			// echo "\$found_same_student" . var_dump($found_same_student);
			
			if($found_same_student) {
				// Found same students
				http_response_code(400);
				$response = array(
					'message' => 'Taki uczeń już istnieje.',
					'uczen' => $found_same_student
				);

			} else {
				// No same students found
				http_response_code(201);

				$nowy_uczen = new Uczen($data["id"], $data["imie"], $data["nazwisko"], $data["klasa"], $data["telefon"]);

				if (add_student($nowy_uczen)) {
					// Adding successful
					$response = array(
						'message' => 'Dodano ucznia.',
						'uczen' => $nowy_uczen
					);
				} else {
					echo var_dump($data);
					// Adding unsuccessful
					http_response_code(500);
					$response = array(
						'message' => 'Nie udało się dodać ucznia.'
					);
				}

			}      
		} else {
			// No name or surname
			http_response_code(400);

			$response = array(
				'message' => 'Brak imienia, nazwiska lub id.'
			);
			
		}
		echo json_encode($response);
		break;
	case 'DELETE':
		$data = json_decode(file_get_contents('php://input'), true);
		// echo "delete request id: ". $data["id"];
		if(delete_student($data["id"])){
			http_response_code(200);
			echo json_encode(array(
				"message" => "Usunięto ucznia.",
				"uczen" => $data["id"]
			));
		}
		else {
			// if deleting unsuccessful
			http_response_code(503);
			echo json_encode(array("message" => "Nie udało się usunąć ucznia."));
		}
		break;
	case 'PUT':
		$data = json_decode(file_get_contents('php://input'), true);
		if( is_null($data["id"]) || empty($data["new_data"])) {
			http_response_code(400);

			$response = array(
				'message' => 'Nieprawidłowe dane.'
			);
			echo json_encode($response);
			exit;
		}
		if (edit_student($data["id"], $data["new_data"])) {
			http_response_code(200);
			$response = array(
				'message' => 'Zedytowano ucznia.',
			);
			echo json_encode($response);
		} else {
			echo var_dump($data);
			// Adding unsuccessful
			http_response_code(500);
			$response = array(
				'message' => 'Nie udało się zedytować ucznia.'
			);
			echo json_encode($response);
		}
		break;
	default:
		// Invalid Request Method
		header("HTTP/1.0 405 Method Not Allowed");
		break;
}
?>