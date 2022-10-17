/* Ejemplo de funcion */
function divisores(numero){
    let total = 0;

    for(let i=1; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}

/* la funcion dice cuantos divisores tiene
 % es el residuo de una division */
 

console.log("Total de divisores",divisores(32))