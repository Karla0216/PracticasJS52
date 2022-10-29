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

};

function Tabla() {
    let numtabla = parseInt(document.getElementById("tabla").value);
    let tipo = parseInt(document.getElementById("tipo").value);
    let longitud = parseInt(document.getElementById("long").value);
    let tabla = document.getElementById("tabla-resul");
    let push = document.createDocumentFragment();

    document.getElementById("tablanum").textContent = `Tabla del ${numtabla}`;
    
    switch (tipo) {
        case 1:
            for (let i = 0; i <= longitud; i++) {
                let renglon = document.createElement("tr")
                renglon.innerHTML = `<td>${numtabla}</td><td>x</td><td>${i}</td><td>=</td><td>${(numtabla * i)}</td>`;
                push.appendChild(renglon);
            };
            tabla.innerHTML = "";
            tabla.appendChild(push);
            break;
        case 2:
            for (let i = longitud; i >= 0; i--) {
                let renglon = document.createElement("tr")
                renglon.innerHTML = `<td>${numtabla}</td><td>x</td><td>${i}</td><td>=</td><td>${(numtabla * i)}</td>`;
                push.appendChild(renglon);
            };
            tabla.innerHTML = "";
            tabla.appendChild(push);
            break;
    };
};