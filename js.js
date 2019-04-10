var tabla1 = document.getElementById("tablita1");
var tabla2 = document.getElementById("tablita2");


function Guardar(){
    alert("hola");
    var nombre = document.getElementById("nombre").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var dni= document.getElementById("dni").value;

    var nuevo = tabla1.rows.length;
    newFil = tabla1.insertRow(nuevo);
    var celda1 = newFil.insertCell(0);
    var celda2 = newFil.insertCell(1);
    var celda3 = newFil.insertCell(2);
    var celda4 = newFil.insertCell(3);
    celda1.innerHTML = nombre;
    celda2.innerHTML = dni;
    celda3.innerHTML = Date();
    celda4.innerHTML = ubicacion;

    document.getElementById("nombre").value("");
 document.getElementById("ubicacion").value("");
    document.getElementById("dni").value("");


console.log(nombre+ubicacion +dni);
alert(nombre+ubicacion +dni);


}