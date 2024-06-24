

var signInWindow = document.getElementById("signIn");
var userName = document.getElementById("signName");
var userEmail = document.getElementById("signEmail");
var userPassword = document.getElementById("signPassword");
var signBtn = document.getElementById("btnSign");
var message = document.getElementById("inCorrectMessage");
var usersList = [];


signBtn.addEventListener('click', function () {
    addUser();
})
signInWindow.addEventListener('click', function () {
    window.location = "index.html";
});


function addUser() {
    var user = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
    }

    if(checkEmpty()==true)
        {
            message.innerHTML = "All inputs are required";
            message.style.setProperty("color", "red", "important");

            // clearData();
        }
    else {
        // message.innerHTML = " required";

        if(checkExistData(user.email)== true){
            message.innerHTML = "email already exists";
            message.style.setProperty("color", "red", "important");
        }
        else
        {
            message.innerHTML = "Success";
            message.style.setProperty("color", "green", "important");
            usersList.push(user);
            localStorage.setItem("newUser", JSON.stringify(usersList));
        }
    }
}

function checkExistData(userMail){

    usersList = JSON.parse(localStorage.getItem("newUser"))
    if(usersList == null){
        usersList =[];
    }
    else
    {
        for (var i = 0; i < usersList.length; i++){
            if (userMail == usersList[i].email){
                return true;
            }
        }
    }
}


function checkEmpty() {
    if (userName.value.length == 0 || userPassword.value.length == 0 || userEmail.value.length == 0)
        return true;
    else
        return false;
}
function clearData() {
    userName.value = null;
    userEmail.value = null;
    userPassword.value = null;
}



