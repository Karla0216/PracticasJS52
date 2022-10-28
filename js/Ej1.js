/* 1.- Escribir un programa em java que permita
imprimir en pantalla n numeros perfectos. El usuario podra indicar cuantos
numeros perfectos es aquel que la suma de sus divisiones excepto el mismo,
da como resultado el mismo numero.
Ejemplo: para el 6 sus divisiones son 1,2,3,6 
Sumando todos excepto el 6: 1+2+3= 6, 6 es perfecto. */

function num_perfect() {
    let cant_numeros = parseInt(document.getElementById("numero").value);
    let cant = 0;
    let numero = 0;
    let divs = document.getElementById("result");
    divs.innerHTML = "";
    let titulo = document.createElement("h2")
    titulo.textContent = lista_num = document.createElement("div");
    lista_num.setAttribute("id","lista-num");

    while (cant_numeros != cant
){
        numero = numero + 1;
        let suma = 0;

        for (let i = 1; i < numero; i++){
            if(numero % i == 0 ){
                suma = suma + i;
            };
        };
        if (suma == numero) {
            let resultado = document.createElement("h3");
            resultado.innerHTML = `${numero}`;
            lista_num.appendChild(resultado);
            cant = cant + 1;
            
        };
}
divs.appendChild(lista_num);
}