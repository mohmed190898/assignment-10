

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("LoginPassword");
var btnLogin = document.getElementById("btnLogin");
var pIncorrect = document.getElementById("inCorrectMessage");
var signUpWindow = document.getElementById("signUp");
var allData = [];
allData = JSON.parse(localStorage.getItem("newUser"));




signUpWindow.addEventListener('click', function () {
    window.location = "signup.html";
});

btnLogin.addEventListener('click', function () {
    if (checkEmpty() == true) {
        pIncorrect.innerHTML = "All inputs is required";
        pIncorrect.style.paddingBottom = "15px";
    }
    else {
        if (checkDataValidation() == true) {
            pIncorrect.innerHTML = "Sucess";
            pIncorrect.style.setProperty("color", "green", "important");

            window.location = "welcome.html";
        }
        else {
            pIncorrect.innerHTML = "incorrect email or password   ";
            // console.log("false");
        }
    }
});

function checkEmpty() {
    if (loginEmail.value.length == 0 || loginPassword.value.length == 0)
        return true;
    else
        return false;
}

function checkDataValidation() {
    for (var i = 0; i < allData.length; i++) {
        if (loginEmail.value == allData[i].email && loginPassword.value == allData[i].password) {
            sessionStorage.setItem("name",allData[i].name);
            return true;

        }
    }
    return false;

}
