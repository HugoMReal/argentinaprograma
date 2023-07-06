const piedra = 0;

const papel = 1;

const tijeras = 2;

let eleccionComputadora = [];

let eleccionUsuario = [];

let ganador = [];

const readlineSync = require('readline-sync');

// random elige numeros reales de un intervalo [0; max), al conmbinar con floor, redondea hacia abajo por lo
// toma la parte natural.

function obtenerJugadaComputadora () {
    return Math.floor(Math.random()*3)
}

eleccionComputadora = obtenerJugadaComputadora ()

switch (eleccionComputadora) {
    case piedra:
        eleccionComputadora = "piedra"
        break;
    case papel:
        eleccionComputadora = "papel"
        break; 
    case tijeras:
            eleccionComputadora = "tijeras"
        break; 
    }
    function obtenerJugadaUsuario () {
        let jugador;
        do {jugador = readlineSync.question('Ingrese piedra, papel o tijeras = ')  
        } while (jugador !== "piedra" && jugador !== "papel" && jugador !== "tijeras") 
        
        return (jugador);
            }    
    
eleccionUsuario = obtenerJugadaUsuario();

function determinarGanador (eleccionComputadora, eleccionUsuario) {

    let resultado = [];

    if (eleccionComputadora === eleccionUsuario) {
        
        resultado = "empate"; }

        else if (eleccionComputadora === "piedra" && eleccionUsuario === "tijeras" || eleccionComputadora === "tijeras" && eleccionUsuario === "papel" || eleccionComputadora === "papel" && eleccionUsuario === "piedra"){
            resultado = "gana la computadora";

        } else (resultado = "gana el usuario");

     return (resultado);
}

ganador = determinarGanador(eleccionComputadora, eleccionUsuario);


console.log ("La computadora eligio: " + eleccionComputadora + ".");

console.log ("El usuario eligio: " + eleccionUsuario + ".");

console.log ("El resultado fue: " + ganador + ".");