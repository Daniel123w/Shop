<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_login.css">
    <title>Login</title>
</head>
<body>
    
<div class="container">
    <div class="forms">
        <div class="form login">
            <span class="title">Login</span>
            <form action="login.php" method="post" name="loginForm" onsubmit="loginvalidation()">
                <div class="input-field">
                    <input type="email" name="email" placeholder="Enter your email">
                    <i class="fa-solid fa-envelope icon "></i>
                </div>
                <div class="input-field">
                    <input type="password" name="password" class="password" placeholder="Enter your password">
                    <i class="fa-solid fa-lock icon"></i>
                    <i class="fa-solid fa-eye-slash showhidepw"></i> 
                </div>
                <div class="checkbox-text">
                    <div class="checkbox-content">
                         <input type="checkbox" id="logocheck">
                         <label for="locheck" class="text">Remember me</label>
                    </div>
                    <a href="#" class="text">Forget password</a>
                </div>
                <div class="input-field button">
                <input type="submit" value="Login" name="login">

                </div>
            </form>
            
            <div class="login-signup">
                <span class="text">Not a member</span>
                <a href="#" class="text signup-link">Sign up</a>
            </div>
            
            <?php
            // Afișăm mesajul de eroare în cazul în care există și utilizatorul nu este autentificat
            if (isset($_GET['error'])) {
                $error = $_GET['error'];
                if ($error == "incorrect") {
                    echo "<div id='login-error' style='display: block;'>Incorrect password!</div>";
                } elseif ($error == "nonexistent") {
                    echo "<div id='login-error' style='display: block;'>User does not exist!</div>";
                }
            } else {
                echo "<div id='login-error'></div>";
            }
            
            ?>
            
        </div>
        <div class="form signup">
            <span class="title">Registration</span>
            <form action="login.php" method="post" name="signUpform">
                <div class="input-field">
                    <input type="email" name="email" placeholder="Enter your email">
                    <i class="fa-solid fa-envelope" icon></i>
                </div>
                <div class="input-field">
                    <input type="password" name="password" class="password" placeholder="Create your password">
                    <i class="fa-solid fa-lock icon"></i>
                    <i class="fa-solid fa-eye-slash showhidepw"></i>
                </div>
                <div class="input-field">
                    <input type="password" name="confirmpwd" class="password" placeholder="Confirm password">
                    <i class="fa-solid fa-lock icon"></i>
                    <i class="fa-solid fa-eye-slash showhidepw"></i>
                </div>
                <div class="checkbox-text">
                    <div class="checkbox-content">
                        <input type="checkbox" id="termCon">
                        <label for="termCon" class="text">I accept all terms and conditions</label>
                    </div>
                </div>
                <div class="input-field button">
                <input type="submit" value="Sign up" name="signup">

                </div>
            </form>
            <div class="login-signup">
                <span class="text">Already a member? <a href="#" class="text login-link">Login Now</a></span>
            </div>
        </div>
    </div>
</div>

<script src="script_login.js"></script>
</body>
</html>
