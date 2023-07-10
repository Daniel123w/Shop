<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    // Verificăm dacă utilizatorul încearcă să se autentifice
    if (isset($_POST["login"])) {
        // Autentificare
        login($email, $password);
    } elseif (isset($_POST["signup"])) {
        // Înregistrare
        signup($email, $password);
    }
}

function login($email, $password) {
    // Verificăm dacă utilizatorul există în tabela "clienti"
    $servername = "localhost";
    $username = "root";
    $password_db = "";
    $dbname = "shop";
    
    $conn = new mysqli($servername, $username, $password_db, $dbname);
    
    if ($conn->connect_error) {
        die("Conexiunea la baza de date a eșuat: " . $conn->connect_error);
    }
    
    $stmt = $conn->prepare("SELECT * FROM clienti WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if ($password == $row["password"]) {
            // Autentificare reușită, setăm variabila de sesiune și redirecționăm către pagina Home.html
            $_SESSION["email"] = $email;
            header("Location: Home.html");
            exit();
        } else {
            // Parolă incorectă
            header("Location: Login_form.php?error=incorrect");
            exit();
        }
    } else {
        // Utilizatorul nu există
        header("Location: Login_form.php?error=nonexistent");
        exit();
    }
}

function signup($email, $password) {
    // Verificăm dacă utilizatorul există deja în tabela "clienti" după email
    $servername = "localhost";
    $username = "root";
    $password_db = "";
    $dbname = "shop";
    
    $conn = new mysqli($servername, $username, $password_db, $dbname);
    
    if ($conn->connect_error) {
        die("Conexiunea la baza de date a eșuat: " . $conn->connect_error);
    }
    
    $stmt = $conn->prepare("SELECT * FROM clienti WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        echo "Adresa de email există deja!";
    } else {
        // Inserăm datele utilizatorului în tabela "clienti"
        $stmt = $conn->prepare("INSERT INTO clienti (email, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $email, $password);
        
        if ($stmt->execute()) {
            echo "<script>alert('Utilizatorul a fost creat cu succes! Vă rugăm să vă autentificați.'); window.location.href = 'Login_form.php';</script>";
            exit();
        } else {
            echo "Eroare la crearea utilizatorului.";
        }
    }
    
    $stmt->close();
    $conn->close();
}
?>
