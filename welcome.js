var logout=document.getElementById("logOut");
var message= document.getElementById("welcomeMessage");
var data;

data=sessionStorage.getItem("name");

logout.addEventListener('click',function(){
    window.location="/index.html";
});

message.innerHTML=`welcome ${data}`;
function back(){
    window.location="/index.html";

}