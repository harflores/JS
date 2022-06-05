console.time('Inicio');

// PREGUNTA AL USUARIO SU NOMBRE PARA DESPUES MOSTRARLO EN PAGINA
const nombre = prompt("Cual es tu nombre?");
document.querySelector('.contenido').innerHTML=`${nombre} esta aprendiendo JS`;


console.log('Hola Mundo');
console.error('Algo salio mal!');
console.warn("Eso no esta permitido");

console.time('Fin');

