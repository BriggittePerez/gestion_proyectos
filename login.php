<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestion_proyectos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener los datos del formulario
$email = $_POST['email'];
$password = $_POST['password'];

// Consultar la base de datos
$sql = "SELECT * FROM usuarios WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Verificar la contraseña
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo "Login exitoso";
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "No se encontró el usuario";
}

$conn->close();
?>
