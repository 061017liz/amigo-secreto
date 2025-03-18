// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// arrray para almacenar los nombres de amigos 
let amigos = [];

//funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo;
    
// alerta de campo vacio
if (nombre === ""){
    alert("Por favor, ingrese un nombre");
    return; // detiene la ejecucion de la funcion

}

// validar que el nobre no este duplicado
if (amigos.includes(nombreAmigo)){
    alert("El nombre ${nombreAmigo} ya esta en la lista");
    return;
}

// agregar el nombre al array de amigos
amigos.push(nombreAmigo);

// limpiar el campo de entrada
inputAmigo.ariaValu = "";

//actualizar lista en html
actualizarLista();

}


//funcion para actualizar lista de amigos
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //limpiar contenido de la lista
    listaAmigos.innerHTML = "";/// borra cualquier contenido previo 

    // recorrer el array con ciclo for
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

    }


//funcion para sortear amigos 
function sortearAmigo(){
// validar que haya amigos disponibles
if(amigos.length === 0){ // comprueba si el array 'amigos' esta vacio
    alert("No hay amigos disponibles para sortear");
    return;

}

// genera un indice aleatorio
const indiceAleatorio = Math.floor(Math.random() * amigos.length);// genera un numero aleatorio  entre 0 y la longitud del array 
    
//obtener el nombre sorteado
const amigoSorteado = amigos [indiceAleatorio];// usa un indice aleatorio para obtener un nombre del array

// mostrar el resultado en HTLM
const resultado = document.getElementById('resultado');
resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

}



