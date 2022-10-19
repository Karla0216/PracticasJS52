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

/* funcion nombre */  /* function nombre(){}; */
/* funcion anonima */ /* const nombre = function(){}; */
/* funcion flecha */  /* const nombre = () => {}; */

/* ------------------------------------------------------------------------------------*/

/* parseInt es para que se convierta */

function calcular(){
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
};

/* .scr="img/playa(1).jpg" */
/* funcion para ver imagenes */


function imagen(){ 
    let num_imagen = parseInt(document.getElementById("num_imagen").value);
    console.log(num_imagen);

    switch (num_imagen) {
        case 1:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/9700586/pexels-photo-9700586.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
            document.getElementById("tamañoimg").style.display = "block";
            break;
        case 2:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/14010115/pexels-photo-14010115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
            document.getElementById("tamañoimg").style.display = "block";
            break
        case 3:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/14006742/pexels-photo-14006742.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
            document.getElementById("tamañoimg").style.display = "block";
            break
        case 4:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/13719410/pexels-photo-13719410.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
            document.getElementById("tamañoimg").style.display = "block";
            break
        case 5:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/10595864/pexels-photo-10595864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
            document.getElementById("tamañoimg").style.display = "block";
            break    
    
    }
};

