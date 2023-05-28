var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorLinea = "#F28C25";


while(l < lineas)
{
 yi = 10 * l;
 xf = 10 * (l + 1);
 dibujarLinea(colorLinea, 0, yi, xf, 300);
 console.log("lineas" + l);
 l= l + 1;
}

dibujarLinea(colorLinea, 1, 1, 1 ,299);
dibujarLinea(colorLinea, 299, 299, 1 ,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
