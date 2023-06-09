let cita = "Tres tristes tigres comen trigo en un trigal";

let substring = "tigres comen trigo";

tamañoDeCita = cita.length;

console.log("El tamaño de cita es:",tamañoDeCita);

indice = cita.indexOf(substring);

console.log("El indice del substring es:",indice);

//los argumentos de slice son desde donde hasta donde corta el string.

citaRevisada = cita.slice(0,-13);

console.log(citaRevisada);