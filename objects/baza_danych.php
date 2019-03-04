<?php
class Database {

	public $conn;
 
	// get the database connection
	public function getConnection(){
 
		$this->conn = null;
		$dbopts = parse_url(getenv('DATABASE_URL'));
 
		try {
			$this->conn = new PDO("pgsql:host=" . $dbopts["host"] . ";dbname=" . ltrim($dbopts["path"],'/') . ";user=" . $dbopts["user"]. ";password=" . $dbopts["pass"]);
			$this->conn->exec("set names utf8");
		} catch(PDOException $exception){
			echo "Connection error: " . $exception->getMessage();
		}
 
		return $this->conn;
	}
}
?>