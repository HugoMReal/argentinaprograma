let jugada = ["piedra", "papel", "tijeras"];

let vecesJugadas = [];

let eleccionComputadora = [];

let eleccionUsuario = [];

let ganador = [];

const readlineSync = require('readline-sync');

let contadorUsuario = 0;

let contadorComputadora = 0;

function obtenerCantidadJugadas () {
   
    let cantidadJugadas;
    
 do {cantidadJugadas = readlineSync.questionInt (
        "Ingrese si quiere jugar 1, 2 o 3 veces = ") ;
    } while ( cantidadJugadas !== 1 && cantidadJugadas !== 2 && cantidadJugadas !== 3)
return (cantidadJugadas);
    }    

vecesJugadas = obtenerCantidadJugadas ()

for (let i = 0; i < vecesJugadas; i++) {
    eleccionComputadora = jugada[obtenerJugadaComputadora ()];
    eleccionUsuario = obtenerJugadaUsuario();
    ganador = determinarGanador(eleccionComputadora, eleccionUsuario);
    if (ganador === 1) {
        contadorComputadora +=1;
    } else if (ganador === 2) {
        contadorUsuario +=1;
    }  else if (ganador === 3) {
        console.log ("El jugador no ingreso una jugada valida");
    }
console.log ("La computadora eligio: " + eleccionComputadora + ".");

console.log ("El usuario eligio: " + eleccionUsuario + ".");

}

if (contadorComputadora > contadorUsuario) {
    console.log ("El resultado fue: gana la computadora.");
} else if (contadorComputadora < contadorUsuario) {
    console.log ("El resultado fue: gana el usuario.");
} else {
    console.log ("El resultado fue: empate.")}


function obtenerJugadaComputadora () {
    return Math.floor(Math.random()*3)
}

function obtenerJugadaUsuario () {
let jugador;
do {jugador = readlineSync.question('Ingrese piedra, papel o tijeras = ')  
} while (jugador !== "piedra" && jugador !== "papel" && jugador !== "tijeras") 

return (jugador);
    }    
    
function determinarGanador (eleccionComputadora, eleccionUsuario) {

    let resultado = [];

    if (eleccionComputadora === eleccionUsuario) {
        
        resultado = 0; }

        else if (eleccionComputadora === "piedra" && eleccionUsuario === "tijeras" || eleccionComputadora === "tijeras" && eleccionUsuario === "papel" || eleccionComputadora === "papel" && eleccionUsuario === "piedra"){
            resultado = 1;

        } else (resultado = 2);
        
    return (resultado);
}



