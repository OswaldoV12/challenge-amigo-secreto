// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let misContactos = [];

function agregarAmigo(){
    //Obtenemos el valor del campo de texto
    let nombre = document.getElementById('amigo').value;
    //identificamos la etiqueta de HTML
    if (nombre.length != 0){
        // Agregamos tanto a misContactos como a la pantalla
        agregarContactoPantalla(nombre);
        //limpiamos el campos despues de presionar el boton
        document.getElementById('amigo').value = '';
    }else{
        alert('Ingrese un nombre valido, no se permite el ingreso de vacio');
    }
}

function agregarContactoPantalla(nombre){
    let listaAmigos = document.getElementById('listaAmigos');
    //Anadimos a la lista de elementos 
    misContactos.push(nombre);
    console.log(misContactos);
    //Agregamos los nombres a la pantalla
    let agregarAmigo = document.createElement('li');
    agregarAmigo.textContent = nombre;
    listaAmigos.appendChild(agregarAmigo);
}

function sortearAmigo(){
    if(misContactos.length != 0){
        // identifica el elemento HTML para mostrar mensaje
        let resultadoMensaje = document.getElementById('resultado');
        let amigoSorteado = generarAmigoSecreto();
        // Mostramos resultado de amigo secreto
        resultadoMensaje.innerHTML = `El amigo sorteado es ${amigoSorteado}.`;
        // limpiamos lista
        limpiarListas();
    }else{
        alert('No hay amigos en la lista');
    }
}

function generarAmigoSecreto(){
    //Generamos numero aleatorio apartir de la misContactos
    let indiceAleatorio = Math.floor(Math.random()*misContactos.length);
    let amigoSorteado = misContactos[indiceAleatorio];
    //Regresamos el usuario aleatorio
    return amigoSorteado;
}

function limpiarListas(){
    //Limpiamos la pantalla usando un bucleOrganizaci[on]
    let listaAmigos = document.getElementById('listaAmigos');
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    }
    //limpiamos la lista de amigos
    misContactos = [];
}

