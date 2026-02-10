<?php
function getDBConnection()
{
    $host = getenv('DB_HOST') ?: 'localhost';
    $user = getenv('DB_USER') ?: 'root';
    $pass = getenv('DB_PASS') ?: '';
    $name = getenv('DB_NAME') ?: 'COP4331';

    $conn = new mysqli($host, $user, $pass, $name);
    return $conn;
}

?>
