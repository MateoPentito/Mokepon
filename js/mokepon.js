let ataqueJugador = "";
let ataqueEnemigo = "";
let resultado = "";
let vidasDelJugador = 3;
let vidasDelEnemigo = 3;

function iniciarJuego() {

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none";


    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none";


    let botonMascota = document.getElementById("boton-mascota");
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    let botonReiniciar = document.getElementById("boton-reiniciar");

    botonMascota.addEventListener('click', seleccionarMascota);


    botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonTierra.addEventListener("click", ataqueTierra);

    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA";
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA";
    } else {
        alert("Error.")
    }
    combate()
}
function combate() {

    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueEnemigo == ataqueJugador) {
        resultado = "EMPATASTE";
        crearMensaje();
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        vidasDelEnemigo--;
        resultado = "GANASTE";
        spanVidasEnemigo.innerHTML = vidasDelEnemigo;
        crearMensaje();
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        vidasDelEnemigo--;
        resultado = "GANASTE";
        spanVidasEnemigo.innerHTML = vidasDelEnemigo;
        crearMensaje();
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        vidasDelEnemigo--;
        resultado = "GANASTE";
        spanVidasEnemigo.innerHTML = vidasDelEnemigo;
        crearMensaje();
    } else {
        resultado = "PERDISTE";
        vidasDelJugador--;
        spanVidasJugador.innerHTML = vidasDelJugador;
        crearMensaje();
    }
    verificarVidas();
}
function verificarVidas() {

    if (vidasDelJugador == 0) {
        crearMensajeFinal("Lo siento! perdiste :(")
    } else if (vidasDelEnemigo == 0) {
        crearMensajeFinal("Felicitaciones! gastate :)")
    }
}
function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", las mascotas del enemigo ataco con "
        + ataqueEnemigo + " = " + resultado;
    sectionMensajes.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = resultadoFinal;
    sectionMensajes.appendChild(parrafo);


    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");

    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "block";
}
function seleccionarMascota() {

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "block";
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    sectionSeleccionarMascota.style.display = "none";
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    if (document.getElementById("Hipodoge").checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (document.getElementById("Capipepo").checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (document.getElementById("Ratigueya").checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else if (document.getElementById("Langostelvis").checked) {
        spanMascotaJugador.innerHTML = "Langostelvis";
    } else if (document.getElementById("Tucapalma").checked) {
        spanMascotaJugador.innerHTML = "Tucapalma";
    } else if (document.getElementById("Pydos").checked) {
        spanMascotaJugador.innerHTML = "Pydos";
    } else {
        alert("Elige alguna de las mascotas validas.")
        location.reload();
    }
    seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {




    let ataqueAleatorio = aleatorio(1, 6);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis";
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma";
    } else if (ataqueAleatorio == 6) {
        spanMascotaEnemigo.innerHTML = "Pydos";
    } else {
        alert("Error.")
    }

}
function reiniciarJuego() {
    location.reload();
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener('load', iniciarJuego);






















