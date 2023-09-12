const usuario= document.getElementById("usuario");
const contraseña= document.getElementById("contraseña");
const ingreso= document.getElementById("ingreso");
let user= "camilo"
let past= "1420"
 

function inicio() {
    if (usuario.value === user &&  contraseña.value===past){
       ingreso.addEventListener("click",validacion);
    }else{
        alert("pasword incorrect");}
}

function validacion() {
    location.href = "segunda.html";
    alert("welcome");
    
}