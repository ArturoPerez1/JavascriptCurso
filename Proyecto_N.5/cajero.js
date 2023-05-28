var caja = [];
var entregado = [];

caja.push( new billetes(50,3) );
caja.push( new billetes(20,2) );
caja.push( new billetes(10,2) );

var activos = 210;
var billete = document.getElementById("billete");
var operacion = document.getElementById("operacion");
var absoluto = document.getElementById("absoluto");
var dinero = 0;
var div = 0;
var papeles = 0;
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);




