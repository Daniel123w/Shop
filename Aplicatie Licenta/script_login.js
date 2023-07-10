let container = document.querySelector(".container");
let pwShowHide = document.querySelectorAll(".showhidepw");
let pwFields = document.querySelectorAll(".password");
let signUp = document.querySelector(".signup-link");
let login = document.querySelector(".login-link");

pwShowHide.forEach(element => {
  element.addEventListener("click", () => {
    Array.from(pwFields).forEach(pwField => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach(icon => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach(icon => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

signUp.addEventListener("click", function() {
  container.classList.add("active");
});

login.addEventListener("click", function() {
  container.classList.remove("active");
});

function loginvalidation() {
  let email = document.forms.loginForm.email.value;
  let password = document.forms.loginForm.password.value;
  let regEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,4})+$/;

  if (email === "" || !regEmail.test(email)) {
    alert("Email is not valid");
    document.forms.loginForm.email.focus();
    return false;
  }

  if (password === "") {
    alert("Please enter your password");
    document.forms.loginForm.password.focus();
    return false;
  }

  // Returnează rezultatul verificării către formularul HTML
  return true;
}

function signUpValidation() {
  let name = document.forms.signUpform.name.value;
  let email = document.forms.signUpform.email.value;
  let password = document.forms.signUpform.password.value;
  let confirmpw = document.forms.signUpform.confirmpwd.value;
  let regEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,4})+$/;
  let regName = /\d+/g;

  if (name === "" || regName.test(name)) {
    alert("Name is not valid");
    document.forms.signUpform.name.focus();
    return false;
  }

  if (email === "" || !regEmail.test(email)) {
    alert("Email is not valid");
    document.forms.signUpform.email.focus();
    return false;
  }

  if (password === "" || regName.test(password)) {
    alert("Password is not valid");
    document.forms.signUpform.password.focus();
    return false;
  }

  if (confirmpw === "" || regName.test(confirmpw)) {
    alert("Please confirm your password");
    document.forms.signUpform.confirmpwd.focus();
    return false;
  }

  // Returnează rezultatul verificării către formularul HTML
  return true;
}
