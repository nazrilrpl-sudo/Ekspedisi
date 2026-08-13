const password=document.getElementById("password");

const toggle=document.getElementById("togglePassword");

toggle.onclick=function(){

if(password.type==="password"){

password.type="text";

toggle.classList.replace("fa-eye","fa-eye-slash");

}else{

password.type="password";

toggle.classList.replace("fa-eye-slash","fa-eye");

}

}

document
.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();

const user=document.getElementById("username").value;

const pass=document.getElementById("password").value;

if(user==="admin" && pass==="admin"){

window.location.href="dashboard.html";

}else{

alert("Username atau Password salah!");

}

});
