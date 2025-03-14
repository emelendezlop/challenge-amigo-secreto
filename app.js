// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// Hecho por Edwin Meléndez López
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nombreAmigo = "";
    nombreAmigo =  document.getElementById('amigo').value;

    if (nombreAmigo == "") {
        alert('Debe de agregar un nombre de amigo');
        return;
    }

    /* se agrega el nombre a la lista*/
    amigos.push(nombreAmigo);
    /*-- solo para pruebas de Edwin */
    /* asignarTextoElemento('p', amigos);
       console.log(amigos); */
    
    /* limpia para pedir otro amigo*/
    document.getElementById('amigo').value = '';
    /* quitar luego */
    /* asignarTextoElemento('p2', ''); */
    /* Limpia lista */
    asignarTextoElemento('li', '');
    /* Muestra lista*/
    muestraAmigo();
    
};

function sortearAmigo(){
    let numeroAmigosMaximos = 0;
    numeroAmigosMaximos = amigos.length-1;
    let numeroGenerado =  Math.floor(Math.random()*numeroAmigosMaximos)+1;
    /* Solo para pruebas */
    /*
    console.log(Math.random()*numeroAmigosMaximos);
    console.log(numeroGenerado);
    */

    asignarTextoElemento('p2', 'Su amigo secreto sera: ' + amigos[numeroGenerado]);
};

function muestraAmigo(){
    let num = 0;
    let desplieque = "";
    for (let step = 0; step < amigos.length; step++) {        
        // Se ejecuta 5 veces, con valores del paso 0 al n
        desplieque = desplieque +  amigos[num] + " , ";
        asignarTextoElemento('li', desplieque);
        num++;
    }

}