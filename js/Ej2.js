/* 2.- Escribir un programa que imprima los horarios
        en que debe tomar los medicamentos un paciente. 
        Solicitar al usuario la hora de la toma inicial
        (0-23) y la frecuencia de la toma diaria (1-12).
        
        Ejemplo
        hora inicial: 5
        frecuencia: 6
        horarioss
        toma 1 5
        toma 2 11
        toma 3 17
        toma 4 23
*/

let hora_inicial = 9;
let frecuencia = 3;

let cant_tomas = 24 / frecuencia;

console.log("Horarios");
console.log("Hora de la toma inicial: " + hora_inicial);
console.log("Frecuencia de la toma diaria: " + frecuencia);
console.log("Cantidad de tomas: " + cant_tomas);

let horario = hora_inicial;

for (let i = 1;i <= cant_tomas; i++) {
    console.log(`Toma ` + i + ": " + (horario) + ":00 hrs");
    horario = horario + frecuencia;
    if (horario >= 24) {
        horario = horario - 24;
    };
};
