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
//-------------
/*
let carrusel = document.getElementById('carrusel')
let camisetas = document.getElementById('camisetas')
let pantalones = document.getElementById('pantalones')
let buzos = document.getElementById('buzos')
let zapatos = document.getElementById('zapatos')
*/
function mostarCamisetas(){
   location.href = './views/camisetas.html'
}
function mostrarPantalones(){
    camisetas.style.display ='none'
    carrusel.style.display = 'none'
    pantalones.style.display = 'block'
    buzos.style.display = 'none'
    zapatos.style.display = 'none'
}
function mostrarBuzos(){
    camisetas.style.display ='none'
    carrusel.style.display = 'none'
    pantalones.style.display = 'none'
    buzos.style.display = 'block'
    zapatos.style.display = 'none'
}
function mostrarZapatos(){
    camisetas.style.display ='none'
    carrusel.style.display = 'none'
    pantalones.style.display = 'none'
    buzos.style.display = 'none'
    zapatos.style.display = 'block'
}

//________________________________________________________________