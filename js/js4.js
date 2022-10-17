/* Ejemplo de funcion con nombre */
function divisores(numero){
    let total = 0;

    for(let i=1; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

/* la funcion dice cuantos divisores tiene
 % es el residuo de una division */


console.log("Total de divisores",divisores(32));


/* funcion anonima */

const divisoresV2 = function(numero){
    let total = 0;

    for(let i=1; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total
};

console.log("Total de divisores",divisoresV2(32));

/* funcion con flecha 
cuando solo tiene un parametro se puede quitar parentesis*/

/* const divisoresV3 = () => {}; */

const divisoresV3 = (numero) => {
    let total = 0;

    for(let i=1; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total
};

console.log("Total de divisores",divisoresV3(32));

                /* summary */

/* funcion nombre */  function nombre(){};
/* funcion anonima */ const nombre = function(){};
/* funcion flecha */  const nombre = () => {};