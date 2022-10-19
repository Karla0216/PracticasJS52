/* PROGRAMA CALCULADORA
Numero _______
Numero _______
Operacion _____
<Calcular> */

function calcular(){
    let primer_numero = parseInt(document.getElementById("primer_numero").value);
    let segundo_numero = parseInt(document.getElementById("segundo_numero").value);
    let operacion = document.getElementById("operacion").value;

    let resultado = 0;

    if (operacion == "+"){
        resultado = primer_numero + segundo_numero;
    }
    else if (operacion == "-"){
        resultado = primer_numero - segundo_numero;
    }
    else if (operacion == "*"){
        resultado = primer_numero * segundo_numero;
    }
    else if (operacion == "/"){
        resultado = primer_numero / segundo_numero;
    }

    let resul = document.getElementById("resultado");
    resul.value = resultado;

}
