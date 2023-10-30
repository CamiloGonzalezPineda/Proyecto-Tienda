let carrusel = document.getElementById('carrusel')
let camisetas = document.getElementById('camisetas')
let pantalones = document.getElementById('pantalones')
let buzos = document.getElementById('buzos')
let zapatos = document.getElementById('zapatos')
function mostarCamisetas(){
    camisetas.style.display ='block'
    carrusel.style.display = 'none'
    pantalones.style.display = 'none'
    buzos.style.display = 'none'
    zapatos.style.display = 'none'
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