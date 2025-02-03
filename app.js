// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let misContactos = [];

function agregarAmigo(){
    //Obtenemos el valor del campo de texto
    let nombre = document.getElementById('amigo').value;
    //identificamos la etiqueta de HTML
    let listaAmigos = document.getElementById('listaAmigos');

    if (nombre.length != 0){
        //Anadimos a la lista de elementos 
        misContactos.push(nombre);
        console.log(misContactos);

        //Agregamos los nombres a la pantalla
        let agregarAmigo = document.createElement('li');
        agregarAmigo.textContent = nombre;
        listaAmigos.appendChild(agregarAmigo);

        //limpiamos el campos despues de presionar el boton
        document.getElementById('amigo').value = '';
    }else{
        alert('Ingrese un nombre valido, no se permite el ingreso de vacio');
    }
}

function sortearAmigo(){
    let resultadoMensaje = document.getElementById('resultado');
    let indiceAleatorio = Math.floor(Math.random()*misContactos.length);
    let amigoSorteado = misContactos[indiceAleatorio];
    
    resultadoMensaje.innerHTML = `El amigo sorteado es ${amigoSorteado}.`;
    
    let listaAmigos = document.getElementById('listaAmigos');
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    }
}

