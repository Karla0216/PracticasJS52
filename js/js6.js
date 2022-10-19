/* PROGRAMA TABLA
Tabla __________
Tipo ___________
Longitud _______
{resultado aqui} 
<Ver tabla>*/


function tabla(){
    let numero_tabla = parseInt(document.getElementById("tabla").value);
    let longitud = parseInt(document.getElementById("longitud").value);
    let tipo = document.getElementById("tipo").value;

    for(let i = 1; i <= longitud; i++){
        document.write("<li>");
		document.write(j + "x " + i + "= " + j * i);
		document.write("</li>");
    }
}


