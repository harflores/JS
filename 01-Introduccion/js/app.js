// PREGUNTA AL USUARIO SU NOMBRE PARA DESPUES MOSTRARLO EN PAGINA
const nombre = prompt("Cual es tu nombre?");
document.querySelector('.contenido').innerHTML=`${nombre} esta aprendiendo JS`;