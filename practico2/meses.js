let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

const readlineSync = require('readline-sync');
const eleccion  = readlineSync.question('Ingrese numero de mes ');

let mes = meses [eleccion - 1];

if (mes === "noviembre" || mes === "abril" || mes ==="junio" || mes ==="septiembre") {
    cantidadDeDias = 30;
} else if (mes === "febrero") {
    cantidadDeDias = 28;
} else {
    cantidadDeDias = 31;
}

console.log ("La cantidad de dias del mes de", mes, "es",cantidadDeDias);