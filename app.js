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
